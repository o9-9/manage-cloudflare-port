#!/bin/bash

DIR="$(cd -- "$(dirname -- "$(readlink -f -- "${BASH_SOURCE[0]}")")" &>/dev/null && pwd)"
bun "$DIR/cli.js" "$@"