import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ChevronLeft } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-OgLrGUWG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var POWERS = [
	"fire",
	"ice",
	"lightning",
	"shadow",
	"wind",
	"earth",
	"water",
	"blood",
	"spirit",
	"time",
	"void",
	"light",
	"dragon",
	"demon",
	"gravity",
	"illusion"
];
var CLANS = [
	"dragon",
	"shadow",
	"spirit",
	"demon",
	"celestial",
	"storm",
	"abyss"
];
var RARITIES = [
	"Common",
	"Uncommon",
	"Rare",
	"Epic",
	"Legendary",
	"Mythic",
	"Divine",
	"Transcendent"
];
var RANKS = [
	"E",
	"D",
	"C",
	"B",
	"A",
	"S",
	"SS",
	"SSS",
	"EX"
];
var ABILITY_TIERS = [
	"Awakened",
	"Enhanced",
	"Ascended",
	"Transcendent"
];
var POWER_DEFS = {
	fire: {
		id: "fire",
		name: "Fire",
		blurb: "Consuming heat and explosive force.",
		color: "#e85d3a",
		glow: "#ff8a5c",
		tags: [
			"elemental",
			"offense",
			"heat"
		],
		style: "nova",
		adj: "Infernal",
		noun: "Blaze",
		art: "Art",
		atk: 4,
		def: 0,
		spd: 1,
		hp: 0,
		energy: 0,
		crit: 1
	},
	ice: {
		id: "ice",
		name: "Ice",
		blurb: "Stillness, freeze, and brittle edges.",
		color: "#7ec8e3",
		glow: "#c4f0ff",
		tags: [
			"elemental",
			"control",
			"cold"
		],
		style: "zone",
		adj: "Frozen",
		noun: "Glacier",
		art: "Domain",
		atk: 2,
		def: 2,
		spd: -1,
		hp: 2,
		energy: 1,
		crit: 0
	},
	lightning: {
		id: "lightning",
		name: "Lightning",
		blurb: "Instant strikes that chain through foes.",
		color: "#d6c86a",
		glow: "#fff4a8",
		tags: [
			"elemental",
			"offense",
			"speed"
		],
		style: "beam",
		adj: "Storm",
		noun: "Bolt",
		art: "Flash",
		atk: 3,
		def: -1,
		spd: 4,
		hp: -2,
		energy: 1,
		crit: 3
	},
	shadow: {
		id: "shadow",
		name: "Shadow",
		blurb: "Silence, ambush, and unseen edges.",
		color: "#5b6578",
		glow: "#9aa7c2",
		tags: [
			"dark",
			"speed",
			"stealth"
		],
		style: "dashStrike",
		adj: "Umbral",
		noun: "Veil",
		art: "Step",
		atk: 2,
		def: 0,
		spd: 4,
		hp: -1,
		energy: 0,
		crit: 4
	},
	wind: {
		id: "wind",
		name: "Wind",
		blurb: "Cut and carry — speed made sharp.",
		color: "#a8c4b0",
		glow: "#d7f0de",
		tags: [
			"elemental",
			"speed",
			"control"
		],
		style: "cone",
		adj: "Gale",
		noun: "Tempest",
		art: "Dance",
		atk: 1,
		def: 0,
		spd: 5,
		hp: 0,
		energy: 1,
		crit: 2
	},
	earth: {
		id: "earth",
		name: "Earth",
		blurb: "Weight, armor, and crushing force.",
		color: "#a9845a",
		glow: "#d4b48a",
		tags: [
			"elemental",
			"defense",
			"control"
		],
		style: "nova",
		adj: "Titan",
		noun: "Core",
		art: "Guard",
		atk: 2,
		def: 5,
		spd: -2,
		hp: 6,
		energy: 0,
		crit: 0
	},
	water: {
		id: "water",
		name: "Water",
		blurb: "Flow, pressure, and relentless tide.",
		color: "#5b8fb8",
		glow: "#9cc8ea",
		tags: [
			"elemental",
			"control",
			"spirit"
		],
		style: "projectile",
		adj: "Tidal",
		noun: "Current",
		art: "Flow",
		atk: 1,
		def: 1,
		spd: 1,
		hp: 2,
		energy: 3,
		crit: 0
	},
	blood: {
		id: "blood",
		name: "Blood",
		blurb: "Life taken and returned as hunger.",
		color: "#a33b3b",
		glow: "#e07070",
		tags: [
			"dark",
			"offense",
			"life"
		],
		style: "curse",
		adj: "Crimson",
		noun: "Pact",
		art: "Rite",
		atk: 4,
		def: -1,
		spd: 1,
		hp: 3,
		energy: -1,
		crit: 2
	},
	spirit: {
		id: "spirit",
		name: "Spirit",
		blurb: "Wards, wisps, and borrowed life.",
		color: "#c9d4c4",
		glow: "#eef6ea",
		tags: [
			"spirit",
			"support",
			"light"
		],
		style: "pulse",
		adj: "Sacred",
		noun: "Wisp",
		art: "Hymn",
		atk: 0,
		def: 2,
		spd: 0,
		hp: 2,
		energy: 6,
		crit: 0
	},
	time: {
		id: "time",
		name: "Time",
		blurb: "Delay, rewind, and stolen moments.",
		color: "#b8a46a",
		glow: "#ead9a0",
		tags: [
			"rare",
			"control",
			"spirit"
		],
		style: "zone",
		adj: "Chrono",
		noun: "Epoch",
		art: "Lock",
		atk: 2,
		def: 1,
		spd: 2,
		hp: 0,
		energy: 3,
		crit: 1
	},
	void: {
		id: "void",
		name: "Void",
		blurb: "Absence given teeth.",
		color: "#6a6e7a",
		glow: "#c5c9d6",
		tags: [
			"rare",
			"dark",
			"offense"
		],
		style: "curse",
		adj: "Null",
		noun: "Eclipse",
		art: "Rift",
		atk: 5,
		def: 0,
		spd: 1,
		hp: -2,
		energy: 2,
		crit: 2
	},
	light: {
		id: "light",
		name: "Light",
		blurb: "Judgment made visible.",
		color: "#e6e0c8",
		glow: "#fff8dc",
		tags: [
			"light",
			"offense",
			"spirit"
		],
		style: "beam",
		adj: "Radiant",
		noun: "Halo",
		art: "Judgment",
		atk: 3,
		def: 1,
		spd: 1,
		hp: 1,
		energy: 2,
		crit: 1
	},
	dragon: {
		id: "dragon",
		name: "Dragon",
		blurb: "Ancient scale and cataclysm breath.",
		color: "#c45c4a",
		glow: "#f0a090",
		tags: [
			"rare",
			"offense",
			"beast"
		],
		style: "cone",
		adj: "Draconic",
		noun: "Wyrm",
		art: "Cataclysm",
		atk: 6,
		def: 2,
		spd: -1,
		hp: 4,
		energy: 1,
		crit: 1
	},
	demon: {
		id: "demon",
		name: "Demon",
		blurb: "Berserk pacts and cruel strength.",
		color: "#8a3030",
		glow: "#d06060",
		tags: [
			"dark",
			"offense",
			"beast"
		],
		style: "dashStrike",
		adj: "Abyssal",
		noun: "Fiend",
		art: "Pact",
		atk: 6,
		def: -1,
		spd: 2,
		hp: 1,
		energy: 0,
		crit: 3
	},
	gravity: {
		id: "gravity",
		name: "Gravity",
		blurb: "Pull, crush, and unmake footing.",
		color: "#7a7a88",
		glow: "#b8b8c8",
		tags: [
			"rare",
			"control",
			"defense"
		],
		style: "zone",
		adj: "Heavy",
		noun: "Singularity",
		art: "Bind",
		atk: 3,
		def: 3,
		spd: -2,
		hp: 3,
		energy: 2,
		crit: 0
	},
	illusion: {
		id: "illusion",
		name: "Illusion",
		blurb: "False steps and broken certainty.",
		color: "#8a9aa8",
		glow: "#c5d4e0",
		tags: [
			"control",
			"stealth",
			"spirit"
		],
		style: "pulse",
		adj: "Phantom",
		noun: "Mirage",
		art: "Veil",
		atk: 1,
		def: 0,
		spd: 3,
		hp: 0,
		energy: 3,
		crit: 4
	}
};
var CLAN_DEFS = {
	dragon: {
		id: "dragon",
		name: "Dragon Clan",
		epithet: "Scaleborn",
		blurb: "Heirs of the first flame. They strike like falling stars.",
		color: "#c45c4a",
		accent: "#e8a090",
		aura: "#c45c4a",
		bonuses: [
			"High Attack",
			"Fire resistance",
			"Dragon-aspected arts"
		],
		stats: {
			atk: 8,
			hp: 12,
			def: 4,
			crit: 2
		}
	},
	shadow: {
		id: "shadow",
		name: "Shadow Clan",
		epithet: "Nightblade",
		blurb: "They move between heartbeats. A cut you never saw coming.",
		color: "#6a7384",
		accent: "#c5cedb",
		aura: "#8a96aa",
		bonuses: [
			"High Speed",
			"Critical damage",
			"Stealth arts"
		],
		stats: {
			spd: 18,
			crit: 8,
			atk: 4,
			hp: -6
		}
	},
	spirit: {
		id: "spirit",
		name: "Spirit Clan",
		epithet: "Wardsinger",
		blurb: "Keepers of the inner flame. They outlast what they cannot crush.",
		color: "#c9d4c4",
		accent: "#eef4ea",
		aura: "#d5e0d0",
		bonuses: [
			"High Energy",
			"Healing pulse",
			"Wisp companions"
		],
		stats: {
			energy: 28,
			hp: 10,
			def: 4,
			atk: -2
		}
	},
	demon: {
		id: "demon",
		name: "Demon Clan",
		epithet: "Oathbreaker",
		blurb: "Pact-bound berserkers. Pain is a language they speak fluently.",
		color: "#8a3030",
		accent: "#d07070",
		aura: "#a04040",
		bonuses: [
			"High Attack",
			"Berserk below 40% HP",
			"Lifesteal on heavy"
		],
		stats: {
			atk: 10,
			crit: 4,
			hp: 6,
			def: -2
		}
	},
	celestial: {
		id: "celestial",
		name: "Celestial Clan",
		epithet: "Starwrought",
		blurb: "Balanced as the night sky. Light that does not blink.",
		color: "#dce3ea",
		accent: "#f4f7fa",
		aura: "#d0d8e0",
		bonuses: [
			"Balanced stats",
			"Light-aspected arts",
			"Stable growth"
		],
		stats: {
			hp: 8,
			energy: 10,
			atk: 4,
			def: 4,
			spd: 4,
			crit: 2
		}
	},
	storm: {
		id: "storm",
		name: "Storm Clan",
		epithet: "Skybreaker",
		blurb: "Born under split clouds. They arrive as thunder arrives.",
		color: "#c8c070",
		accent: "#efe9b0",
		aura: "#d8d080",
		bonuses: [
			"High Speed",
			"Chain bonus on specials",
			"Dash recovery"
		],
		stats: {
			spd: 14,
			energy: 10,
			atk: 5,
			crit: 3
		}
	},
	abyss: {
		id: "abyss",
		name: "Abyss Clan",
		epithet: "Deepborn",
		blurb: "From the lightless trench. Gravity and hunger in equal measure.",
		color: "#5a6570",
		accent: "#a8b4be",
		aura: "#6a7884",
		bonuses: [
			"High Defense",
			"Void resistance",
			"Pull on ultimate"
		],
		stats: {
			def: 8,
			hp: 14,
			atk: 3,
			energy: 6,
			spd: -4
		}
	}
};
var RECIPES = {
	"fire+lightning+wind": {
		name: "Storm Inferno",
		type: "Cataclysm",
		element: "Stormfire",
		rarity: "Legendary",
		description: "A cyclone of burning lightning that scours the field."
	},
	"blood+demon+shadow": {
		name: "Abyssal Blood Art",
		type: "Curse",
		element: "Abyss",
		rarity: "Mythic",
		description: "A pact that drinks life and returns it as night."
	},
	"ice+spirit+time": {
		name: "Frozen Time Domain",
		type: "Domain",
		element: "Chronofrost",
		rarity: "Mythic",
		description: "A still world where only you may move."
	},
	"dragon+fire+gravity": {
		name: "Draconic Cataclysm",
		type: "Breath",
		element: "Starfire",
		rarity: "Divine",
		description: "The sky folds. A wyrm of collapsing suns answers."
	},
	"shadow+time+void": {
		name: "Eternal Eclipse",
		type: "Rift",
		element: "Voidnight",
		rarity: "Divine",
		description: "Light is postponed. The cut arrives from yesterday."
	},
	"light+spirit+time": {
		name: "Celestial Chronoshift",
		type: "Miracle",
		element: "Starlight",
		rarity: "Mythic",
		description: "A hymn that rewinds wounds and judges the rest."
	},
	"ice+water+wind": {
		name: "Glacial Tempest",
		type: "Storm",
		element: "Frostwind",
		rarity: "Epic",
		description: "Needles of ice riding a killing gale."
	},
	"dragon+earth+gravity": {
		name: "Titan's Core",
		type: "Crush",
		element: "Worldstone",
		rarity: "Legendary",
		description: "The ground remembers it was once a throat."
	},
	"illusion+shadow+spirit": {
		name: "Phantom Veil",
		type: "Mirage",
		element: "Ghostlight",
		rarity: "Epic",
		description: "You are everywhere the eye refuses to rest."
	},
	"blood+time+void": {
		name: "Crimson Epoch",
		type: "Curse",
		element: "Bloodtime",
		rarity: "Divine",
		description: "History bleeds. You write the next hour in it."
	},
	"demon+fire+lightning": {
		name: "Hellstorm Pact",
		type: "Cataclysm",
		element: "Hellfire",
		rarity: "Legendary",
		description: "A contract signed in thunder and cinder."
	},
	"dragon+fire+light": {
		name: "Solar Wyrm",
		type: "Breath",
		element: "Sunscale",
		rarity: "Mythic",
		description: "Dawn given a spine and a hunger."
	},
	"earth+gravity+void": {
		name: "Singularity Bind",
		type: "Bind",
		element: "Nullmass",
		rarity: "Mythic",
		description: "A point that refuses to share space."
	},
	"light+spirit+wind": {
		name: "Heaven's Gale",
		type: "Storm",
		element: "Aether",
		rarity: "Epic",
		description: "A wind that carries judgment instead of dust."
	},
	"ice+shadow+void": {
		name: "Absolute Zero",
		type: "Domain",
		element: "Nullfrost",
		rarity: "Divine",
		description: "Motion itself is found guilty."
	},
	"blood+spirit+water": {
		name: "Tide of Souls",
		type: "Rite",
		element: "Soulwater",
		rarity: "Legendary",
		description: "The river remembers every name it has taken."
	},
	"lightning+time+void": {
		name: "Chrono Bolt",
		type: "Flash",
		element: "Timearc",
		rarity: "Mythic",
		description: "The strike lands before the decision to throw it."
	},
	"demon+dragon+void": {
		name: "Apocalypse Crown",
		type: "Cataclysm",
		element: "Endscale",
		rarity: "Transcendent",
		description: "Two thrones, one absence. The world kneels."
	},
	"fire+ice+lightning": {
		name: "Primordial Triad",
		type: "Origin",
		element: "Firststorm",
		rarity: "Legendary",
		description: "The three first tongues of the world, spoken at once."
	},
	"illusion+light+time": {
		name: "Mirage Eternity",
		type: "Mirage",
		element: "Falsedawn",
		rarity: "Mythic",
		description: "A forever that never quite arrives."
	},
	"gravity+lightning+wind": {
		name: "Storm Anchor",
		type: "Bind",
		element: "Thundermass",
		rarity: "Epic",
		description: "Lightning nailed to the ground until it screams."
	},
	"dragon+earth+fire": {
		name: "Magma Sovereign",
		type: "Breath",
		element: "Magma",
		rarity: "Legendary",
		description: "A crown of cooling stone and living heat."
	},
	"demon+illusion+shadow": {
		name: "Nightmare King",
		type: "Curse",
		element: "Dread",
		rarity: "Mythic",
		description: "Fear given a court and a knife."
	},
	"light+spirit+water": {
		name: "Sacred Spring",
		type: "Miracle",
		element: "Holywater",
		rarity: "Epic",
		description: "A well that mends what the war unmade."
	},
	"blood+demon+fire": {
		name: "Infernal Offering",
		type: "Rite",
		element: "Bloodfire",
		rarity: "Legendary",
		description: "You burn the cost and keep the change."
	},
	"gravity+time+void": {
		name: "Event Horizon",
		type: "Rift",
		element: "Endtime",
		rarity: "Transcendent",
		description: "A door that only opens inward."
	},
	"illusion+shadow+wind": {
		name: "Silent Gale",
		type: "Step",
		element: "Whisperwind",
		rarity: "Rare",
		description: "A cut that arrives as weather."
	},
	"ice+spirit+water": {
		name: "Frost Soul",
		type: "Domain",
		element: "Soulice",
		rarity: "Epic",
		description: "A heart that will not thaw for anyone."
	},
	"dragon+lightning+wind": {
		name: "Thunder Wyrm",
		type: "Breath",
		element: "Skybolt",
		rarity: "Legendary",
		description: "Wings of thunder. Teeth of the cloudline."
	},
	"light+spirit+void": {
		name: "Duality Gate",
		type: "Rift",
		element: "Twilight",
		rarity: "Divine",
		description: "Two laws, one threshold. You are the hinge."
	},
	"earth+water+wind": {
		name: "Nature's Wrath",
		type: "Storm",
		element: "Wild",
		rarity: "Rare",
		description: "The old world remembering how to bite."
	},
	"blood+shadow+time": {
		name: "Night of Blades",
		type: "Art",
		element: "Bloodnight",
		rarity: "Legendary",
		description: "Every second grows an edge."
	},
	"demon+earth+gravity": {
		name: "Abyssal Crush",
		type: "Crush",
		element: "Hellstone",
		rarity: "Epic",
		description: "The floor rises to meet the proud."
	},
	"dragon+fire+wind": {
		name: "Skyfire Breath",
		type: "Breath",
		element: "Skyfire",
		rarity: "Legendary",
		description: "Horizon to horizon, a single exhale."
	},
	"gravity+ice+void": {
		name: "Frozen Prison",
		type: "Bind",
		element: "Nullice",
		rarity: "Mythic",
		description: "A cell whose walls are the idea of cold."
	},
	"demon+spirit+void": {
		name: "Soul Reaver",
		type: "Curse",
		element: "Soulvoid",
		rarity: "Divine",
		description: "What leaves the body does not leave you."
	},
	"light+lightning+time": {
		name: "Divine Spark",
		type: "Flash",
		element: "Godarc",
		rarity: "Mythic",
		description: "A moment of creation, aimed."
	},
	"gravity+void+water": {
		name: "Drowning Star",
		type: "Rift",
		element: "Darktide",
		rarity: "Mythic",
		description: "A sun that learned to sink."
	},
	"blood+illusion+spirit": {
		name: "Crimson Phantom",
		type: "Mirage",
		element: "Bloodwisp",
		rarity: "Epic",
		description: "A wound that walks without its owner."
	},
	"dragon+ice+time": {
		name: "Frozen Wyrm Age",
		type: "Domain",
		element: "Glacierwyrm",
		rarity: "Divine",
		description: "An era of ice with a dragon for a calendar."
	},
	"earth+fire+lightning": {
		name: "Volcanic Arc",
		type: "Cataclysm",
		element: "Magmaarc",
		rarity: "Epic",
		description: "Stone split by a thought of thunder."
	},
	"illusion+time+void": {
		name: "Unwritten Hour",
		type: "Rift",
		element: "Neverwhen",
		rarity: "Divine",
		description: "A minute that refuses to have happened."
	},
	"blood+dragon+fire": {
		name: "Heart of Cinder",
		type: "Breath",
		element: "Bloodcinder",
		rarity: "Legendary",
		description: "A pulse that ignites whatever it loves."
	},
	"light+shadow+void": {
		name: "Umbral Radiance",
		type: "Judgment",
		element: "Eclipse",
		rarity: "Mythic",
		description: "Light that learned the manners of night."
	},
	"demon+gravity+void": {
		name: "Throne of Collapse",
		type: "Crush",
		element: "Abyss",
		rarity: "Transcendent",
		description: "A seat made of everything that failed to stand."
	},
	"spirit+time+wind": {
		name: "Breath of Ages",
		type: "Hymn",
		element: "Aetherwind",
		rarity: "Epic",
		description: "A wind that has already forgiven you."
	},
	"earth+ice+water": {
		name: "Worldveil Frost",
		type: "Guard",
		element: "Permafrost",
		rarity: "Rare",
		description: "A continent deciding to close."
	},
	"lightning+shadow+wind": {
		name: "Black Tempest",
		type: "Storm",
		element: "Nightbolt",
		rarity: "Epic",
		description: "Thunder without a sky to claim it."
	},
	"dragon+light+spirit": {
		name: "Saint Wyrm",
		type: "Miracle",
		element: "Holyscale",
		rarity: "Mythic",
		description: "A dragon that kept its first promise."
	},
	"blood+illusion+shadow": {
		name: "Red Masquerade",
		type: "Art",
		element: "Crimsonveil",
		rarity: "Epic",
		description: "Every face in the dark is yours."
	}
};
var AFFINITY = {
	"fire+lightning": 18,
	"fire+wind": 16,
	"fire+dragon": 22,
	"fire+demon": 18,
	"ice+water": 18,
	"ice+time": 20,
	"ice+wind": 12,
	"lightning+wind": 18,
	"lightning+time": 16,
	"lightning+light": 14,
	"shadow+void": 22,
	"blood+shadow": 18,
	"illusion+shadow": 18,
	"demon+shadow": 16,
	"spirit+wind": 12,
	"earth+gravity": 20,
	"dragon+earth": 16,
	"earth+water": 10,
	"spirit+water": 14,
	"blood+water": 10,
	"blood+demon": 22,
	"blood+time": 14,
	"light+spirit": 18,
	"spirit+time": 16,
	"time+void": 24,
	"gravity+void": 20,
	"demon+void": 18,
	"light+time": 14,
	"light+lightning": 12,
	"dragon+gravity": 16,
	"dragon+lightning": 14,
	"demon+fire": 16,
	"gravity+earth": 20,
	"illusion+spirit": 14,
	"illusion+time": 16,
	"dragon+demon": 20,
	"light+void": 18,
	"ice+void": 16,
	"ice+shadow": 12,
	"fire+earth": 12,
	"water+wind": 10
};
var TITLES = [
	{
		id: "new",
		name: "New Awakening",
		hint: "Take your first breath in this world."
	},
	{
		id: "clan",
		name: "Clan Warrior",
		hint: "Clear wave 5."
	},
	{
		id: "elite",
		name: "Elite Hunter",
		hint: "Fell ten elite foes."
	},
	{
		id: "dragon",
		name: "Dragon Slayer",
		hint: "Defeat a dragon-class boss."
	},
	{
		id: "void",
		name: "Void Walker",
		hint: "Awaken with Void among your three."
	},
	{
		id: "chosen",
		name: "God's Chosen",
		hint: "Reach rank SSS or EX."
	},
	{
		id: "transcendent",
		name: "Transcendent",
		hint: "Raise your art to Transcendent."
	},
	{
		id: "wave20",
		name: "Wavebreaker",
		hint: "Survive wave 20."
	},
	{
		id: "untouched",
		name: "Untouched",
		hint: "Clear a wave without taking a hit."
	},
	{
		id: "hoarder",
		name: "Essence Hoarder",
		hint: "Hold 1,200 essence at once."
	},
	{
		id: "combo",
		name: "Flow State",
		hint: "Reach a 25-hit combo."
	},
	{
		id: "bosses",
		name: "Thronebreaker",
		hint: "Defeat three bosses across runs."
	}
];
var UPGRADE_COST = [
	40,
	70,
	110,
	160,
	230,
	320,
	430,
	560,
	720,
	900
];
var ABILITY_UPGRADE_COST = [
	180,
	420,
	900
];
var BASE_STATS = {
	hp: 118,
	energy: 90,
	atk: 14,
	def: 8,
	spd: 168,
	crit: 8,
	power: 24
};
var RANK_MULT = {
	E: .86,
	D: .92,
	C: 1,
	B: 1.08,
	A: 1.18,
	S: 1.3,
	SS: 1.44,
	SSS: 1.62,
	EX: 1.85
};
var RARITY_COLOR = {
	Common: "#9a958c",
	Uncommon: "#6f9a78",
	Rare: "#6a8caa",
	Epic: "#8a6a9a",
	Legendary: "#c45c4a",
	Mythic: "#d4a574",
	Divine: "#dce6ee",
	Transcendent: "#f2efe8"
};
var RANK_COLOR = {
	E: "#8a8580",
	D: "#9a958c",
	C: "#c8c2b8",
	B: "#d8d2c6",
	A: "#c9b8a4",
	S: "#d4c4a0",
	SS: "#e2d4b0",
	SSS: "#eee6d6",
	EX: "#c45c4a"
};
function xpToNext(level) {
	return Math.round(80 + level * 42 + level * level * 6);
}
function abilityTier(index) {
	return ABILITY_TIERS[Math.max(0, Math.min(ABILITY_TIERS.length - 1, index))];
}
function rarityIndex(r) {
	return RARITIES.indexOf(r);
}
function emptyUpgrades() {
	return {
		hp: 0,
		energy: 0,
		atk: 0,
		def: 0,
		spd: 0,
		crit: 0
	};
}
function computeStats(clanId, powerIds, rank, level, upgrades, ability, abilityTierIndex) {
	const clan = CLAN_DEFS[clanId];
	const s = { ...BASE_STATS };
	const add = (partial) => {
		if (!partial) return;
		Object.keys(partial).forEach((k) => {
			s[k] += partial[k] ?? 0;
		});
	};
	add(clan.stats);
	for (const id of powerIds) {
		const p = POWER_DEFS[id];
		s.atk += p.atk;
		s.def += p.def;
		s.spd += p.spd;
		s.hp += p.hp * 3;
		s.energy += p.energy * 2;
		s.crit += p.crit;
	}
	s.hp += upgrades.hp * 14;
	s.energy += upgrades.energy * 10;
	s.atk += upgrades.atk * 3;
	s.def += upgrades.def * 2;
	s.spd += upgrades.spd * 6;
	s.crit += upgrades.crit * 2;
	const lv = 1 + (level - 1) * .045;
	const rm = RANK_MULT[rank];
	const tier = 1 + abilityTierIndex * .12;
	s.hp = Math.round(s.hp * lv * rm);
	s.energy = Math.round(s.energy * (.92 + rm * .08) * (1 + abilityTierIndex * .04));
	s.atk = Math.round(s.atk * lv * rm * tier);
	s.def = Math.round(s.def * lv * rm);
	s.spd = Math.round(s.spd * (1 + (level - 1) * .012));
	s.crit = Math.min(48, Math.round(s.crit + level * .3 + rarityIndex(ability.rarity)));
	s.power = Math.round(ability.powerLevel * rm * tier + level * 3 + upgrades.atk * 2);
	return s;
}
function hashString(s) {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}
function rng(seed) {
	let x = seed || 1;
	return () => {
		x ^= x << 13;
		x ^= x >>> 17;
		x ^= x << 5;
		return (x >>> 0) / 4294967296;
	};
}
function pairKey(a, b) {
	return a < b ? `${a}+${b}` : `${b}+${a}`;
}
function comboKey(ids) {
	return [...ids].sort().join("+");
}
function affinityScore(ids) {
	let score = 0;
	for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) {
		const a = ids[i];
		const b = ids[j];
		score += AFFINITY[pairKey(a, b)] ?? 4;
		const ta = new Set(POWER_DEFS[a].tags);
		const shared = POWER_DEFS[b].tags.filter((t) => ta.has(t)).length;
		score += shared * 3;
	}
	const rare = ids.filter((id) => POWER_DEFS[id].tags.includes("rare")).length;
	score += rare * 8;
	if (ids.filter((id) => POWER_DEFS[id].tags.includes("dark")).length === 3) score += 18;
	if (ids.filter((id) => POWER_DEFS[id].tags.includes("elemental")).length === 3) score += 10;
	if (ids.includes("dragon") && ids.includes("demon") && ids.includes("void")) score += 28;
	if (ids.includes("time") && ids.includes("void")) score += 10;
	return score;
}
function pickRarity(score, roll, named) {
	let idx = 0;
	if (score >= 28) idx = 1;
	if (score >= 38) idx = 2;
	if (score >= 48) idx = 3;
	if (score >= 58) idx = 4;
	if (score >= 70) idx = 5;
	if (score >= 84) idx = 6;
	if (score >= 98) idx = 7;
	if (named) idx = Math.max(idx, RARITIES.indexOf(named));
	if (roll > .97 && score >= 50) idx = Math.min(7, idx + 2);
	else if (roll > .9 && score >= 36) idx = Math.min(7, idx + 1);
	return RARITIES[idx];
}
function pickRank(powerLevel, rarity, roll) {
	let idx = 0;
	if (powerLevel >= 30) idx = 1;
	if (powerLevel >= 38) idx = 2;
	if (powerLevel >= 46) idx = 3;
	if (powerLevel >= 54) idx = 4;
	if (powerLevel >= 64) idx = 5;
	if (powerLevel >= 74) idx = 6;
	if (powerLevel >= 84) idx = 7;
	if (powerLevel >= 93) idx = 8;
	idx = Math.max(idx, {
		Common: 0,
		Uncommon: 1,
		Rare: 2,
		Epic: 3,
		Legendary: 4,
		Mythic: 5,
		Divine: 6,
		Transcendent: 7
	}[rarity]);
	if (roll > .985 && rarityIndexSafe(rarity) >= 4) idx = 8;
	else if (roll > .94 && rarityIndexSafe(rarity) >= 5) idx = Math.max(idx, 7);
	return RANKS[Math.min(8, idx)];
}
function rarityIndexSafe(r) {
	return RARITIES.indexOf(r);
}
function proceduralName(ids, seed) {
	const [a, b, c] = ids.map((id) => POWER_DEFS[id]);
	const forms = [
		`${a.adj} ${b.noun} ${c.art}`,
		`${c.adj} ${a.noun}`,
		`${b.noun} of ${a.noun}`,
		`${a.adj} ${c.art}`,
		`${c.adj} ${b.noun} ${a.art}`
	];
	const types = [
		a.art,
		b.art,
		c.art,
		"Art",
		"Domain"
	];
	const element = `${a.adj.replace(/al$/, "")}${b.noun}`;
	return {
		name: forms[seed % forms.length],
		type: types[(seed >> 3) % types.length],
		element
	};
}
function descriptionFor(name, ids) {
	const nouns = ids.map((id) => POWER_DEFS[id].noun.toLowerCase());
	return `${name} binds ${nouns[0]}, ${nouns[1]}, and ${nouns[2]} into a single awakened law.`;
}
function awakenAbility(name, clanId, powerIds) {
	const key = comboKey(powerIds);
	const seed = hashString(`${name}|${clanId}|${key}`);
	const rand = rng(seed);
	const recipe = RECIPES[key];
	const synergy = affinityScore(powerIds);
	const named = recipe?.rarity;
	const rarity = pickRarity(synergy, rand(), named);
	const generated = recipe ? {
		name: recipe.name,
		type: recipe.type,
		element: recipe.element
	} : proceduralName(powerIds, seed);
	const style = POWER_DEFS[powerIds[0]].style;
	const color = POWER_DEFS[powerIds[0]].color;
	const powerLevel = Math.max(22, Math.min(99, Math.round(28 + rarityIndexSafe(rarity) * 8 + synergy * .35 + rand() * 8 + (recipe ? 6 : 0))));
	return {
		name: generated.name,
		type: generated.type,
		element: generated.element,
		rarity,
		powerLevel,
		style,
		color,
		description: recipe?.description ?? descriptionFor(generated.name, powerIds),
		synergy
	};
}
function awakenRank(ability, name, clanId) {
	const rand = rng(hashString(`${name}|${clanId}|${ability.name}|rank`));
	return pickRank(ability.powerLevel, ability.rarity, rand());
}
function suggestedTitle(rank, powerIds, nickname) {
	if (nickname.trim()) return nickname.trim();
	if (rank === "EX") return "God's Chosen";
	if (rank === "SSS") return "Void Dragon";
	if (powerIds.includes("void")) return "Void Walker";
	if (powerIds.includes("dragon")) return "Scaleborn";
	return "New Awakening";
}
function createCharacter(name, clanId, nickname, powerIds) {
	const ability = awakenAbility(name, clanId, powerIds);
	const rank = awakenRank(ability, name, clanId);
	const title = suggestedTitle(rank, powerIds, nickname);
	const unlocked = ["New Awakening"];
	if (title !== "New Awakening") unlocked.push(title);
	if (powerIds.includes("void")) unlocked.push("Void Walker");
	if (rank === "SSS" || rank === "EX") unlocked.push("God's Chosen");
	return {
		name: name.trim() || "Nameless",
		clanId,
		nickname: nickname.trim(),
		powerIds,
		ability,
		rank,
		title,
		unlockedTitles: [...new Set(unlocked)],
		level: 1,
		xp: 0,
		coins: 0,
		upgrades: emptyUpgrades(),
		abilityTierIndex: 0,
		auraStyle: CLAN_DEFS[clanId].aura,
		highestWave: 0,
		bossesDefeated: 0,
		totalKills: 0,
		bestScore: 0,
		createdAt: Date.now()
	};
}
function liveStats(c) {
	return computeStats(c.clanId, c.powerIds, c.rank, c.level, c.upgrades, c.ability, c.abilityTierIndex);
}
function maybeRankUp(c) {
	const stats = liveStats(c);
	const idx = RANKS.indexOf(c.rank);
	const thresholds = [
		0,
		140,
		190,
		250,
		330,
		430,
		560,
		740,
		960
	];
	let next = idx;
	while (next < 8 && stats.power >= thresholds[next + 1]) next += 1;
	if (next === idx) return c;
	return {
		...c,
		rank: RANKS[next]
	};
}
var KEY = "aetherwake-save-v1";
var SAVE_VERSION = 1;
var DEFAULT_SETTINGS = {
	master: .8,
	music: .45,
	sfx: .75,
	shake: 1,
	reducedMotion: false
};
var DEFAULT_SAVE = {
	version: SAVE_VERSION,
	character: null,
	settings: DEFAULT_SETTINGS,
	leaderboard: [],
	bestScore: 0
};
function migrate(raw) {
	return {
		...DEFAULT_SAVE,
		...raw,
		settings: {
			...DEFAULT_SETTINGS,
			...raw.settings
		},
		leaderboard: Array.isArray(raw.leaderboard) ? raw.leaderboard : [],
		character: raw.character ? {
			...raw.character,
			upgrades: {
				...emptyUpgrades(),
				...raw.character.upgrades
			},
			unlockedTitles: raw.character.unlockedTitles ?? ["New Awakening"]
		} : null,
		version: SAVE_VERSION
	};
}
function loadSave() {
	if (typeof window === "undefined") return structuredClone(DEFAULT_SAVE);
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return structuredClone(DEFAULT_SAVE);
		return migrate(JSON.parse(raw));
	} catch {
		return structuredClone(DEFAULT_SAVE);
	}
}
function writeSave(blob) {
	if (typeof window === "undefined") return;
	try {
		const payload = JSON.stringify({
			...blob,
			version: SAVE_VERSION
		});
		window.localStorage.setItem(KEY, payload);
	} catch {}
}
function upsertLeaderboard(list, entry) {
	return [...list, entry].sort((a, b) => b.score - a.score).slice(0, 10);
}
function persistCharacter(character, extra) {
	const next = {
		...loadSave(),
		character,
		...extra
	};
	writeSave(next);
	return next;
}
var ctx = null;
var master = null;
var musicBus = null;
var sfxBus = null;
var musicStarted = false;
var volumes = {
	master: .8,
	music: .45,
	sfx: .75
};
function ensure() {
	if (typeof window === "undefined") return null;
	if (!ctx) {
		const AC = window.AudioContext || window.webkitAudioContext;
		if (!AC) return null;
		ctx = new AC({ latencyHint: "interactive" });
		master = ctx.createGain();
		musicBus = ctx.createGain();
		sfxBus = ctx.createGain();
		musicBus.connect(master);
		sfxBus.connect(master);
		master.connect(ctx.destination);
		applyVolumes();
	}
	return ctx;
}
function applyVolumes() {
	if (!ctx || !master || !musicBus || !sfxBus) return;
	const t = ctx.currentTime;
	master.gain.setTargetAtTime(volumes.master * volumes.master, t, .03);
	musicBus.gain.setTargetAtTime(volumes.music * volumes.music, t, .05);
	sfxBus.gain.setTargetAtTime(volumes.sfx * volumes.sfx, t, .03);
}
function unlockAudio() {
	const c = ensure();
	if (!c) return;
	if (c.state === "suspended") c.resume();
}
function setBusVolume(bus, value) {
	volumes[bus] = Math.max(0, Math.min(1, value));
	applyVolumes();
}
function resumeAudio() {
	const c = ensure();
	if (c && c.state === "suspended") c.resume();
}
function envGain(duration, peak, attack = .01, release = .08) {
	if (!ctx || !sfxBus) return null;
	const g = ctx.createGain();
	const t = ctx.currentTime;
	g.gain.setValueAtTime(1e-4, t);
	g.gain.exponentialRampToValueAtTime(Math.max(2e-4, peak), t + attack);
	g.gain.exponentialRampToValueAtTime(1e-4, t + duration);
	g.connect(sfxBus);
	window.setTimeout(() => {
		try {
			g.disconnect();
		} catch {}
	}, (duration + release) * 1e3 + 40);
	return g;
}
function tone(freq, type, duration, peak, detune = 0) {
	if (!ctx) return;
	const o = ctx.createOscillator();
	o.type = type;
	o.frequency.value = freq;
	o.detune.value = detune;
	const g = envGain(duration, peak);
	if (!g) return;
	o.connect(g);
	o.start();
	o.stop(ctx.currentTime + duration);
}
function noise(duration, peak, hp = 400, lp = 2400) {
	if (!ctx) return;
	const n = Math.floor(ctx.sampleRate * duration);
	const buf = ctx.createBuffer(1, n, ctx.sampleRate);
	const data = buf.getChannelData(0);
	for (let i = 0; i < n; i++) data[i] = Math.random() * 2 - 1;
	const src = ctx.createBufferSource();
	src.buffer = buf;
	const filter = ctx.createBiquadFilter();
	filter.type = "bandpass";
	filter.frequency.value = (hp + lp) / 2;
	filter.Q.value = .7;
	const g = envGain(duration, peak, .004, .05);
	if (!g) return;
	src.connect(filter);
	filter.connect(g);
	src.start();
}
function sfx(kind) {
	const c = ensure();
	if (!c || c.state !== "running") return;
	const jitter = .92 + Math.random() * .16;
	switch (kind) {
		case "slash":
			noise(.09, .22, 1200, 4e3);
			tone(420 * jitter, "sawtooth", .08, .07);
			break;
		case "heavy":
			noise(.14, .3, 200, 900);
			tone(90 * jitter, "sine", .16, .22);
			tone(180 * jitter, "triangle", .1, .08);
			break;
		case "hit":
			noise(.06, .18, 400, 1800);
			tone(140 * jitter, "square", .05, .08);
			break;
		case "dash":
			noise(.12, .16, 600, 2200);
			tone(520 * jitter, "triangle", .1, .05);
			break;
		case "special":
			tone(220 * jitter, "sawtooth", .22, .1);
			tone(330 * jitter, "triangle", .28, .08);
			noise(.18, .14, 300, 1600);
			break;
		case "ult":
			tone(55, "sine", .5, .28);
			tone(110, "sawtooth", .4, .1);
			noise(.35, .22, 100, 800);
			break;
		case "hurt":
			tone(70, "sine", .18, .2);
			noise(.12, .16, 200, 700);
			break;
		case "death":
			tone(48, "sine", .6, .24);
			tone(36, "triangle", .7, .12);
			break;
		case "wave":
			tone(196, "triangle", .25, .08);
			tone(247, "sine", .3, .06);
			break;
		case "boss":
			tone(40, "sine", .8, .3);
			tone(80, "sawtooth", .5, .08);
			break;
		case "level":
			tone(392, "sine", .18, .08);
			tone(523, "triangle", .22, .07);
			tone(659, "sine", .28, .05);
			break;
		case "awaken":
			tone(130, "sine", .8, .16);
			tone(196, "triangle", 1, .1);
			tone(261, "sine", 1.2, .08);
			noise(.4, .1, 200, 1200);
			break;
		case "rank":
			tone(174, "sine", .4, .14);
			tone(261, "triangle", .5, .1);
			tone(349, "sine", .7, .08);
			break;
		case "ui":
			tone(640 * jitter, "sine", .05, .04);
			break;
		case "coin":
			tone(880 * jitter, "sine", .08, .05);
			tone(1320 * jitter, "triangle", .1, .03);
			break;
		case "block":
			noise(.08, .12, 800, 2400);
			tone(300, "square", .04, .04);
			break;
		default: tone(300, "sine", .06, .04);
	}
}
function startMusic() {
	const c = ensure();
	if (!c || !musicBus || musicStarted) return;
	if (c.state !== "running") return;
	musicStarted = true;
	const base = c.createOscillator();
	base.type = "sine";
	base.frequency.value = 55;
	const fifth = c.createOscillator();
	fifth.type = "sine";
	fifth.frequency.value = 82.5;
	const air = c.createOscillator();
	air.type = "triangle";
	air.frequency.value = 165;
	const g1 = c.createGain();
	g1.gain.value = .18;
	const g2 = c.createGain();
	g2.gain.value = .08;
	const g3 = c.createGain();
	g3.gain.value = .03;
	const lfo = c.createOscillator();
	lfo.frequency.value = .07;
	const lfoGain = c.createGain();
	lfoGain.gain.value = 8;
	lfo.connect(lfoGain);
	lfoGain.connect(air.frequency);
	base.connect(g1);
	fifth.connect(g2);
	air.connect(g3);
	g1.connect(musicBus);
	g2.connect(musicBus);
	g3.connect(musicBus);
	base.start();
	fifth.start();
	air.start();
	lfo.start();
}
var defaultDraft = () => ({
	name: "",
	nickname: "",
	clanId: "dragon",
	powers: []
});
function applyAudio(s) {
	setBusVolume("master", s.master);
	setBusVolume("music", s.music);
	setBusVolume("sfx", s.sfx);
}
var useGameStore = create((set, get) => ({
	ready: false,
	screen: "title",
	character: null,
	settings: DEFAULT_SETTINGS,
	leaderboard: [],
	bestScore: 0,
	draft: defaultDraft(),
	lastRun: null,
	hydrate: () => {
		const save = loadSave();
		applyAudio(save.settings);
		set({
			ready: true,
			character: save.character,
			settings: save.settings,
			leaderboard: save.leaderboard,
			bestScore: save.bestScore
		});
	},
	setScreen: (screen) => set({ screen }),
	setDraft: (p) => set({ draft: {
		...get().draft,
		...p
	} }),
	togglePower: (id) => {
		const powers = [...get().draft.powers];
		const i = powers.indexOf(id);
		if (i >= 0) powers.splice(i, 1);
		else if (powers.length < 3) powers.push(id);
		set({ draft: {
			...get().draft,
			powers
		} });
		sfx("ui");
	},
	awaken: () => {
		const d = get().draft;
		if (d.powers.length !== 3) return;
		const character = createCharacter(d.name, d.clanId, d.nickname, d.powers);
		persistCharacter(character);
		set({
			character,
			screen: "awakening"
		});
		sfx("awaken");
	},
	newGame: () => {
		unlockAudio();
		startMusic();
		sfx("ui");
		set({
			draft: defaultDraft(),
			screen: "identity",
			lastRun: null
		});
	},
	continueGame: () => {
		unlockAudio();
		startMusic();
		sfx("ui");
		if (get().character) set({ screen: "hub" });
	},
	saveNow: () => {
		const { character, settings, leaderboard, bestScore } = get();
		writeSave({
			version: 1,
			character,
			settings,
			leaderboard,
			bestScore
		});
	},
	applyRun: (run) => {
		if (!run) return;
		let character = get().character;
		if (!character) return;
		character = get().unlockFromRun({
			...character,
			highestWave: Math.max(character.highestWave, run.wave),
			bossesDefeated: character.bossesDefeated,
			bestScore: Math.max(character.bestScore, run.score)
		});
		character = maybeRankUp(character);
		const stats = liveStats(character);
		const entry = {
			name: character.name,
			clan: character.clanId,
			rank: character.rank,
			level: character.level,
			highestWave: character.highestWave,
			bossesDefeated: character.bossesDefeated,
			totalPower: stats.power,
			score: run.score,
			ability: character.ability.name,
			at: Date.now()
		};
		const leaderboard = upsertLeaderboard(get().leaderboard, entry);
		const bestScore = Math.max(get().bestScore, run.score);
		persistCharacter(character, {
			leaderboard,
			bestScore
		});
		set({
			character,
			leaderboard,
			bestScore,
			lastRun: run,
			screen: "gameover"
		});
	},
	unlockFromRun: (c) => {
		const titles = new Set(c.unlockedTitles);
		if (c.highestWave >= 5) titles.add("Clan Warrior");
		if (c.highestWave >= 20) titles.add("Wavebreaker");
		if (c.totalKills >= 10) titles.add("Elite Hunter");
		if (c.bossesDefeated >= 1) titles.add("Dragon Slayer");
		if (c.bossesDefeated >= 3) titles.add("Thronebreaker");
		if (c.abilityTierIndex >= 3) titles.add("Transcendent");
		if (c.coins >= 1200) titles.add("Essence Hoarder");
		if (c.rank === "SSS" || c.rank === "EX") titles.add("God's Chosen");
		return {
			...c,
			unlockedTitles: [...titles]
		};
	},
	buyUpgrade: (key) => {
		const c = get().character;
		if (!c) return false;
		const lvl = c.upgrades[key];
		const cost = UPGRADE_COST[Math.min(UPGRADE_COST.length - 1, lvl)] ?? 9999;
		if (c.coins < cost || lvl >= 10) return false;
		const next = {
			...c,
			coins: c.coins - cost,
			upgrades: {
				...c.upgrades,
				[key]: lvl + 1
			}
		};
		persistCharacter(next);
		set({ character: next });
		sfx("coin");
		return true;
	},
	upgradeAbility: () => {
		const c = get().character;
		if (!c) return false;
		if (c.abilityTierIndex >= 3) return false;
		const cost = ABILITY_UPGRADE_COST[c.abilityTierIndex] ?? 9999;
		if (c.coins < cost) return false;
		let next = {
			...c,
			coins: c.coins - cost,
			abilityTierIndex: c.abilityTierIndex + 1
		};
		if (next.abilityTierIndex >= 3) next = {
			...next,
			unlockedTitles: [.../* @__PURE__ */ new Set([...next.unlockedTitles, "Transcendent"])]
		};
		persistCharacter(next);
		set({ character: next });
		sfx("level");
		return true;
	},
	setTitle: (title) => {
		const c = get().character;
		if (!c || !c.unlockedTitles.includes(title)) return;
		const next = {
			...c,
			title
		};
		persistCharacter(next);
		set({ character: next });
		sfx("ui");
	},
	setSettings: (p) => {
		const settings = {
			...get().settings,
			...p
		};
		applyAudio(settings);
		set({ settings });
		get().saveNow();
	}
}));
function Atmosphere({ accent = "#c45c4a" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let t = 0;
		const motes = Array.from({ length: 70 }, () => ({
			x: Math.random(),
			y: Math.random(),
			s: .6 + Math.random() * 1.8,
			v: .02 + Math.random() * .05,
			a: .15 + Math.random() * .4
		}));
		const clouds = Array.from({ length: 5 }, (_, i) => ({
			x: i * .28,
			y: .12 + i * .04,
			w: .28,
			v: .004 + i * .001
		}));
		const resize = () => {
			const dpr = Math.min(2, window.devicePixelRatio || 1);
			canvas.width = Math.floor(canvas.clientWidth * dpr);
			canvas.height = Math.floor(canvas.clientHeight * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(canvas);
		const loop = () => {
			t += .016;
			const w = canvas.clientWidth;
			const h = canvas.clientHeight;
			const g = ctx.createLinearGradient(0, 0, 0, h);
			g.addColorStop(0, "#16141c");
			g.addColorStop(.4, "#0c0b10");
			g.addColorStop(1, "#08070b");
			ctx.fillStyle = g;
			ctx.fillRect(0, 0, w, h);
			ctx.fillStyle = "rgba(28,26,36,0.9)";
			ctx.beginPath();
			ctx.moveTo(0, h * .42);
			ctx.lineTo(w * .2, h * .3);
			ctx.lineTo(w * .38, h * .38);
			ctx.lineTo(w * .58, h * .24);
			ctx.lineTo(w * .8, h * .36);
			ctx.lineTo(w, h * .28);
			ctx.lineTo(w, h);
			ctx.lineTo(0, h);
			ctx.fill();
			ctx.fillStyle = "rgba(18,16,24,0.95)";
			ctx.beginPath();
			ctx.moveTo(0, h * .62);
			ctx.lineTo(w * .25, h * .52);
			ctx.lineTo(w * .5, h * .6);
			ctx.lineTo(w * .78, h * .5);
			ctx.lineTo(w, h * .58);
			ctx.lineTo(w, h);
			ctx.lineTo(0, h);
			ctx.fill();
			ctx.save();
			ctx.globalCompositeOperation = "lighter";
			ctx.globalAlpha = .18;
			ctx.fillStyle = accent;
			ctx.beginPath();
			ctx.arc(w * .74, h * .22, 70, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
			ctx.fillStyle = "rgba(232,228,220,0.04)";
			for (const c of clouds) {
				c.x += c.v * .002;
				if (c.x > 1.2) c.x = -.3;
				ctx.beginPath();
				ctx.ellipse(c.x * w, c.y * h, c.w * w * .4, 18, 0, 0, Math.PI * 2);
				ctx.fill();
			}
			for (const m of motes) {
				m.y -= m.v * .004;
				if (m.y < -.02) m.y = 1.02;
				ctx.globalAlpha = m.a * (.5 + Math.sin(t + m.x * 8) * .5);
				ctx.fillStyle = "#e8e4dc";
				ctx.beginPath();
				ctx.arc(m.x * w, m.y * h, m.s, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			const v = ctx.createRadialGradient(w / 2, h / 2, w * .15, w / 2, h / 2, w * .7);
			v.addColorStop(0, "rgba(0,0,0,0)");
			v.addColorStop(1, "rgba(8,7,11,0.55)");
			ctx.fillStyle = v;
			ctx.fillRect(0, 0, w, h);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
		};
	}, [accent]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "pointer-events-none absolute inset-0 h-full w-full",
		"aria-hidden": true
	});
}
var GAME_CODES = /* @__PURE__ */ new Set([
	"KeyW",
	"KeyA",
	"KeyS",
	"KeyD",
	"ArrowUp",
	"ArrowLeft",
	"ArrowDown",
	"ArrowRight",
	"Space",
	"ShiftLeft",
	"ShiftRight",
	"KeyJ",
	"KeyK",
	"KeyQ",
	"KeyE",
	"KeyR",
	"KeyF",
	"Escape",
	"KeyP"
]);
function radial(x, y, dz = .18) {
	const m = Math.hypot(x, y);
	if (m < dz) return {
		x: 0,
		y: 0
	};
	const scale = (m - dz) / (1 - dz) / m;
	return {
		x: x * scale,
		y: y * scale
	};
}
var Input = class {
	keys = /* @__PURE__ */ new Set();
	pointer = {
		x: 0,
		y: 0,
		down: false,
		secondary: false
	};
	stick = {
		x: 0,
		y: 0
	};
	buttons = {
		attack: false,
		heavy: false,
		dash: false,
		block: false,
		special: false,
		ult: false,
		pause: false
	};
	blockHeld = false;
	prev = blankActions();
	injected = null;
	unbind = [];
	attach(el) {
		const onKey = (e, down) => {
			if (e.repeat) return;
			if (down) this.keys.add(e.code);
			else this.keys.delete(e.code);
			if (GAME_CODES.has(e.code)) e.preventDefault();
		};
		const kd = (e) => onKey(e, true);
		const ku = (e) => onKey(e, false);
		const blur = () => {
			this.keys.clear();
			this.pointer.down = false;
			this.stick.x = 0;
			this.stick.y = 0;
		};
		const move = (e) => {
			const r = el.getBoundingClientRect();
			this.pointer.x = e.clientX - r.left;
			this.pointer.y = e.clientY - r.top;
		};
		const down = (e) => {
			if (e.button === 0) this.pointer.down = true;
			if (e.button === 2) this.pointer.secondary = true;
			move(e);
		};
		const up = (e) => {
			if (e.button === 0) this.pointer.down = false;
			if (e.button === 2) this.pointer.secondary = false;
		};
		const ctxmenu = (e) => e.preventDefault();
		window.addEventListener("keydown", kd);
		window.addEventListener("keyup", ku);
		window.addEventListener("blur", blur);
		document.addEventListener("visibilitychange", blur);
		el.addEventListener("pointermove", move);
		el.addEventListener("pointerdown", down);
		el.addEventListener("pointerup", up);
		el.addEventListener("pointercancel", up);
		el.addEventListener("contextmenu", ctxmenu);
		this.unbind.push(() => {
			window.removeEventListener("keydown", kd);
			window.removeEventListener("keyup", ku);
			window.removeEventListener("blur", blur);
			document.removeEventListener("visibilitychange", blur);
			el.removeEventListener("pointermove", move);
			el.removeEventListener("pointerdown", down);
			el.removeEventListener("pointerup", up);
			el.removeEventListener("pointercancel", up);
			el.removeEventListener("contextmenu", ctxmenu);
		});
	}
	detach() {
		this.unbind.forEach((fn) => fn());
		this.unbind = [];
	}
	setKeys(codes) {
		this.injected = codes;
	}
	clearInjected() {
		this.injected = null;
	}
	sample() {
		const held = this.injected ? new Set(this.injected) : this.keys;
		let mx = 0;
		let my = 0;
		if (held.has("KeyA") || held.has("ArrowLeft")) mx -= 1;
		if (held.has("KeyD") || held.has("ArrowRight")) mx += 1;
		if (held.has("KeyW") || held.has("ArrowUp")) my -= 1;
		if (held.has("KeyS") || held.has("ArrowDown")) my += 1;
		mx += this.stick.x;
		my += this.stick.y;
		const pads = typeof navigator !== "undefined" ? navigator.getGamepads?.() ?? [] : [];
		for (const pad of pads) {
			if (!pad) continue;
			const st = radial(pad.axes[0] ?? 0, pad.axes[1] ?? 0);
			mx += st.x;
			my += st.y;
			if (pad.buttons[0]?.pressed) this.buttons.attack = true;
			if (pad.buttons[2]?.pressed) this.buttons.heavy = true;
			if (pad.buttons[1]?.pressed) this.buttons.dash = true;
			if (pad.buttons[4]?.pressed || pad.buttons[6]?.pressed) this.buttons.block = true;
			if (pad.buttons[5]?.pressed) this.buttons.special = true;
			if (pad.buttons[7]?.pressed) this.buttons.ult = true;
			if (pad.buttons[9]?.pressed) this.buttons.pause = true;
		}
		const move = radial(mx, my, .12);
		const actions = {
			moveX: Math.max(-1, Math.min(1, move.x)),
			moveY: Math.max(-1, Math.min(1, move.y)),
			aimX: this.pointer.x,
			aimY: this.pointer.y,
			attack: this.pointer.down || held.has("KeyJ") || this.buttons.attack,
			heavy: this.pointer.secondary || held.has("KeyK") || this.buttons.heavy,
			dash: held.has("Space") || this.buttons.dash,
			block: held.has("ShiftLeft") || held.has("ShiftRight") || this.buttons.block || this.blockHeld,
			special: held.has("KeyQ") || held.has("KeyE") || this.buttons.special,
			ult: held.has("KeyR") || held.has("KeyF") || this.buttons.ult,
			pause: held.has("Escape") || held.has("KeyP") || this.buttons.pause
		};
		const edges = {
			attack: actions.attack && !this.prev.attack,
			heavy: actions.heavy && !this.prev.heavy,
			dash: actions.dash && !this.prev.dash,
			special: actions.special && !this.prev.special,
			ult: actions.ult && !this.prev.ult,
			pause: actions.pause && !this.prev.pause
		};
		this.prev = { ...actions };
		this.buttons.attack = false;
		this.buttons.heavy = false;
		this.buttons.dash = false;
		this.buttons.special = false;
		this.buttons.ult = false;
		this.buttons.pause = false;
		return {
			actions,
			edges
		};
	}
};
function blankActions() {
	return {
		moveX: 0,
		moveY: 0,
		aimX: 0,
		aimY: 0,
		attack: false,
		heavy: false,
		dash: false,
		block: false,
		special: false,
		ult: false,
		pause: false
	};
}
var YSCALE = .7;
var WORLD_W = 3e3;
var WORLD_H = 2300;
var FIXED = 1 / 60;
var PARTICLE_CAP = 420;
var PROJ_CAP = 96;
function clamp(v, a, b) {
	return Math.max(a, Math.min(b, v));
}
function lerp(a, b, t) {
	return a + (b - a) * t;
}
function expSmooth(cur, target, k, dt) {
	return cur + (target - cur) * (1 - Math.exp(-k * dt));
}
function rand(a, b) {
	return a + Math.random() * (b - a);
}
var BattleGame = class {
	canvas;
	ctx;
	input;
	character;
	hooks;
	raf = 0;
	last = 0;
	acc = 0;
	running = false;
	paused = false;
	time = 0;
	hitstop = 0;
	trauma = 0;
	cam = {
		x: WORLD_W / 2,
		y: WORLD_H / 2,
		z: 1
	};
	zoomT = 1;
	player = {
		x: WORLD_W / 2,
		y: WORLD_H / 2,
		vx: 0,
		vy: 0,
		z: 0,
		facing: 0,
		hp: 1,
		maxHp: 1,
		energy: 1,
		maxEnergy: 1,
		iFrames: 0,
		dashT: 0,
		dashCd: 0,
		atkT: 0,
		heavyT: 0,
		recT: 0,
		specialCd: 0,
		ultCd: 0,
		blocking: false,
		alive: true,
		hurtT: 0,
		after: []
	};
	enemies = [];
	particles = [];
	projs = [];
	zones = [];
	floats = [];
	obstacles = [];
	nextId = 1;
	wave = 0;
	waveT = 0;
	clearing = false;
	score = 0;
	runCoins = 0;
	runXp = 0;
	combo = 0;
	comboT = 0;
	kills = 0;
	bosses = 0;
	waveHits = 0;
	banner = null;
	bannerT = 0;
	hudClock = 0;
	overSent = false;
	dpr = 1;
	reduced = false;
	shakeMul = 1;
	ambient = [];
	ruins = [];
	clouds = [];
	constructor(canvas, character, hooks, opts) {
		this.canvas = canvas;
		const ctx = canvas.getContext("2d");
		if (!ctx) throw new Error("Canvas unsupported");
		this.ctx = ctx;
		this.character = character;
		this.hooks = hooks;
		this.input = new Input();
		this.reduced = !!opts?.reduced;
		this.shakeMul = opts?.shake ?? 1;
		const stats = liveStats(character);
		this.player.hp = stats.hp;
		this.player.maxHp = stats.hp;
		this.player.energy = stats.energy;
		this.player.maxEnergy = stats.energy;
		this.buildWorld();
		this.resize();
	}
	start() {
		this.running = true;
		this.input.attach(this.canvas);
		this.last = performance.now();
		this.announce("WAVE 1");
		this.spawnWave(1);
		this.wave = 1;
		this.wireControlsTest();
		this.raf = requestAnimationFrame(this.loop);
	}
	destroy() {
		this.running = false;
		cancelAnimationFrame(this.raf);
		this.input.detach();
		if (typeof window !== "undefined") delete window.__controlsTest;
	}
	setPaused(v) {
		this.paused = v;
	}
	setStick(x, y) {
		this.input.stick.x = x;
		this.input.stick.y = y;
	}
	press(btn) {
		this.input.buttons[btn] = true;
	}
	holdBlock(v) {
		this.input.blockHeld = v;
	}
	resize() {
		const parent = this.canvas.parentElement;
		const w = parent?.clientWidth ?? window.innerWidth;
		const h = parent?.clientHeight ?? window.innerHeight;
		this.dpr = Math.min(2, window.devicePixelRatio || 1);
		this.canvas.width = Math.floor(w * this.dpr);
		this.canvas.height = Math.floor(h * this.dpr);
		this.canvas.style.width = `${w}px`;
		this.canvas.style.height = `${h}px`;
	}
	loop = (t) => {
		if (!this.running) return;
		const raw = Math.min(.1, (t - this.last) / 1e3);
		this.last = t;
		if (!this.paused) {
			if (this.hitstop > 0) this.hitstop -= raw;
			else {
				this.acc += raw;
				while (this.acc >= FIXED) {
					this.update(FIXED);
					this.acc -= FIXED;
				}
			}
		}
		this.render();
		this.raf = requestAnimationFrame(this.loop);
	};
	stats() {
		return liveStats(this.character);
	}
	buildWorld() {
		this.obstacles = [];
		this.ruins = [];
		for (let i = 0; i < 18; i++) {
			const x = rand(220, 2780);
			const y = rand(220, 2080);
			if (Math.hypot(x - WORLD_W / 2, y - WORLD_H / 2) < 220) continue;
			const r = rand(28, 54);
			this.obstacles.push({
				x,
				y,
				r,
				h: rand(40, 90)
			});
			this.ruins.push({
				x: x - r,
				y: y - r * .4,
				w: r * 2,
				h: r * 1.2
			});
		}
		for (let i = 0; i < 80; i++) this.ambient.push({
			x: rand(0, WORLD_W),
			y: rand(0, WORLD_H),
			s: rand(.6, 2.2),
			a: rand(.15, .5)
		});
		for (let i = 0; i < 7; i++) this.clouds.push({
			x: rand(0, WORLD_W),
			y: rand(0, WORLD_H * .5),
			s: rand(180, 360),
			v: rand(6, 16)
		});
	}
	announce(text) {
		this.banner = text;
		this.bannerT = 2.2;
	}
	update(dt) {
		this.time += dt;
		const { actions, edges } = this.input.sample();
		if (edges.pause) this.hooks.onPause();
		if (!this.player.alive) {
			this.tickFx(dt);
			if (!this.overSent && this.player.hurtT > 1.4) {
				this.overSent = true;
				this.hooks.onOver({
					score: this.score,
					wave: this.wave,
					coins: this.runCoins,
					xp: this.runXp,
					kills: this.kills,
					bosses: this.bosses
				});
			}
			return;
		}
		this.comboT -= dt;
		if (this.comboT <= 0) this.combo = 0;
		this.bannerT -= dt;
		if (this.bannerT <= 0) this.banner = null;
		this.trauma = Math.max(0, this.trauma - dt * 1.8);
		this.updatePlayer(dt, actions, edges);
		this.updateEnemies(dt);
		this.updateProjs(dt);
		this.updateZones(dt);
		this.tickFx(dt);
		this.updateWave(dt);
		this.followCam(dt, actions);
		this.hudClock += dt;
		if (this.hudClock > .08) {
			this.hudClock = 0;
			this.emitHud();
		}
	}
	updatePlayer(dt, actions, edges) {
		const st = this.stats();
		const p = this.player;
		p.iFrames = Math.max(0, p.iFrames - dt);
		p.dashCd = Math.max(0, p.dashCd - dt);
		p.specialCd = Math.max(0, p.specialCd - dt);
		p.ultCd = Math.max(0, p.ultCd - dt);
		p.atkT = Math.max(0, p.atkT - dt);
		p.heavyT = Math.max(0, p.heavyT - dt);
		p.recT = Math.max(0, p.recT - dt);
		p.hurtT = Math.max(0, p.hurtT - dt);
		p.energy = clamp(p.energy + dt * (12 + st.energy * .02), 0, p.maxEnergy);
		const aim = this.screenToWorld(actions.aimX, actions.aimY);
		p.facing = Math.atan2(aim.y - p.y, aim.x - p.x);
		p.blocking = actions.block && p.energy > 4 && p.dashT <= 0;
		if (p.blocking) p.energy = Math.max(0, p.energy - dt * 18);
		if (edges.dash && p.dashCd <= 0 && p.energy >= 10) {
			const mag = Math.hypot(actions.moveX, actions.moveY);
			const dx = mag > .1 ? actions.moveX : Math.cos(p.facing);
			const dy = mag > .1 ? actions.moveY : Math.sin(p.facing);
			const n = Math.hypot(dx, dy) || 1;
			p.vx = dx / n * st.spd * 3.6;
			p.vy = dy / n * st.spd * 3.6;
			p.dashT = .16;
			p.dashCd = this.character.clanId === "storm" ? .48 : .72;
			p.iFrames = .18;
			p.energy -= 10;
			p.z = 18;
			sfx("dash");
			this.burst(p.x, p.y, this.character.ability.color, 10, "smoke");
		}
		if (p.dashT > 0) {
			p.dashT -= dt;
			p.z = expSmooth(p.z, 0, 10, dt);
			p.after.push({
				x: p.x,
				y: p.y,
				a: .5
			});
			if (p.after.length > 8) p.after.shift();
		} else {
			p.z = expSmooth(p.z, 0, 14, dt);
			const busy = p.atkT > 0 || p.heavyT > 0 || p.recT > 0;
			const speed = st.spd * (p.blocking ? .45 : 1) * (busy ? .55 : 1);
			const berserk = this.character.clanId === "demon" && p.hp / p.maxHp < .4 ? 1.18 : 1;
			p.vx = actions.moveX * speed * berserk;
			p.vy = actions.moveY * speed * berserk;
		}
		p.x = clamp(p.x + p.vx * dt, 80, 2920);
		p.y = clamp(p.y + p.vy * dt, 80, 2220);
		this.collideObstacles(p, 16);
		if (edges.attack && p.recT <= 0 && p.heavyT <= 0) this.doSlash(false);
		if (edges.heavy && p.recT <= 0 && p.energy >= 8) this.doSlash(true);
		if (edges.special && p.specialCd <= 0 && p.energy >= 22) this.castAbility(false);
		if (edges.ult && p.ultCd <= 0 && p.energy >= 48) this.castAbility(true);
		for (const a of p.after) a.a -= dt * 2.2;
		p.after = p.after.filter((a) => a.a > 0);
	}
	doSlash(heavy) {
		const st = this.stats();
		const p = this.player;
		const range = heavy ? 86 : 60;
		const arc = heavy ? 1.65 : 1.05;
		const dmg = st.atk * (heavy ? 1.9 : 1) * this.tierMul();
		if (heavy) {
			p.energy -= 8;
			p.heavyT = .22;
			p.recT = .38;
			this.trauma = Math.min(1, this.trauma + .28);
			sfx("heavy");
		} else {
			p.atkT = .12;
			p.recT = .2;
			sfx("slash");
		}
		this.slashFx(p.x, p.y, p.facing, range, this.character.ability.color, heavy);
		let hits = 0;
		for (const e of this.enemies) {
			if (e.dead) continue;
			const dx = e.x - p.x;
			const dy = e.y - p.y;
			if (Math.hypot(dx, dy) > range + e.r) continue;
			const ang = Math.atan2(dy, dx);
			if (Math.abs(Math.atan2(Math.sin(ang - p.facing), Math.cos(ang - p.facing))) > arc) continue;
			this.hurtEnemy(e, dmg, p.facing, heavy ? 220 : 90);
			hits += 1;
			if (heavy && this.character.clanId === "demon") p.hp = clamp(p.hp + dmg * .08, 0, p.maxHp);
		}
		if (hits > 0 && heavy) this.hitstop = .045;
	}
	tierMul() {
		return 1 + this.character.abilityTierIndex * .18;
	}
	castAbility(ult) {
		const st = this.stats();
		const p = this.player;
		const style = this.character.ability.style;
		const col = this.character.ability.color;
		const mul = (ult ? 2.6 : 1) * this.tierMul();
		p.energy -= ult ? 48 : 22;
		if (ult) {
			p.ultCd = 15;
			this.trauma = Math.min(1, this.trauma + .72);
			this.hitstop = .08;
			this.zoomT = .82;
			sfx("ult");
			this.announce(this.character.ability.name.toUpperCase());
		} else {
			p.specialCd = 4.6 - this.character.abilityTierIndex * .4;
			this.trauma = Math.min(1, this.trauma + .32);
			sfx("special");
		}
		const dmg = st.atk * (ult ? 4.4 : 2.2) * this.tierMul();
		const dirx = Math.cos(p.facing);
		const diry = Math.sin(p.facing);
		if (style === "nova" || style === "pulse") {
			this.zones.push({
				x: p.x,
				y: p.y,
				r: ult ? 210 : 120,
				ttl: ult ? .7 : .35,
				max: ult ? .7 : .35,
				dmg: dmg * .35,
				slow: .3,
				color: col,
				team: "player"
			});
			this.burst(p.x, p.y, col, ult ? 40 : 22, "ember");
			this.ring(p.x, p.y, col, ult ? 200 : 110);
			if (style === "pulse") p.hp = clamp(p.hp + st.hp * (ult ? .18 : .08), 0, p.maxHp);
			for (const e of this.enemies) {
				if (e.dead) continue;
				if (Math.hypot(e.x - p.x, e.y - p.y) < (ult ? 210 : 120) + e.r) this.hurtEnemy(e, dmg, p.facing, 280);
			}
		} else if (style === "projectile" || style === "curse") {
			const n = ult ? 9 : 4;
			for (let i = 0; i < n; i++) {
				const a = p.facing + (i - (n - 1) / 2) * .18;
				this.spawnProj(p.x, p.y, Math.cos(a) * 420, Math.sin(a) * 420, 8, dmg * .55, "player", col, ult ? .9 : .35, ult ? 2 : 0, "orb");
			}
			if (style === "curse") p.hp = clamp(p.hp + 8 * mul, 0, p.maxHp);
		} else if (style === "beam") this.beam(p.x, p.y, p.facing, ult ? 520 : 340, dmg, col);
		else if (style === "dashStrike") {
			const dist = ult ? 280 : 160;
			this.slashFx(p.x, p.y, p.facing, dist, col, true);
			for (const e of this.enemies) {
				if (e.dead) continue;
				const proj = (e.x - p.x) * dirx + (e.y - p.y) * diry;
				const perp = Math.abs((e.x - p.x) * diry - (e.y - p.y) * dirx);
				if (proj > 0 && proj < dist && perp < 36 + e.r) this.hurtEnemy(e, dmg * 1.1, p.facing, 200);
			}
			p.x = clamp(p.x + dirx * dist, 80, 2920);
			p.y = clamp(p.y + diry * dist, 80, 2220);
			p.iFrames = .2;
		} else if (style === "zone") {
			this.zones.push({
				x: p.x + dirx * 80,
				y: p.y + diry * 80,
				r: ult ? 200 : 130,
				ttl: ult ? 3.2 : 1.8,
				max: ult ? 3.2 : 1.8,
				dmg: dmg * .12,
				slow: .55,
				color: col,
				team: "player"
			});
			this.ring(p.x, p.y, col, 90);
		} else if (style === "cone") {
			const reach = ult ? 300 : 190;
			this.slashFx(p.x, p.y, p.facing, reach, col, true);
			for (const e of this.enemies) {
				if (e.dead) continue;
				const dx = e.x - p.x;
				const dy = e.y - p.y;
				if (Math.hypot(dx, dy) > reach + e.r) continue;
				const ang = Math.atan2(dy, dx);
				if (Math.abs(Math.atan2(Math.sin(ang - p.facing), Math.cos(ang - p.facing))) < .7) this.hurtEnemy(e, dmg, p.facing, 260);
			}
		}
		this.score += ult ? 40 : 15;
	}
	beam(x, y, ang, len, dmg, color) {
		const dx = Math.cos(ang);
		const dy = Math.sin(ang);
		for (let i = 0; i < 14; i++) this.burst(x + dx * ((i + 1) / 14) * len, y + dy * ((i + 1) / 14) * len, color, 3, "spark");
		let chained = 0;
		const hit = /* @__PURE__ */ new Set();
		for (const e of this.enemies) {
			if (e.dead) continue;
			const proj = (e.x - x) * dx + (e.y - y) * dy;
			const perp = Math.abs((e.x - x) * dy - (e.y - y) * dx);
			if (proj > 0 && proj < len && perp < 28 + e.r) {
				this.hurtEnemy(e, dmg, ang, 140);
				hit.add(e.id);
				chained += 1;
			}
		}
		if (this.character.clanId === "storm" || this.character.powerIds.includes("lightning")) for (const e of this.enemies) {
			if (e.dead || hit.has(e.id) || chained > 5) continue;
			if ([...this.enemies].find((h) => hit.has(h.id) && Math.hypot(h.x - e.x, h.y - e.y) < 160)) {
				this.hurtEnemy(e, dmg * .55, ang, 80);
				chained += 1;
			}
		}
	}
	spawnProj(x, y, vx, vy, r, dmg, team, color, homing, pierce, style) {
		const slot = this.projs.find((p) => !p.live) ?? (this.projs.length < PROJ_CAP ? {} : null);
		if (!slot) return;
		Object.assign(slot, {
			live: true,
			x,
			y,
			vx,
			vy,
			r,
			dmg,
			team,
			ttl: 1.6,
			color,
			homing,
			pierce,
			style
		});
		if (!this.projs.includes(slot)) this.projs.push(slot);
	}
	updateProjs(dt) {
		for (const pr of this.projs) {
			if (!pr.live) continue;
			pr.ttl -= dt;
			if (pr.ttl <= 0) {
				pr.live = false;
				continue;
			}
			if (pr.homing > 0 && pr.team === "player") {
				let best = null;
				let bd = 9999;
				for (const e of this.enemies) {
					if (e.dead) continue;
					const d = Math.hypot(e.x - pr.x, e.y - pr.y);
					if (d < bd) {
						bd = d;
						best = e;
					}
				}
				if (best) {
					const a = Math.atan2(best.y - pr.y, best.x - pr.x);
					pr.vx = lerp(pr.vx, Math.cos(a) * 400, dt * pr.homing * 4);
					pr.vy = lerp(pr.vy, Math.sin(a) * 400, dt * pr.homing * 4);
				}
			}
			pr.x += pr.vx * dt;
			pr.y += pr.vy * dt;
			this.spawnP(pr.x, pr.y, -pr.vx * .05, -pr.vy * .05, 0, pr.color, .2, 3, "spark");
			if (pr.team === "player") for (const e of this.enemies) {
				if (e.dead) continue;
				if (Math.hypot(e.x - pr.x, e.y - pr.y) < e.r + pr.r) {
					this.hurtEnemy(e, pr.dmg, Math.atan2(pr.vy, pr.vx), 80);
					pr.pierce -= 1;
					if (pr.pierce < 0) pr.live = false;
				}
			}
			else if (this.player.alive && this.player.iFrames <= 0) {
				if (Math.hypot(this.player.x - pr.x, this.player.y - pr.y) < 16 + pr.r) {
					this.hurtPlayer(pr.dmg, Math.atan2(this.player.y - pr.y, this.player.x - pr.x));
					pr.live = false;
				}
			}
		}
	}
	updateZones(dt) {
		for (let i = this.zones.length - 1; i >= 0; i--) {
			const z = this.zones[i];
			z.ttl -= dt;
			if (z.ttl <= 0) {
				this.zones.splice(i, 1);
				continue;
			}
			if (z.team === "player") for (const e of this.enemies) {
				if (e.dead) continue;
				if (Math.hypot(e.x - z.x, e.y - z.y) < z.r + e.r) {
					e.hp -= z.dmg * dt * 8;
					e.vx *= 1 - z.slow * dt * 4;
					e.vy *= 1 - z.slow * dt * 4;
					if (e.hp <= 0) this.killEnemy(e);
				}
			}
		}
	}
	updateEnemies(dt) {
		const p = this.player;
		for (let i = 0; i < this.enemies.length; i++) {
			const e = this.enemies[i];
			if (e.dead) continue;
			e.flash = Math.max(0, e.flash - dt);
			e.cd = Math.max(0, e.cd - dt);
			let sx = 0;
			let sy = 0;
			for (let j = 0; j < this.enemies.length; j++) {
				if (i === j) continue;
				const o = this.enemies[j];
				if (o.dead) continue;
				const dx = e.x - o.x;
				const dy = e.y - o.y;
				const d = Math.hypot(dx, dy) || 1;
				if (d < e.r + o.r + 18) {
					sx += dx / d;
					sy += dy / d;
				}
			}
			const dx = p.x - e.x;
			const dy = p.y - e.y;
			const dist = Math.hypot(dx, dy) || 1;
			e.facing = Math.atan2(dy, dx);
			let ax = dx / dist;
			let ay = dy / dist;
			if (e.kind === "assassin" || e.kind === "elite") {
				ax += -ay * .55;
				ay += ax * .15;
			}
			if (e.kind === "spirit") {
				ax += Math.cos(this.time * 2 + e.seed) * .4;
				ay += Math.sin(this.time * 2 + e.seed) * .4;
			}
			const n = Math.hypot(ax, ay) || 1;
			e.vx = ax / n * e.spd + sx * 40;
			e.vy = ay / n * e.spd + sy * 40;
			e.x = clamp(e.x + e.vx * dt, 60, 2940);
			e.y = clamp(e.y + e.vy * dt, 60, 2240);
			this.collideObstacles(e, e.r);
			if (dist < (e.boss ? 78 : e.kind === "spirit" ? 210 : 46 + e.r) && e.cd <= 0 && p.alive) this.enemyAttack(e, dist);
			if (e.boss) {
				const ratio = e.hp / e.maxHp;
				const ph = ratio < .2 ? 4 : ratio < .45 ? 3 : ratio < .75 ? 2 : 1;
				if (ph !== e.phase) {
					e.phase = ph;
					this.announce(`${e.name} — PHASE ${ph}`);
					this.trauma = Math.min(1, this.trauma + .4);
					sfx("boss");
					if (ph >= 3) e.spd *= 1.12;
				}
			}
		}
	}
	enemyAttack(e, dist) {
		const p = this.player;
		if (e.kind === "spirit" || e.boss && e.phase >= 2 && Math.random() < .45) {
			const a = Math.atan2(p.y - e.y, p.x - e.x);
			const n = e.boss && e.phase >= 3 ? 5 : 1;
			for (let i = 0; i < n; i++) {
				const ang = a + (i - (n - 1) / 2) * .22;
				this.spawnProj(e.x, e.y, Math.cos(ang) * 280, Math.sin(ang) * 280, 7, e.atk * .7, "enemy", e.color, 0, 0, "shard");
			}
			e.cd = e.boss ? 1.1 : 1.6;
			return;
		}
		if (e.kind === "assassin" && dist > 50) {
			const a = Math.atan2(p.y - e.y, p.x - e.x);
			e.x += Math.cos(a) * 90;
			e.y += Math.sin(a) * 90;
		}
		if (dist < 52 + e.r) {
			this.hurtPlayer(e.atk, e.facing);
			e.cd = e.boss ? e.phase >= 4 ? .55 : .9 : 1.15;
			if (e.boss && e.phase >= 4) {
				this.ring(e.x, e.y, e.color, 140);
				this.zones.push({
					x: e.x,
					y: e.y,
					r: 150,
					ttl: .4,
					max: .4,
					dmg: e.atk * .2,
					slow: 0,
					color: e.color,
					team: "enemy"
				});
				if (Math.hypot(p.x - e.x, p.y - e.y) < 150) this.hurtPlayer(e.atk * .6, e.facing);
			}
		} else e.cd = .4;
	}
	hurtPlayer(raw, from) {
		const p = this.player;
		if (!p.alive || p.iFrames > 0) return;
		let dmg = raw * (100 / (100 + this.stats().def * 4));
		if (p.blocking) {
			dmg *= .42;
			p.energy = Math.max(0, p.energy - 6);
			sfx("block");
		} else sfx("hurt");
		if (this.character.clanId === "dragon" && this.character.powerIds.includes("fire")) dmg *= .9;
		p.hp -= dmg;
		p.hurtT = .25;
		p.iFrames = .35;
		p.vx -= Math.cos(from) * 80;
		p.vy -= Math.sin(from) * 80;
		this.waveHits += 1;
		this.trauma = Math.min(1, this.trauma + .35);
		this.burst(p.x, p.y, "#c45c4a", 8, "spark");
		if (p.hp <= 0) {
			p.hp = 0;
			p.alive = false;
			p.hurtT = 0;
			sfx("death");
			this.burst(p.x, p.y, this.character.ability.color, 36, "ember");
			this.announce("FALLEN");
		}
	}
	hurtEnemy(e, dmg, from, kb) {
		if (e.dead) return;
		const st = this.stats();
		const crit = Math.random() * 100 < st.crit;
		const dealt = dmg * (crit ? 1.75 : 1) * (this.character.clanId === "shadow" && crit ? 1.2 : 1);
		e.hp -= dealt;
		e.flash = .08;
		e.x += Math.cos(from) * kb * .04;
		e.y += Math.sin(from) * kb * .04;
		this.combo += 1;
		this.comboT = 1.35;
		this.floats.push({
			x: e.x,
			y: e.y - 20,
			vy: -40,
			text: crit ? `${Math.round(dealt)}!` : `${Math.round(dealt)}`,
			color: crit ? "#e8e4dc" : "#d4c4a0",
			life: .7
		});
		this.burst(e.x, e.y, e.color, 6, "spark");
		sfx("hit");
		if (e.hp <= 0) this.killEnemy(e);
	}
	killEnemy(e) {
		if (e.dead) return;
		e.dead = true;
		e.hp = 0;
		this.kills += 1;
		this.character.totalKills += 1;
		const mult = 1 + Math.min(40, this.combo) * .08;
		let pts = 40;
		let coins = 4;
		let xp = 12;
		if (e.elite) {
			pts = 160;
			coins = 14;
			xp = 28;
		}
		if (e.boss) {
			pts = e.kind === "raid" ? 2400 : e.kind === "boss" ? 1400 : 700;
			coins = e.kind === "raid" ? 90 : 48;
			xp = e.kind === "raid" ? 160 : 90;
			this.bosses += 1;
			this.character.bossesDefeated += 1;
			this.zoomT = 1;
		}
		this.score += Math.round(pts * mult);
		this.runCoins += coins;
		this.runXp += xp;
		this.grantRewards(xp, coins);
		this.burst(e.x, e.y, e.color, e.boss ? 48 : 16, "ember");
		this.ring(e.x, e.y, e.color, e.boss ? 160 : 50);
		if (e.boss) this.trauma = Math.min(1, this.trauma + .6);
	}
	grantRewards(xp, coins) {
		this.character.coins += coins;
		this.character.xp += xp;
		let leveled = false;
		while (this.character.xp >= xpToNext(this.character.level)) {
			this.character.xp -= xpToNext(this.character.level);
			this.character.level += 1;
			leveled = true;
			const st = this.stats();
			this.player.maxHp = st.hp;
			this.player.maxEnergy = st.energy;
			this.player.hp = clamp(this.player.hp + st.hp * .25, 0, this.player.maxHp);
		}
		if (leveled) {
			sfx("level");
			this.announce(`LEVEL ${this.character.level}`);
			this.hooks.onCharacter(this.character);
		}
	}
	updateWave(dt) {
		this.waveT += dt;
		this.enemies = this.enemies.filter((e) => !e.dead);
		if (this.enemies.filter((e) => !e.dead).length === 0 && !this.clearing) {
			this.clearing = true;
			const bonus = this.waveHits === 0 ? 400 : 0;
			if (bonus) {
				this.score += bonus;
				this.unlockTitle("Untouched");
			}
			this.score += 200 * this.wave;
			this.runCoins += 8 + this.wave;
			this.character.coins += 8 + this.wave;
			this.character.highestWave = Math.max(this.character.highestWave, this.wave);
			if (this.wave >= 5) this.unlockTitle("Clan Warrior");
			if (this.wave >= 20) this.unlockTitle("Wavebreaker");
			this.announce(`WAVE ${this.wave} CLEARED`);
			sfx("wave");
			this.hooks.onCharacter(this.character);
			window.setTimeout(() => {
				if (!this.running || !this.player.alive) return;
				this.wave += 1;
				this.waveHits = 0;
				this.clearing = false;
				this.spawnWave(this.wave);
				this.announce(`WAVE ${this.wave}`);
			}, 1400);
		}
	}
	unlockTitle(name) {
		if (!this.character.unlockedTitles.includes(name)) {
			this.character.unlockedTitles = [...this.character.unlockedTitles, name];
			this.announce(name);
		}
	}
	spawnWave(n) {
		this.enemies = this.enemies.filter((e) => !e.dead);
		const hpM = 1 + (n - 1) * .2;
		const dmgM = 1 + (n - 1) * .13;
		const spdM = 1 + (n - 1) * .028;
		const count = Math.min(18, 3 + Math.floor(n * .7));
		if (n === 10) this.spawnEnemy("miniboss", hpM, dmgM, spdM, true);
		else if (n === 20) this.spawnEnemy("boss", hpM, dmgM, spdM, true);
		else if (n >= 30 && n % 10 === 0) this.spawnEnemy("raid", hpM, dmgM, spdM, true);
		else for (let i = 0; i < count; i++) {
			let kind = "beast";
			if (n >= 2 && Math.random() < .35) kind = "warrior";
			if (n >= 3 && Math.random() < .25) kind = "spirit";
			if (n >= 5 && Math.random() < .22) kind = "elite";
			if (n >= 6 && Math.random() < .18) kind = "assassin";
			if (n >= 8 && Math.random() < .12) kind = "drake";
			this.spawnEnemy(kind, hpM, dmgM, spdM, n === 10 || n === 20);
		}
		if (n === 10 || n === 20 || n >= 30 && n % 10 === 0) {
			sfx("boss");
			this.zoomT = .78;
			this.trauma = .5;
		} else this.zoomT = 1;
	}
	spawnEnemy(kind, hpM, dmgM, spdM, _bossWave) {
		const edge = Math.floor(Math.random() * 4);
		let x = 0;
		let y = 0;
		if (edge === 0) {
			x = rand(80, 2920);
			y = 80;
		} else if (edge === 1) {
			x = rand(80, 2920);
			y = 2220;
		} else if (edge === 2) {
			x = 80;
			y = rand(80, 2220);
		} else {
			x = 2920;
			y = rand(80, 2220);
		}
		const t = {
			beast: {
				name: "Shadow Beast",
				r: 18,
				hp: 34,
				atk: 8,
				spd: 78,
				color: "#6a7384",
				elite: false,
				boss: false
			},
			warrior: {
				name: "Demon Warrior",
				r: 20,
				hp: 52,
				atk: 11,
				spd: 70,
				color: "#8a3030",
				elite: false,
				boss: false
			},
			spirit: {
				name: "Elemental Spirit",
				r: 16,
				hp: 28,
				atk: 9,
				spd: 64,
				color: "#7ec8e3",
				elite: false,
				boss: false
			},
			assassin: {
				name: "Elite Assassin",
				r: 15,
				hp: 40,
				atk: 13,
				spd: 110,
				color: "#5b6578",
				elite: true,
				boss: false
			},
			drake: {
				name: "Ash Drake",
				r: 28,
				hp: 90,
				atk: 14,
				spd: 72,
				color: "#c45c4a",
				elite: true,
				boss: false
			},
			elite: {
				name: "Covenant Elite",
				r: 22,
				hp: 80,
				atk: 14,
				spd: 88,
				color: "#d4a574",
				elite: true,
				boss: false
			},
			miniboss: {
				name: "Ashen Warden",
				r: 42,
				hp: 720,
				atk: 18,
				spd: 62,
				color: "#a9845a",
				elite: true,
				boss: true
			},
			boss: {
				name: "Void Dragon",
				r: 58,
				hp: 2100,
				atk: 24,
				spd: 58,
				color: "#c45c4a",
				elite: true,
				boss: true
			},
			raid: {
				name: "The First Flame",
				r: 70,
				hp: 4200,
				atk: 30,
				spd: 64,
				color: "#e85d3a",
				elite: true,
				boss: true
			}
		}[kind];
		const e = {
			id: this.nextId++,
			kind,
			name: t.name,
			x,
			y,
			vx: 0,
			vy: 0,
			r: t.r,
			hp: t.hp * hpM,
			maxHp: t.hp * hpM,
			atk: t.atk * dmgM,
			spd: t.spd * spdM,
			color: t.color,
			flash: 0,
			cd: rand(.2, .8),
			phase: 1,
			elite: !!t.elite,
			boss: !!t.boss,
			facing: 0,
			dead: false,
			seed: Math.random() * 10
		};
		this.enemies.push(e);
		if (e.boss) this.announce(e.name);
	}
	collideObstacles(ent, r) {
		for (const o of this.obstacles) {
			const dx = ent.x - o.x;
			const dy = ent.y - o.y;
			const d = Math.hypot(dx, dy) || 1;
			const min = r + o.r * .7;
			if (d < min) {
				ent.x += dx / d * (min - d);
				ent.y += dy / d * (min - d);
			}
		}
	}
	followCam(dt, actions) {
		const look = 90;
		const tx = this.player.x + Math.cos(this.player.facing) * 70 + actions.moveX * look;
		const ty = this.player.y + Math.sin(this.player.facing) * 70 + actions.moveY * look;
		this.cam.x = expSmooth(this.cam.x, tx, 3.2, dt);
		this.cam.y = expSmooth(this.cam.y, ty, 3.2, dt);
		this.cam.z = expSmooth(this.cam.z, this.zoomT, 2.2, dt);
	}
	tickFx(dt) {
		for (const p of this.particles) {
			if (!p.live) continue;
			p.life -= dt;
			p.x += p.vx * dt;
			p.y += p.vy * dt;
			p.z += p.vz * dt;
			p.vz -= 40 * dt;
			if (p.life <= 0) p.live = false;
		}
		for (let i = this.floats.length - 1; i >= 0; i--) {
			const f = this.floats[i];
			f.life -= dt;
			f.y += f.vy * dt;
			if (f.life <= 0) this.floats.splice(i, 1);
		}
		for (const c of this.clouds) {
			c.x += c.v * dt;
			if (c.x > 3200) c.x = -200;
		}
	}
	spawnP(x, y, vx, vy, z, color, life, size, kind) {
		if (this.reduced && kind !== "slash") return;
		let slot = this.particles.find((p) => !p.live);
		if (!slot) {
			if (this.particles.length >= PARTICLE_CAP) return;
			slot = {};
			this.particles.push(slot);
		}
		Object.assign(slot, {
			live: true,
			x,
			y,
			z,
			vx,
			vy,
			vz: rand(10, 40),
			life,
			max: life,
			size,
			color,
			kind
		});
	}
	burst(x, y, color, n, kind) {
		for (let i = 0; i < n; i++) {
			const a = rand(0, Math.PI * 2);
			const s = rand(40, 180);
			this.spawnP(x, y, Math.cos(a) * s, Math.sin(a) * s, rand(4, 20), color, rand(.25, .7), rand(2, 6), kind);
		}
	}
	ring(x, y, color, size) {
		this.spawnP(x, y, 0, 0, 0, color, .35, size, "ring");
	}
	slashFx(x, y, ang, range, color, heavy) {
		this.spawnP(x + Math.cos(ang) * range * .4, y + Math.sin(ang) * range * .4, 0, 0, 8, color, heavy ? .22 : .14, range, "slash");
	}
	screenToWorld(sx, sy) {
		const w = this.canvas.clientWidth || 1;
		const h = this.canvas.clientHeight || 1;
		return {
			x: (sx - w / 2) / this.cam.z + this.cam.x,
			y: (sy - h / 2) / (this.cam.z * YSCALE) + this.cam.y
		};
	}
	w2s(x, y, z = 0) {
		const shake = this.trauma * this.trauma * 18 * this.shakeMul;
		const t = this.time * 22;
		const ox = Math.sin(t) * shake;
		const oy = Math.cos(t * 1.3) * shake * .7;
		const cssW = this.canvas.width / this.dpr;
		const cssH = this.canvas.height / this.dpr;
		return {
			x: (x - this.cam.x) * this.cam.z + cssW / 2 + ox,
			y: (y - this.cam.y) * YSCALE * this.cam.z + cssH / 2 + oy - z * this.cam.z
		};
	}
	render() {
		const ctx = this.ctx;
		const w = this.canvas.width;
		const h = this.canvas.height;
		ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
		const cw = w / this.dpr;
		const ch = h / this.dpr;
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, w, h);
		ctx.save();
		ctx.scale(this.dpr, this.dpr);
		const g = ctx.createLinearGradient(0, 0, 0, ch);
		g.addColorStop(0, "#14121a");
		g.addColorStop(.45, "#0c0b10");
		g.addColorStop(1, "#08070b");
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, cw, ch);
		this.drawHorizon(ctx, cw, ch);
		this.drawGround(ctx);
		this.drawClouds(ctx);
		const drawables = [];
		for (const r of this.ruins) drawables.push({
			y: r.y + r.h,
			draw: () => this.drawRuin(ctx, r)
		});
		for (const o of this.obstacles) drawables.push({
			y: o.y,
			draw: () => this.drawPillar(ctx, o)
		});
		for (const z of this.zones) drawables.push({
			y: z.y,
			draw: () => this.drawZone(ctx, z)
		});
		for (const e of this.enemies) {
			if (e.dead) continue;
			drawables.push({
				y: e.y,
				draw: () => this.drawEnemy(ctx, e)
			});
		}
		for (const pr of this.projs) {
			if (!pr.live) continue;
			drawables.push({
				y: pr.y,
				draw: () => this.drawProj(ctx, pr)
			});
		}
		if (this.player.alive || this.player.hurtT < 2) drawables.push({
			y: this.player.y,
			draw: () => this.drawPlayer(ctx)
		});
		drawables.sort((a, b) => a.y - b.y);
		for (const d of drawables) d.draw();
		this.drawParticles(ctx);
		this.drawFloats(ctx);
		this.drawVignette(ctx, cw, ch);
		ctx.restore();
	}
	drawHorizon(ctx, cw, ch) {
		ctx.save();
		ctx.globalAlpha = .55;
		ctx.fillStyle = "#1c1a24";
		ctx.beginPath();
		ctx.moveTo(0, ch * .28);
		ctx.lineTo(cw * .18, ch * .2);
		ctx.lineTo(cw * .34, ch * .26);
		ctx.lineTo(cw * .55, ch * .16);
		ctx.lineTo(cw * .78, ch * .24);
		ctx.lineTo(cw, ch * .18);
		ctx.lineTo(cw, ch * .42);
		ctx.lineTo(0, ch * .42);
		ctx.fill();
		ctx.globalAlpha = .25;
		ctx.fillStyle = this.character.ability.color;
		ctx.beginPath();
		ctx.arc(cw * .72, ch * .16, 50, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();
	}
	drawGround(ctx) {
		const origin = this.w2s(0, 0);
		const far = this.w2s(WORLD_W, WORLD_H);
		ctx.fillStyle = "#121018";
		ctx.fillRect(origin.x, origin.y, far.x - origin.x, far.y - origin.y);
		ctx.strokeStyle = "rgba(232,228,220,0.05)";
		ctx.lineWidth = 1;
		for (let x = 0; x <= WORLD_W; x += 140) {
			const a = this.w2s(x, 0);
			const b = this.w2s(x, WORLD_H);
			ctx.beginPath();
			ctx.moveTo(a.x, a.y);
			ctx.lineTo(b.x, b.y);
			ctx.stroke();
		}
		for (let y = 0; y <= WORLD_H; y += 140) {
			const a = this.w2s(0, y);
			const b = this.w2s(WORLD_W, y);
			ctx.beginPath();
			ctx.moveTo(a.x, a.y);
			ctx.lineTo(b.x, b.y);
			ctx.stroke();
		}
		ctx.strokeStyle = "rgba(196,92,74,0.18)";
		ctx.lineWidth = 2;
		const tl = this.w2s(40, 40);
		const br = this.w2s(2960, 2260);
		ctx.strokeRect(tl.x, tl.y, br.x - tl.x, br.y - tl.y);
		for (const a of this.ambient) {
			const s = this.w2s(a.x, a.y);
			ctx.globalAlpha = a.a * (.5 + Math.sin(this.time * 1.4 + a.x) * .5);
			ctx.fillStyle = "#e8e4dc";
			ctx.beginPath();
			ctx.arc(s.x, s.y, a.s, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.globalAlpha = 1;
	}
	drawClouds(ctx) {
		ctx.fillStyle = "rgba(232,228,220,0.04)";
		for (const c of this.clouds) {
			const s = this.w2s(c.x, c.y, 80);
			ctx.beginPath();
			ctx.ellipse(s.x, s.y, c.s * .25, c.s * .08, 0, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	drawRuin(ctx, r) {
		const s = this.w2s(r.x + r.w / 2, r.y + r.h / 2);
		ctx.fillStyle = "rgba(26,24,31,0.9)";
		ctx.strokeStyle = "rgba(232,228,220,0.08)";
		ctx.lineWidth = 1;
		const bw = r.w * this.cam.z / 2;
		const bh = r.h * this.cam.z * YSCALE / 2;
		ctx.fillRect(s.x - bw, s.y - bh, bw * 2, bh * 2);
		ctx.strokeRect(s.x - bw, s.y - bh, bw * 2, bh * 2);
	}
	drawPillar(ctx, o) {
		const s = this.w2s(o.x, o.y);
		const top = this.w2s(o.x, o.y, o.h);
		ctx.fillStyle = "rgba(0,0,0,0.35)";
		ctx.beginPath();
		ctx.ellipse(s.x, s.y + 6, o.r * .7, o.r * .28, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = "#1c1a22";
		ctx.strokeStyle = "rgba(232,228,220,0.12)";
		ctx.beginPath();
		ctx.moveTo(s.x - o.r * .35, s.y);
		ctx.lineTo(top.x - o.r * .22, top.y);
		ctx.lineTo(top.x + o.r * .22, top.y);
		ctx.lineTo(s.x + o.r * .35, s.y);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}
	drawZone(ctx, z) {
		const s = this.w2s(z.x, z.y);
		const a = z.ttl / z.max;
		ctx.save();
		ctx.globalAlpha = .18 + a * .2;
		ctx.fillStyle = z.color;
		ctx.beginPath();
		ctx.ellipse(s.x, s.y, z.r * this.cam.z, z.r * this.cam.z * YSCALE, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.globalAlpha = .5;
		ctx.strokeStyle = z.color;
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.restore();
	}
	drawPlayer(ctx) {
		const p = this.player;
		const clan = CLAN_DEFS[this.character.clanId];
		const col = this.character.ability.color;
		for (const a of p.after) {
			const s = this.w2s(a.x, a.y, p.z);
			ctx.globalAlpha = a.a * .45;
			ctx.fillStyle = col;
			ctx.beginPath();
			ctx.ellipse(s.x, s.y, 12, 18, 0, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.globalAlpha = 1;
		const s = this.w2s(p.x, p.y, p.z);
		const x = s.x;
		const y = s.y;
		ctx.fillStyle = "rgba(0,0,0,0.4)";
		ctx.beginPath();
		ctx.ellipse(x, y + 16, 16, 7, 0, 0, Math.PI * 2);
		ctx.fill();
		const pulse = .55 + Math.sin(this.time * 4) * .2;
		ctx.save();
		ctx.globalCompositeOperation = "lighter";
		const aura = ctx.createRadialGradient(x, y, 4, x, y, 42);
		aura.addColorStop(0, col);
		aura.addColorStop(1, "rgba(0,0,0,0)");
		ctx.globalAlpha = .35 * pulse;
		ctx.fillStyle = aura;
		ctx.beginPath();
		ctx.arc(x, y, 42, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();
		if (p.blocking) {
			ctx.strokeStyle = "rgba(232,228,220,0.7)";
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.arc(x, y, 24, 0, Math.PI * 2);
			ctx.stroke();
		}
		ctx.save();
		ctx.translate(x, y);
		ctx.rotate(p.facing);
		ctx.fillStyle = col;
		ctx.globalAlpha = .9;
		ctx.fillRect(10, -3, 28, 6);
		ctx.restore();
		ctx.globalAlpha = 1;
		ctx.fillStyle = p.hurtT > 0 ? "#e8e4dc" : clan.color;
		ctx.beginPath();
		ctx.ellipse(x, y + 4, 9, 13, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = "#e8e4dc";
		ctx.beginPath();
		ctx.arc(x, y - 12, 7, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = clan.accent;
		ctx.beginPath();
		ctx.ellipse(x - 1, y - 16, 8, 5, -.4, 0, Math.PI);
		ctx.fill();
		if (p.atkT > 0 || p.heavyT > 0) {
			ctx.save();
			ctx.globalCompositeOperation = "lighter";
			ctx.strokeStyle = col;
			ctx.lineWidth = p.heavyT > 0 ? 4 : 2;
			ctx.globalAlpha = .8;
			ctx.beginPath();
			ctx.arc(x, y, p.heavyT > 0 ? 48 : 34, p.facing - 1, p.facing + .2);
			ctx.stroke();
			ctx.restore();
		}
	}
	drawEnemy(ctx, e) {
		const s = this.w2s(e.x, e.y);
		const x = s.x;
		const y = s.y;
		ctx.fillStyle = "rgba(0,0,0,0.35)";
		ctx.beginPath();
		ctx.ellipse(x, y + e.r * .6, e.r * .8, e.r * .3, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.save();
		if (e.flash > 0) ctx.globalAlpha = .9;
		ctx.fillStyle = e.flash > 0 ? "#e8e4dc" : e.color;
		if (e.kind === "beast") {
			ctx.beginPath();
			ctx.ellipse(x, y, e.r, e.r * .62, e.facing, 0, Math.PI * 2);
			ctx.fill();
		} else if (e.kind === "spirit") {
			ctx.globalAlpha = .75;
			ctx.beginPath();
			ctx.arc(x, y - 6, e.r, 0, Math.PI * 2);
			ctx.fill();
		} else if (e.kind === "drake" || e.boss) {
			ctx.beginPath();
			ctx.ellipse(x, y, e.r * 1.1, e.r * .7, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.beginPath();
			ctx.moveTo(x - e.r, y);
			ctx.lineTo(x - e.r * 1.4, y - e.r * .6);
			ctx.lineTo(x - e.r * .2, y - e.r * .2);
			ctx.fill();
		} else {
			ctx.beginPath();
			ctx.ellipse(x, y + 2, e.r * .55, e.r * .9, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.beginPath();
			ctx.arc(x, y - e.r * .7, e.r * .38, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.restore();
		const bw = e.r * 1.6;
		ctx.fillStyle = "rgba(0,0,0,0.5)";
		ctx.fillRect(x - bw / 2, y - e.r - 12, bw, 4);
		ctx.fillStyle = e.boss ? "#c45c4a" : "#d4c4a0";
		ctx.fillRect(x - bw / 2, y - e.r - 12, bw * clamp(e.hp / e.maxHp, 0, 1), 4);
	}
	drawProj(ctx, pr) {
		const s = this.w2s(pr.x, pr.y, 8);
		ctx.save();
		ctx.globalCompositeOperation = "lighter";
		ctx.fillStyle = pr.color;
		ctx.globalAlpha = .9;
		ctx.beginPath();
		ctx.arc(s.x, s.y, pr.r, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();
	}
	drawParticles(ctx) {
		ctx.save();
		ctx.globalCompositeOperation = "lighter";
		for (const p of this.particles) {
			if (!p.live) continue;
			const s = this.w2s(p.x, p.y, p.z);
			const a = p.life / p.max;
			ctx.globalAlpha = a;
			ctx.strokeStyle = p.color;
			ctx.fillStyle = p.color;
			if (p.kind === "ring") {
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.ellipse(s.x, s.y, p.size * (1.2 - a), p.size * (1.2 - a) * YSCALE, 0, 0, Math.PI * 2);
				ctx.stroke();
			} else if (p.kind === "slash") {
				ctx.lineWidth = 3;
				ctx.beginPath();
				ctx.arc(s.x, s.y, p.size * .45, this.player.facing - 1.2, this.player.facing + .4);
				ctx.stroke();
			} else {
				ctx.beginPath();
				ctx.arc(s.x, s.y, p.size * a, 0, Math.PI * 2);
				ctx.fill();
			}
		}
		ctx.restore();
	}
	drawFloats(ctx) {
		ctx.font = "600 12px Figtree, sans-serif";
		ctx.textAlign = "center";
		for (const f of this.floats) {
			const s = this.w2s(f.x, f.y, 24);
			ctx.globalAlpha = clamp(f.life * 2, 0, 1);
			ctx.fillStyle = f.color;
			ctx.fillText(f.text, s.x, s.y);
		}
		ctx.globalAlpha = 1;
	}
	drawVignette(ctx, cw, ch) {
		const v = ctx.createRadialGradient(cw / 2, ch / 2, cw * .2, cw / 2, ch / 2, cw * .72);
		v.addColorStop(0, "rgba(0,0,0,0)");
		v.addColorStop(1, "rgba(8,7,11,0.55)");
		ctx.fillStyle = v;
		ctx.fillRect(0, 0, cw, ch);
	}
	emitHud() {
		const boss = this.enemies.find((e) => e.boss && !e.dead) ?? null;
		this.hooks.onHud({
			hp: this.player.hp,
			maxHp: this.player.maxHp,
			energy: this.player.energy,
			maxEnergy: this.player.maxEnergy,
			xp: this.character.xp,
			xpToNext: xpToNext(this.character.level),
			level: this.character.level,
			wave: this.wave,
			score: this.score,
			coins: this.character.coins,
			combo: this.combo,
			specialCd: this.player.specialCd,
			specialMax: 4.6,
			ultCd: this.player.ultCd,
			ultMax: 15,
			dashCd: this.player.dashCd,
			dashMax: .72,
			boss: boss ? {
				name: boss.name,
				hp: boss.hp,
				maxHp: boss.maxHp,
				phase: boss.phase
			} : null,
			banner: this.banner,
			paused: this.paused,
			over: !this.player.alive,
			victoryWave: this.clearing
		});
	}
	wireControlsTest() {
		if (typeof window === "undefined") return;
		window.__controlsTest = {
			getYaw: () => this.player.facing,
			getSpeed: () => Math.hypot(this.player.vx, this.player.vy),
			getX: () => this.player.x,
			getY: () => this.player.y,
			setKeys: (codes) => this.input.setKeys(codes),
			clearKeys: () => this.input.clearInjected()
		};
	}
};
function Btn({ children, onClick, variant = "primary", disabled, className, type = "button" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		disabled,
		onClick,
		className: clsx("min-h-11 px-5 text-sm font-medium tracking-wide transition-opacity duration-150 disabled:opacity-40", variant === "primary" ? "bg-moon text-ink rounded-sm hover:opacity-90" : variant === "danger" ? "border border-ember text-ember rounded-md hover:bg-ember/10" : "border border-line text-moon rounded-md hover:bg-raised", className),
		children
	});
}
function RankMark({ rank, size = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: clsx("font-display font-semibold tabular tracking-wide", size === "xl" ? "text-5xl md:text-7xl" : size === "sm" ? "text-sm" : "text-xl"),
		style: { color: RANK_COLOR[rank] },
		children: rank
	});
}
function RarityMark({ rarity }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-xs font-medium uppercase tracking-[0.18em]",
		style: { color: RARITY_COLOR[rarity] },
		children: rarity
	});
}
function Field({ label, value, onChange, placeholder, maxLength }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-ash",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			maxLength: maxLength ?? 24,
			placeholder,
			onChange: (e) => onChange(e.target.value),
			className: "h-11 w-full rounded-md border border-line bg-raised px-3 text-moon outline-none placeholder:text-ash/60 focus:border-line-strong"
		})]
	});
}
function StatBar({ label, value, max, color }) {
	const pct = max <= 0 ? 0 : Math.max(0, Math.min(100, value / max * 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1 flex justify-between text-[11px] uppercase tracking-[0.14em] text-ash",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "tabular text-moon",
			children: [
				Math.round(value),
				"/",
				Math.round(max)
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hud-bar",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
			width: `${pct}%`,
			background: color
		} })
	})] });
}
function Panel({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: clsx("panel p-5 md:p-6", className),
		children
	});
}
function TitleScreen() {
	const character = useGameStore((s) => s.character);
	const newGame = useGameStore((s) => s.newGame);
	const continueGame = useGameStore((s) => s.continueGame);
	const setScreen = useGameStore((s) => s.setScreen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-dvh flex-col items-center justify-center px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rise-in text-xs uppercase tracking-[0.42em] text-ash",
				children: "Dark fantasy awakening"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "flare-in mt-4 font-display text-5xl font-semibold text-moon md:text-7xl",
				children: "AETHERWAKE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rise-in mt-4 max-w-md text-center text-sm text-ash",
				style: { animationDelay: "80ms" },
				children: "Three powers. One law. A rank written in the dark."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex w-full max-w-xs flex-col gap-3",
				children: [
					character && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
						onClick: continueGame,
						children: ["Continue — ", character.name]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: character ? "ghost" : "primary",
						onClick: newGame,
						children: "New Awakening"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("leaderboard"),
						children: "Leaderboard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("settings"),
						children: "Settings"
					})
				]
			}),
			character && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-xs uppercase tracking-[0.18em] text-ash",
				children: [
					character.ability.name,
					" · Rank ",
					character.rank,
					" · Lv ",
					character.level
				]
			})
		]
	});
}
function IdentityScreen() {
	const draft = useGameStore((s) => s.draft);
	const setDraft = useGameStore((s) => s.setDraft);
	const setScreen = useGameStore((s) => s.setScreen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto flex min-h-dvh max-w-5xl flex-col px-4 py-8 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "mb-6 flex min-h-11 items-center gap-2 self-start text-sm text-ash",
				onClick: () => setScreen("title"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Back"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.3em] text-ash",
				children: "Step 1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-4xl text-moon",
				children: "Name the blade"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm text-ash",
				children: "Your name and clan shape the first breath of the art."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Warrior name",
					value: draft.name,
					onChange: (name) => setDraft({ name }),
					placeholder: "Kael"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title / nickname",
					value: draft.nickname,
					onChange: (nickname) => setDraft({ nickname }),
					placeholder: "Optional"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-xs uppercase tracking-[0.18em] text-ash",
				children: "Clan"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: CLANS.map((id) => {
					const c = CLAN_DEFS[id];
					const on = draft.clanId === id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setDraft({ clanId: id });
							sfx("ui");
						},
						className: "rounded-lg border p-4 text-left transition-opacity",
						style: {
							borderColor: on ? c.color : "var(--color-line)",
							background: on ? "color-mix(in oklab, var(--color-raised) 80%, transparent)" : "transparent"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl",
									style: { color: c.color },
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] uppercase tracking-[0.14em] text-ash",
									children: c.epithet
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-ash",
								children: c.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1 text-xs text-moon/80",
								children: c.bonuses.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: b }, b))
							})
						]
					}, id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					disabled: !draft.name.trim(),
					onClick: () => setScreen("powers"),
					children: "Choose powers"
				})
			})
		]
	});
}
function PowersScreen() {
	const draft = useGameStore((s) => s.draft);
	const togglePower = useGameStore((s) => s.togglePower);
	const setScreen = useGameStore((s) => s.setScreen);
	const awaken = useGameStore((s) => s.awaken);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto flex min-h-dvh max-w-5xl flex-col px-4 py-8 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "mb-6 flex min-h-11 items-center gap-2 self-start text-sm text-ash",
				onClick: () => setScreen("identity"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Back"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs uppercase tracking-[0.3em] text-ash",
				children: [
					"Step 2 · ",
					draft.powers.length,
					"/3"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-4xl text-moon",
				children: "Bind three laws"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm text-ash",
				children: "They will not remain separate. The awakening forges a unique art from their collision."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4",
				children: POWERS.map((id) => {
					const p = POWER_DEFS[id];
					const on = draft.powers.includes(id);
					const locked = !on && draft.powers.length >= 3;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						disabled: locked,
						onClick: () => togglePower(id),
						className: "rounded-md border p-3 text-left min-h-24 disabled:opacity-35",
						style: {
							borderColor: on ? p.color : "var(--color-line)",
							boxShadow: on ? `inset 0 0 0 1px ${p.color}` : void 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1 w-8 rounded-full",
								style: { background: p.color }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-lg text-moon",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] leading-snug text-ash",
								children: p.blurb
							})
						]
					}, id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					disabled: draft.powers.length !== 3,
					onClick: awaken,
					children: "Awaken"
				})
			})
		]
	});
}
function AwakeningScreen() {
	const character = useGameStore((s) => s.character);
	const setScreen = useGameStore((s) => s.setScreen);
	const [step, setStep] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timers = [
			900,
			2200,
			3600,
			5e3
		].map((ms, i) => window.setTimeout(() => setStep(i + 1), ms));
		return () => timers.forEach(clearTimeout);
	}, []);
	(0, import_react.useEffect)(() => {
		if (step === 3) sfx("rank");
	}, [step]);
	if (!character) return null;
	const a = character.ability;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-dvh flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.4em] text-ash",
				children: "Power synchronization"
			}),
			step >= 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "flare-in mt-6 font-display text-2xl text-moon md:text-3xl",
				children: "Your powers have synchronized…"
			}),
			step >= 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flare-in mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RarityMark, { rarity: a.rarity }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl text-moon md:text-6xl",
						style: { color: a.color },
						children: a.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm uppercase tracking-[0.22em] text-ash",
						children: [
							a.type,
							" · ",
							a.element
						]
					})
				]
			}),
			step >= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise-in mt-8 grid grid-cols-3 gap-6 text-xs uppercase tracking-[0.16em] text-ash",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Rarity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-moon",
						style: { color: RARITY_COLOR[a.rarity] },
						children: a.rarity
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Power" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 tabular text-moon",
						children: a.powerLevel
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Synergy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 tabular text-moon",
						children: a.synergy
					})] })
				]
			}),
			step >= 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flare-in mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.4em] text-ash",
						children: "Power synchronization complete"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-display text-6xl md:text-8xl",
						style: { color: RANK_COLOR[character.rank] },
						children: ["RANK ", character.rank]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm uppercase tracking-[0.24em] text-ash",
						children: ["Title · ", character.title]
					})
				]
			}),
			step >= 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					onClick: () => setScreen("hub"),
					children: "Enter the world"
				})
			})
		]
	});
}
function HubScreen() {
	const c = useGameStore((s) => s.character);
	const setScreen = useGameStore((s) => s.setScreen);
	if (!c) return null;
	const stats = liveStats(c);
	const clan = CLAN_DEFS[c.clanId];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto flex min-h-dvh max-w-4xl flex-col px-4 py-10 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.3em] text-ash",
				children: clan.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-4xl text-moon",
				children: c.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-ash",
				children: c.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-end gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.16em] text-ash",
						children: "Rank"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RankMark, { rank: c.rank })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.16em] text-ash",
						children: "Level"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tabular text-2xl text-moon",
						children: c.level
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.16em] text-ash",
						children: "Power"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tabular text-2xl text-moon",
						children: stats.power
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.16em] text-ash",
						children: "Essence"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tabular text-2xl text-moon",
						children: c.coins
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-2xl",
				style: { color: c.ability.color },
				children: c.ability.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ash",
				children: c.ability.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						onClick: () => setScreen("battle"),
						children: "Enter arena"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("character"),
						children: "Character"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("abilities"),
						children: "Arts & upgrades"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("leaderboard"),
						children: "Leaderboard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("settings"),
						children: "Settings"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("title"),
						children: "Main menu"
					})
				]
			})
		]
	});
}
function CharacterScreen() {
	const c = useGameStore((s) => s.character);
	const setScreen = useGameStore((s) => s.setScreen);
	const setTitle = useGameStore((s) => s.setTitle);
	if (!c) return null;
	const stats = liveStats(c);
	const clan = CLAN_DEFS[c.clanId];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto min-h-dvh max-w-4xl px-4 py-8 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "mb-6 flex min-h-11 items-center gap-2 text-sm text-ash",
				onClick: () => setScreen("hub"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Hub"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl text-moon",
				children: c.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-ash",
				children: [
					clan.name,
					" · ",
					c.title
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-ash",
					children: "Identity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Rank",
							v: c.rank
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Level",
							v: `${c.level}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "XP",
							v: `${c.xp} / ${xpToNext(c.level)}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Highest wave",
							v: `${c.highestWave}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Bosses",
							v: `${c.bossesDefeated}`
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-ash",
					children: "Combat"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Health",
							v: `${stats.hp}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Energy",
							v: `${stats.energy}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Attack",
							v: `${stats.atk}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Defense",
							v: `${stats.def}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Speed",
							v: `${stats.spd}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Crit",
							v: `${stats.crit}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Power",
							v: `${stats.power}`
						})
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "mt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-ash",
						children: "Unique ability"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl",
						style: { color: c.ability.color },
						children: c.ability.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ash",
						children: c.ability.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs uppercase tracking-[0.14em] text-ash",
						children: [
							abilityTier(c.abilityTierIndex),
							" · ",
							c.ability.type,
							" · ",
							c.ability.element,
							" · ",
							c.ability.rarity
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: c.powerIds.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-sm border border-line px-2 py-1 text-xs uppercase tracking-[0.12em]",
							children: POWER_DEFS[id].name
						}, id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "mt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-ash",
						children: "Titles"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: c.unlockedTitles.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setTitle(t),
							className: "min-h-11 rounded-sm border px-3 text-xs uppercase tracking-[0.12em]",
							style: {
								borderColor: c.title === t ? "var(--color-moon)" : "var(--color-line)",
								color: c.title === t ? "var(--color-moon)" : "var(--color-ash)"
							},
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-[11px] text-ash",
						children: ["Still sealed: ", TITLES.filter((t) => !c.unlockedTitles.includes(t.name)).map((t) => t.name).join(" · ") || "None"]
					})
				]
			})
		]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-ash",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "tabular text-moon",
			children: v
		})]
	});
}
function ShopScreen() {
	const c = useGameStore((s) => s.character);
	const setScreen = useGameStore((s) => s.setScreen);
	const buyUpgrade = useGameStore((s) => s.buyUpgrade);
	const upgradeAbility = useGameStore((s) => s.upgradeAbility);
	if (!c) return null;
	const keys = [
		{
			key: "hp",
			label: "Health"
		},
		{
			key: "energy",
			label: "Energy"
		},
		{
			key: "atk",
			label: "Attack"
		},
		{
			key: "def",
			label: "Defense"
		},
		{
			key: "spd",
			label: "Speed"
		},
		{
			key: "crit",
			label: "Critical"
		}
	];
	const ac = ABILITY_UPGRADE_COST[c.abilityTierIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto min-h-dvh max-w-3xl px-4 py-8 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "mb-6 flex min-h-11 items-center gap-2 text-sm text-ash",
				onClick: () => setScreen("hub"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Hub"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl text-moon",
				children: "Arts & upgrades"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-ash",
				children: ["Essence ", c.coins]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-ash",
						children: "Unique art"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl",
						children: c.ability.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-ash",
						children: [abilityTier(c.abilityTierIndex), c.abilityTierIndex < 3 ? ` → ${abilityTier(c.abilityTierIndex + 1)}` : " · complete"]
					}),
					c.abilityTierIndex < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
						className: "mt-4",
						disabled: c.coins < (ac ?? 0),
						onClick: () => upgradeAbility(),
						children: [
							"Upgrade · ",
							ac,
							" essence"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-2",
				children: keys.map(({ key, label }) => {
					const lvl = c.upgrades[key];
					const cost = UPGRADE_COST[Math.min(UPGRADE_COST.length - 1, lvl)] ?? 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel-tight flex items-center justify-between gap-3 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-moon",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] uppercase tracking-[0.12em] text-ash",
							children: [
								"Rank ",
								lvl,
								"/10"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							variant: "ghost",
							disabled: lvl >= 10 || c.coins < cost,
							onClick: () => buyUpgrade(key),
							className: "min-w-28",
							children: lvl >= 10 ? "Max" : `${cost}`
						})]
					}, key);
				})
			})
		]
	});
}
function LeaderboardScreen() {
	const list = useGameStore((s) => s.leaderboard);
	const best = useGameStore((s) => s.bestScore);
	const setScreen = useGameStore((s) => s.setScreen);
	const back = useGameStore((s) => s.character) ? "hub" : "title";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto min-h-dvh max-w-3xl px-4 py-8 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "mb-6 flex min-h-11 items-center gap-2 text-sm text-ash",
				onClick: () => setScreen(back),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Back"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl text-moon",
				children: "Leaderboard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-ash",
				children: ["Personal best ", best]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[640px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-[11px] uppercase tracking-[0.14em] text-ash",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "#"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Clan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Rank"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Lv"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Wave"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Bosses"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Power"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-3 font-medium",
								children: "Score"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 9,
						className: "py-8 text-ash",
						children: "No hunts recorded yet."
					}) }), list.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 tabular text-ash",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3",
								children: e.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 capitalize text-ash",
								children: e.clan
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3",
								style: { color: RANK_COLOR[e.rank] },
								children: e.rank
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 tabular",
								children: e.level
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 tabular",
								children: e.highestWave
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 tabular",
								children: e.bossesDefeated
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 tabular",
								children: e.totalPower
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 tabular",
								children: e.score
							})
						]
					}, `${e.at}-${i}`))] })]
				})
			})
		]
	});
}
function SettingsScreen() {
	const settings = useGameStore((s) => s.settings);
	const setSettings = useGameStore((s) => s.setSettings);
	const setScreen = useGameStore((s) => s.setScreen);
	const back = useGameStore((s) => s.character) ? "hub" : "title";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto min-h-dvh max-w-lg px-4 py-8 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "mb-6 flex min-h-11 items-center gap-2 text-sm text-ash",
				onClick: () => setScreen(back),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Back"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl text-moon",
				children: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						label: "Master",
						value: settings.master,
						onChange: (master) => setSettings({ master })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						label: "Music",
						value: settings.music,
						onChange: (music) => setSettings({ music })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						label: "Effects",
						value: settings.sfx,
						onChange: (sfxV) => setSettings({ sfx: sfxV })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						label: "Screen shake",
						value: settings.shake,
						onChange: (shake) => setSettings({ shake })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: "Reduce motion"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: settings.reducedMotion,
							onChange: (e) => setSettings({ reducedMotion: e.target.checked }),
							className: "size-5 accent-ember"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-xs leading-relaxed text-ash",
				children: "Move WASD / stick · Aim mouse · J / tap slash · K heavy · Space dash · Shift block · Q special · R ultimate · Esc pause"
			})
		]
	});
}
function Slider({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mb-2 flex justify-between text-xs uppercase tracking-[0.14em] text-ash",
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular text-moon",
				children: Math.round(value * 100)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "range",
			min: 0,
			max: 1,
			step: .01,
			value,
			onChange: (e) => onChange(Number(e.target.value)),
			className: "w-full accent-moon"
		})]
	});
}
function GameOverScreen() {
	const run = useGameStore((s) => s.lastRun);
	const setScreen = useGameStore((s) => s.setScreen);
	const c = useGameStore((s) => s.character);
	if (!run || !c) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-dvh flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.3em] text-ash",
				children: "The field goes still"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-5xl text-moon",
				children: "Fallen"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid w-full max-w-sm grid-cols-2 gap-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ash",
						children: "Score"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tabular text-xl",
						children: run.score
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ash",
						children: "Wave"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tabular text-xl",
						children: run.wave
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ash",
						children: "Essence"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "tabular text-xl",
						children: ["+", run.coins]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ash",
						children: "XP"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "tabular text-xl",
						children: ["+", run.xp]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex w-full max-w-xs flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						onClick: () => setScreen("battle"),
						children: "Fight again"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("hub"),
						children: "Return to hub"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("abilities"),
						children: "Spend essence"
					})
				]
			})
		]
	});
}
function PauseMenu({ onResume, onRestart }) {
	const setScreen = useGameStore((s) => s.setScreen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-30 flex items-center justify-center bg-ink/70 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "w-full max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-3xl text-moon",
				children: "Paused"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						onClick: onResume,
						children: "Resume"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("character"),
						children: "Character"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("abilities"),
						children: "Abilities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("settings"),
						children: "Settings"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: onRestart,
						children: "Restart battle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						onClick: () => setScreen("hub"),
						children: "Main menu"
					})
				]
			})]
		})
	});
}
function BattleHudLayer({ hud, onPause, onStick, onPress, onBlockHold }) {
	const c = useGameStore((s) => s.character);
	const coarse = (0, import_react.useMemo)(() => typeof window !== "undefined" ? window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 820 : false, []);
	if (!c) return null;
	const clan = CLAN_DEFS[c.clanId];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 z-10 p-3 md:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-auto flex flex-wrap items-start justify-between gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel-tight px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-moon",
							children: c.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-[0.14em] text-ash",
							children: [
								clan.name,
								" · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: RANK_COLOR[c.rank] },
									children: c.rank
								}),
								" · Lv ",
								hud.level
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl tabular text-moon md:text-2xl",
							children: ["WAVE ", hud.wave]
						}), hud.boss && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 w-[min(68vw,420px)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-1 text-center text-xs uppercase tracking-[0.16em] text-ash",
								children: [
									hud.boss.name,
									" · Phase ",
									hud.boss.phase
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hud-bar h-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
									width: `${hud.boss.hp / hud.boss.maxHp * 100}%`,
									background: "var(--color-ember)"
								} })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel-tight px-3 py-2 text-right",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "tabular text-sm text-moon",
								children: hud.score
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-[0.14em] text-ash",
								children: [hud.coins, " essence"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "mt-1 min-h-8 text-xs uppercase tracking-[0.14em] text-ash",
								onClick: onPause,
								children: "Pause"
							})
						]
					})
				]
			}),
			hud.banner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "flare-in font-display text-3xl text-moon md:text-5xl",
					children: hud.banner
				})
			}),
			hud.combo > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "pointer-events-none mt-2 text-center font-display text-xl tabular text-moon",
				children: [hud.combo, " HIT"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 md:bottom-5 md:left-5 md:right-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-3",
					children: [coarse && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stick, { onStick }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto w-[min(46vw,240px)] space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBar, {
								label: "Health",
								value: hud.hp,
								max: hud.maxHp,
								color: "var(--color-ember)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBar, {
								label: "Energy",
								value: hud.energy,
								max: hud.maxEnergy,
								color: "#c9d4c4"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBar, {
								label: "XP",
								value: hud.xp,
								max: hud.xpToNext,
								color: "#d4c4a0"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ability, {
							keyName: "Dash",
							ready: hud.dashCd <= 0,
							onPress: () => onPress("dash")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ability, {
							keyName: "Slash",
							ready: true,
							onPress: () => onPress("attack")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ability, {
							keyName: "Heavy",
							ready: true,
							onPress: () => onPress("heavy")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ability, {
							keyName: "Block",
							ready: true,
							onPress: () => onPress("block"),
							onHold: onBlockHold
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ability, {
							keyName: "Art",
							ready: hud.specialCd <= 0,
							onPress: () => onPress("special")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ability, {
							keyName: "Ult",
							ready: hud.ultCd <= 0,
							onPress: () => onPress("ult")
						})
					]
				})]
			})
		]
	});
}
function Ability({ keyName, ready, onPress, onHold }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: "ability-btn",
		"data-ready": ready ? "true" : "false",
		onPointerDown: (e) => {
			e.preventDefault();
			onPress();
			onHold?.(true);
		},
		onPointerUp: () => onHold?.(false),
		onPointerCancel: () => onHold?.(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-[0.12em]",
			children: keyName
		})
	});
}
function Stick({ onStick }) {
	const [pos, setPos] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const move = (e) => {
		const r = e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width * 2 - 1;
		const y = (e.clientY - r.top) / r.height * 2 - 1;
		const m = Math.hypot(x, y) || 1;
		const nx = m > 1 ? x / m : x;
		const ny = m > 1 ? y / m : y;
		setPos({
			x: nx,
			y: ny
		});
		onStick(nx, ny);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto touch-stick relative size-28 rounded-full border border-line-strong bg-surface/70",
		onPointerDown: (e) => {
			e.currentTarget.setPointerCapture(e.pointerId);
			move(e);
		},
		onPointerMove: (e) => {
			if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e);
		},
		onPointerUp: () => {
			setPos({
				x: 0,
				y: 0
			});
			onStick(0, 0);
		},
		onPointerCancel: () => {
			setPos({
				x: 0,
				y: 0
			});
			onStick(0, 0);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute left-1/2 top-1/2 size-10 rounded-full bg-moon/80",
			style: { transform: `translate(calc(-50% + ${pos.x * 36}px), calc(-50% + ${pos.y * 36}px))` }
		})
	});
}
function useHydrate() {
	const hydrate = useGameStore((s) => s.hydrate);
	const ready = useGameStore((s) => s.ready);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	return ready;
}
function BattleView() {
	const canvasRef = (0, import_react.useRef)(null);
	const gameRef = (0, import_react.useRef)(null);
	const character = useGameStore((s) => s.character);
	const settings = useGameStore((s) => s.settings);
	const applyRun = useGameStore((s) => s.applyRun);
	const saveNow = useGameStore((s) => s.saveNow);
	const [hud, setHud] = (0, import_react.useState)(null);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [key, setKey] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas || !character) return;
		const game = new BattleGame(canvas, structuredClone(character), {
			onHud: (h) => setHud(h),
			onPause: () => {
				setPaused(true);
				game.setPaused(true);
			},
			onOver: (result) => {
				useGameStore.setState({ character: game.character });
				persistCharacter(game.character);
				applyRun(result);
			},
			onCharacter: (c) => {
				useGameStore.setState({ character: c });
				persistCharacter(c);
			}
		}, {
			reduced: settings.reducedMotion,
			shake: settings.shake
		});
		gameRef.current = game;
		game.start();
		const onResize = () => game.resize();
		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("resize", onResize);
			game.destroy();
			gameRef.current = null;
			saveNow();
		};
	}, [character?.createdAt, key]);
	(0, import_react.useEffect)(() => {
		gameRef.current?.setPaused(paused);
	}, [paused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-dvh w-full overflow-hidden bg-ink",
		style: { touchAction: "none" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "block h-full w-full"
			}),
			hud && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BattleHudLayer, {
				hud,
				onPause: () => {
					setPaused(true);
					gameRef.current?.setPaused(true);
				},
				onStick: (x, y) => gameRef.current?.setStick(x, y),
				onPress: (k) => gameRef.current?.press(k),
				onBlockHold: (v) => gameRef.current?.holdBlock(v)
			}),
			paused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PauseMenu, {
				onResume: () => {
					setPaused(false);
					gameRef.current?.setPaused(false);
				},
				onRestart: () => {
					setPaused(false);
					setHud(null);
					setKey((k) => k + 1);
				}
			})
		]
	});
}
function GameApp() {
	const ready = useHydrate();
	const screen = useGameStore((s) => s.screen);
	const character = useGameStore((s) => s.character);
	const saveNow = useGameStore((s) => s.saveNow);
	(0, import_react.useEffect)(() => {
		const onHide = () => {
			if (document.visibilityState === "hidden") saveNow();
			else resumeAudio();
		};
		document.addEventListener("visibilitychange", onHide);
		window.addEventListener("pagehide", saveNow);
		return () => {
			document.removeEventListener("visibilitychange", onHide);
			window.removeEventListener("pagehide", saveNow);
		};
	}, [saveNow]);
	(0, import_react.useEffect)(() => {
		const unlock = () => {
			unlockAudio();
			startMusic();
		};
		window.addEventListener("pointerdown", unlock, { once: true });
		window.addEventListener("keydown", unlock, { once: true });
		return () => {
			window.removeEventListener("pointerdown", unlock);
			window.removeEventListener("keydown", unlock);
		};
	}, []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-ink text-ash",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl text-moon",
			children: "AETHERWAKE"
		})
	});
	const accent = character ? CLAN_DEFS[character.clanId].aura : "#c45c4a";
	const battle = screen === "battle";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh overflow-x-hidden bg-ink text-moon",
		children: [!battle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, { accent }), battle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BattleView, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [
				screen === "title" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleScreen, {}),
				screen === "identity" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityScreen, {}),
				screen === "powers" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowersScreen, {}),
				screen === "awakening" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwakeningScreen, {}),
				screen === "hub" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HubScreen, {}),
				screen === "character" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharacterScreen, {}),
				screen === "abilities" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopScreen, {}),
				screen === "leaderboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderboardScreen, {}),
				screen === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsScreen, {}),
				screen === "gameover" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameOverScreen, {})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameApp, {});
}
//#endregion
export { Home as component };
