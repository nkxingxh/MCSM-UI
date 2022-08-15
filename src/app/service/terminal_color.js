// Copyright (C) 2022 MCSManager <mcsmanager-dev@outlook.com>

import { termColor } from "./term";

// Text color rendering for terminal components in Terminal view
export function encodeConsoleColor(text) {
  // base color
  // eslint-disable-next-line no-control-regex
  text = text.replace(/(\x1B[^m]*m)/gm, "$1;");
  text = text.replace(/ \[([A-Za-z0-9 _\-\\.]+)]/gim, " [§3$1§r]");
  text = text.replace(/^\[([A-Za-z0-9 _\-\\.]+)]/gim, "[§3$1§r]");
  text = text.replace(/([A-Za-z0-9 _\-\\.]+: )/gim, "§6$1§r");
  // eslint-disable-next-line no-control-regex
  text = text.replace(/(\x1B[^m]*m);/gm, "$1");
  // text = text.replace(/INFO/gm, term.TERM_TEXT_GREEN + "INFO" + term.TERM_NULL);
  // text = text.replace(/(\d{2,}:\d{2,}:\d{2,})/gm, term.TERM_TEXT_CYAN + "$1" + term.TERM_NULL);

  // Minecraft native color substitution parsing
  text = text.replace(/§0/gim, termColor.TERM_TEXT_BLACK);
  text = text.replace(/§1/gim, termColor.TERM_TEXT_DARK_BLUE);
  text = text.replace(/§2/gim, termColor.TERM_TEXT_DARK_GREEN);
  text = text.replace(/§3/gim, termColor.TERM_TEXT_DARK_AQUA);
  text = text.replace(/§4/gim, termColor.TERM_TEXT_DARK_RED);
  text = text.replace(/§5/gim, termColor.TERM_TEXT_DARK_PURPLE);
  text = text.replace(/§6/gim, termColor.TERM_TEXT_GOLD);
  text = text.replace(/§7/gim, termColor.TERM_TEXT_GRAY);
  text = text.replace(/§8/gim, termColor.TERM_TEXT_DARK_GRAY);
  text = text.replace(/§9/gim, termColor.TERM_TEXT_BLUE);
  text = text.replace(/§a/gim, termColor.TERM_TEXT_GREEN);
  text = text.replace(/§b/gim, termColor.TERM_TEXT_AQUA);
  text = text.replace(/§c/gim, termColor.TERM_TEXT_RED);
  text = text.replace(/§d/gim, termColor.TERM_TEXT_LIGHT_PURPLE);
  text = text.replace(/§e/gim, termColor.TERM_TEXT_YELLOW);
  text = text.replace(/§f/gim, termColor.TERM_TEXT_WHITE);
  text = text.replace(/§k/gim, termColor.TERM_TEXT_OBFUSCATED);
  text = text.replace(/§l/gim, termColor.TERM_TEXT_BOLD);
  text = text.replace(/§m/gim, termColor.TERM_TEXT_STRIKETHROUGH);
  text = text.replace(/§n/gim, termColor.TERM_TEXT_UNDERLINE);
  text = text.replace(/§o/gim, termColor.TERM_TEXT_ITALIC);
  text = text.replace(/§r/gim, termColor.TERM_RESET);

  // based on the ampersand
  text = text.replace(/&0/gim, termColor.TERM_TEXT_BLACK);
  text = text.replace(/&1/gim, termColor.TERM_TEXT_DARK_BLUE);
  text = text.replace(/&2/gim, termColor.TERM_TEXT_DARK_GREEN);
  text = text.replace(/&3/gim, termColor.TERM_TEXT_DARK_AQUA);
  text = text.replace(/&4/gim, termColor.TERM_TEXT_DARK_RED);
  text = text.replace(/&5/gim, termColor.TERM_TEXT_DARK_PURPLE);
  text = text.replace(/&6/gim, termColor.TERM_TEXT_GOLD);
  text = text.replace(/&7/gim, termColor.TERM_TEXT_GRAY);
  text = text.replace(/&8/gim, termColor.TERM_TEXT_DARK_GRAY);
  text = text.replace(/&9/gim, termColor.TERM_TEXT_BLUE);
  text = text.replace(/&a/gim, termColor.TERM_TEXT_GREEN);
  text = text.replace(/&b/gim, termColor.TERM_TEXT_AQUA);
  text = text.replace(/&c/gim, termColor.TERM_TEXT_RED);
  text = text.replace(/&d/gim, termColor.TERM_TEXT_LIGHT_PURPLE);
  text = text.replace(/&e/gim, termColor.TERM_TEXT_YELLOW);
  text = text.replace(/&f/gim, termColor.TERM_TEXT_WHITE);
  text = text.replace(/&k/gim, termColor.TERM_TEXT_OBFUSCATED);
  text = text.replace(/&l/gim, termColor.TERM_TEXT_BOLD);
  text = text.replace(/&m/gim, termColor.TERM_TEXT_STRIKETHROUGH);
  text = text.replace(/&n/gim, termColor.TERM_TEXT_UNDERLINE);
  text = text.replace(/&o/gim, termColor.TERM_TEXT_ITALIC);
  text = text.replace(/&r/gim, termColor.TERM_RESET);

  // special text replacement
  const RegExpStringArr = [
    //blue
    ["Loading libraries, please wait...", "\\d{1,3}%", "true", "false"],
    //green
    ["INFO", "EULA", "----", "\\(", "\\)", "\\{", "\\}", '\\"', "&lt;", "&gt;"],
    //red
    ["Error", "Caused by"],
    //yellow
    ["WARN", "Server thread"]
  ];
  for (const k in RegExpStringArr) {
    for (const y in RegExpStringArr[k]) {
      const reg = new RegExp("(" + RegExpStringArr[k][y].replace(/ /gim, "&nbsp;") + ")", "igm");
      if (k === "0")
        //blue
        text = text.replace(reg, termColor.TERM_TEXT_BLUE + "$1" + termColor.TERM_RESET);
      if (k === "1")
        //green
        text = text.replace(reg, termColor.TERM_TEXT_DARK_GREEN + "$1" + termColor.TERM_RESET);
      if (k === "2")
        //red
        text = text.replace(reg, termColor.TERM_TEXT_RED + "$1" + termColor.TERM_RESET);
      if (k === "3")
        //yellow
        text = text.replace(reg, termColor.TERM_TEXT_GOLD + "$1" + termColor.TERM_RESET);
    }
  }
  // line ending symbol substitution
  text = text.replace(/\r\n/gm, termColor.TERM_RESET + "\r\n");
  return text;
}