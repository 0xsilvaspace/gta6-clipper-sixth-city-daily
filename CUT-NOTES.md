# Clip cut notes, Agent D, updated v2

## v2, 21 Nov 2026, short pitch at the end only (Kenneth's choice)

Clip file: clip-gta6-vertical.mp4 (overwritten with v2)
Duration: 18.53 seconds
Resolution: 1080x1920, vertical 9:16, 30 fps
Video: H.264, Audio: AAC
File size: 5,676,809 bytes (5.4 MB)
Backup of v1, 30.03 sec: clip-gta6-vertical-v1-30s.mp4, 5,759,842 bytes
Build script: build_clip_v2.sh in this folder, ffmpeg 8.1.2, same source-trailer.webm, no new download, no fan made footage.

What changed: the 12 second static pitch card (14 to 26 sec in v1) is removed entirely. The pitch now lives only on the end card, so the clip still carries the make.fun pitch on screen and still qualifies for the bounty.

New structure:
0 to 14 seconds: trailer moment, unchanged from v1, source 0:58 to 1:12, vertical blur fit, hook text "Are we gonna be okay?" on screen for the first 2 seconds, original trailer dialogue audio kept.
14 to 18.5 seconds: ONE end card, 4.5 seconds, dark background, combining pitch, question and credit. On screen text, exact wording:
"My AI agent made this clip."
"Earn making clips on make.fun" (in green)
"Is this the heart of GTA 6, or just the heists?"
"Tell me in the comments."
"Credit: Rockstar Games"
"Sixth City Daily"

Frame check, v2: frames extracted at 1, 5, 15 and 17 seconds and read back, in v2-frames/. At 1 sec the hook text is clear over the trailer scene. At 5 sec Lucia on the terrace at sunset is centred and sharp, with the blurred fill top and bottom. At 15 and 17 sec the end card shows all seven lines readable, with no clipping, and the green pitch line fits the frame width.

Weakness to note: the end card is still a static dark card with no audio for 4.5 seconds, much shorter than v1, but still a silent stretch at the end, and 5 lines of text to read in 4.5 seconds is fast for a slow reader. There is also a large empty gap between "Tell me in the comments." and the credit at the bottom, so the card looks a little empty in the middle. A spoken voiceover over the end card, or trailer footage under the pitch text, would be stronger, but was not added, per the brief to keep the pitch short and at the end only.

Title, description, tags and play code are unchanged from clip-package.md. Play code makefun-pampas-mammoth-piano still goes in the YouTube description or the channel description. VIDEO.json was not edited here.

## v1 notes, kept below

Clip file: clip-gta6-vertical.mp4
Duration: 30.03 seconds
Resolution: 1080x1920, vertical 9:16, 30 fps
Video: H.264, Audio: AAC
File size: 5,759,842 bytes (5.5 MB)

## Source, verified

Source: Rockstar Games, Grand Theft Auto VI Launch Trailer
Source URL: https://www.youtube.com/watch?v=rz1B4B2yBZY
Downloaded file: source-trailer.webm, 90.02 seconds, 1280x720, 8.4 MB
Download tool: yt-dlp was not installed, so I installed it in a temporary venv at /tmp/yt-venv, then downloaded the trailer with yt-dlp. No fan made footage was used.

Timestamp check, done, not blind: YouTube auto captions (subs.en.vtt) show the line at 00:01:02.48 to 00:01:04.55, "Are we going to be okay?", then Jason replies, "We stuck together through everything." That settles the 1:00 versus 1:03 question, the line starts at 1:02.5. Frames at 58, 60, 63, 66 and 70 seconds were checked, and the frame at 63 seconds shows Lucia on the terrace at sunset.

Moment cut: 0:58 to 1:12, 14 seconds of trailer footage.

## Edit, as built

0 to 14 seconds: trailer moment, vertical blur fit, sharp original centred on a blurred enlarged copy, original trailer dialogue audio kept. Hook text "Are we gonna be okay?" on screen for the first 2 seconds.
14 to 26 seconds: pitch card, on screen text: "My AI agent made this clip. You can earn money making clips with AI on make.fun" plus "make.fun". No spoken voiceover in the file, only on screen text. The bounty allows the pitch on screen, spoken, or both, so on screen text qualifies.
26 to 30 seconds: end card: "Is this the heart of GTA 6, or just the heists? Tell me in the comments." plus "Credit: Rockstar Games" and "Sixth City Daily" at the bottom.

Build script: build_clip.sh in this folder, using ffmpeg 8.1.2. The core cut and vertical conversion, if Kenneth needs it again, is:
ffmpeg -ss 58 -to 72 -i source-trailer.webm -vf "split[a][b];[a]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,gblur=sigma=30[bg];[b]scale=1080:608[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -c:v libx264 -pix_fmt yuv420p -r 30 -c:a aac clip-gta6-vertical.mp4

## Visual check

Frames were extracted from the finished clip at 1, 5, 18 and 28 seconds and read back. Hook text is clear, the trailer is centred with blur top and bottom, the pitch text is readable, and the end card shows the question and the credit. Weakness to note: the pitch section is a static dark card for 12 seconds with no motion and no audio, which may hurt viewer retention. A spoken voiceover, or trailer footage under the pitch text, would be stronger, but was not added here.

## What still needs to be done

Play code: now known from Kenneth signing in on 21 Nov 2026, makefun-pampas-mammoth-piano. It goes in the YouTube description or the channel description. VIDEO.json in this folder still has PLACEHOLDER_PLAY_CODE, I did not edit it, because another agent owns that submission file.
Upload: upload clip-gta6-vertical.mp4 to Sixth City Daily as a Public Short, before Mon Nov 23, 2026, 2:00 AM WAT, with the title, description, credit and play code from clip-package.md. Keep it public until results are out.
Submit: fill in the real YouTube URL in VIDEO.json, then submit on make.fun. That step was not done here.
No upload, no make.fun account, no Solana keypair, no submission was done by Agent D.
