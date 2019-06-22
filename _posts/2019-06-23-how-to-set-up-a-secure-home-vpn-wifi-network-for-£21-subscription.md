---
layout: blog
title: How to set up a secure home VPN WiFi network for £21 + subscription
date: 2019-06-22T23:02:56.448Z
cover: /assets/images/uploads/petter-lagson-1670133-unsplash.jpg
---
# Installing DD-WRT

1. Plug your E900 router into a power outlet and switch it on.
   * Make sure it's close by, you'll be manually resetting it a few times.
2. Connect an Ethernet cable from your computer to the E900 router.
   * You _can_ connect via WiFi at this point if you need to. Remember that using an Ethernet cable is faster and _less likely to go wrong_
   * If you connect via WiFi, you're looking for a network name of `Linksys` followed by a few numbers, e.g.: 
     ![]()
3. Open your web browser and visit the router's configuration page, usually http://192.168.1.1
4. Click _Continue with an open and unsecured network  (not recommended)_
   * Don't worry, we're not going to leave your network unsecured. We're going to secure it once we've setup the VPN software.
   // IMAGE
5. Tick the box that says _I understand that my network is **currently open and not secure**. I would like to manually configure my router's security settings._ and **Continue** (button)
   // IMAGE
6. Enter the username `admin` and the password `admin` and **Login**
   // IMAGE
7. Navigate to:
   * **Administration**
   * **Firmware Upgrade**
   // IMAGE
8. Click **Choose file** and select the `e900-router-first-upgrade-file.bin` from the files you downloaded earlier
9. Click **Start Upgrade**
   // IMAGE
10. Once the file has uploaded (1-2 minutes) you'll be shown the following screen:
    // IMAGE
    Ignore it. Close the window
11. Wait a **5 whole minutes**. Do not touch your router for 5 minutes or you may kill it, permanently. Here's a handy countdown timer:

<div data-countdown="300" data-repeat="0"><h1><span id="m">00</span>:<span id="s">00</span></h1><button>Start</button></div>

\###What happens now

Your router will use the upgrade file to install "DD-WRT", an aftermarket software designed to add features and controls to home routers that the manufacturers don't provide.

Most importantly, for us, it allows you configure the traffic through your router to go through a VPN.

<script>var plugins = ['countdown'];</script>
