<div align='center'>
    <h1>quik</h1>
    <h3>a quik cli-based way to manage cloudflare.</h3>
</div>

<br><br>

## setup (mac/linux)
1. `git clone https://github.com/VillainsRule/quik && cd quik`
2. `bun install`
3. `bun run build`
4. `chmod +x ~/quik`
5. the executable is at `~/quik`

optionally, add a terminal alias:
1. identify the shell (`echo $SHELL`)
2. find the path to the quik executable you downloaded (`pwd` in the folder where it is located)
3. add `alias quik='~/quik'` to your shell config file:
    - mac: `~/.zshrc` for zsh or `~/.bash_profile` for bash
    - linux: `~/.zshrc` for zsh or `~/.bashrc` for bash

<br><br>

## setup (windows)
1. `git clone https://github.com/VillainsRule/quik && cd quik`
2. `bun install`
3. `bun run build`
4. the executable is at `{homedir}/quik`
5. i don't own a windows device so idk what to do now

<br><br>

## creating a cloudflare API key
this is needed for the program to start.

1. go to the [cloudflare account token page](https://dash.cloudflare.com/?to=/:account/api-tokens)
2. create one with the following permissions:

![permissions](https://files.catbox.moe/02vhok.png)

the summary should look like this:

![summary](https://files.catbox.moe/gm9m0r.png)

3. put it into quik

<br><br>
<h5 align='center'>made with :heart:</h5>
