# Blockscout deployment guide

This guide uses following software versions:  (actual at the moment of writing)

- ubuntu-18.04 (bionic) server

- Openethereum (Parity) v3.0.1-stable

- BlockScout v3.2.0

***

## General Pre-Requirements

Linux(Ubuntu || CentOS) server with root access, 4+ TB storage for [BlockScout database](https://docs.blockscout.com/for-developers/information-and-settings/database-storage-requirements), 2+ TB storage for [ETH Mainnet archive](https://openethereum.github.io/wiki/FAQ#what-are-the-parity-ethereum-disk-space-needs-and-overall-hardware-requirements)

Prepare user with sudo privileges, ssh access, domain name, ensure basic server security

::: tip Note
- bash commands below are for reference only, please do not copy/paste them mindlessly, or you may expect encountering brocken links and weird paths.
-Commands noted with `\$` should be execute as your user, under whom blockscout service will be running. `\#` meant to be ran as root. `\=#` commands are executed in psql.
- [Blockscout reqs](https://docs.blockscout.com/for-developers/information-and-settings/requirements) seems to be outdated, you may use latest stable releases instead. Anyway, you will be notified by BlockScout later down the road if some binary version is not supported.
:::

## Openethereum setup

### Openethereum Pre-Install

Prepare storage

Make sure your user has access to storage mount/path AE: `/mnt/openeth/storage/path`

### Get binary

Install basic deps: `build-essential cmake libudev-dev`

Download latest precompiled version [here](https://github.com/openethereum/openethereum/releases)

```bash
\$ sudo apt-get update && sudo apt-get upgrade -y
\$ sudo apt-get install libudev-dev zip unzip -y
\$ wget https://github.com/openethereum/openethereum/releases/download/version/openethereum-linux-version.zip
\$ unzip -o openethereum-linux-version.zip -d openethereum
\$ cd openethereum
\$ chmod +x ./openethereum
```

### Configuration

Create empty log file 
 
```bash
\$ touch /mnt/openeth/storage/path/config/example.log
```

- Write configuration file, AE:

```bash
\$ nano /mnt/openeth/storage/path/config.toml
[parity]
mode = "active"
release_track = "stable"
base_path = "/opt/.local/share/io.parity.ethereum"

[network]
warp = false

[misc]
log_file = "/mnt/openeth/storage/path/config/example.log"

```

Prepare systemd service file

```bash
\$ sudo nano /etc/systemd/system/openethereum.service
[Unit]
Description=OpenEthereum
After=network.target

[Service]
User=youruser
Group=yourusergroup
ExecStart=/usr/bin/openethereum -c /mnt/openeth/storage/path/config.toml --jsonrpc-interface all --jsonrpc-apis  web3,eth,net,parity,pubsub,traces --ws-interface all --fat-db=on --pruning=archive --ws-apis all --ws-origins all --ws-hosts  all
Restart=on-failure
KillSignal=SIGHUP

[Install]
WantedBy=default.target
```

::: tip Note
Official iunstruction can be found [here](https://docs.blockscout.com/for-developers/information-and-settings/client-settings-parity-geth-ganache#parity-client).
:::

Configure firewall for openethereum client (`ports 30303/tcp, 8545/tcp, 8546/tcp`)

Test systemd service

```bash
\$ sudo systemctl daemon-reload
\$ sudo systemctl start openetherum
```

Enable openethereum as service

```bash
\$ sudo systemctl enable openethereum.service
```

## PostgreSQL setup

### PostgreSQL Pre-Install

Prepare and mount storage for BlockScout DB

### Install PostgreSQL

[PostgreSQL downloads](https://www.postgresql.org/download/) page suggests to use distribution-based repos, example for Ubuntu:

```bash
\$ sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
\$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
\$ sudo apt-get update
\$ sudo apt-get install postgresql-10
```

::: tip Note
BlockScout supports psql 10.3+ versions, same as in example above
:::

### PostgreSQL configuration

Create database, user and set userpassword
```bash
\# adduser dbusername
\# passwd dbusername
\# su - postgres
\$ createuser --interactive dbusername
\$ createdb blockscout
\$ psql
\=# ALTER USER dbusername WITH PASSWORD 'dbuserpassword';
\=# GRANT ALL PRIVILEGES ON blockscout TO dbusername;
\=# \q
```

::: tip Note
PSQL user should be first created as general user with `adduser`. dbusername system password should not be the same to his/her database dbuserpassword. dbuserpassowrd will be parsed by BlockScout as part of DB link, thus it's recommended to omit problematic charactrers in database password
:::

Set your storage path as psql datadir
 
```bash
\$ nano /etc/postgresql/10/main/postgresql.conf

...
data_directory = '/mnt/psql/storage/path'          # use data in another directory
...
```

Make sure postgres user has right permissions on storage dir.

Start psql
 
```bash
\$ sudo systemctl start postgresql
```
 
Validate data directory path
 
```bash
\# su - postgres
\$ psql
\=# SHOW data_directory;

    data_directory
---------------------
 /mnt/psql/storage/path
(1 row)

\=# \q
```
 
Make sure your user has blockscout db access
 
```bash
\# su - dbusername
\$ psql -d blockscout
```

Open PostgreSQL port on firewall `5432/tcp`

Enable postgresql as service

```bash
\$ sudo systemctl enable postgresql
```

## BlockScout dependencies setup

Get base dependencies from apt: (yum/dnf on CentOS)

```bash
\$ sudo apt-get update
\$ sudo apt-get install git \
                       automake \
                       libtool inotify-tools \
                       libgmp-dev \
                       libgmp10 \
                       build-essential \
                       cmake -y
 ```

### Erlang

Get official release [here](https://www.erlang-solutions.com/resources/download.html)

Example on Ubuntu:

```bash
\$ wget https://packages.erlang-solutions.com/erlang/debian/pool/esl-erlang_version~ubuntu~bionic_amd64.deb
\$ sudo apt install ./esl-erlang_version~ubuntu~bionic_amd64.deb
```

Check version and installation:

```bash
\$ erl --version
```

### Elixir

Download precompiled release from [github](https://github.com/elixir-lang/elixir/releases)

```bash
\$ wget https://github.com/elixir-lang/elixir/releases/download/tag/Precompiled.zip
\$ unzip -o Precompiled.zip -d elixir
```

Add elixir bin to path (for permanent effect, append it to your user bash profile)

```bash
\$ export PATH="$PATH:/path/to/elixir/bin"
\$ nano ~/.profile
...
export PATH="$PATH:/path/to/elixir/bin"
```

Check version and installation:

```bash
\$ elixir --version
```

### Node.js

You can get Node.js [here](https://nodejs.org/en/download/) or in your distro repos:

```bash
\$ curl -sL https://deb.nodesource.com/setup_version | sudo -E bash -
\$ sudo apt-get update
\$ sudo apt-get install -y nodejs
```

heck Node version:

```bash
\$ nodejs --version
```

## BlockScout installation

Get latest master from git:

```bash
\$ git clone https://github.com/poanetwork/blockscout
\$ cd blockscout
```

Generate DB secret and export it to bash:

```bash
\$ mix phx.gen.secret    # in blockscout base dir
\$ export SECRET_KEY_BASE=generatedAboveSecret/PasteHere
```

Set required env variables, example below is suited for Ethereum Mainnet and Parity(Openethereum)

```bash
\$ export ETHEREUM_JSONRPC_HTTP_URL=http://localhost:8545
\$ export COIN=ETH
\$ export SUBNETWORK=Mainnet
\$ export NETWORK=Ethereum
\$ export DATABASE_URL=postgresql://dbusername:dbpassword@localhost:5432/blockscout
```

Install mix deps, create db, run migrations:

```bash
\$ mix do deps.get, local.rebar --force, deps.compile, compile  # in blockscout base dir
\$ mix do ecto.create, ecto.migrate
```

Install Node.js deps, build static assets:

```bash
\$ cd apps/block_scout_web/assets; npm install && node_modules/webpack/bin/webpack.js --mode production; cd -
\$ cd apps/explorer && npm install; cd -
\$ mix phx.digest
```

Enable SSL:

```bash
\$ cd apps/block_scout_web; mix phx.gen.cert blockscout blockscout.local; cd -
```

Command above will generate and enable self-signed ssl certs, you need to replace them with real ones.
You may use [certbot](https://certbot.eff.org/instructions) (letsencrypt) to do it, don't forget to set user permissions
and configure file `/path/to/blockscout/config/dev.exs`, see example below:


```bash
\$  nano /path/to/blockscout/config/dev.exs
...
config :block_scout_web, BlockScoutWeb.Endpoint,
  http: [port: 4000],
  https: [
    port: 4001,
    cipher_suite: :strong,
    certfile: "priv/cert/cert.pem",
    keyfile: "priv/cert/privkey.pem"
  ]
...
```
If using certbot, add cert renewal to crontab

### Set BlockScout as systemd service

Prepare BlockScout start script. You need to export all required env vars before each run:

```bash
\$ nano /path/to/blockscout/start.sh

#!/bin/bash
export PATH="$PATH:/home/scout/elixir/bin"
export ETHEREUM_JSONRPC_HTTP_URL=http://localhost:8545
export COIN=ETH
export SUBNETWORK=Mainnet
export NETWORK=Ethereum
export DATABASE_URL=postgresql://dbusername:dbpassword@localhost:5432/blockscout
/path/to/elixir/bin/mix phx.server

\$ chmod +x /path/to/blockscout/start.sh
```

Set your start script as service:

```bash
\$ sudo nano /etc/systemd/system/blockscout.service

 [Unit]
 Description=Blockscout
 After=network.target
 
 [Service]
 User=youruser
 Group=yourusergroup
 WorkingDirectory=/full/path/to/blockscout
 ExecStart=/bin/bash /path/to/blockscout/start.sh
 KillSignal=SIGHUP
 
 [Install]
 WantedBy=default.target
```

Open explorer ports on firewall `default 4000/tcp 4001/tcp`

Test run:

```bash
\$ sudo systemctl start blockscout
```

Enable blockscout as a service:

```bash
\$ sudo systemctl enable blockscout.service
```
