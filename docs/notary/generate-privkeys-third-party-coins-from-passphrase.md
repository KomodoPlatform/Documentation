# How to Generate Address and Private Key (WIF) for 3rd Party Coins Using Passphrase

While this guide is intended for Notary Node operators, other users may find it useful too.

**Never enter your Notary Node's passphrase into any other computer/server other than your node itself for security purposes.**

:::tip Note
For Notary Nodes, we will need `Compressed Public Key` as pubkey, `Compressed WIF` as private key and `Compressed Address` as the public address.
:::


## Install dependencies

```bash
sudo apt-get update && sudo apt-get upgrade -y
sudo apt-get install git php-cli php-gmp php-mbstring
```


## Steps

- Clone the repo: [https://github.com/DeckerSU/komodo_scripts](https://github.com/DeckerSU/komodo_scripts)

```bash
git clone https://github.com/DeckerSU/komodo_scripts
cd komodo_scripts
git submodule init
git submodule update --init --recursive
```

- Open `genkomodo.php` for editing with `nano genkomodo.php`
- To get generate private keys for other coins using your passphrase, change the value on the line `$passphrase = "myverysecretandstrongpassphrase_noneabletobrute"`. Change only the content inside `""` i.e., replace `myverysecretandstrongpassphrase_noneabletobrute` with your passphrase.
- Alternatively, to generate private keys for other coins using KMD private key, uncomment the following line, and replace the private key with your own. `// $bitcoinECDSA->setPrivateKeyWithWif("Uqe8cy26KvC2xqfh3aCpKvKjtoLC5YXiDW3iYf4MGSSy1RgMm3V5");
`

- Next, execute the command: `php genkomodo.php` to generate the private keys

- Copy and import your private keys (Compressed WIF) into their respective chains, then delete your passphrase from `genkomodo.php` for security purposes.

## Example Output

```bash
$ php genkomodo.php

             Passphrase: 'myverysecretandstrongpassphrase_noneabletobrute'
[ BTC ]
         Network Prefix: 00
  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1
Uncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030
            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d
         Compressed WIF: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
       Uncompressed WIF: 5JuvXAozwf7G7yjT7Fs2UZhFF85qS6Fez9yCfAMZzFZ7uPJvWtC
  Compressed Address: 1M68ML9dMZZPEdrjncUCe7ZWadAGUxMNyv
Uncompressed Address: 1Py6QmcHgWsoAjTJeixtXt2uGzMVa5Ym1i
[ LTC ]
         Network Prefix: 30
  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1
Uncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030
            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d
         Compressed WIF: T7trfubd9dBEWe3EnFYfj1r1pBueqqCaUUVKKEvLAfQvz3JFsNhs
       Uncompressed WIF: 6vDezJMXr5a8bMdJd5ezFxURCbeJdthgkqNNNMNbhhsjbJoAQhU
  Compressed Address: LfK5cYTTSDoSVSYtxkTVv8dGnqXYZRsn86
Uncompressed Address: LiC3fyv7mB7rRY9TprxBou6fVCimky8MSd
[ KMD ]
         Network Prefix: 3C
  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1
Uncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030
            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d
         Compressed WIF: UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
       Uncompressed WIF: 7KYb75jv5BgrDCbmW36yhofiBy2vSLpCCWDfJ9dMdZxPWnKicJh
  Compressed Address: RVNKRr2uxPMxJeDwFnTKjdtiLtcs7UzCZn
Uncompressed Address: RYFHVHVaHLgNEjpW7tx1dQN73Fp6Hu5EXs
[ EMC2 ]
         Network Prefix: 21
  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1
Uncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030
            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d
         Compressed WIF: T7trfubd9dBEWe3EnFYfj1r1pBueqqCaUUVKKEvLAfQvz3JFsNhs
       Uncompressed WIF: 6vDezJMXr5a8bMdJd5ezFxURCbeJdthgkqNNNMNbhhsjbJoAQhU
  Compressed Address: EdF2quz8nWrJDwTbbTTieFYUMGfPsVB5dv
Uncompressed Address: Eg7zuMSo7UAiA34ATZxQY21s3drd3WJM6h
[ AYA ]
         Network Prefix: 17
  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1
Uncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030
            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d
         Compressed WIF: T7trfubd9dBEWe3EnFYfj1r1pBueqqCaUUVKKEvLAfQvz3JFsNhs
       Uncompressed WIF: 6vDezJMXr5a8bMdJd5ezFxURCbeJdthgkqNNNMNbhhsjbJoAQhU
  Compressed Address: Abrzzq1FgiDY3c4jMG8Xnzpc4E5xqktXhz
Uncompressed Address: Aejy4GTv1fXwyhfJDNdDgmHzkbHBwVxnvD
[ ETH/ERC20 ]
   ETH/ERC20 Address: 0x85FE0A232fA144921d880BE72A3C5515e5C17A8c
```

## Private Key Conversion in Python

The python script below will return converted Private Keys for all coins with a known `wiftype` prefix (or a specific coin if set via runtime param).
If the coin you need to convert is not yet available, you need to find the relevant values in the project's source code, e.g. https://github.com/KomodoPlatform/komodo/blob/810d308d0792a560f05937b7989b6868381c1dc8/src/chainparams.cpp#L197-L199
Then PR these values to https://github.com/KomodoPlatform/coins/blob/master/coins


### Install Dependencies
```bash
sudo apt install python3-pip
pip install base58
```

### Create Script

- Open a file for editing with `nano convert_private_keys.py` and input the code below

```python
#!/usr/bin/env python3
import sys
import requests
import hashlib
import base58
import binascii

if len(sys.argv) > 1:
    WIF = sys.argv[1]
else:
    print("\n")
    WIF = input('Enter Private Key: ')
print("\n")

coin_prefixes = requests.get("https://stats.kmd.io/api/info/coin_prefixes/").json()["results"]

if len(sys.argv) > 2:
    coin = sys.argv[2]
    if coin not in coin_prefixes:
        print(f"Error: {coin} not in coin_prefixes")
        sys.exit()
else:
    coin = ""

def double_sha(x):
    a = hashlib.sha256(binascii.unhexlify(x)).hexdigest()
    return hashlib.sha256(binascii.unhexlify(a)).hexdigest()

pk = binascii.hexlify(base58.b58decode(WIF))[2:-8]
pk_utf = pk.decode("utf-8")

for _coin in coin_prefixes:
    prefix = coin_prefixes[_coin]["hex"]["wiftype"]
    x_key = prefix + pk_utf
    full_key = x_key + double_sha(x_key)[:8]
    WIF = base58.b58encode(binascii.unhexlify(full_key)).decode('utf-8')
    if coin != "":
        if coin  == _coin:
            print(WIF)
            break
    else:
        print (f"{_coin: >18}: {WIF}")
```

- Make the script executable with `chmod +x convert_private_keys.py`

### Example Output

- Run the script, and enter your private key when prompted.

```bash
$ ./convert_private_keys.py

Enter Private Key: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes

               ABY: PiZMXCJw86756jja4WU8R1fp6CHeeCxrjKAKSnx9sf5ZWRiovtdY
           ABY-OLD: PRQ6Nsb8mnGo9hi2xMgLpfUqbKtLyNRQQRv4KtFxtha8wmKmiuXz
              ACTN: UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
               AUR: T7trfubd9dBEWe3EnFYfj1r1pBueqqCaUUVKKEvLAfQvz3JFsNhs
               AVN: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
               AWR: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
               AXE: XG8WgRgp3vq5o8QkGNbg1tVenMXvDYnw2qvxyxcyv4WrsJuCFVK7
               AXO: UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
               AYA: T7trfubd9dBEWe3EnFYfj1r1pBueqqCaUUVKKEvLAfQvz3JFsNhs
               BCH: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
              BEER: UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
               BET: UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
              BITN: QTTWP17RzrgkyKoQptSbPt9FLNHupJKVYXGyF4gdL3r7v5iu1gYn
               BLK: PiZMXCJw86756jja4WU8R1fp6CHeeCxrjKAKSnx9sf5ZWRiovtdY
               BOT: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
              BOTS: UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
              BSTY: XrT2y58QkYVdhCTpUgBFCasbn6LXZDsqgcRVDn1MsyXhzddnJpw9
       BSTY-segwit: XrT2y58QkYVdhCTpUgBFCasbn6LXZDsqgcRVDn1MsyXhzddnJpw9
               BTC: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
              BTCH: UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
        BTC-segwit: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
              BTCZ: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
               BTE: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
        BTE-segwit: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
               BTX: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
        BTX-segwit: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
               CCL: UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh
               CDN: QAJFEgPdeYrV2HmsijeooXxGqVtc9Tn3De2i89zSM6LhMRMUJ1wy
        CDN-segwit: QAJFEgPdeYrV2HmsijeooXxGqVtc9Tn3De2i89zSM6LhMRMUJ1wy
              CFUN: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes
```


