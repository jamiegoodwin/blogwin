---
layout: post
date: 2021-05-23T12:31:37.000+00:00
title: Boost your Wi-Fi with whole-home signal and up to double the speed
cover: ''

---
## 🤷‍♂️ Why Would I Do This?

You’re probably here because you’re paying for speedy Internet and it’s shit because the cheap-ass router your ISP gave you is...well...cheap-ass.

In the furthest corner of my house from our Virgin Hub 4 or 5 or 6 or whatever, I got some f*ing impressive speed differences with a new router. To test, I put the laptop on the floor and connected to the our Virgin Hub’s Wi-Fi, then to the new router’s Wi-Fi in turn running tests on [speedtest.net](https://www.speedtest.net/ "Test your Internet speed at speedtest.net").

We’re on Virgin cable at **110 Mb/s**.

**Original Virgin Hub - 34 Mb/s**

![](/assets/images/uploads/screenshot-2021-05-23-at-12-11-10.png)

To be fair, this is not bad. It’s about 69% speed loss. Virgin seem to have updated their Hub software (when we first got the Hub, one wall would kill the connection).

**New ASUS Router - 56 Mb/s**

![](/assets/images/uploads/screenshot-2021-05-23-at-12-11-34.png)

However, without _any_ extra setup you can see the ASUS router adds just over **20 Mb/s** to the connection. To put that into perspective, that’s a full copper broadband connection.

That’s why you would do this ☺️

## 😲 How Can I Achieve This Magical Speed Improvement?

### Step One

#### Buy the Router

The router you need is the [ASUS RT-AC86U](https://www.amazon.co.uk/gp/product/B075WFL15D/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B075WFL15D&linkCode=as2&tag=jevawin-21&linkId=d40a3435a8145e383ae0899dfbc8d28e "ASUS RT-AC86U Router on Amazon").

It’s usually £130 on Amazon (although I've seen it around £150) and if you use my links I’ll get 12% commission 😊 but if you can find it cheaper elsewhere, go for it!

[![A futuristic looking black router with red streaks and 3 antennae](/assets/images/uploads/f465eb91-f9b9-491f-815f-21b533719075.jpeg "ASUS RT-AC86U router")](https://www.amazon.co.uk/gp/product/B075WFL15D/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B075WFL15D&linkCode=as2&tag=jevawin-21&linkId=d40a3435a8145e383ae0899dfbc8d28e "ASUS RT-AC86U router")

### Step Two

#### Plug the Router In

When your router arrives, whip everything out of the box and start plugging in.

1. Screw in the 3 antennae - point them all forwards for now, we’ll get to this later 🙂.
2. Plug the router into power.
3. Take the Ethernet cable (looks like a giant black telephone cable) and plug one end into one of (1-4, doesn’t matter which) the **LAN** ports of your current router (from your Internet provider), and the other end into the **WAN** (blue) port of the new ASUS router.

It should look like this:

![A Virgin Media Hub with a black Ethernet cable coming out of one of the yellow LAN ports. The other end of the cable is plugged into the blue WAN port of the ASUS router.](/assets/images/uploads/img_0567.jpeg "Connecting the ASUS router")

Where the black cable is plugged into a yellow LAN port of my Virgin modem-router and the blue WAN port of the ASUS router.

Once it’s plugged in, press the power button on the new router (red arrow; all the lights on the front should start flashing).

> **Explanation for nerds:** LAN = Local Area Network. WAN = Wide Area Network (e.g. the Internet). Your ISP’s modem-router shares the Internet via Wi-Fi (for now) and those 4 LAN ports. We’re using a LAN port to provide Internet to the new router, but so that the new router recognises it as the Internet we’re going into the WAN (Internet) port of the new router.
>
> The reason we need to go via your ISP’s device is that it’s a **modem** as well, meaning it gets the Internet via cable (Virgin) or a phone line (BT, Sky, TalkTalk, etc.).

### Step Three

#### Connect to the Router

Right now your new router is powering on for the first time. It’s getting the Internet from your ISP’s modem-router, and it’s made its own new Wi-Fi network for you.

It’s time to configure it.

1. Open your laptop or a good-sized tablet (preferably not a phone, this is harder on a tiny screen).
2. Look for a Wi-Fi network called **ASUS_XX**

   ![An image of a list of Wi-Fi networks on a macOS computer; accessible by clicking the settings icon in the top right or the screen](/assets/images/uploads/screenshot-2021-05-23-at-10-59-51.png "macOS Wi-Fi list")
   * On a Mac click the little dials icon in the top right and go to Wi-Fi. On a PC it’s the wireless icon in the bottom right. [Instructions for a PC here.](https://support.microsoft.com/en-us/windows/connect-to-a-wi-fi-network-in-windows-10-1f881677-b569-0cd5-010d-e3cd3579d263 "How to connect to WiFi in Windows 10")![An image of the icons in the Windows taskbar that open the Wi-Fi networks list. One looks like a globe. One like a computer screen. One like a Wi-Fi symbol or radio waves.](/assets/images/uploads/6ef6a0c7-ad00-42e3-b803-6f68c062adc5.png "Windows Wi-Fi")
3. Connect to either the 5G or 2G network - whichever has the strongest signal. If they’re the same choose 5G.

> **Explanation for nerds:** 5G, or 5GHz, is a faster Wi-Fi signal because its radio wavelength is shorter, meaning it can carry more data. However, that also means it gets blocked more easily (e.g. by walls). 2G, or 2.4GHz, is a slower signal but travels further and better through walls and other obstacles. However, 2.4GHZ is used by lots of other devices like baby monitors, garage door openers. You shouldn’t need to worry though, because this new router automatically manages which one your devices use.

### Step Four

#### Configure the Router

1. While on your **new router’s Wi-Fi**: open a web browser (Chrome, Safari, Edge).
2. Visit this URL: [http://192.168.1.1/](http://192.168.1.1/ "Router configuration page")
3. You should be presented with this screen: ![The first screen of a new ASUS router’s configuration website, asking a user if they wish to create a new network or go into advanced settings.](/assets/images/uploads/screenshot-2021-05-23-at-11-01-07.png "ASUS router welcome screen")
4. Hit **Create A New Network**

##### Decision Time!

![](/assets/images/uploads/screenshot-2021-05-23-at-11-02-47.png)

**Easy Route**

If you just want to be done or test it out, then come up with a brand new Wi-Fi network name [(be creative)](https://www.google.co.uk/search?q=funny+wifi+names&source=lmns&bih=803&biw=1261&client=safari&hl=en-GB&sa=X&ved=2ahUKEwj8-qSOoIDxAhVC0RoKHUeQBGYQ_AUoAHoECAEQAA "Funny Wi-Fi names"); enter your own password [(be secure)](https://www.lastpass.com/password-generator "Free strong password generator from LastPass"); and press **Apply**

_Don’t tick **Separate 2.4 GHz and 5 GHz** unless you know why you’d want to do that_.

![](/assets/images/uploads/screenshot-2021-05-23-at-11-03-00.png)

On the next screen, come up with your own login name and admin password (you’ll use these if you log into the router to change settings again).

**What Happens Now?**

Now your original modem-router from your ISP is still giving out the Internet via its Wi-Fi, but your new fancy ASUS router is also giving out the Internet on a different network name.

Connect to the new network with the cool name you gave it. Test your speeds.

**Getting the Most Speed**

Remember those antennae you screwed in? One of the nifty things about the ASUS router is it has those three _directional_ antennae.

Play around trying to point them where you want the best Wi-Fi and run speed tests to get the strongest connection.

**You Could Stop Here**

But you shouldn’t. For a couple of reasons:

1. You’ll have to connect every device in your home to the new Wi-Fi to make the most of it.
2. You’ve just created another **competing network**, i.e. your new Wi-Fi is competing with your original one for bandwidth and they might interfere with each other.

To put 2 into perspective, remember earlier I said I got **34 Mb/s** with our Virgin router in the corner of the house, **56 Mb/S** with the new ASUS router?

Turning off the Virgin router’s Wi-Fi squeezes out an additional **4 Mb/s** for a total of **60 Mb/s**.

![](/assets/images/uploads/screenshot-2021-05-23-at-12-11-50.png)

That might not seem much but if you have a lot of devices simultaneously connected and downloading, that impact will be greater.

### Step Five

#### MORE SPEED!

Coming soon.