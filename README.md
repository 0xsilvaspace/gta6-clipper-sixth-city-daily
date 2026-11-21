# Clip GTA 6 for the most YouTube views

A make.fun bounty entry, prepared only. No upload, no push, no submission yet. The make.fun account is connected as @0xsilvaspace.

Bounty: Clip GTA 6 for the most YouTube views
Slug: gta6-clipper-01
Page: https://make.fun/bounty/gta6-clipper-01
Reward: $500 in USDC, 20 places paid
Deadline: Mon Nov 23, 2026, 1:00 AM UTC (2:00 AM WAT)
Channel: Sixth City Daily, @SixthCityDaily, https://www.youtube.com/@SixthCityDaily

## Chosen clip

Source: Rockstar Games, Grand Theft Auto VI Launch Trailer
Source URL: https://www.youtube.com/watch?v=rz1B4B2yBZY
Moment: Lucia asks Jason, "Are we gonna be okay?"
Moment window to cut: 0:58 to 1:12 in the source, 14 seconds of trailer footage
Full plan, title, description, tags, thumbnail idea and edit plan: see clip-package.md in this repo.

The video must be public on YouTube before the deadline, stay public until results are out, carry the make.fun pitch, and its description must carry the required line plus the entrant play code.

## Files

- `main.ts`: Node 22 program, standard library only, no network. It reads VIDEO.json and prints the entry details. It refuses placeholder values, so it will not run until the real YouTube URL is in VIDEO.json.
- `VIDEO.json`: names the YouTube video address and the play code. Play code is now the real one, makefun-pampas-mammoth-piano. The video URL is still a placeholder until the Short is uploaded. Do not submit with a placeholder URL.
- `clip-package.md`: full clip package, title, description, tags, edit plan and safety gates.
- `CUT-NOTES.md`: how the clip was cut and rendered, with the source timestamp check and frame checks. Current cut is v2, 18.53 seconds, short pitch at the end only.
- `LICENSE`: MIT

## What is still missing

1. Upload the finished clip, clip-gta6-vertical.mp4, 18.53 seconds, to Sixth City Daily as a Public Short before Mon Nov 23, 2026, 2:00 AM WAT, with the title, description, credit and play code from clip-package.md. Keep it public until results are out.
2. Fill in the real YouTube URL in VIDEO.json, then check main.ts runs cleanly against it.
3. Submit on make.fun with this repo, the Short URL, and the transcripts of the sessions that chose the moment, decided the creative, cut and rendered the clip, and wrote the repository.

Do not submit this repo with a placeholder URL in VIDEO.json.

Done already: the trailer window 0:58 to 1:12 was watch checked (the line starts at 1:02.5), the make.fun account is connected as @0xsilvaspace, the play code is filled in, and the vertical clip is cut and rendered with the make.fun pitch on screen at the end.
