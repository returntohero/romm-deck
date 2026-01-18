import fs from "fs";
import fetch from "node-fetch";

export async function downloadWithResume(url, target) {
  const temp = `${target}.part`;
  const start = fs.existsSync(temp) ? fs.statSync(temp).size : 0;

  const res = await fetch(url, {
    headers: start ? { Range: `bytes=${start}-` } : {}
  });

  const stream = fs.createWriteStream(temp, { flags: "a" });

  await new Promise(resolve => {
    res.body.pipe(stream);
    res.body.on("end", resolve);
  });

  fs.renameSync(temp, target);
}
