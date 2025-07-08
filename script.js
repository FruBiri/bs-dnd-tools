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
