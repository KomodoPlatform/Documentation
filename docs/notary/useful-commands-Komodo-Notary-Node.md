# Useful commands for Komodo Notary Node

Create symbolic links for komodod and komodo-cli so you can use them anywhere in CLI.
```bash
sudo ln -sf /home/$USER/komodo/src/komodo-cli /usr/local/bin/komodo-cli
sudo ln -sf /home/$USER/komodo/src/komodod /usr/local/bin/komodod
```

Stop Komodo, Litecoin and Iguana at once

```bash
komodo-cli stop && litecoin-cli stop && pkill -15 iguana
```

Update Komodo (be sure to stop Komodo first, see above)

```bash
cd ~/komodo && git pull && cd src && zcutil/build.sh -j8
```

Search for a specific pubkey in files (like: notaries.c, ratify(A,B,C)\_7776 etc. etc.)

```bash
**notaries.c**
cd ~/dPoW/iguana
cat notaries.c | grep 0209d48554768dd8dada988b98aca23405057ac4b5b46838a9378b95c3e79b9b9e (or any pubkey of course)

**ratify(A,B,C)_7776**
cd ~/dPoW/iguana/tests
cat ratifyA_7776 | grep 0209d48554768dd8dada988b98aca23405057ac4b5b46838a9378b95c3e79b9b9e (or any pubkey of course)
```

If you want to copy your full komodo blocks to a new node instead of downloading it again you can scp the files to the new node. THIS WILL TAKE A WHILE!

```bash
cd ~/.komodo
scp -r blocks/ chainstate/ user@ip_of_new_node:~/.komodo
```
