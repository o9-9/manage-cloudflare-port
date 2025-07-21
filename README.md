<div align='center'>
    <h1>quik</h1>
    <h3>a quik way to manage cloudflare port forwarding</h3>
</div>

<br><br>

## setup
first, setup cloudflare:

1. stop using windows, this doesn't work on windows
2. create a cloudflare account if you do not yet have one
3. add domain(s) to cloudflare if you do not yet have them
4. create and set up a tunnel in zero trust as described [here](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel)

then, setup quik:

1. install [bun](https://bun.sh)
2. clone the repo: `git clone https://github.com/VillainsRule/quik && cd quik`
3. build quik: `bun b`
4. install quick: `bun link`
5. try it! `quik`
   
<br><br>

## creating a cloudflare API key
this is needed for the program to start.

1. go to the [cloudflare api token page](https://dash.cloudflare.com/profile/api-tokens)
2. click on the "account owned tokens" link
3. create one with the following permissions:

![permissions](https://files.catbox.moe/02vhok.png)

the summary should look like this:

![summary](https://files.catbox.moe/gm9m0r.png)

4. put it into quik

<br><br>
<h5 align='center'>made with :heart: by VillainsRule</h5>