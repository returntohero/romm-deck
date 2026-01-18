import fs from "fs";

const CONFIG = `${process.env.HOME}/.var/app/com.romm.deck/config/config.json`;

export function loadConfig() {
  return fs.existsSync(CONFIG)
    ? JSON.parse(fs.readFileSync(CONFIG, "utf-8"))
    : { servers: [], activeServer: null };
}

export function saveConfig(cfg) {
  fs.mkdirSync(CONFIG.replace("/config.json", ""), { recursive: true });
  fs.writeFileSync(CONFIG, JSON.stringify(cfg, null, 2));
}
