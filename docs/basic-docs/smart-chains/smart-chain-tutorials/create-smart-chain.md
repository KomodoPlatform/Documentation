# Creating a new Antara SmartChain

#### Requirements

- 2 nodes with the ability to open ports (a node can be either a computer or a [VPS](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04))
- At least 4GB RAM each
- At least 2 CPU cores each
- 64-bit Operating System (Ubuntu 18.04 recommended)
- Komodo Smart Chain software installed on each
  - (when the goal is only to build a new Smart Chain, there is no need to sync the KMD main chain)

::: tip
Stuck? Need Help? Our support agents are available in our <a href="https://komodoplatform.com/discord">#support channel in Discord</a>, or you can reach out via the <a href="https://forum.komodoplatform.com/c/support/15">Komodo Platform Forum</a>.
:::

## Step 1: Create a new Antara Smartchain

Before you can launch a new smartchain, you'll need to [build the Komodo daemon from source](../../../../komodo/installation.html), and decide upon which [Antara customisation features](../../antara/antara-setup/antara-customizations.html) you would like to include. For the purposes of the example below, we'll use the following commonly included customisations:

* [-ac_name]() (required) This will be the ticker of your coin, and is conventionally uppercase and 3-5 charactors in length.
* [-ac_reward]() (recommended) This defines the value of the block reward, measured in [satoshis](https://bitcointosatoshi.com/). Without this customisation, an "on-demand" chain will be created which may be less secure and potentially have vastly irregular block time intervals.
* [-ac_supply]() This defines the number of pre-mined coins which will be mined in the [Genesis block](https://en.bitcoin.it/wiki/Genesis_block), commonly used for ICO or Airdrop distributions and/or to fund development.

For the purposes of this tutorial, we'll use the folowing customisation parameters, by adding them to our launch command:

```bash
./komodod -ac_name=HELLO -ac_reward=500000000 -ac_supply=100000 &
```

This means our chain will have the ticker `HELLO`, with a sum of 100000 HELLO pre-mined, and a block reward of 5 HELLO. By default, as we have not defined [-ac_blocktime]() or [-ac_staked](), this chain will have a block time of 1 minute on average, using 100% [Proof of Work](https://en.bitcoin.it/wiki/Proof_of_work) to be mined.

You can check out some other examples of Antara smartchain customisations in use by community smartchains at [http://stats.kmd.io/tools/launch_params/](http://stats.kmd.io/tools/launch_params/)

## Step 2: Launching the Antara Smartchain

To start our smartchain, we'll need to run the launch command on at least two Komodo daemon instances, and mine the genesis block.
This can be done via two separate nodes (e.g. VPS instances) or a [single node running multiple Komodo deamons](creating-a-smart-chain-on-a-single-node.html) with separate data folders. For beginners, we recommend the first option.

There's a few more things we need to do before we mine the Genesis block. 
* Start the HELLO chain on both nodes
* Create a [new address](get-new-pubkey.html#generate-a-new-address)
* [Validate the address](get-new-pubkey.html#get-the-pubkey-value-using-validateaddress) and take note of its [pubkey](https://spectrocoin.com/en/faqs/bitcoins/what-is-a-public-key.html) which is required to receive the coins generated in the Genesis block
* Get the [private key](https://getbitcoinclarity.com/blog/2020/05/16/what-is-a-bitcoin-private-key) of the address, and [store it securely](https://cryptosteel.com/) (ideally offline).

```bash
# Start the HELLO smartchain
./komodod -ac_name=HELLO -ac_reward=500000000 -ac_supply=100000 &
```

This will start outputting daemon logs in the console, so for the next few steps open a new terminal window.

::: tip
More info can be found in the debug.log of the chain found at:
- **MacOS:** `~/.komodo/HELLO/debug.log`
- **Windows:** `%appdata%\komodo\HELLO\debug.log`
- **GNU/Linux:** `~/.komodo/HELLO/debug.log`
:::


```bash
# Create new address
./komodo-cli -ac_name=HELLO getnewaddress
```

This outputs a new HELLO address, such as `RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5`

```bash
# Validate the address
./komodo-cli -ac_name=HELLO validateaddress RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5
```

This outputs information about the address, as below

```json
{
  "isvalid": true,
  "address": "RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5",
  "scriptPubKey": "76a91431a8cbc716e21238079729d46cb655ae7fadc9e388ac",
  "segid": 37,
  "ismine": true,
  "iswatchonly": false,
  "isscript": false,
  "pubkey": "02dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a26",
  "iscompressed": true,
  "account": ""
}
```

For convenience, it is recommended to store the pubkey in a file such as `~/komodo/src/pubkey.txt`

```bash
# Store the pubkey
echo "pubkey=02dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a26" > ~/komodo/src/pubkey.txt

# load the pubkey as a variable in the current shell environment
source ~/komodo/src/pubkey.txt
```

Now we can access the pubkey as a variable via `$pubkey`

```bash
# Output the private key
./komodo-cli -ac_name=HELLO dumpprivkey RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5
```

We get `UrunDGyFJu5UFZG7BnFx9R6iaPmWaBX8iqHzRpFRjNp8kBEQYKNt` as a response. The private key is what allows you to access funds within the address, so it should not be shared with anyone, and needs to be backed up securely in a manner that ensures it will not be lost by you or found by someone else.

To ensure the pre-mined coins in the genesis block go into the intended address, it is important to set the pubkey for your daemon. This can be done via the [-pubkey](https://docs.komodoplatform.com/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#pubkey) runtime flag (which means you need to stop the Smart Chain first), or by using the [setpubkey](https://docs.komodoplatform.com/basic-docs/smart-chains/smart-chain-api/wallet.html#setpubkey) command as shown below. This is where it comes in handy to have the `$pubkey` variable active in the current shell environment.

```bash
# Load the pubkey as a variable in the current shell environment
source ~/komodo/src/pubkey.txt

# Set the pubkey for your HELLO Smart Chain daemon
./komodo-cli -ac_name=HELLO setpubkey $pubkey
```

To confirm the pubkey is active, we can use the [getinfo](https://docs.komodoplatform.com/basic-docs/smart-chains/smart-chain-api/control.html#getinfo) command

```bash
# Output the private key
./komodo-cli -ac_name=HELLO getinfo
```

Response:

```json
{
  "version": 70100,
  "protocolversion": 170010,
  "KMDversion": "0.7.1",
  "synced": false,
  "notarized": 0,
  "prevMoMheight": 0,
  "notarizedhash": "0000000000000000000000000000000000000000000000000000000000000000",
  "notarizedtxid": "0000000000000000000000000000000000000000000000000000000000000000",
  "notarizedtxid_height": 2654071,
  "KMDnotarized_height": 2654071,
  "notarized_confirms": 0,
  "walletversion": 60000,
  "balance": 0.00000000,
  "blocks": 0,
  "longestchain": 0,
  "tiptime": 1231006505,
  "difficulty": 1,
  "keypoololdest": 1636875543,
  "keypoolsize": 101,
  "paytxfee": 0.00000000,
  "sapling": -1,
  "timeoffset": 0,
  "connections": 0,
  "proxy": "",
  "testnet": false,
  "relayfee": 0.00000100,
  "errors": "",
  "pubkey": "02dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a26",
  "name": "HELLO",
  "p2pport": 26659,
  "rpcport": 26660,
  "magic": -1534589137,
  "premine": 100000,
  "reward": "500000000",
  "halving": "0",
  "decay": "0",
  "endsubsidy": "0",
  "notarypay": "0"
}
```

Once you get to this stage on both of your nodes, you are ready to progress to the next step.


## Step 3: Mining the Genesis block

We need two more bits of information so we can make sure the two nodes are communicating.
* The `p2pport` used by the daemon to communicate peer to peer information about the chain. This is shown within the response to the `getinfo` command we ran earlier - in this case, it is `26659`. This number is automatically set by the Komodo daemon, though you can use a custom port by [defining it at runtime](https://docs.komodoplatform.com/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#port) or including it in your [~/.komodo/HELLO/HELLO.conf](https://github.com/KomodoPlatform/komodo/blob/master/contrib/debian/examples/komodo.conf) file
* Each node's IP address, so we can use the [addnode](https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-api/network.html#addnode) command to introduce them to each other.

Firstly allow the p2pport though your firewall (on both nodes). For example if using [ufw](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04)

```bash
# Open the p2pport on both nodes
sudo ufw allow 26659

# Get the IP address for each node
curl -s http://ipecho.net/plain; echo
```

Next, on each of the nodes, run the addnode command using the other node's IP as input.

```bash
# Run this on the first node, using the second node's IP address
./komodo-cli addnode "<IP address of the second node>" "add"

# Run this on the second node, using the first node's IP address
./komodo-cli addnode "<IP address of the second node>" "add"
```

You can confirm the nodes are now linked by running the [getpeerinfo](https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-api/network.html#getpeerinfo) command, or checking the `"connections"` value returned from [getinfo](https://docs.komodoplatform.com/basic-docs/smart-chains/smart-chain-api/control.html#getinfo) a below.


```bash
./komodo-cli -ac_name=HELLOWORLD getinfo | grep connections
```

If the nodes are properly connected, both nodes will respond with: `"connections": 1`

Finally, chose which node you want to recieve the pre-mined coin supply on, and run the [setgenerate](https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-api/generate.html#setgenerate) command begin mining, wait a minute, then [check your wallet balance](https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-api/wallet.html#getbalance).

```bash
# Start Proof of Work mining using one CPU
./komodo-cli -ac_name=HELLOWORLD setgenerate true 1

# Check your balance, once the Genesis block has been mined it will show the pre mined supply in your wallet.
./komodo-cli -ac_name=HELLOWORLD getbalance
```

After the genesis block has been mined, you can also start mining on the other node also.

## What next?
* [Setup a Block Explorer](setup-block-explorer.html)
* [Setup Electrum SPV server](../komodo/setup-electrumX-server.html)
* [Prepare Smartchain for AtomicDEX wallet & trading](../komodo/setup-electrumX-server.html)

