import fs from "fs";
import fetch from "node-fetch";

export async function cacheArtwork(gameId, url) {
  const dir = `${process.env.HOME}/.var/app/com.romm.deck/cache/artwork`;
  fs.mkdirSync(dir, { recursive: true });

  const file = `${dir}/${gameId}.jpg`;
  if (fs.existsSync(file)) return file;

  const res = await fetch(url);
  const buf = await res.arrayBuffer();
  fs.writeFileSync(file, Buffer.from(buf));

  return file;
}
