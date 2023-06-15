# Setup Komodo Notary Node

::: tip Disclaimer
This guide serves to offer notary operators a reference for building a Komodo Notary Node server. It is possible that some instructions could be deprecated by the time you read it (e.g. coin commit hashes) - please refer to [https://github.com/KomodoPlatform/dPoW/blob/master/doc](https://github.com/KomodoPlatform/dPoW/blob/master/doc) for more recent updates.
:::

Traditionally, Komodo Notary Nodes have been setup using a "Main" and "Third party" server. The "Main" server is used to notarize KMD and Antara smart chains, and the "Third party" server is used to notarize coins from external projects.
Beginning in season 7, the Komodo Notary Node network will allow running the old "Third party" node on the same server as the "Main" node. Though operators may use alternative methods of virtualisation such as proxmox, this guide will focus on using docker containers to run the "Third party" daemons.

The steps for setting up your nodes are as follows:
- Secure your Server
- Install KMD and LTC Deamons, then launch them, import the private key linked to your "Main" elected pubkey, and let them sync. and let them sync (this may take a couple of days).
- Launch the other "Main" server chains, import the private key linked to your "Main" elected pubkey, and let them sync.
- Setup the 3rd Party docker containers, import the private key linked to your "3P" elected pubkey, and let them sync.
- Install and configure Iguana

Some additional tips will be included at the end of the guide to help with node management and maintainence.

If you face problems, please join the `#notarynode` channel on the [Komodo Discord Server](https://komodoplatform.com/discord) for help.


## NN Repo Quick Reference

::: tip Note

We recommend the Notary Node Operators to check the Table at [https://github.com/KomodoPlatform/dPoW/tree/season-seven#dpow-asset-status](https://github.com/KomodoPlatform/dPoW/tree/season-seven#dpow-asset-status) for latest information on the repositories and branches/commits to use for installing chains. If there is contradicting information in this document, treat the information within the dPoW reopsitory as the point of truth. Using the **exact** repository and branch/tag listed is very important for the security of the network.

:::

### Minimum System Requirements

Notary nodes **must** be run on a dedicated server in a Tier 3 datacenter. Running on a local desktop PC or VPS is not allowed. The minimum system requirements are as follows:

- **OS:** Debian/Ubuntu LTS x64 - minimal installation with Openssh server (recommended). This guide assumes you are using Ubuntu 20.04 LTS.
- **CPU:** A High-Performance CPU (e.g. Xeon, i7/i9, Ryzen, EPYC, etc.) with 8+ Cores
- **RAM:** 64GB+ RAM
- **HDD:** 1TB+ (SSD is recommended)
- **Bandwidth**: 100 Mbps or higher
- **Location**: Within the region where you were elected.


### Security

**Before doing anything further, please ensure that your server is secure.**

::: tip Note
In the examples below, I will use the username `dragonhound`. Please replace this with your own username.
Make sure to use a passowrd manager like [KeePassXC](https://keepassxc.org/) to generate and store your sudo passwords an SSH keys, and backup your password database to a secure location so you dont lose access to your server if your desktop/laptop fails.
:::

- **Update the system**: `sudo apt-get update && sudo apt-get upgrade -y`
- **[Create a new user & give it `sudo` permissions](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04)**:
    ```bash
    adduser dragonhound # to add a new user
    usermod -aG sudo dragonhound # to give the user sudo permissions
    su - dragonhound # to switch to the new user
    ```
- **Install [Fail2ban](https://linuxize.com/post/install-configure-fail2ban-on-ubuntu-20-04/)** with  `sudo apt install fail2ban`. It will start automatically after installation.
- **Install [UFW](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-20-04)** (make sure to allow SSH access **before** enabling the firewall).
    ```bash
    sudo apt install ufw
    sudo ufw allow OpenSSH
    sudo ufw enable
    ```
- **[Create an SSH key](https://www.unixtutorial.org/how-to-generate-ed25519-ssh-key/)** on your PC, then add the public SSH key to the server. This will allow you to login without a password. Repeat this step for each device you will use to access the server. For example:
    - Create an ED25519 SSH key (e.g. on your laptop) with `ssh-keygen -t ed25519 -C "dragonhound@laptop"`
    - View the public key with `cat ~/.ssh/id_ed25519.pub`.
    - It will look like `ssh-ed25519 AAAAC3NzaC1lZD42STE5AAAAIK0wmN/Cr3JXqmLW7u+g9pTh+wyqDHpSQEIQczXkVx9q dragonhound@laptop`
- **Add the SSH key to your server**:
    - On the server, create a `.ssh` folder in your home directory with `mkdir ~/.ssh`
    - Create a file to contain authorized keys with `nano ~/.ssh/authorized_keys`
    - Paste the public key into the file, then save and exit.
    - To confirm that the key works, open a new terminal on your desktop/laptop and run `ssh dragonhound@<SERVER_IP>`. If everything is working, you should be logged in without being asked for a password.
- **[Disable password authentication](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04#disabling-password-authentication-on-your-server)**
    - **Make sure you have added your SSH key to the server and confirmed it is woring before doing this!**
    - Open the SSH daemon config file with `sudo nano /etc/ssh/sshd_config`
    - Find the line that says `#PasswordAuthentication yes` and change it to `PasswordAuthentication no` then save and exit the file.
    - Restart the SSH daemon with `sudo systemctl restart sshd`
- **[Disable `root` login](https://www.howtogeek.com/howto/linux/security-tip-disable-root-ssh-login-on-linux/)**
    - Open the SSH daemon config file with `sudo nano /etc/ssh/sshd_config`
    - Set `PermitRootLogin no` then save and exit the file
    - Restart the SSH daemon with `sudo systemctl restart sshd`
- **[Add 32GB of swap space](https://www.digitalocean.com/community/tutorial_collections/how-to-add-swap-space)**
    - View existing swap space with `sudo swapon --show`, existing physical an virtual memory with `free -h`, and disk space with `df -h`.
    - Create a 32GB swap file with `sudo fallocate -l 32G /swapfile`
    - Restrict swap file permissions to root only with `sudo chmod 600 /swapfile`
    - Mark the file as swap space with `sudo mkswap /swapfile`
    - Activate the swap file with `sudo swapon /swapfile`
    - Verify that the swap space is active with `sudo swapon --show` and `free -h`
    - To make the swap file permanent, we'll edit the `fstab` file.
        - First, backup the `fstab` file with `sudo cp /etc/fstab /etc/fstab.bak`
        - Update it with `echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab`
    - Now your swap space should be retained after rebooting.
- **[Change the SSH port](https://linuxhandbook.com/change-ssh-port/)** (optional, but recommended)
    - Open the ssh daemon config file with `sudo nano /etc/ssh/sshd_config`
    - Change the `Port` value to something other than `22` (e.g. `Port 2222`)
    - Save and exit the file, then restart the SSH service with `sudo systemctl restart sshd`
    - Test the new port with `ssh dragonhound@<SERVER_IP> -p 2222`


### Install Daemons

The daemons will take a couple of days to sync, so it's best to get them started as soon as possible. If you encounter any errors, please join the `#notarynode` channel on the [Komodo Discord Server](https://komodoplatform.com/discord) for help.

- **Install dependencies:** 
    ```bash
    sudo apt-get install build-essential pkg-config libc6-dev m4 g++-multilib autoconf libtool ncurses-dev unzip git python python3 python3-zmq zlib1g-dev wget libcurl4-gnutls-dev bsdmainutils automake curl libsodium-dev jq libfmt-dev autotools-dev cmake clang htop libevent-dev libboost-system-dev libboost-filesystem-dev libboost-chrono-dev libboost-program-options-dev libboost-test-dev libboost-thread-dev libssl-dev -y
    ```
- **Install KMD:** [https://github.com/KomodoPlatform/komodo/](https://github.com/KomodoPlatform/komodo/tree/d456be35acd1f8584e1e4f971aea27bd0644d5c5) Branch: `master`
    - Clone repo: `git clone https://github.com/KomodoPlatform/komodo -b master`
    - Enter repo folder `cd komodo`
    - Fetch Zcash params: `./zcutil/fetch-params.sh`
    - Build Komodo: `./zcutil/build.sh -j$(nproc)`
    - Launch the Komodo daemon `komodod &`

- **Install LTC:** [https://github.com/litecoin-project/litecoin](https://github.com/litecoin-project/litecoin) Branch: `0.16`
    - Clone repo: ` git clone https://github.com/litecoin-project/litecoin -b 0.16`
    - Enter repo folder `cd litecoin`
    - Create `build.sh` script with the following contents and give it executable permission (`chmod +x build.sh`)
        ```bash
        #!/bin/bash
        # LTC build script for Ubuntu & Debian 9 v.3 (c) Decker (and webworker)
        berkeleydb () {
            LTC_ROOT=$(pwd)
            LTC_PREFIX="${LTC_ROOT}/db4"
            mkdir -p $LTC_PREFIX
            wget -N 'http://download.oracle.com/berkeley-db/db-4.8.30.NC.tar.gz'
            echo '12edc0df75bf9abd7f82f821795bcee50f42cb2e5f76a6a281b85732798364ef db-4.8.30.NC.tar.gz' | sha256sum -c
            tar -xzvf db-4.8.30.NC.tar.gz
            cat <<-EOL >atomic-builtin-test.cpp
                #include <stdint.h>
                #include "atomic.h"

                int main() {
                db_atomic_t *p; atomic_value_t oldval; atomic_value_t newval;
                __atomic_compare_exchange(p, oldval, newval);
                return 0;
                }
        EOL
            if g++ atomic-builtin-test.cpp -I./db-4.8.30.NC/dbinc -DHAVE_ATOMIC_SUPPORT -DHAVE_ATOMIC_X86_GCC_ASSEMBLY -o atomic-builtin-test 2>/dev/null; then
                echo "No changes to bdb source are needed ..."
                rm atomic-builtin-test 2>/dev/null
            else
                echo "Updating atomic.h file ..."
                sed -i 's/__atomic_compare_exchange/__atomic_compare_exchange_db/g' db-4.8.30.NC/dbinc/atomic.h
            fi
            cd db-4.8.30.NC/build_unix/
            ../dist/configure -enable-cxx -disable-shared -with-pic -prefix=$LTC_PREFIX
            make install
            cd $LTC_ROOT
        }
        buildLTC () {
            git pull
            ./autogen.sh
            ./configure LDFLAGS="-L${LTC_PREFIX}/lib/" CPPFLAGS="-I${LTC_PREFIX}/include/" --with-gui=no --disable-tests --disable-bench --without-miniupnpc --enable-experimental-asm --enable-static --disable-shared --with-incompatible-bdb
            make -j$(nproc)
        }
        berkeleydb
        buildLTC
        echo "Done building LTC!"
        ```
    - Execute `./build.sh` to compile the Litecoin binaries.
    - Launch the Litecoin daemon `litecoind &`

    ::: tip Note

    `-j$(nproc)` uses all the available processor threads while compiling. If you don't want to use all threads, you may specify the number directly like so: `-j8` will use only 8 threads. Alternatively, you may like to use `-j$(expr $(nproc) - 1)`, which will use all the available processors except one.

    :::



- **Launch the daemons:**
    - Launch the remaining "Main" server daemons, and let them sync. You can find the launch parameters for each smart chain at [https://github.com/KomodoPlatform/coins/blob/master/launch/smartchains.json](https://github.com/KomodoPlatform/coins/blob/master/launch/smartchains.json)
- **Import your private keys**
    ```bash
    # For Komodo
    komodo-cli importprivkey <KMD_PRIVATE_KEY>
    # For Litecoin
    litecoin-cli importprivkey <KMD_PRIVATE_KEY>
    # For main smart chains (replace <TICKER> with the smart chain ticker)
    komodo-cli -ac_name=<TICKER> importprivkey <KMD_PRIVATE_KEY>
    ```
- **Check the sync status**
    ```bash
    # Check the status of the KMD sync process
    tail -f ~/.komodo/debug.log

    # Check the status of the LTC sync process
    tail -f ~/.litecoin/debug.log

    # Check the status of the Main smart chain sync process
    tail -f ~/.komodo/<TICKER>/debug.log
    ```

The debug.log will have lines like:

`2023-06-15 09:08:05 UpdateTip: new best=0c01379c24db5055444983d447ce5af58a9ed50072b4a08a3fec0b151cf51213  height=3463643  log2_work=53.293613  tx=20987955  date=2023-06-15 09:08:06 progress=1.000000  cache=43.6MiB(143561tx)`

Once you see `progress=1.000000`, the chain is in sync!


### Install Iguana

Iguana is the software used to perform notarizations, and needs to be installed from the [dPoW](https://github.com/KomodoPlatform/dPoW) repository.

- **Install nanomsg** (required for Iguana):
    ```bash
    cd ~
    git clone https://github.com/nanomsg/nanomsg
    cd nanomsg
    cmake . -DNN_TESTS=OFF -DNN_ENABLE_DOC=OFF
    make -j2
    sudo make install
    sudo ldconfig
    ```

- **Clone the dPoW repository**:
    ```bash
    # Clone repository
    git clone https://github.com/KomodoPlatform/dPoW -b season-seven
    cd dPoW/iguana

    # Build Iguana
    make

    # Add files containing your pubkeys
    echo "<YOUR_MAIN_PUBKEY>" > pubkey.txt
    echo "<YOUR_3P_PUBKEY>" > pubkey_3p.txt
    ```

### Setting Up Third Party coins in Docker
Follow the instructions in [https://github.com/smk762/notary_docker_3p#notary_docker_3p](https://github.com/smk762/notary_docker_3p#notary_docker_3p) to setup the third party coins in docker.

If you need help, please reach out to the Komodo Discord #notary-node channel.


### Create Symbolic Links for deamons and cli's
- **For the Main coins**:
    ```bash
    sudo ln -s ~/komodo/src/komodod /usr/local/bin/komodod
    sudo ln -s ~/komodo/src/komodo-cli /usr/local/bin/komodo-cli
    sudo ln -s ~/litecoin/src/litecoind /usr/local/bin/litecoind
    sudo ln -s ~/litecoin/src/litecoin-cli /usr/local/bin/litecoin-cli
    ```
- **For the Third Party coins**, `komodo` and `komodo-cli` will be using a different configuration and data folder, so we'll create a wrapper script to launch the daemon and cli with the correct parameters:
    
    Open wrapper script file for the deamon with `nano ~/komodo/src/komodod_3p` and put the following inside:
    ```bash
    #!/bin/bash
    komodod -datadir=/home/${USER}/.komodo_3p -conf=/home/${USER}/.komodo_3p/komodo.conf $@
    ```
    Open wrapper script file for the deamon cli with `nano ~/komodo/src/komodo_3p-cli` and put the following inside:
    ```bash
    #!/bin/bash
    komodo-cli -conf=/home/${USER}/.komodo_3p/komodo.conf $@
    ```
    Make the wrapper scripts executable:
    ```bash
    chmod +x /home/$USER/komodo/src/komodod_3p
    chmod +x /home/$USER/komodo/src/komodo_3p-cli
    ```
    Now we can create the symbolic links:
    ```bash
    # For the 3P instance of Komodo
    sudo ln -s /home/$USER/komodo/src/komodod_3p /usr/local/bin/komodod_3p
    sudo ln -s /home/$USER/komodo/src/komodo_3p-cli /usr/local/bin/komodo_3p-cli

    # AYA
    sudo ln -s /home/$USER/AYAv2/src/aryacoind /usr/local/bin/aryacoind
    sudo ln -s /home/$USER/AYAv2/src/aryacoin-cli /usr/local/bin/aryacoin-cli

    # CHIPS
    sudo ln -s /home/$USER/chips/src/chipsd /usr/local/bin/chipsd
    sudo ln -s /home/$USER/chips/src/chips-cli /usr/local/bin/chips-cli

    # EMC2
    sudo ln -s /home/$USER/einsteinium/src/einsteiniumd /usr/local/bin/einsteiniumd
    sudo ln -s /home/$USER/einsteinium/src/einsteinium-cli /usr/local/bin/einsteinium-cli

    # MIL
    sudo ln -s /home/$USER/mil/src/mild /usr/local/bin/mild
    sudo ln -s /home/$USER/mil/src/einsteinium-cli /usr/local/bin/mil-cli

    # MCL, VRSC and TOKEL all use the komodod deamon, so do not need a symlink

    ```


### Create the data dir, `komodo.conf` file and secure it

```bash
cd ~
mkdir .komodo
nano ~/.komodo/komodo.conf
```

Add the following lines to the `komodo.conf` file and save it (replace rpcuser and rpcpassword)

```bash
rpcuser=usernameChangeItToSomethingSecure
rpcpassword=passwordChangeItToSomethingSecure
txindex=1
server=1
daemon=1
rpcworkqueue=256
rpcbind=127.0.0.1
rpcallowip=127.0.0.1
addnode=na.smk.dog
addnode=dev.smk.dog
addnode=na_3p.smk.dog
addnode=dev_3p.smk.dog
addnode=77.75.121.138
addnode=95.213.238.100
addnode=94.130.148.142
addnode=103.6.12.105
addnode=139.99.209.214
addnode=185.130.212.13
addnode=5.9.142.219
addnode=200.25.4.38
addnode=139.99.136.148
```

Restrict access to the `komodo.conf` file

```bash
chmod 600 ~/.komodo/komodo.conf
```

---

## Generate two `pubkey`, `address` & `WIF`'s

The mainnet notary node operators have to provide 2 seperate pubkeys, one for your Main Server and one for your 3rd Party Server. This means you will have to generate 2 seed phrases (i.e passphrases) individually which will generate the 2 pubkeys, set of addresses and private keys (WIF). You will need to create your Main pubkey on your Main Server & follow the same actions on your 3rd Party Server for your 3rd Party pubkey. These pubkeys need to be PR'd into your proposal on [https://github.com/KomodoPlatform/NotaryNodes](https://github.com/KomodoPlatform/NotaryNodes) soon after an election.

**DO NOT IMPORT YOUR MAIN PUBKEY INTO ANY 3RD PARTY DAEMON. For security, you should never enter your seed phrase or private key in any other node than your specific notary node server. If you ever expose a private key for any particular coin, it can be converted to all other coins easily.**

### Generating a pubkey

The mainnet notary node operators need to provide 2 sets of pubkey to Kolo when he asks for it (pubkey starts with `02` or `03`). Follow [this guide](./generate-privkeys-third-party-coins-from-passphrase.md) to generate all the required info in your own server. You will need the "Compressed Public Key", "Compressed WIF" and "Compressed Address" from the output generated by the script. Based on the default seed used in the `genkomodo.php` file, we get the following information:

```bash
Pubkey: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1

LTC Address: LfK5cYTTSDoSVSYtxkTVv8dGnqXYZRsn86
LTC WIF: 6vCN7rsS1bPFgs98G2PQgcHP2EArh39Un1QDh16YrPrJxCZTthq

KMD Address: RVNKRr2uxPMxJeDwFnTKjdtiLtcs7UzCZn
KMD WIF: UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh

EMC2 Address: EdF2quz8nWrJDwTbbTTieFYUMGfPsVB5dv
EMC2 WIF: T7trfubd9dBEWe3EnFYfj1r1pBueqqCaUUVKKEvLAfQvz3JFsNhs

AYA Address: AVjkMgFfmMZbpFvmTxCcxadnD6g1EdQue3
AYA WIF: T6oxgc9ZYJA1Uvsm31Gb8Mg31hHgLWue7RuqQMjEHUWZEi5TdskL
```

CHIPS, all Komodo Smart Chains and Komodo source forks like VRSC use the same address and WIF format as Komodo (KMD).

It is recommended that you write down the randomly generated seed (24 words) in a piece of paper and type directly into your server. Do not keep the seed saved in your local computer.

We will import these keys into our coin daemons and validate them later in this guide.

---

## Setup Iguana

On both servers:

### Clone the dPoW repository and build

```bash
cd ~
git clone https://github.com/KomodoPlatform/dPoW -b master
cd dPoW/iguana
./m_notary_build
```

### Create a `pubkey.txt` file

You will need to create a `pubkey.txt` file inside `~/dPoW/iguana` directory. This file will be used to start the dPoW process in the `dpowassets` script later on. `pubkey.txt` file should contain only the pubkey of the appropriate server. The file should contain only the information in the example below. Change `02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1` to the appropriate pubkey for the server the file is on.

```bash
pubkey=02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1
```

### Main Server Iguana

The main server iguana will use the port 7776.

#### Create `wp_7776`

Create `wp_7776` file inside the `~/dPoW/iguana` directory with the same passphrase you used to generate your Main address/pubkey. The file should look as follows (replace `YOUR_VERY_SECURE_PASSPHRASE` with your own):

```bash
curl --url "http://127.0.0.1:7776" --data "{\"method\":\"walletpassphrase\",\"params\":[\"YOUR_VERY_SECURE_PASSPHRASE\", 9999999]}"
```

#### Make `wp_7776` file executable

```bash
chmod 700 wp_7776
```

### 3rd Party Server Iguana

The 3rd party server iguana will use the port 7779.

#### Create `wp_7779`

Create `wp_7779` file inside the `~/dPoW/iguana` directory with the same passphrase you used to generate your 3rd Party address/pubkey. The file should look as follows (replace `YOUR_VERY_SECURE_PASSPHRASE` with your own):

```bash
curl --url "http://127.0.0.1:7779" --data "{\"method\":\"walletpassphrase\",\"params\":[\"YOUR_VERY_SECURE_PASSPHRASE\", 9999999]}"
```

#### Make `wp_7779` file executable

```bash
chmod 700 wp_7779
```

---

## Main Server Setup

The instructions below are only required on your main server, which is the one that will be notarizing Komodo, all the Smart Chains and runtime forks to Litecoin. The instructions below are for Ubuntu 20.04. If running on Debian 11x, check the alternative instructions at the bottom of this document.

### Litecoin

#### Step 1: Clone Litecoin source-code and checkout version 16.x

```bash
cd ~
git clone https://github.com/litecoin-project/litecoin --branch 0.16 --single-branch
cd litecoin
```

#### Step 2: Create a build script

Name the script as `build.sh` inside the `~/litecoin` dir for easy compiling and add the contents below to the script. The script will also create symlinks for the binaries at `/usr/local/bin/` and for that, you will be asked to provide the `sudo` password.

```bash
#!/bin/bash
# LTC & 3P Coins build script for Ubuntu & Debian (c) Decker
make -C ${PWD}/depends v=1 NO_PROTON=1 NO_QT=1 HOST=$(depends/config.guess) -j$(nproc --all)

./autogen.sh

CXXFLAGS="-g0 -O2" \
CONFIG_SITE="$PWD/depends/$(depends/config.guess)/share/config.site" ./configure --disable-tests --disable-bench --without-miniupnpc --enable-experimental-asm --with-gui=no --disable-bip70

make V=1 -j$(nproc --all)
sudo ln -sf /home/$USER/litecoin/src/litecoin-cli /usr/local/bin/litecoin-cli
sudo ln -sf /home/$USER/litecoin/src/litecoind /usr/local/bin/litecoind
```

#### Step 3: Make the script executable and run it

```bash
chmod +x build.sh
./build.sh
```

#### Step 4: Create Litecoin data dir, `litecoin.conf` file and restrict access to it

```bash
cd ~
mkdir .litecoin
nano ~/.litecoin/litecoin.conf
```

Insert the following contents inside the `litecoin.conf` file and save it. (change the `rpcuser` and `rpcpassword` values)

```bash
txindex=1
rpcport=9332
rpcuser=litecoinrpcChangeThisToSomethingSecure
rpcpassword=passwordChangeThisToSomethingSecure
```

Restrict access to the `litecoin.conf` file

```bash
chmod 600 ~/.litecoin/litecoin.conf
```

### Start the daemons and sync all the chains

For the first time sync, we will run all the coin daemons normally. Make sure you have successfully compiled all the daemons from the above section. We will create a `start` script later in this guide to start the chains with `-pubkey` option for notarization.

### Start the coins

```bash
komodod &
litecoind &
```

### Start Komodo and all the Smart Chains

```bash
cd ~/komodo/src
./assetchains.old
```

Now wait for all the chains to finish syncing. This might take about 8-10 hours depending on your machine and internet connection. You can check check sync progress by using `tail -f` on the `debug.log` file in the respective coin data directories. Komodo Smart Chains have their own data directory inside the `~/.komodo` directory.

Commands to tail `debug.log`

```bash
# LTC
tail -f ~/.litecoin/debug.log
# KMD
tail -f ~/.komodo/debug.log
# SUPERNET
tail -f ~/.komodo/SUPERNET/debug.log
```

For any other Komodo Smart Chain, use the example of SUPERNET and change the path with the coin name that you are looking for accordingly. You can now wait for all the coins to finish syncing. Just double check the blocks you've downloaded with an explorer to verify.

### Import your main private key

Feel free to import these as the daemons are syncing.

- Follow the below example to import your main pubkey **only** into your coin daemons.

```bash
komodo-cli importprivkey <KMD PRIVATE KEY>
litecoin-cli importprivkey <LTC PRIVATE KEY>
```

- For all other Komodo Smart Chains, use the following command to import privkey

```bash
cd ~/komodo/src
./fiat-cli importprivkey <KMD PRIVATE KEY>
```

This command will import keys into all Smart Chains that are using the main Komodo daemon. This may take some time and will display the coin name and address after each import. You can tail the coin specific `debug.log` files to check the progress.

### Validate the addresses

After all the addresses are imported, using the respective `<COIN>-cli`, validate all addresses and make sure the response has `ismine:true`. If you have `ismine:false`, your address wasn't imported correctly and dPoW will not work for that coin. Sample command for that is below.

```bash
komodo-cli validateaddress RVNKRr2uxPMxJeDwFnTKjdtiLtcs7UzCZn
```

#### Copy the `pubkey.txt` file that we created from the `~/dPoW/iguana` dir

You will need to create a `pubkey.txt` file inside `~/komodo/src/`. This file will be used to start all of your daemons with the `-pubkey=` parameter in your `start` script that will be made later in this guide.

```bash
cp ~/dPoW/iguana/pubkey.txt ~/komodo/src/pubkey.txt
```

### Stop All the Coin Daemons Safely

Once you've completed syncing, imported and validated your keys in all your daemons, complete the following.

Never use `kill -9` to kill any Coin daemon if you don't like corrupt databases. Always shutdown wallet daemon and iguana gracefully with `pkill -15 iguana` or use the below RPC commands for wallets.

```bash
komodo-cli stop
litecoin-cli stop
```

For all other Komodo Smart Chains, use the following command to `stop` the daemons.

```bash
cd ~/komodo/src
./fiat-cli stop
```

### After all the chains' daemons were stopped gracefully, let's restrict access to all the Komodo Smart Chains' `.conf` files inside `~/.komodo` dir

```bash
find ~/.komodo -type f -iname "*.conf" -exec chmod 600 {} \;
```

To complete setting up your main server, go to the [Set 'ulimit' parameters on Ubuntu permanently](#set-ulimit-parameters-on-ubuntu-permanently) section.

---

## 3rd Party Server Setup (Pending third party updates)

The instructions below are only required on your 3rd party server, which is the one that will be notarizing 3rd party coins to Komodo.

### Aryacoin (AYA)

#### Step 1: Clone AYA source

```bash
cd ~
git clone https://github.com/KomodoPlatform/AYAv2
cd AYAv2
git checkout 94e6bc0
```

#### Step 2: Create a build script

Name the script as `build.sh` inside the `~/AYAv2` dir for easy compiling and add the contents below to the script. The script will also create symlinks for the binaries at `/usr/local/bin/` and for that, you will be asked to provide the `sudo` password.

```bash
#!/bin/bash
# LTC & 3P Coins build script for Ubuntu & Debian (c) Decker
make -C ${PWD}/depends v=1 NO_PROTON=1 NO_QT=1 HOST=$(depends/config.guess) -j$(nproc --all)

./autogen.sh

CXXFLAGS="-g0 -O2" \
CONFIG_SITE="$PWD/depends/$(depends/config.guess)/share/config.site" ./configure --disable-tests --disable-bench --without-miniupnpc --enable-experimental-asm --with-gui=no --disable-bip70

make V=1 -j$(nproc --all)
sudo ln -sf /home/$USER/AYAv2/src/aryacoin-cli /usr/local/bin/aryacoin-cli
sudo ln -sf /home/$USER/AYAv2/src/aryacoind /usr/local/bin/aryacoind
```

#### Step 3: Make the script executable and run it

```bash
chmod +x build.sh
./build.sh
```

#### Step 4: Create AYA data dir, `aryacoin.conf` file and restrict access to it

```bash
cd ~
mkdir .aryacoin
nano ~/.aryacoin/aryacoin.conf
```

Insert the following contents inside the `aryacoin.conf` file and save it. (change the `rpcuser` and `rpcpassword` values)

```bash
server=1
daemon=1
txindex=1
rpcuser=user
rpcpassword=password
bind=127.0.0.1
rpcbind=127.0.0.1
rpcallowip=127.0.0.1
addnode=na_3p.smk.dog
addnode=dev_3p.smk.dog
```

Restrict access to the `aryacoin.conf` file

```bash
chmod 600 ~/.aryacoin/aryacoin.conf
```

### Chips

#### Step 1: Clone CHIPS source

```bash
cd ~
git clone https://github.com/chips-blockchain/chips -b master
cd chips
git checkout 6e7560a
```

#### Step 2: Build


##### Debian 10/11 and Ubuntu 20.04

Replace the contents of the `build.sh` file with the following code

```bash
#!/bin/bash
# LTC & 3P Coins build script for Ubuntu & Debian (c) Decker
make -C ${PWD}/depends v=1 NO_PROTON=1 NO_QT=1 HOST=$(depends/config.guess) -j$(nproc --all)

./autogen.sh

CXXFLAGS="-g0 -O2" \
CONFIG_SITE="$PWD/depends/$(depends/config.guess)/share/config.site" ./configure --disable-tests --disable-bench --without-miniupnpc --enable-experimental-asm --with-gui=no --disable-bip70

make V=1 -j$(nproc --all)
```

then, run the script

```bash
./build.sh
```

#### Step 3: Symlink the compiled binaries

```shell
sudo ln -sf /home/$USER/chips/src/chips-cli /usr/local/bin/chips-cli
sudo ln -sf /home/$USER/chips/src/chipsd /usr/local/bin/chipsd
```

#### Step 4: Create CHIPS data dir, `chips.conf` file and restrict access to it

```bash
cd ~
mkdir .chips
nano ~/.chips/chips.conf
```

Insert the following contents inside the `chips.conf` file and save it. (change the `rpcuser` and `rpcpassword` values)

```bash
server=1
daemon=1
txindex=1
rpcuser=user
rpcpassword=password
addnode=na_3p.smk.dog
addnode=dev_3p.smk.dog
addnode=159.69.23.29
addnode=95.179.192.102
addnode=149.56.29.163
addnode=145.239.149.173
addnode=178.63.53.110
addnode=151.80.108.76
addnode=185.137.233.199
rpcbind=127.0.0.1
rpcallowip=127.0.0.1
```

Restrict access to the `chips.conf` file

```bash
chmod 600 ~/.chips/chips.conf
```

### Einsteinium (EMC2)

#### Step 1: Clone EMC2 source

```bash
cd ~
git clone https://github.com/emc2foundation/einsteinium -b master
cd einsteinium
git checkout c329ae6
```

#### Step 2: Create a build script

Name the script as `build.sh` inside the `~/einsteinium` dir for easy compiling and add the contents below to the script. The script will also create symlinks for the binaries at `/usr/local/bin/` and for that, you will be asked to provide the `sudo` password.

```bash
#!/bin/bash
# LTC & 3P Coins build script for Ubuntu & Debian (c) Decker
make -C ${PWD}/depends v=1 NO_PROTON=1 NO_QT=1 HOST=$(depends/config.guess) -j$(nproc --all)

./autogen.sh

CXXFLAGS="-g0 -O2" \
CONFIG_SITE="$PWD/depends/$(depends/config.guess)/share/config.site" ./configure --disable-tests --disable-bench --without-miniupnpc --enable-experimental-asm --with-gui=no --disable-bip70

make V=1 -j$(nproc --all)

sudo ln -sf /home/$USER/einsteinium/src/einsteinium-cli /usr/local/bin/einsteinium-cli
sudo ln -sf /home/$USER/einsteinium/src/einsteiniumd /usr/local/bin/einsteiniumd
```

#### Step 3: Make the script executable and run it

```bash
chmod +x build.sh
./build.sh
```

#### Step 4: Create EMC2 data dir, `einsteinium.conf` file and restrict access to it

```bash
cd ~
mkdir .einsteinium
nano ~/.einsteinium/einsteinium.conf
```

Insert the following contents inside the `einsteinium.conf` file and save it. (change the `rpcuser` and `rpcpassword` values)

```bash
server=1
daemon=1
txindex=1
rpcuser=user
rpcpassword=password
bind=127.0.0.1
rpcbind=127.0.0.1
rpcallowip=127.0.0.1
addnode=na_3p.smk.dog
addnode=dev_3p.smk.dog
```

Restrict access to the `einsteinium.conf` file

```bash
chmod 600 ~/.einsteinium/einsteinium.conf
```

### MarmaraChain (MCL)

#### Step 1: Clone MCL source and compile

```bash
cd ~
git clone https://github.com/marmarachain/marmara -b master
cd marmara
git checkout a92d834
./zcutil/build.sh -j$(nproc)
```

### Milevium (MIL)

#### Step 1: Clone MIL source and compile

```bash
cd ~
git clone https://github.com/emc2foundation/mil -b master
cd mil
git checkout 578bed7
```

#### Step 2: Update the build script

Open the `build.sh` script inside the `~/mil` dir and replace the contents below to the script. The script will also create symlinks for the binaries at `/usr/local/bin/` and for that, you will be asked to provide the `sudo` password.

```bash
#!/bin/bash
# LTC & 3P Coins build script for Ubuntu & Debian (c) Decker
make -C ${PWD}/depends v=1 NO_PROTON=1 NO_QT=1 HOST=$(depends/config.guess) -j$(nproc --all)

./autogen.sh

CXXFLAGS="-g0 -O2" \
CONFIG_SITE="$PWD/depends/$(depends/config.guess)/share/config.site" ./configure --disable-tests --disable-bench --without-miniupnpc --enable-experimental-asm --with-gui=no --disable-bip70

make V=1 -j$(nproc --all)

sudo ln -sf /home/$USER/mil/src/mil-cli /usr/local/bin/mil-cli
sudo ln -sf /home/$USER/mil/src/mild /usr/local/bin/mild
```

#### Step 3: Make the script executable and run it

```bash
chmod +x build.sh
./build.sh
```

#### Step 4: Create MIL data dir, `mil.conf` file and restrict access to it

```bash
cd ~
mkdir .mil
nano ~/.mil/mil.conf
```

Insert the following contents inside the `mil.conf` file and save it. (change the `rpcuser` and `rpcpassword` values)

```bash
server=1
daemon=1
txindex=1
rpcuser=user
rpcpassword=password
bind=127.0.0.1
rpcbind=127.0.0.1
rpcallowip=127.0.0.1
addnode=na_3p.smk.dog
addnode=dev_3p.smk.dog
```

Restrict access to the `mil.conf` file

```bash
chmod 600 ~/.mil/mil.conf
```


### Tokel (TKL)

#### Step 1: Clone TKL source and compile

```bash
cd ~
git clone https://github.com/TokelPlatform/tokel -b tokel
cd tokel
git checkout 65d50d0
./zcutil/build.sh -j$(nproc)
```
Symlink the compiled binaries

```bash
sudo ln -sf /home/$USER/tokel/src/tokeld /usr/local/bin/tokeld
sudo ln -sf /home/$USER/tokel/src/tokel-cli /usr/local/bin/tokel-cli
```

### VerusCoin (VRSC)

#### Step 1: Clone VRSC source and compile

```bash
cd ~
git clone https://github.com/VerusCoin/VerusCoin -b master
cd VerusCoin
git checkout master
./zcutil/build.sh -j$(nproc)
```

Symlink the compiled binaries

```bash
sudo ln -sf /home/$USER/VerusCoin/src/verusd /usr/local/bin/verusd
sudo ln -sf /home/$USER/VerusCoin/src/verus /usr/local/bin/verus
```

### Start the daemons and sync all the chains

For the first time sync, we will run all the coin daemons normally. Make sure you have successfully compiled all the daemons from the above section. We will create a `start` script later in this guide to start the chains with `-pubkey` option for notarization.

### Start the coins


```bash
komodod &
aryacoind &
chipsd &
einsteiniumd &
~/marmara/src/komodod -ac_name=MCL -ac_supply=2000000 -ac_cc=2 -addnode=5.189.149.242 -addnode=161.97.146.150 -addnode=149.202.158.145 -addressindex=1 -spentindex=1 -ac_marmara=1 -ac_staked=75 -ac_reward=3000000000 &
mild &
tokeld &
verusd &
```

Now wait for all the chains to finish syncing. This might take about 8-10 hours depending on your machine and internet connection. You can check check sync progress by using `tail -f` on the `debug.log` file in the respective coin data directories.

Commands to tail `debug.log`

```bash
# KMD
tail -f ~/.komodo/debug.log
# AYA
tail -f ~/.aryacoin/debug.log
# CHIPS
tail -f ~/.chips/debug.log
# EMC2
tail -f ~/.einsteinium/debug.log
# MCL
tail -f ~/.komodo/MCL/debug.log
# MIL
tail -f ~/.mil/debug.log
# TOKEL
tail -f ~/.komodo/TOKEL/debug.log
# VRSC
tail -f ~/.komodo/VRSC/debug.log
```

You can now wait for all the coins to finish syncing. Just double check the block you've downloaded with an explorer to verify.

### Import 3rd party private key

Feel free to import your addresses whilst your daemons are syncing.

- Follow the example below to import your 3rd party pubkey **only** into your coin daemons.

```bash
komodo-cli importprivkey UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
aryacoin-cli importprivkey T6oxgc9ZYJA1Uvsm31Gb8Mg31hHgLWue7RuqQMjEHUWZEi5TdskL
chips-cli importprivkey UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
einsteinium-cli importprivkey T7trfubd9dBEWe3EnFYfj1r1pBueqqCaUUVKKEvLAfQvz3JFsNhs
komodo-cli -ac_name=MCL importprivkey UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
mil-cli importprivkey cSXsCzbmiZUyMCZyPqjYMhLxBxcFBP6tQSLrCpTpfYkvjJEMthcW
tokel-cli importprivkey UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
verus importprivkey UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
```

This may take some time and will display the coin name and address after each import. You can tail the coin specific `debug.log` files to check the progress.

### Validate the addresses

After all the addresses are imported, using the respective `<COIN>-cli`, validate all addresses and make sure the response has `ismine:true`. If you have `ismine:false`, your address hasn't imported correctly and dPoW will not work for that coin. Sample command for that is below.

```bash
komodo-cli validateaddress RVNKRr2uxPMxJeDwFnTKjdtiLtcs7UzCZn
```

#### Copy the `pubkey.txt` file that we created from the `~/dPoW/iguana` dir

You will need to create a `pubkey.txt` file inside `~/komodo/src/`. This file will be used to start all of your daemons with the `-pubkey=` parameter in your `start` script that will be made later in this guide.

```bash
cp ~/dPoW/iguana/pubkey.txt ~/komodo/src/pubkey.txt
```

### Stop All the Coin Daemons Safely

Once your daemons have completed syncing, you've imported and validated all your keys, complete the following.

Never use `kill -9` to kill any Coin daemon if you don't like corrupt databases. Always shutdown wallet daemon and iguana gracefully with `pkill -15 iguana` or use the below RPC commands for wallets.

```bash
komodo-cli stop
aryacoin-cli stop
chips-cli stop
einsteinium-cli stop
komodo-cli -ac_name=MCL stop
mil-cli stop
tokel-cli stop
verus stop
```

---

## Set `ulimit` parameters on Ubuntu permanently

By default, the number of open files per user in Ubuntu is 1024. In our case this number is too small so we will increase it.

This is done with the `ulimit` command:

```bash
ulimit -a   # see all the kernel parameters
ulimit -n   # see the number of open files
ulimit -n 1000000  #  set the number open files to 1000000
```

The problem with this way is that the `ulimit` parameter is only set currently for this command terminal and user. This means that after a reboot you’ll need to set the parameter again. Do the following to set it permanently:

### Edit the `/etc/security/limits.conf` file

```bash
sudo nano /etc/security/limits.conf
```

add these lines:

```bash
* soft nofile 1000000
* hard nofile 1000000
```

Save and close file

### Edit the `/etc/pam.d/common-session` file

```bash
sudo nano /etc/pam.d/common-session
```

add this line:

```bash
session required pam_limits.so
```

Save and close the file.

We are done. Now let's stop all our wallet daemons safely with RPC commands and reboot the server using `sudo reboot` or `sudo shutdown -r` command.

### Check the values now

```bash
ulimit -n
```

---

## Create a `start` Script

We need a `start` script in the home dir to start Komodo, Smart Chains and all 3rd party coin daemons with the `-pubkey` option. `-pubkey` is not required for LTC daemon. All other coins need it.

Here is an example of a Main Server start script that will start Notary easy mining on Komodo as well:

```bash
#!/bin/bash
source ~/komodo/src/pubkey.txt
litecoind &
sleep 60
cd komodo/src
./komodod -gen -genproclimit=1 -pubkey=$pubkey -minrelaytxfee=0.000035 -opretmintxfee=0.004 -notary=".litecoin/litecoin.conf" &
sleep 600
./assetchains
```

Here is an example of a 3rd Party Server start script :

```bash
#!/bin/bash
source ~/komodo/src/pubkey.txt
aryacoind -pubkey=$pubkey &
chipsd -pubkey=$pubkey &
einsteiniumd -pubkey=$pubkey &
mild -pubkey=$pubkey &
~/marmara/src/komodod -ac_name=MCL -pubkey=$pubkey -ac_supply=2000000 -ac_cc=2 -addnode=5.189.149.242 -addnode=161.97.146.150 -addnode=149.202.158.145 -addressindex=1 -spentindex=1 -ac_marmara=1 -ac_staked=75 -ac_reward=3000000000 &
~/tokel/src/tokeld -pubkey=$pubkey &
~/komodo/src/komodod -notary -pubkey=$pubkey &
~/VerusCoin/src/verusd -pubkey=$pubkey &
```

Make the file executable:

```bash
chmod +x start
```

### Execute the script

This may take upto 20-30 minutes maximum depending on your system spec.

```bash
cd ~
./start
```

**Make sure all daemons started properly before starting iguana in the next step.**

## Start `iguana` and dPoW process

Once all required daemons are running, we have funds on all coins(DM @kolo with your addresses if you need coins), we can go ahead and start `iguana`.

### Main Server

```bash
cd ~/dPoW/iguana
./m_notary_main
```

You can use the `m_notary` script if you wish, but this will issue a `git pull` command to update the repo, remove old iguana, compile fresh and start the whole process. This can take about 10 minutes maximum to finish. You will see `INIT with 64 notaries` once the process finishes.

### 3rd Party Server

```bash
cd ~/dPoW/iguana
./m_notary_3rdparty
```

## Address whitelisting

If you are using a whitelist for incoming transactions (recommended to avoid dust attacks!) funding top ups will come from `RDragoNHdwovvsDLSLMiAEzEArAD3kq6FN` for your Main node, and `RHound8PpyhVLfi56dC7MK3ZvvkAmB3bvQ` for your 3P node, so add these addresses to your respective whitelists.

## Firewall and Ports

Enable `ufw` and close all routes except `ssh`. Then allow p2p ports of all the coins in their respective servers. Allow iguana's p2p ports: `13347` in main server and `13344` in the 3p server.

## NN Scripts

There are many open sourced scripts for managing your Komodo Notary Node servers. If you're having trouble with something, you can have a look at [these tools](https://github.com/KomodoPlatform/komodotools), or ask the other NN's, who will show you the scripts they use to overcome issues. With that being said, if you find a way to make a job easier or find a way to better the ecosystem, please let the rest of the NN OPs know, we would love to hear it.

## MM2 Seed node setup

Simple scripts to setup and configure MM2 as a seednode on your 3P server are available at - [https://github.com/smk762/nn_mm2_seed](https://github.com/smk762/nn_mm2_seed). The mm2 seed node will also need ports `38890` and `38900` opened on the 3p server.


# Setup for Debian 11

Install the following dependancies:
```
sudo apt-get install -y tmux dc bc dnsutils speedtest-cli build-essential git libsodium-dev libssl-dev pkg-config autoconf automake bsdmainutils cmake curl g++-multilib htop libboost-all-dev libc6-dev libgtest-dev libtool m4 software-properties-common unzip wget zlib1g-dev binutils-dev clang jq libcurl4-openssl-dev libdb++-dev libevent-dev libexpat1-dev libgnutls28-dev libldns-dev liblzma-dev libnanomsg-dev libncurses-dev libprotobuf-dev libqrencode-dev libreadline-dev libunwind-dev ncurses-dev ntp ntpdate protobuf-compiler python3-pip
```

Use the template below to create build scripts for coins as needed:

```bash
# AnyCoin compile script (q) Decker, 2021-2022
make -C ${PWD}/depends v=1 NO_PROTON=1 NO_QT=1 HOST=$(depends/config.guess) -j$(nproc --all)

./autogen.sh

CXXFLAGS="-g0 -O2" \
CONFIG_SITE="$PWD/depends/$(depends/config.guess)/share/config.site" ./configure --disable-tests --disable-bench --without-miniupnpc --enable-experimental-asm --with-gui=no --disable-bip70

make V=1 -j$(nproc --all)
```
