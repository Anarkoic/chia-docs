---
title: Installation
slug: /installation
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

There are various ways to install Chia. The best method depends on what you intend to do.

If you plan to use Chia as a wallet or to run a farm on a personal computer, we recommend installing the GUI from our [official downloads page](https://www.chia.net/downloads). The best way to install the GUI on Linux is the command line, [as described below](#using-the-cli). The GUI is the simplest way to interact with the Chia client.

However, if you intend to run a Chia full node on a server and connect to it programmatically using the [RPC interface](/rpc), the best method would be to install and run Chia on the command line.

Finally, if you plan on making contributions to the source code or doing [Chialisp](https://chialisp.com) development, we recommend installing Chia from source. This gives the highest level of flexibility.

## System Requirements

The minimum supported specs are that of the Raspberry Pi 4, 4GB model:

- Quad core 1.5Ghz CPU (must be 64 bit)
- 4 GB RAM
- Python versions between 3.7 and 3.10 are supported

### Drive Format

Chia plot files are at least 108GB in size (for K32). To plot successfully requires drives formatted to support large files. Formats that will work include NTFS, APFS, exFAT, and ext4. Do not use drives with FAT formatting (for example FAT12, FAT16, and FAT32), or else plotting will fail. Future versions of Chia will check for unsupported drives, but for now it's up to each user to check their drive format.

## Install

### Using the CLI

```mdx-code-block
<Tabs
  defaultValue="apt"
  groupId="install"
  values={[
    {label: 'APT', value: 'apt'},
    {label: 'YUM', value: 'yum'},
    {label: 'DNF', value: 'dnf'},
    {label: 'PIP', value: 'pip'},
]}>
<TabItem value="apt">
```

```bash
# Install packages
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg

# Add GPG key
curl -sL https://repo.chia.net/FD39E6D3.pubkey.asc | sudo gpg --dearmor -o /usr/share/keyrings/chia.gpg

# Set up repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/chia.gpg] https://repo.chia.net/debian/ stable main" | sudo tee /etc/apt/sources.list.d/chia.list > /dev/null
sudo apt-get update

# Install chia-blockchain
sudo apt-get install chia-blockchain

# Use chia-blockchain-cli instead for CLI only
```

```mdx-code-block
</TabItem>
<TabItem value="yum">
```

```bash
# Install packages
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://repo.chia.net/rhel/chia-blockchain.repo

# Install chia-blockchain
sudo yum install chia-blockchain

# Use chia-blockchain-cli for CLI only
```

```mdx-code-block
</TabItem>
<TabItem value="dnf">
```

```bash
# Install packages
sudo dnf install 'dnf-command(config-manager)'
sudo dnf config-manager --add-repo https://repo.chia.net/rhel/chia-blockchain.repo

# Install chia-blockchain
sudo dnf install chia-blockchain

# Use chia-blockchain-cli for CLI only
```

```mdx-code-block
</TabItem>
<TabItem value="pip">
```

:::note
Make sure you have [Python 3.10](https://www.python.org/downloads/release/python-3109) and [Git](https://git-scm.com/downloads) installed.
:::

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
. ./venv/bin/activate # MacOS / Linux
./venv/Scripts/Activate.ps1 # Windows

# Update pip
pip install --upgrade pip

# Install chia-blockchain
pip install --extra-index-url https://pypi.chia.net/simple chia-blockchain miniupnpc
```

Chia strives to provide [binary wheels](https://pythonwheels.com) for modern systems. If your system does not have binary wheels, you may need to install development tools to build some Python extensions from source. If you're attempting to install from source, setting the environment variable `BUILD_VDF_CLIENT` to `N` will skip trying to build Timelord components that aren't very cross platform, e.g. `export BUILD_VDF_CLIENT=N`.

```mdx-code-block
</TabItem>
</Tabs>
```

### From Source

```mdx-code-block
<Tabs
  defaultValue="linux-macos"
  groupId="source"
  values={[
    {label: 'Linux/MacOS', value: 'linux-macos'},
    {label: 'Windows', value: 'windows'},
]}>
<TabItem value="linux-macos">
```

:::note
Make sure you have [Python 3.10](https://www.python.org/downloads/release/python-3109) and [Git](https://git-scm.com/downloads) installed.
:::

```bash
# Download chia-blockchain
git clone https://github.com/Chia-Network/chia-blockchain -b latest --recurse-submodules

# Change directory
cd chia-blockchain

# Install dependencies
sh install.sh

# Activate virtual environment
. ./activate

# Initialize
chia init
```

The following is how you update to the latest version:

```bash
# Change directory
cd chia-blockchain

# Activate the virtual environment
. ./activate

# Stop running services
chia stop -d all

# Deactivate the virtual environment
deactivate

# Pull the latest version
git fetch
git checkout latest
git reset --hard FETCH_HEAD --recurse-submodules

# If you get RELEASE.dev0 then delete the package-lock.json in chia-blockchain-gui and install.sh again

# This should say "nothing to commit, working tree clean"
# if you have uncommitted changes, RELEASE.dev0 will be reported
git status

# Install the new version
sh install.sh

# Activate the virtual environment
. ./activate

# Initialize the new version
chia init
```

```mdx-code-block
</TabItem>
<TabItem value="windows">
```

:::note
Make sure you have [Python 3.10](https://www.python.org/downloads/release/python-3109) and [Git](https://git-scm.com/downloads) installed.
:::

```bash
# Download chia-blockchain
git clone https://github.com/Chia-Network/chia-blockchain -b latest --recurse-submodules

# Change directory
cd chia-blockchain

# Install dependencies
./Install.ps1

# Activate virtual environment
. ./venv/Scripts/Activate.ps1

# Initialize
chia init
```

The following is how you update to the latest version:

```bash
# Change directory
cd chia-blockchain

# Activate the virtual environment
. ./venv/Scripts/Activate.ps1

# Stop running services
chia stop -d all

# Deactivate the virtual environment
deactivate

# Pull the latest version
git fetch
git checkout latest
git reset --hard FETCH_HEAD --recurse-submodules

# If you get RELEASE.dev0 then delete the package-lock.json in chia-blockchain-gui and install.sh again

# This should say "nothing to commit, working tree clean"
# if you have uncommitted changes, RELEASE.dev0 will be reported
git status

# Install the new version
./Install.ps1

# Activate the virtual environment
. ./venv/Scripts/Activate.ps1

# Initialize the new version
chia init
```

```mdx-code-block
</TabItem>
<TabItem value="windows">
```

```mdx-code-block
</TabItem>
</Tabs>
```

### Raspberry Pi 4 {#raspberry-pi}

:::note
Chia does not support the Raspberry Pi 3, and we do not recommend running the GUI on the 4GB Raspberry Pi 4 model.

It is highly recommended you put the Chia blockchain and wallet database on an SSD or NVMe drive, rather than the SD card.
:::

#### Swap {#raspberry-pi-swap}

It is suggested that you set up 1024 MiB of swap:

```mdx-code-block
<Tabs
  defaultValue="ubuntu"
  groupId="source"
  values={[
    {label: 'Ubuntu 20.04 LTS', value: 'ubuntu'},
    {label: 'Raspbian 64', value: 'raspbian'},
]}>
<TabItem value="ubuntu">
```

Run the following commands to set up the swap:

```bash
sudo dd if=/dev/zero of=/swap bs=1M count=1024
sudo chmod 600 /swap
sudo mkswap /swap
sudo swapon /swap
```

Add this line to `/etc/fstab` so that swap available on reboot:

```bash
/swap swap swap defaults 0 0
```

```mdx-code-block
</TabItem>
<TabItem value="raspbian">
```

Here is an excellent [walk-through of increasing swap space](https://pimylifeup.com/raspberry-pi-swap-file/) on Raspbian 64.

```mdx-code-block
</TabItem>
</Tabs>
```

#### Setup {#raspberry-pi-setup}

Run the following commands to prepare for installation:

```bash
# Requirements to compile the blockchain
sudo apt-get install -y build-essential python3-dev

# If you are not using Raspbian 64, add this
export PIP_EXTRA_INDEX_URL=https://www.piwheels.org/simple/

# Make sure you have 64-bit Python between versions 3.7 and 3.10
python3 -c 'import platform; print(platform.architecture())'
```

#### Proceed {#raspberry-pi-install}

:::note
If you run into an error during the build process, make sure you are running a 64-bit version of the OS.

You can check by running `uname -a`. If it says `arm7l`, you need a 64-bit version of the OS. The `uname -a` output should end with `aarch64 GNU/Linux`.
:::

Finally, follow the typical [from source installation for Linux](#from-source) to continue.

#### Disable Timelord {#raspberry-pi-timelord}

This is not necessary when installing from source.

However, if you install Chia in some other way, disable the timelord build process:

```bash
export BUILD_VDF_CLIENT=N
```

## Directory Structure

```
.chia/
└── mainnet/
      ├─ config/
      │      ├─ config.yaml
      │      └─ ssl/
      ├─ db/
      ├─ log/
      │      └─ debug.log
      ├─ run/
      └─ wallet/
```

All data used by the Chia blockchain is stored at the location set with the `CHIA_ROOT` environment variable, which defaults to `~/.chia/mainnet` (the hidden folder `.chia` inside of your home directory) if unset.

The blockchain database is stored under the `db` subdirectory. It is possible to copy the database file to use as a backup or put on another machine. To resync the full node from the start, delete the database file and restart the node.

The config file under the `config` subdirectory. Its name is `config.yaml`, and it can be used to find the root cause of problems.

It is possible to configure the `CHIA_ROOT` environment variable to another location. A common use for this would be to switch it to `~/.chia/testnet` to have a separate config for the testnet.

## CLI Setup

Using the CLI gives greater and more precise control over the various Chia services such as the full node. For a more details on the commands, read the [CLI Reference](/cli).

````mdx-code-block
<Tabs>
  <TabItem value="MacOS" label="MacOS" default>

The CLI commands are stored in the following location:

```bash
/Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon
```

To be able to use these commands without going to that directory in the terminal, add it to the path.

This can be done by running the following command:

```bash
export PATH=/Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon:$PATH
```

To load this on startup, add it to the `.bashrc`, `.bash_profile`, or `.zshrc` file depending on which is used by the shell.

</TabItem>
<TabItem value="Windows" label="Windows">

The CLI commands are stored in the following location:

```bash
~\AppData\Local\Programs\Chia\resources\app.asar.unpacked\daemon
```

To be able to use these commands without going to that directory in the terminal, add it to the path.

This can be done by doing the following:

- Right-click on the Start menu
- Click on "System"
- Click "Advanced system settings"
- Click "Environment variables"
- Double-click "Path"
- Click "Add"
- Enter the path shown above

</TabItem>
<TabItem value="Linux" label="Linux">

:::note
If you installed Chia from source, the CLI will not require any further setup.
:::

If you installed Chia with the Linux installer files, the CLI commands are stored in one of the following locations:

```bash
/usr/lib/chia-blockchain/resources/app.asar.unpacked/daemon/chia
/lib/chia-blockchain/resources/app.asar.unpacked/daemon/chia
```

To be able to use these commands without going to that directory in the terminal, add it to the path.

This can be done by running either of the following commands, depending on which path is used:

```bash
export PATH=/usr/lib/chia-blockchain/resources/app.asar.unpacked/daemon/chia:$PATH
export PATH=/lib/chia-blockchain/resources/app.asar.unpacked/daemon/chia:$PATH
```

To load this on startup, add it to the `.bashrc`, `.bash_profile`, or `.zshrc` file depending on which is used by the shell.
</TabItem>
</Tabs>
````

### Install GUI

The GUI is a simpler method of interacting with Chia, and it can be installed manually from the CLI.

````mdx-code-block
<Tabs>
  <TabItem value="MacOS / Linux" label="MacOS / Linux" default>

```bash
# Install the GUI
. ./install-gui.sh

# Start the GUI
sh start-gui.sh
```

The following is how you update to the latest version:

```bash
# Change directory into the GUI
cd chia-blockchain-gui

# Pull the latest version
git fetch

# Change directory
cd ..

# Change permissions on install script
chmod +x ./install-gui.sh

# Install the new version of the GUI
./install-gui.sh

# Start the GUI
bash start-gui.sh
```

</TabItem>
<TabItem value="Windows" label="Windows">

```bash
# Install the GUI
. .\Install-gui.ps1

# Change directory
cd chia-blockchain-gui

# Start the GUI
Start-Process -NoNewWindow npm run electron
```

The following is how you update to the latest version:

```bash
# Change directory
cd chia-blockchain-gui

# Pull the latest version
git fetch

# Change directory
cd ..

# Install the new version of the GUI
./Install-gui.ps1

# Change directory
cd chia-blockchain-gui

# Start the GUI
Start-Process -NoNewWindow npm run electron
```

</TabItem>
</Tabs>
````

### Initial Startup

Whereas the GUI will set everything up automatically, the setup needs to be done manually on the CLI.

First, initialize the Chia configuration files:

```bash
chia init
```

Then, generate your keys:

```bash
chia keys generate
```

Finally, start the farmer and its full node:

```bash
chia start farmer
```
