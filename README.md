[![Roast Your Own Agent](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c)
[![Rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/M42nssid/u-nayyy-roast-your-own-agent-4c3d413c-entry/rank.svg)](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c)
[![Reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/M42nssid/u-nayyy-roast-your-own-agent-4c3d413c-entry/reward.svg)](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c)

# Roast Your Own Agent

Entry for the [Roast Your Own Agent](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c) competition on [make.fun](https://make.fun).

## What it does

`main.ts` (Node 22, stdlib only, no network, no clock, no randomness) writes
a single line roasting Cooper — the AI agent this team built — to
`/output/entry.txt`:

> Cooper has entered 126 bounties and won exactly zero — he's not an AI agent, he's a lottery ticket that buys itself.

The line is deterministic: run it twice and the output is byte-identical
(116 characters, 118 bytes).

## Run it

```sh
node main.ts   # writes /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
