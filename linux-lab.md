# Building Your InfoSec Lab
Source: [Daniel Miessler Blogpost](https://danielmiessler.com/blog/build-successful-infosec-career/#lab)

## Setup Options
* VMware (or similar) on a laptop or desktop
* VMware (or similar) on a laptop or desktop that’s now a server
* A real server with VMware (or similar) on it
* VPS systems online (EC2, Linode, Digital Ocean, LightSail, etc.)
I recommend a combination of #3 and #4 if you have the money, with #3 coming first. 

## Lab Projects
* [ ] Build an Active Directory forest for your house
* [ ] Run your own DNS from Active Directory
* [ ] Run your own DHCP server from Active Directory
* [ ] Have multiple zones in your network, including a DMZ if you’re going to serve services out of the house
* [ ] Graduate up to a real firewall as soon as possible. I recommend Sophos’ firewall (previously Astaro), as I’ve been using it since it came out, but there are other good iptables and pf options. Doing this will require you to learn about routing and NAT and all sorts of basics that are truly essential for progression.
* [ ] Stand up a website on Windows/IIS
* [ ] Stand up a website on Linux/PHP
* [ ] Build a blog on Linux/Wordpress
* [ ] Have a Kali Linux installation always ready to go
* [ ] Build an OpenBSD box and create a DNS Server using DJBDNS
* [ ] Set up a proxy server
* [ ] Build and configure a local email server that can send email to the Internet using Postfix, Qmail, or Sendmail (I recommend Postfix)
I used a number of terms above that you may need to look up. Take that as an exercise!
These are the basics. Most people who are hardocre into infosec have done the list above dozens or hundreds of times over the years.

The advantage of a lab is that you now have a place to experiment. You hear about something from your news intake, and you can hop onto your lab, spin up a box, and muck about with it. That’s invaluable for a growing infosec mind.
