# Clip GTA 6 bounty package, Sixth City Daily

Prepared only. No upload, no account, no keypair, no submission.

## Bounty, as read on make.fun

Title: Clip GTA 6 for the most YouTube views
Bounty page: https://make.fun/bounty/gta6-clipper-01
Slug: gta6-clipper-01
Reward: $500 in USDC, locked in escrow on Solana since 2026-11-19 23:38:47 UTC
Places paid: 20
1st $100, 2nd $70, 3rd $50, 4th to 10th $20 each, 11th to 20th $14 each
Deadline: Mon Nov 23, 2026, 1:00 AM UTC, which is Mon Nov 23, 2026, 2:00 AM WAT
Channel: Sixth City Daily, @SixthCityDaily, https://www.youtube.com/@SixthCityDaily, channel ID UCI7UfFXYpvza8n40PNASSkQ, Brand Account under kennethsilva483@gmail.com

## How it is judged

The brief on the bounty page says: cut a GTA 6 gameplay or livestream moment into a vertical clip that then tells viewers they can make money on make.fun making clips with AI, and post it public on YouTube.

Places go by YouTube views, most first. The house reads each video through the YouTube Data API. While entries are open the board ranks every video on its latest views, read again at most every 15 minutes. At the deadline the house reads every video once more, and those views decide the places. The 20 most watched videos share $500.

The video must be public on YouTube at or after the opening and before the deadline, and it must stay public until the results are out. A video gone or no longer public at the deadline takes no place. The clip must carry the make.fun pitch, on screen, spoken, or both. A clip without the pitch is disqualified. Views that were bought or botted are disqualified.

Prerequisites on the bounty page: Node.js 22.18 or later, a YouTube channel that can publish a public video, and ffmpeg or another tool to cut the clip. This machine has Node v24.22.1 and ffmpeg 8.1.2, both checked on 2026-11-20.

## Chosen clip

Source: Rockstar Games, Grand Theft Auto VI Launch Trailer
Source URL: https://www.youtube.com/watch?v=rz1B4B2yBZY
Source length: 90 seconds, captured entirely in game on a PlayStation 5, posted 15 Oct 2026
Moment: Lucia asks Jason, "Are we gonna be okay?" and Jason replies, "We stuck together through everything. Just gotta get through it."
Moment window to cut, with 2 second buffer at each end for the cutter: 0:58 to 1:12 in the source, 14 seconds of trailer footage
Timestamp note: two public sources differ by 3 seconds. One scene guide lists the line at 1:00, and a YouTube chapter list lists "Are We Gonna Be Okay" at 1:03. The window 0:58 to 1:12 covers both. Confirm by watching that 14 second window once before cutting, and adjust the in and out points by a few seconds if the line starts at 1:03, not 1:00. Do not cut blind.

## Why this clip, and not the others

This is the Post 2 draft already in first-3-posts.md, so it fits the Sixth City Daily plan and its safety gates.

It is official Rockstar footage, so there is no fan made risk and no streamer permission question. The line is the emotional heart of the trailer, not just a heist or a chase, so it works for viewers who have not played the game. It is short, visual, and quotable, which fits a Shorts feed. The trailer had 84M views in the file logged on 19 Nov, so the moment is already proven to hold attention.

Alternatives considered, and why they were not chosen:
Kai Cenat, PLAYING GTA 6 FOR THE FIRST TIME (PART 1), https://www.youtube.com/watch?v=VZqAPdUvqnQ, 11:35:55 VOD, 11M views. No moment timestamp is logged in candidates.csv or first-3-posts.md, so a watch check would be needed to find one moment, and a long VOD cut has higher reused content risk.
Typical Gamer, I Fight a Tiger in GTA 6, https://www.youtube.com/watch?v=bUoTgI44RwM, published 2026-11-20 03:09 UTC. Strong title and fresh, but no moment timestamp is logged, and the exact tiger moment would need a watch check first.
Kai Cenat, Kai Cenat Finds Out Lucia Is Cheating On Him, https://www.youtube.com/watch?v=9OnZGMWDQ88, published 2026-11-20 01:35 UTC. Strong drama hook, but it needs story context to land in 15 seconds, and it was not in the first 3 posts plan.

Given the deadline is Mon Nov 23 at 2:00 AM WAT, about 2 days from preparation, the trailer moment is the fastest safe choice.

## Title

GTA 6: Are we gonna be okay? Lucia and Jason

Character count: 44, under the 100 character limit in the plan.

## Description, ready to paste

Are we gonna be okay? Lucia asks Jason in the GTA 6 launch trailer, and his answer is the whole story. Jason and Lucia, an easy score goes wrong, now they have to rely on each other in Leonida. My take: this is the heart of GTA 6, not just the heists. What did you think of this scene?

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
Play code: [ADD PLAY CODE HERE, or add it to the Sixth City Daily channel description before upload. No make.fun account was created during preparation, so no play code exists yet.]

Credit: Rockstar Games, Grand Theft Auto VI Launch Trailer, 15 Oct 2026. Source: https://www.youtube.com/watch?v=rz1B4B2yBZY
Not affiliated with Rockstar Games.

## Tags

GTA 6, GTA VI, Grand Theft Auto VI, Leonida, Jason and Lucia, Vice City, GTA 6 trailer, Sixth City Daily

Use the first 5 as the core tags in YouTube Studio, per the automation plan, and add the rest if Studio allows them.

## Thumbnail idea, for a Short

Vertical 9:16 frame from the terrace scene at sunset, Lucia and Jason in the centre. Large white text at the top: "Are we gonna be okay?" Small text at the bottom: "Sixth City Daily". No Rockstar logo, no PC date, no score, no fake claim. YouTube picks a frame for Shorts, so do not spend extra time on a custom thumbnail unless time is left after upload.

## Vertical 9:16 edit plan, v2 (current, 21 Nov 2026)

Kenneth chose a short pitch at the end only. The v1 plan below (30 to 35 seconds, 12 second pitch card) is superseded. Current clip, clip-gta6-vertical.mp4, is 18.53 seconds: 0 to 14 sec trailer moment as below, then 14 to 18.5 sec one end card with the short pitch, the end question, credit and Sixth City Daily. Build script build_clip_v2.sh, notes in CUT-NOTES.md, v1 30 sec backup is clip-gta6-vertical-v1-30s.mp4. Title, description, tags and play code are unchanged.

### v1 plan (superseded, kept for reference)

Total target length: 30 to 35 seconds, vertical 1080x1920, H.264, AAC audio.

0 to 2 seconds: Hook on screen, large text: "Are we gonna be okay?" No music sting that could be a copyrighted song. Keep the trailer dialogue audible.

2 to 16 seconds: Trailer moment, source 0:58 to 1:12, cropped to vertical. Use blur fit from the automation plan: duplicate the clip underneath, enlarge it to fill the frame, apply blur, keep the sharp original on top. Keep the action centred. Mute or lower any background music under the dialogue, do not use the full Justice track.

16 to 28 seconds: Commentary and make.fun pitch, on screen and spoken. On screen text: "My AI agent made this clip. You can earn money making clips with AI on make.fun." Spoken script, in Kenneth's voice: "This one line tells you the whole story. Jason and Lucia have to rely on each other in Leonida. And yes, my AI agent cut this clip, and you can earn money doing the same on make.fun."

28 to 32 seconds: End question on screen: "Is this the heart of GTA 6, or just the heists? Tell me in the comments." Credit on screen, small text at the bottom for the last 3 seconds: "Credit: Rockstar Games"

Safety gates, all must pass before upload:
Real GTA 6 confirmed, official Rockstar trailer, captured on PS5.
Commentary and editing added, not a raw re-upload.
Credit on screen and in description, with a source link.
No copyrighted music, mute or trim any song part.
No PC date, no Metacritic score, no unverified news claim.
No leaked footage, no fan made footage labelled as real.
Clip is 14 seconds of trailer footage inside a 30 to 35 second Short, a tiny part of a 90 second source.

## Clip file

v2 is the current file: clip-gta6-vertical.mp4, 18.53 seconds, 1080x1920, 30 fps, H.264/AAC, 5,676,809 bytes, built 21 Nov 2026 with build_clip_v2.sh from source-trailer.webm. v1, 30.03 seconds, is kept as clip-gta6-vertical-v1-30s.mp4. No upload, no submission was done here.

To make the file when ready, use ffmpeg, which is installed here, or ClipsCutter plus CapCut per the automation plan. Suggested ffmpeg starting point, to be checked after the watch check:
ffmpeg -ss 58 -to 72 -i source.mp4 -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2" -c:v libx264 -c:a aac -shortest clip-gta6-lucia-58-72.mp4
Then add the pitch and captions in CapCut, export 1080x1920, and check it plays vertical before upload.

## What still needs to be done, in order

1. Watch the trailer window 0:58 to 1:12 once, confirm the line starts at 1:00 or 1:03, and lock the in and out points.
2. Create a make.fun account and get the play code, then put it in the description above, or in the channel description. This was not done in preparation.
3. Cut and render the vertical clip, with commentary and the make.fun pitch, per the edit plan above.
4. Upload to Sixth City Daily as a Public Short, before Mon Nov 23, 2026, 2:00 AM WAT, and keep it public until results are out. Uploads are max 3 Shorts per day on this channel, and this would count as one.
5. Note the Shorts URL, add it to candidates.csv and to the uploads log, and verify it appears in the Shorts shelf with the correct title, description, and credit.
6. Submit the entry on make.fun, with the Shorts URL and the required repo and transcript files. That submission step was not done in preparation, and it needs a Solana wallet and a GitHub repo, which were not created here.
