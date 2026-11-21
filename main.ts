// Clip GTA 6 bounty entry, slug gta6-clipper-01.
// Node 22, standard library only, no network, nothing installed before it runs.
// Template only: it reads VIDEO.json and prints the entry details.
// Fill in the real YouTube URL and play code in VIDEO.json before submission.
// Do not submit with placeholder values.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const video = JSON.parse(readFileSync(join(root, 'VIDEO.json'), 'utf8'));

if (!video.video_url || video.video_url === 'PLACEHOLDER_YOUTUBE_URL') {
  throw new Error('VIDEO.json still has a placeholder YouTube URL. Fill in the real public Short URL first.');
}
if (!video.play_code || video.play_code === 'PLACEHOLDER_PLAY_CODE') {
  throw new Error('VIDEO.json still has a placeholder play code. Fill in the real make.fun play code first.');
}

console.log('Clip GTA 6 entry, gta6-clipper-01');
console.log('Title: ' + video.title);
console.log('Channel: ' + video.channel);
console.log('Video: ' + video.video_url);
console.log('Play code: ' + video.play_code);
console.log('Source: ' + video.source_url + ' (' + video.source_moment + ')');
