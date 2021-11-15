# Setup ElectrumX Server

Here are the steps required to run electrumx for KMD. Replace the variables according to your setup. You need to setup minimum 2 electrum servers for same coin to ensure stable operation.

Refer to the docs at [https://electrumx.readthedocs.io/en/latest/](https://electrumx.readthedocs.io/en/latest/) for more info.

- `<username>` is the username under which electrumx will run

- `$rpcuser` and `$rpcpass` are from the conf of the wallet daemon

## General part

```bash
sudo apt-get install python3-setuptools python3-multidict python3.8 libleveldb-dev
cd /home/<username>
git clone https://github.com/KomodoPlatform/electrumx-1
cd electrumx-1
pip3 install .
pip3 install .[uvloop,ujson]
```

## Coin specific part

If you are launching the electrum server for a new smartchain, you will have to add it to the `electrumx-1/electrumx/lib/coins.py` file

For example, using the HELLO Smart Chain [we created earlier](create-smart-chain.html):

```
class Hello(KomodoMixin, EquihashMixin, Coin):
    NAME = "Hello"
    SHORTNAME = "HELLO"
    NET = "mainnet"
    TX_COUNT = 693629
    TX_COUNT_HEIGHT = 491777
    TX_PER_BLOCK = 2
    RPC_PORT = 26660
    REORG_LIMIT = 800
    PEERS = []
```

NAME, SHORTNAME and RPC_PORT are to be changed accordingly. Change references of KMD to your coin where applicable.

Run:

```bash
sudo cp contrib/systemd/electrumx.service /etc/systemd/system/electrumx_HELLO.service
sudo nano /etc/systemd/system/electrumx_HELLO.service
```

Fill the following contents into the file:

```
Description=Electrumx_HELLO
EnvironmentFile=/etc/electrumx_HELLO.conf
ExecStart=/home/<username>/electrumx-1/electrumx_server
User=<username>
```

Run:

```bash
sudo mkdir -p /electrumdb/HELLO
sudo chown <username> /electrumdb/HELLO
sudo nano /etc/electrumx_HELLO.conf
```

Fill the following contents into the file:

```
COIN = Hello
DB_DIRECTORY = /electrumdb/HELLO
DAEMON_URL = http://$rpcuser:$rpcpass@127.0.0.1:<rpcport>/
SERVICES = tcp://:10001,rpc://:8001
EVENT_LOOP_POLICY = uvloop
PEER_DISCOVERY = self
INITIAL_CONCURRENT = 50
COST_SOFT_LIMIT = 10000
COST_HARD_LIMIT = 100000
BANDWIDTH_UNIT_COST = 10000
```

You can find rpcuser,rpcpass and rpcport in the conf file of the smartchain located at .komodo/HELLO/HELLO.conf

```bash
sudo systemctl start electrumx_HELLO
```

To check its status, execute the following command 

```bash
sudo systemctl status electrumx_HELLO
```

To issue commands to the electrum server from a local terminal use 

```
echo '{"method":"blockchain.transaction.get","params":["bcded351e33d530a07deebeeee3b7ae328e9636e3cfab72eadace6bb6945e693", true],"id":"test"}' | nc electrum1.cipig.net 10031 -i 1 | jq .
```

- change the method and params as needed 
- replace `electrum1.cipig.net` with the IP address or domain of the electrum server 
- 10031 with tcp port set in the conf file

## What next?
* [Prepare a Smart Chain for AtomicDEX Wallet & Trading](../komodo/setup-electrumX-server.html)