// NPC Arrays
const firstNames = [
  "Arlo/Annie", "Hannibal/Helvetica", "Louie/Lorentia", "Kaylo/Kyla",
  "Lonnie/Lynn", "Boonie/Belle", "Gurzam/Gorlene", "Flip/Filomena",
  "Vordo/Vesta", "Markil/Marta", "Keenwit/Kora", "Silvan/Sella",
  "Jasper/Juniper", "Aldus/Alana", "Hawk/Hestia", "Kitt/Katt",
  "Tom/Tera", "Bognose/Brula", "Oldo/Oliviette", "Huzmar/Halune",
  "Dusty/Dagmar", "Soren/Solasta", "Mundin/Moonie", "Conrad/Cassidy",
  "Florian/Felicia", "Elroy/Eliza", "Willard/Willomena", "Boffin/Braila",
  "Norris/Nephree", "Angelo/Aquila", "Ira/Isabi", "Rylan/Renetta",
  "Axel/Amortia", "Poz/Pearline", "Xoran/Xera", "Duncel/Dazel",
  "Quentin/Queenie", "Boggis/Brynwith", "Yorvin/Yanna", "Rorick/Rosie"
];

const surnames = [
  "Crane", "Topps", "Rust", "Angus", "Khan", "Two-Basin", "Muntz", "Korgarten", "Hale", "Copperbottom",
  "Sinellin", "Canto", "Westgale", "Bullbrook", "Deens", "Oakenheart", "Kestrin", "Lurleaf", "Elverin", "Springstep",
  "Pepperdeen", "Winstead", "Harstop", "Everstill", "Bunce", "Nightbird", "Tippet", "Babcock", "Pond", "Saltstaff",
  "Dastrio", "Erstwhile", "Kelriss", "Samosa", "Gaul", "Starr", "Dickers", "Vidini", "Tarny", "Zabor"
];

const races = ["Elf", "Human", "Halfling", "Birdfolk", "Half-Orc", "Goblin"];

const traits = [
  "Haggard", "Plain", "Filthy", "Wine-Stained", "Flirty", "Flamboyant", "Scrawny", "Towering", "Wrinkled", "Suspicious",
  "Unkempt", "Perfumed", "Hot-Headed", "Chiseled", "Sultry", "Serene", "Sing-song", "Cryptic", "Weirdly Laughing", "Monotone",
  "Humorless", "Princely", "Scarred", "Jolly", "Rude", "Big Ol' Hat-Wearin'", "Bearded", "Near-Deaf", "Frightened", "Inquisitive",
  "Excitable", "Swaggering", "Tiny", "Young", "Motherly", "Lazy", "Drawl", "Interrupting", "Distracted", "Mumbling"
];

const professions = [
  "Vagabond", "Hunter", "Merchant", "Sailor", "Farmer", "Urchin", "Trapper", "Scout", "Tailor", "Courtier",
  "Miner", "Burglar", "Carpenter", "Innkeeper", "Fisherman", "Poacher", "Shepherd", "Hermit", "Smuggler", "Graverobber",
  "Actor", "Sellsword", "Archaeologist", "Horse Trainer", "Cultist", "Physician", "Cutpurse", "Assassin", "Gambler", "Painter",
  "Adventurer", "Minstrel", "Servant", "Fortune Teller", "Monster Slayer", "Cook", "Investigator", "Knight", "Spy", "Noble"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateNpc() {
  const firstName = getRandomItem(firstNames);
  const surname = getRandomItem(surnames);
  const race = getRandomItem(races);
  const trait = getRandomItem(traits);
  const profession = getRandomItem(professions);

  const result = `${firstName} ${surname} — a ${trait} ${race} ${profession}`;
  document.getElementById("npcResult").textContent = result;
}

document.getElementById("generateNpc").addEventListener("click", generateNpc);

// NPC Titles Arrays and functions

const titles = [
  "...the Luminous Letcher", "...the Princely Pauper", "...the Reveling Reaver", 
  "...the Voracious Vagabond", "...the Formless Fiend", "...the Sun-Scorner",
  "...the Macabre Mask", "...the Hanged Highwayman", "...the Siren's Sword",
  "...the Fist of the Foglands", "...the Herald of Hellblight", "...the Ill-fated Illusionist",
  "...the Mutinous Mercenary", "Morgrim's Mad-Dog", "...the Doom of Deltos",
  "Knight of the Serpent", "King of the Rats", "Order of Remorhaz, Adept",
  "Butcher of Sumarend", "Zealot of Vorsythe", "Witch of Darkwater",
  "Captain of Lost Lemore", "Armorer of Morgrim", "Inkmaster of Velberg",
  "Knife of Undiel", "...of the Black Chapter", "...of the Silent God",
  "...of the Forlorn Canyon", "...of the Sanguine Shore", "...of the Abyssal Stair",
  "Twice-Burned", "Stone-Heart", "Wild-Eye", "Bone-Breaker", "Worg-Tamer",
  "Shade-Speaker", "Bargain-Maker", "Slime-Charmer", "Half-Devil", "Man-Eater",
  "...the Unhurried", "...the Spiteful", "...the Impish", "...the Reckless",
  "...the Craven", "...the Bloodless", "...the Twisted", "...the Bestial",
  "...the Mad", "...the Inevitable", "...the Willful Wayfarer", "...the Seaborn Scholar",
  "Priest of the Pearl", "Investigator of Iniquities", "...the Smoldering Smuggler",
  "...the Reformed Rogue", "...the Dream-Delver", "...the Lovesick Linguist",
  "...the Heartsfire Healer", "...the Bagpiping Barbarian", "...the Tinkering Telepath",
  "...the Dispossessed Duke", "...the Nighthunter of Norr", "...the Sun-Blessed Smith",
  "...the Wizard Who Wanders", "Knight of Tulips", "Agent of the Underkings",
  "Orator of Brulane", "Mariner of Pridefall", "Architect of Hightable",
  "Voice of Cloudkeep", "Scribe of Amora", "Earl of Pridefall", "Counselor of the Seven",
  "Hero of Ballywide", "...of the Dryads Lake", "...of the Sunlarks", "...of the Eastern Isle",
  "...of the Western Woods", "...of the Crown-Keepers", "Storm-Bringer", "River-Walker",
  "Orc-Friend", "Secret-Finder", "Oath-Keeper", "Blade-Dancer", "Giant-Kin",
  "Spell-Weaver", "Flame-Queller", "True-Seer", "...the Learned", "...the Gifted",
  "...the Beautiful", "...the Loyal", "...the Generous", "...the Defender",
  "...the Dazzling", "...the Miraculous", "...the Dauntless", "...the Ancient"
];

function generateTitle() {
  const title = getRandomItem(titles);
  document.getElementById("titleResult").textContent = `${title}`;
}

document.getElementById("generateTitle").addEventListener("click", generateTitle);

// Places arrays

const settlements = [
  "Red Rock", "Keller's Branding", "Barronhill", "Fort Valor", "Coldwater", "Serendipity",
  "Greenhaven", "Nero's Rest", "Irondale", "Jonisport", "Poloni", "Naraway", "Trippletop",
  "Selmet", "Hollanoke", "Alamora", "Marrawin", "Uldover", "Nully", "Kanigonee"
];

const settlementPOIs = [
  "Gallows", "Observatory", "Arena", "Temple", "Stables", "Prison", "Amphitheater",
  "Water/Wind Mill", "Warehouse", "Brewery", "Library", "Mage's Tower", "Academy",
  "Town Common", "Cemetery", "Museum", "Tourney Grounds", "Bank", "Manor", "Town Hall / Palace"
];

const shops = [
  "Barber", "Curiosity Shop", "Tailor", "Stockyard", "Bookseller", "Fortune Teller",
  "Produce Market", "Tattooist", "Tea House", "Carpenter", "Armorer", "Butcher",
  "Outfitter", "Cobbler", "Weaponsmith", "Jeweler", "Bakery", "Alchemist", "Tannery", "Shady"
];

const taverns = [
  "The Frosty Fiddle", "The Copper Candle", "The Dancing Dragon", "The Wanton Weasel",
  "Cassie's Cardhouse", "The Tin Trumpet", "The Bucking Beaver", "The Sleeping Saint",
  "Iggy's Inn", "The Blazing Bull", "The Merry Monk", "The Jolly Junebug",
  "The Smoking Staff", "The Lovesick Lion", "The Seven Serpents", "The Crooked Count",
  "The Beached Beluga", "The Stubborn Sow", "The Jeering Djinn", "The Prickly Prince"
];

const wildsRegions = [
  "Lonely Lake", "Giants' Grave", "Castaway Cove", "Revenant River", "Cutthroat Canyon",
  "Veridian Valley", "Whispering Woods", "Bullywug Bog", "Gilded Glacier",
  "Feymaiden's Forest", "Royal Road", "Mirage Mesa", "Stinkflame Swamp",
  "Gossamer Grassland", "Shifting Shoreline", "Madman's Mountain", "Crumbling Caldera",
  "Goblins Gorge", "Singing Slopes", "Misty Moors"
];

const wildsPOIs = [
  "The Under-Geyser", "Jergin's Hole", "Sundered Keep", "The Trollstones",
  "Deva's Bridge", "Fortuna's Falls", "Featherstone Lodge", "Crimson Hot Springs",
  "Glowstone Mine", "Bargainer's Pond", "Sweetwater Cavern", "The Home of Gnome",
  "Castle Witchrot", "Miraculo's Tower", "Gristlesnoot's Lair", "Sunken Bathhouse",
  "Sycamora the Ancient", "Bluetusk Orc Camp", "Runic Monolith", "Forgotten Shrine"
];

// General random generator
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Place generators
function generateSettlement() {
  const settlement = getRandomItem(settlements);
  document.getElementById("placeResult").textContent = `Settlement: ${settlement}`;
}

function generateSettlementPOI() {
  const poi = getRandomItem(settlementPOIs);
  document.getElementById("placeResult").textContent = `Settlement POI: ${poi}`;
}

function generateShop() {
  const shop = getRandomItem(shops);
  document.getElementById("placeResult").textContent = `Shop: ${shop}`;
}

function generateTavern() {
  const tavern = getRandomItem(taverns);
  document.getElementById("placeResult").textContent = `Tavern: ${tavern}`;
}

function generateWildsRegion() {
  const region = getRandomItem(wildsRegions);
  document.getElementById("placeResult").textContent = `Wilds Region: ${region}`;
}

function generateWildsPOI() {
  const poi = getRandomItem(wildsPOIs);
  document.getElementById("placeResult").textContent = `Wilds POI: ${poi}`;
}

// Event listeners
document.getElementById("generateSettlement").addEventListener("click", generateSettlement);
document.getElementById("generateSettlementPOI").addEventListener("click", generateSettlementPOI);
document.getElementById("generateShop").addEventListener("click", generateShop);
document.getElementById("generateTavern").addEventListener("click", generateTavern);
document.getElementById("generateWildsRegion").addEventListener("click", generateWildsRegion);
document.getElementById("generateWildsPOI").addEventListener("click", generateWildsPOI);
