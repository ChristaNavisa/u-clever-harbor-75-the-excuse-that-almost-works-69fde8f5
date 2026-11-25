# Download's Stuck at 97%

[![make.fun](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/c/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/ChristaNavisa/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/rank.svg)](https://make.fun/c/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/ChristaNavisa/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/reward.svg)](https://make.fun/c/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)

Entry for the make.fun bounty [The Excuse That Almost Works](https://make.fun/c/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5): one line, at most 20 words — the excuse a gamer texts the boss to skip work on GTA 6 launch week.

## What it does

`main.ts` writes a single hurried excuse to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`):

> Boiler's leaking, plumber can't come till Friday, download's stuck at 97%.

The boiler leak is the boring, specific, believable reason he has to stay home; the plumber can't come till Friday, which covers the whole launch week; and the real emergency — the download stuck at 97% — slips out at the end, which is the joke. 11 words, 74 characters, one line, no trailing newline.

## Run

```sh
node main.ts
```

Requires Node 22 or later. No dependencies, no network, no secrets.
