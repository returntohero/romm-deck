import { exec } from "child_process";

export function runSteamRomManager() {
  exec(
    "flatpak run com.steamgriddb.steam-rom-manager --scan",
    () => {}
  );
}
