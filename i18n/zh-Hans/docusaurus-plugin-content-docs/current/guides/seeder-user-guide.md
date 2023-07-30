---
title: Seeder User Guide
slug: /guides/seeder-user-guide
---

The seeder is a tool designed to keep track of the most reliable nodes on the Chia network. Each instance of the seeder maintains its own separate list of IP addresses for these nodes.

It does so by crawling through the network, periodically revisiting known nodes from its list. If a node is either no longer available, or has exhibited unexpected behavior, the seeder instance removes that node from its list.

The seeder runs a mini-DNS server. Anyone can obtain an entry point into Chia's decentralized and permissionless network via a simple DNS request for reliable node IPs.

The seeder has very low memory and CPU requirements.

Chia's core developers have already been running an instance of the seeder for some time.

You can view the current status of this instance by running one of the following commands:

```bash
# IPv4
dig dns-introducer.chia.net

# IPv6
dig -t AAAA dns-introducer.chia.net
```

Chia has decided to release the seeder as a tool for anyone to maintain their own list of reliable nodes, which contributes to the further decentralization of Chia's network by taking this tool off of the core team's hands.

Features:

- Implements peer statistics and exponentially moving averages over various time-windows, akin to those maintained by its relative, [the bitcoin-seeder](https://github.com/sipa/bitcoin-seeder).
- Runs a mini-DNS server on port 53, along with a full node to crawl the network.
- Stores peer IPs and peer statistics into a database, so that they are persisted across runs.

## Expectations for Seeder Operators

The Chia network core developers endeavor to minimize the level of trust in the DNS servers associated with a seeder. In this regard, it is expected for each seeder to be run by an individual or organization recognized as well-intentioned within the Chia community (at the company's discretion).

This entails following good host security practices, maintaining control of the underlying infrastructure, and not transferring control of the seeder they operate.

Logging of DNS queries must not be retained longer than necessary (as might be required for the operation of the service), and must not be communicated to any third-party.

Each entity maintaining a seeder DNS server is encouraged to make publicly available the details of their operating practices.

In keeping with all the previous recommendations, a reachable email address must be published for inquiries regarding said operating practices.

## Installation

```bash
sh install.sh
. ./activate
chia init
```

You most certainly will want to specify your own configuration of a domain name server. Do so by editing the config file located at `~/.chia/mainnet/config/config.yaml`, or by running `chia configure`. Please refer to the relevant section below for more details, or enter `chia configure --help`.

## Special instructions on Ubuntu

On Ubuntu, it is possible that systemd-resolved already binds port 53. The seeder's built-in DNS server is run on the same port, and systemd-resolved takes precedence by default.

Here are special instructions to [free port 53](https://github.com/team-exor/generic-seeder#exclamation-special-instructions-for-ubuntu-users-exclamation). Check out point #2 and #3.

This amounts to editing `/etc/systemd/resolved.conf` to disable binding of systemd-resolved to port 53, or, alternatively, entirely disabling the systemd-resolved service.

## Configuration

The config file is `.chia/mainnet/config/config.yaml` The default values are for running a DNS seeder for mainnet. At the very least, in the `seeder:` section of config.yaml, the variables `domain_name`, `nameserver` and `soa` need to be changed to reflect the NS entry for your server in a domain record.

For a local DNS server setup, you will need control of a top-level domain (TLD) allowing administrator access for the purpose of creating additional DNS entries. Any domain registrar should be fine to use.

:::note
While it may be possible to use an existing domain, it is recommended to register a new domain name to specifically run the seeder address.
:::

Proceed by logging into your domain registrar and navigating to the section pertaining to managing DNS records for your domain. Next, click or activate the button or mechanism for creating a new DNS record. Finally, create a new DNS record of type `A`, along with another new DNS record of type `NS`.

For instance, if you want to run a seeder's DNS server on `my-chia-seeder.example.com`, an authoritative NS record in `example.com`'s domain record will be required, which might point, e.g., to `vps.example.com`.

You can check that this is the case by running the following command (please ensure that you have `dig` on your system by installing the `dnsutils` or `bind9-dnsutils` package; for instance, on Ubuntu, `sudo apt install dnsutils` or `$ sudo apt install bind9-dnsutils`):

```bash
dig -t NS my-chia-seeder.example.com
```

whose output should display, among other information, the following:

```bash
;; ANSWER SECTION
my-chia-seeder.example.com.    86400    IN    NS    vps.example.com
```

Please refer to the following video, from 9:40 onward. For another example on how to [set-up `A` and `NS` records for your domain using DigitalOcean](https://www.youtube.com/watch?v=DsaxbwwVEXk&t=580s).

## Running

```bash
. ./activate
chia start seeder crawler
```

will run both a crawler and a DNS server. Alternatively,

```bash
. ./activate
chia start crawler
```

gives you the option to merely crawl the network so as to get a list of the connectable nodes, without having to set up a DNS server.

## Stopping

```bash
. ./activate
chia stop -d all
```
