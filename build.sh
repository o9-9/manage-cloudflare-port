# linux
bun build --compile --bytecode --minify --outfile ./dist/quik-linux-x64 --target bun-linux-x64-modern ./src/cli.ts
bun build --compile --bytecode --minify --outfile ./dist/quik-linux-arm64 --target bun-linux-arm64 ./src/cli.ts

# windows
bun build --compile --bytecode --minify --outfile ./dist/quik-windows-x64.exe --target bun-windows-x64-modern ./src/cli.ts

# macos
bun build --compile --bytecode --minify --outfile ./dist/quik-mac-mchip --target bun-darwin-arm64 ./src/cli.ts
bun build --compile --bytecode --minify --outfile ./dist/quik-mac-intel --target bun-darwin-x64 ./src/cli.ts