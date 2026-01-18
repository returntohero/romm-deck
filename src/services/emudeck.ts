import fs from "fs";
import path from "path";

export function detectEmuDeck() {
  return fs.existsSync("/home/deck/Emulation/roms");
}

export function getEmuDeckPaths() {
  const base = "/home/deck/Emulation/roms";
  return {
    nes: path.join(base, "nes"),
    snes: path.join(base, "snes"),
    ps2: path.join(base, "ps2"),
    gamecube: path.join(base, "gamecube")
  };
}
