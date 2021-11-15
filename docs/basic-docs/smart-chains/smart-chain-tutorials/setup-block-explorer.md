#  Setting Up a SmartChain Block Explorer

While it is possible to use only the terminal command line interface to query the blockchain for checking your balance and transaction history, a block explorer like [https://kmd.explorer.dexstats.info/](https://kmd.explorer.dexstats.info/)
makes this much easier, and is an essential tool if you want to share your Smart Chain with the public.

#### Requirements

- A node with the ability to open ports. A node can be either a computer or a [VPS](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04), but if you intend to run it on the public internet, a VPS is required.
- At least 4GB RAM
- At least 2 CPU cores
- 64-bit Operating System (Ubuntu 20.04 recommended)
- A running [Antara SmartChain](create-smart-chain.html)

::: tip
Stuck? Need Help? Our support agents are available in our <a href="https://komodoplatform.com/discord">#support channel in Discord</a>, or you can reach out via the <a href="https://forum.komodoplatform.com/c/support/15">Komodo Platform Forum</a>.
:::

## Installing the Block Explorer

Thanks to work done by Decker and Gcharang, a script is available to make block explorer much easier. We'll use the `HELLO` smart chain [we created earlier] as an example.

```bash
# Stop the chain if it is running
~/komodo-cli -ac_name=HELLO stop

# Clone the block explorer setup repository
git clone https://github.com/gcharang/komodo-install-explorer
cd komodo-install-explorer

# Install dependancies and setup the node_modules subfolder
./setup-explorer-directory.sh

# Install the explorer for the "HELLO" Smart Chain.
./install-assetchain-explorer.sh HELLO
```

This will update your `~/.komodo/HELLO/HELLO.conf` file, create a new sub directory named `HELLO-explorer` containing data and configurations, and a script named `HELLO-explorer-start.sh` which will launch the block explorer.
It also creates a file called `HELLO-webaccess` containing the url to access the block explorer from the internet.

We are now ready to launch the block explorer, but first we need to restart the HELLO Smart Chain and [reindex](https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#reindex) the chain so it downloads the extra data needed by the explorer as configured in the `~/.komodo/HELLO/HELLO.conf` file, [addressindex](https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#addressindex), [timestampindex](https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#timestampindex), [spentindex](https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#spentindex) and [txindex](https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#txindex).

```bash
# Load the pubkey as a variable in the current shell environment
source ~/komodo/src/pubkey.txt

# Restart the HELLO chain with your pubkey
./komodod -ac_name=HELLO -ac_reward=500000000 -ac_supply=100000 -pubkey=$pubkey -reindex &
```

Open a second terminal window, and start the block explorer:

```bash
# Get the explorer URL, and copy it to the clipboard to load into your web browser 
cat HELLO-webaccess

# run the script to start the explorer
./HELLO-explorer-start.sh
```

You should now be able to open a new tab in your web browser, and paste the explorer URL to have a look make sure it is working. You can repeat the process above for any additional Smart Chain explorers you have running on your node.

## What next?
* [Setup Electrum SPV server](../komodo/setup-electrumX-server.html)
* [Prepare Smartchain for AtomicDEX wallet & trading](../komodo/setup-electrumX-server.html)



