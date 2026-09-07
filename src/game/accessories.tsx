/**
 * Class headwear.
 *
 * Every class owns one purpose-built cap, hat, or beanie. All pieces share the
 * same 200x240 fitting space and the same crown line, so menu portraits and the
 * animated arena renderer use identical geometry.
 */

export type AccessorySlot = "hat";

export type AccessoryId =
  | "roadBeanie"
  | "scrapCap"
  | "skirmishCap"
  | "fieldCap"
  | "shadowBeanie"
  | "raiderHat"
  | "corsairTricorn"
  | "rageBeanie"
  | "sentinelBowler"
  | "championHat"
  | "trapperHat"
  | "pathfinderCap"
  | "arcaneHat"
  | "hexHat"
  | "wardenHat"
  | "spiritHat"
  | "asceticBeanie"
  | "crusaderHat"
  | "seerHat"
  | "machinistCap"
  | "apothecaryHat"
  | "toxicBucket"
  | "medicCap"
  | "lunaticBeanie"
  | "harlequinCap"
  | "carnivalHat"
  | "wraithHat"
  | "zealotHat"
  | "fiendHat"
  | "harvesterHat"
  | "gunslingerHat"
  | "sapperCap"
  | "sharpshooterCap";

type HatShape =
  | "beanie"
  | "cap"
  | "flatcap"
  | "fedora"
  | "cowboy"
  | "tricorn"
  | "bowler"
  | "wizard"
  | "bucket"
  | "top";

interface HatSpec {
  name: string;
  shape: HatShape;
  main: string;
  shade: string;
  accent: string;
  mark: string;
  width?: number;
  top?: number;
  dx?: number;
}

interface Piece {
  name: string;
  slot: AccessorySlot;
  url: string;
  nw: number;
  nh: number;
  w: number;
  top: number;
  dx?: number;
}

const SPECS: Record<AccessoryId, HatSpec> = {
  roadBeanie: { name: "Road Beanie", shape: "beanie", main: "#7f303c", shade: "#4b2029", accent: "#d09a58", mark: "//" },
  scrapCap: { name: "Scrap Cap", shape: "cap", main: "#697b45", shade: "#3b492b", accent: "#d7a84d", mark: "X" },
  skirmishCap: { name: "Skirmish Flat Cap", shape: "flatcap", main: "#536a65", shade: "#30413e", accent: "#d8c9a7", mark: ">" },
  fieldCap: { name: "Field Cap", shape: "cap", main: "#53633e", shade: "#303b28", accent: "#b9c878", mark: "I" },
  shadowBeanie: { name: "Shadow Beanie", shape: "beanie", main: "#292936", shade: "#14141d", accent: "#8069aa", mark: "V" },
  raiderHat: { name: "Raider Hat", shape: "cowboy", main: "#6f4936", shade: "#3d2720", accent: "#bd6049", mark: "!" },
  corsairTricorn: { name: "Corsair Tricorn", shape: "tricorn", main: "#263342", shade: "#111923", accent: "#d0a34b", mark: "•" },
  rageBeanie: { name: "Rage Beanie", shape: "beanie", main: "#8f352d", shade: "#54221f", accent: "#df6c42", mark: "III" },
  sentinelBowler: { name: "Sentinel Bowler", shape: "bowler", main: "#455565", shade: "#28333e", accent: "#83a4ad", mark: "■" },
  championHat: { name: "Champion Fedora", shape: "fedora", main: "#a06c2a", shade: "#5e3e1d", accent: "#e0bd61", mark: "★" },
  trapperHat: { name: "Trapper Hat", shape: "cowboy", main: "#5c4a36", shade: "#33291e", accent: "#79975d", mark: "+" },
  pathfinderCap: { name: "Pathfinder Cap", shape: "flatcap", main: "#4f6c44", shade: "#2e4229", accent: "#a6bf6a", mark: "^" },
  arcaneHat: { name: "Arcane Hat", shape: "wizard", main: "#5a437c", shade: "#302640", accent: "#72b4c3", mark: "*" },
  hexHat: { name: "Hex Hat", shape: "wizard", main: "#3d294b", shade: "#211629", accent: "#a8688d", mark: "?" },
  wardenHat: { name: "Warden Widebrim", shape: "fedora", main: "#415c38", shade: "#253720", accent: "#8eb46d", mark: "Y" },
  spiritHat: { name: "Spirit Hat", shape: "wizard", main: "#31566a", shade: "#1d3441", accent: "#72c3c7", mark: "○" },
  asceticBeanie: { name: "Ascetic Beanie", shape: "beanie", main: "#a35d2f", shade: "#62371f", accent: "#d5ac65", mark: "=" },
  crusaderHat: { name: "Crusader Fedora", shape: "fedora", main: "#c2b58d", shade: "#70684f", accent: "#9b4c3d", mark: "+" },
  seerHat: { name: "Seer Hat", shape: "wizard", main: "#ddd3bd", shade: "#8e8574", accent: "#75a1a3", mark: "○" },
  machinistCap: { name: "Machinist Cap", shape: "cap", main: "#805832", shade: "#49341f", accent: "#c48a42", mark: "⚙" },
  apothecaryHat: { name: "Apothecary Hat", shape: "bowler", main: "#526743", shade: "#304029", accent: "#a8bc69", mark: "+" },
  toxicBucket: { name: "Toxic Bucket Hat", shape: "bucket", main: "#66743d", shade: "#394326", accent: "#a4c551", mark: "!" },
  medicCap: { name: "Medic Cap", shape: "cap", main: "#d6d0bf", shade: "#777266", accent: "#b84642", mark: "+" },
  lunaticBeanie: { name: "Lunatic Beanie", shape: "beanie", main: "#72466e", shade: "#40283e", accent: "#d36a65", mark: "?!" },
  harlequinCap: { name: "Harlequin Cap", shape: "flatcap", main: "#8d3543", shade: "#4d2028", accent: "#d8aa4e", mark: "◆" },
  carnivalHat: { name: "Carnival Top Hat", shape: "top", main: "#3d5e51", shade: "#22372f", accent: "#c85e4b", mark: "★" },
  wraithHat: { name: "Wraith Fedora", shape: "fedora", main: "#6c6875", shade: "#383641", accent: "#9fb5b4", mark: "~" },
  zealotHat: { name: "Zealot Hat", shape: "wizard", main: "#4b354b", shade: "#291e2a", accent: "#a04f4f", mark: "V" },
  fiendHat: { name: "Fiend Tricorn", shape: "tricorn", main: "#652f30", shade: "#37191c", accent: "#d65b3c", mark: "^" },
  harvesterHat: { name: "Harvester Widebrim", shape: "fedora", main: "#25262c", shade: "#111216", accent: "#78617e", mark: "|" },
  gunslingerHat: { name: "Gunslinger Hat", shape: "cowboy", main: "#74482a", shade: "#3f291a", accent: "#d0a14c", mark: "★" },
  sapperCap: { name: "Sapper Work Cap", shape: "cap", main: "#596044", shade: "#333829", accent: "#c58a3f", mark: "II" },
  sharpshooterCap: { name: "Sharpshooter Cap", shape: "flatcap", main: "#334b5d", shade: "#1e2e3a", accent: "#6da5ad", mark: "+" },
};

const OUTLINE = "#171218";

function silhouette(shape: HatShape, main: string, shade: string, accent: string) {
  const edge = `stroke="${OUTLINE}" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"`;
  switch (shape) {
    case "beanie":
      return `<path d="M48 78 Q51 23 100 18 Q149 23 152 78Z" fill="${main}" ${edge}/><path d="M46 72 Q100 62 154 72L151 94Q100 86 49 94Z" fill="${shade}" ${edge}/><path d="M67 34Q100 21 133 34" fill="none" stroke="${accent}" stroke-width="5" opacity=".75"/>`;
    case "cap":
      return `<path d="M48 76Q53 28 102 26Q139 28 149 65L145 79Q94 68 48 76Z" fill="${main}" ${edge}/><path d="M83 75Q143 65 176 83Q138 101 88 91Z" fill="${shade}" ${edge}/><path d="M99 29V69" stroke="${accent}" stroke-width="5" opacity=".7"/>`;
    case "flatcap":
      return `<path d="M43 71Q55 30 104 31Q145 32 158 70L145 82H49Z" fill="${main}" ${edge}/><path d="M49 74Q111 65 171 76Q153 94 96 89L49 86Z" fill="${shade}" ${edge}/><path d="M70 45Q107 31 137 49" fill="none" stroke="${accent}" stroke-width="5" opacity=".7"/>`;
    case "fedora":
      return `<path d="M64 73L70 28Q100 16 130 28L138 73Z" fill="${main}" ${edge}/><path d="M69 57Q101 65 134 56L137 74H65Z" fill="${accent}" ${edge}/><path d="M25 78Q101 65 175 78Q157 100 101 94Q44 100 25 78Z" fill="${shade}" ${edge}/>`;
    case "cowboy":
      return `<path d="M65 71L74 27Q101 41 127 27L137 71Z" fill="${main}" ${edge}/><path d="M65 58Q100 68 137 58L139 74H62Z" fill="${accent}" ${edge}/><path d="M18 73Q48 92 83 76Q123 91 182 66Q174 104 111 94Q48 105 18 73Z" fill="${shade}" ${edge}/>`;
    case "tricorn":
      return `<path d="M27 81Q49 70 59 35Q98 54 140 35Q151 70 174 81Q139 103 101 84Q62 103 27 81Z" fill="${main}" ${edge}/><path d="M39 79Q74 91 101 75Q129 92 163 79" fill="none" stroke="${accent}" stroke-width="7"/>`;
    case "bowler":
      return `<path d="M55 73Q56 24 100 21Q144 24 145 73Z" fill="${main}" ${edge}/><path d="M54 58H146V75H54Z" fill="${accent}" ${edge}/><path d="M29 78Q100 69 171 78Q158 97 100 92Q42 97 29 78Z" fill="${shade}" ${edge}/>`;
    case "wizard":
      return `<path d="M63 77Q76 55 89 12Q111 34 131 71L137 80Z" fill="${main}" ${edge}/><path d="M73 50Q100 61 126 49" fill="none" stroke="${accent}" stroke-width="6"/><path d="M24 79Q99 64 176 79Q151 101 101 94Q49 102 24 79Z" fill="${shade}" ${edge}/>`;
    case "bucket":
      return `<path d="M59 35Q100 22 141 35L151 76H49Z" fill="${main}" ${edge}/><path d="M53 58Q101 70 147 58" fill="none" stroke="${accent}" stroke-width="6"/><path d="M31 77Q100 66 169 77L155 94Q100 87 45 94Z" fill="${shade}" ${edge}/>`;
    case "top":
      return `<path d="M66 16H134L139 75H61Z" fill="${main}" ${edge}/><path d="M62 56H138V76H62Z" fill="${accent}" ${edge}/><path d="M27 78Q100 68 173 78Q156 98 100 93Q44 98 27 78Z" fill="${shade}" ${edge}/>`;
  }
}

function makeHatUrl(spec: HatSpec) {
  const markSize = spec.mark.length > 1 ? 13 : 18;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120">${silhouette(spec.shape, spec.main, spec.shade, spec.accent)}<text x="101" y="72" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="${markSize}" font-weight="900" fill="${spec.accent}" stroke="${OUTLINE}" stroke-width="3" paint-order="stroke">${spec.mark}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export interface AccessoryDef extends Piece {
  id: AccessoryId;
  h: number;
  x: number;
}

export const CHAR_CX = 100;

export const ACCESSORIES = Object.fromEntries(
  (Object.keys(SPECS) as AccessoryId[]).map((id) => {
    const spec = SPECS[id];
    const piece: Piece = {
      name: spec.name,
      slot: "hat",
      url: makeHatUrl(spec),
      nw: 200,
      nh: 120,
      w: spec.width ?? 150,
      top: spec.top ?? -27,
      dx: spec.dx,
    };
    return [id, { ...piece, id, h: 90, x: 25 + (spec.dx ?? 0) - ((spec.width ?? 150) - 150) / 2 }];
  }),
) as Record<AccessoryId, AccessoryDef>;

export const ACCESSORY_IDS = Object.keys(ACCESSORIES) as AccessoryId[];

export function sortAccessories(ids: readonly AccessoryId[]): AccessoryId[] {
  return [...ids];
}

export function AccessoryArt({ id }: { id: AccessoryId }) {
  const hat = ACCESSORIES[id];
  if (!hat) return null;
  return (
    <image
      href={hat.url}
      x={hat.x}
      y={hat.top}
      width={hat.w}
      height={hat.h}
      preserveAspectRatio="xMidYMid meet"
    />
  );
}