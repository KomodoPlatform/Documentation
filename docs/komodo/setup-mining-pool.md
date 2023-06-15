# Setup Mining Pool

Mining Pools offer an alternative to CPU mining via the [`setgenerate`](../../../basic-docs/smart-chains/smart-chain-api/generate.html#setgenerate) method, allowing GPU and ASIC mining via the [stratum mining protocol](https://en.bitcoin.it/wiki/Stratum_mining_protocol).

Thanks to the work done by webworker01, ComputerGenie and others, a fork of the `Z-NOMP` mining software has been customised for mining Komodo and Antara smart chains, available at [https://github.com/webworker01/knomp](https://github.com/webworker01/knomp)

There are two ways to setup the mining pool. You can either use `docker` which simplifies setting up the correct nodejs environment, or you can do a full base metal installation. We'll demonstrate both of these below.

Before we start, make sure that the chain you are creating the pool for is **running and fully synchronised**.


## Install using Docker

If not already on your system, [install `Docker`](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04) and then [install `docker-compose`(https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)


Clone the repository, and make copies of the [config_example.json](https://github.com/webworker01/knomp/blob/master/config_example.json), [pool_configs/solo-wsb.json](https://github.com/webworker01/knomp/blob/master/pool_configs/solo-wsb.json) and [komodo.json](https://github.com/webworker01/knomp/blob/master/coins/komodo.json) files.
```
cd ~
git clone https://github.com/webworker01/knomp.git
cd ~/knomp
cp config_example.json config.json
cp pool_configs/solo-wsb.json pool_configs/<YOUR_COIN>.json
cp coins/solo-wsb.json coins/<YOUR_COIN>.json
```

### Update Portal settings

Open config.json for editing with `nano config.json`, and update the `port` and `stratumHost` values as required for your own domain. If you don't have a domain, you can just enter the server's IP address.

```
        "host": "0.0.0.0",
        "port": 8080,
        "stratumHost": "<YOUR_DOMAIN>",
```

Set the host to 127.0.0.1 if you prefer to use a [reverse-proxy](https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-as-a-web-server-and-reverse-proxy-for-apache-on-one-ubuntu-20-04-server) and not expose the port.


More info on the other fieds is available at [https://github.com/zone117x/node-open-mining-portal#portal-config](https://github.com/zone117x/node-open-mining-portal#portal-config)


### Add config for a coin

Open the config file for your coin with `nano coins/<YOUR_COIN>.json` and refer to the below for fields you need to update.

```json
{
  "name": "<YOUR_COIN_FULL_NAME>",
  "symbol": "<YOUR_COIN_TICKER>",
  "algorithm": "equihash",
  "txfee": 0.00005,
  "peerMagic": "<YOUR_COIN_MAGIC>",
  "sapling": true
}
```

You can find the correct magic value in the terminal alongside the p2p and rpc ports when you launch your chain:
```
ASSETCHAINS_SUPPLY 10000
perc 0.0000% ac_pub=[000000...] acsize.0
ERA0: end.0 reward.888000000 halving.525600 decay.0 notarypay.0
extralen.73 before disable bits
MAX_MONEY 934469822650846 9344698.22650846
000000000000000000000000000000000000000000000000000000000000000000000000000000000000ceed3400000000200508000000000000000000000000000000000000000000 extralen.73 crc0.de843073
chainparams_commandline called
>>>>>>>>>> ROCK: p2p.55093 rpc.55094 magic.b0671305 2959545093 10000 coins
```

Here we see the magic as `b0671305`. <!-- does this need a flip? -->


### Add pool config for a coin

Open the pool config file for your coin with `nano pool_configs/<YOUR_COIN>.json` and refer to the below for fields you need to update.

```json
{
	"enabled": true,
	"coin": "<YOUR_COIN_TICKER>.json",
	"address": "<ADDRESS_COINS_WILL_BE_MINED_TO>",
	"zAddress": "",
	"tAddress": "<ADDRESS_COINS_WILL_BE_MINED_TO>",
	"walletInterval": 1,
	"rewardRecipients": {
		"ADDRESS_TO_RECIEVE_REWARDS_PERCENTAGE": "1"
	},
	"tlsOptions": { "enabled": false },
	"paymentProcessing": { 
		"enabled": true,
        "paymentInterval": 300,
        "minimumPayment": 1,
        "daemon": {
            "host": "127.0.0.1",
            "port": "<COIN_RPC_PORT>",
            "user": "<COIN_RPC_USERNAME>",
            "password": "<COIN_RPC_PASSWORD>"
        }
	},
	"trackShares": { "disable": false },
	"ports": {
	  "3333": {
	      "tls":false,
	      "diff": 0.001,
	      "varDiff": {
	          "minDiff": 0.001,
	          "maxDiff": 10000,
	          "targetTime": 15,
	          "retargetTime": 60,
	          "variancePercent": 30
	      }
	  }
	},
	"daemons": [{
        "host": "127.0.0.1",
        "port": "<COIN_RPC_PORT>",
        "user": "<COIN_RPC_USERNAME>",
        "password": "<COIN_RPC_PASSWORD>"
	}],
	"p2p": {
	  "enabled": true,
	  "host": "127.0.0.1",
	  "port": "<COIN_P2P_PORT>",
	  "disableTransactions": true
	},
	"mposMode": { "enabled": false }
}
```

For the `rewardRecipients` field, a value of `1` means 1% of pool income will go to the reward recipient address.
Additional ports can be added under `ports` to alternative difficulty values for ASIC or GPU miners.

