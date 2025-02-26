const mythologies = {
    greek: {
        name: "Greek Mythology",
        creatures: [
            // Gods - Legendary (5★)
            { name: "Zeus", rarity: "Legendary", stars: 5, mythology: "Greek", description: "King of the Gods, God of Sky and Thunder" },
            { name: "Poseidon", rarity: "Legendary", stars: 5, mythology: "Greek", description: "God of the Sea, Earthquakes, and Storms" },
            { name: "Hades", rarity: "Legendary", stars: 5, mythology: "Greek", description: "God of the Underworld and the Dead" },
            { name: "Athena", rarity: "Legendary", stars: 5, mythology: "Greek", description: "Goddess of Wisdom, War Strategy, and Crafts" },
            { name: "Apollo", rarity: "Legendary", stars: 5, mythology: "Greek", description: "God of Sun, Music, Poetry, and Prophecy" },
            { name: "Artemis", rarity: "Legendary", stars: 5, mythology: "Greek", description: "Goddess of the Hunt, Moon, and Wilderness" },
            { name: "Ares", rarity: "Legendary", stars: 5, mythology: "Greek", description: "God of War, Violence, and Bloodshed" },
            { name: "Hephaestus", rarity: "Legendary", stars: 5, mythology: "Greek", description: "God of Fire, Metalworking, and Craftsmanship" },
            { name: "Hermes", rarity: "Legendary", stars: 5, mythology: "Greek", description: "God of Commerce, Thieves, and Messenger of Gods" },
            { name: "Dionysus", rarity: "Legendary", stars: 5, mythology: "Greek", description: "God of Wine, Festivity, and Ecstasy" },

            // Divine Beings - Epic (4★)
            { name: "Pegasus", rarity: "Epic", stars: 4, mythology: "Greek", description: "The divine winged stallion" },
            { name: "Cerberus", rarity: "Epic", stars: 4, mythology: "Greek", description: "Three-headed guardian of the Underworld" },
            { name: "Hydra", rarity: "Epic", stars: 4, mythology: "Greek", description: "Many-headed serpentine monster" },
            { name: "Minotaur", rarity: "Epic", stars: 4, mythology: "Greek", description: "Half-man, half-bull creature of the labyrinth" },
            { name: "Chimera", rarity: "Epic", stars: 4, mythology: "Greek", description: "Lion-headed beast with a serpent tail" },
            { name: "Griffin", rarity: "Epic", stars: 4, mythology: "Greek", description: "Majestic eagle-lion hybrid" },
            { name: "Medusa", rarity: "Epic", stars: 4, mythology: "Greek", description: "Gorgon with snakes for hair, turns onlookers to stone" },
            { name: "Phoenix", rarity: "Epic", stars: 4, mythology: "Greek", description: "Immortal bird reborn from its own ashes" },

            // Mythical Beings - Rare (3★)
            { name: "Centaur", rarity: "Rare", stars: 3, mythology: "Greek", description: "Half-human, half-horse warrior" },
            { name: "Harpy", rarity: "Rare", stars: 3, mythology: "Greek", description: "Half-bird, half-woman creature" },
            { name: "Siren", rarity: "Rare", stars: 3, mythology: "Greek", description: "Enchanting sea creature" },
            { name: "Cyclops", rarity: "Rare", stars: 3, mythology: "Greek", description: "One-eyed giant craftsman" },
            { name: "Sphinx", rarity: "Rare", stars: 3, mythology: "Greek", description: "Riddling creature with lion's body and human head" },
            { name: "Echidna", rarity: "Rare", stars: 3, mythology: "Greek", description: "Mother of Monsters, half-woman half-snake" },
            { name: "Gorgon", rarity: "Rare", stars: 3, mythology: "Greek", description: "Snake-haired sisters of Medusa" },
            { name: "Empusa", rarity: "Rare", stars: 3, mythology: "Greek", description: "Shape-shifting female demon" },
            { name: "Lamia", rarity: "Rare", stars: 3, mythology: "Greek", description: "Child-eating female demon" },
            { name: "Graeae", rarity: "Rare", stars: 3, mythology: "Greek", description: "Three grey sisters sharing one eye" },
            { name: "Telchines", rarity: "Rare", stars: 3, mythology: "Greek", description: "Sea-demon craftsmen with magical powers" },

            // Nature Spirits - Common (2★)
            { name: "Satyr", rarity: "Common", stars: 2, mythology: "Greek", description: "Nature spirit with goat features" },
            { name: "Dryad", rarity: "Common", stars: 2, mythology: "Greek", description: "Tree nymph of the forests" },
            { name: "Naiad", rarity: "Common", stars: 2, mythology: "Greek", description: "Fresh water nymph" },
            { name: "Oceanid", rarity: "Common", stars: 2, mythology: "Greek", description: "Sea nymph daughter of Oceanus" },
            { name: "Nymph", rarity: "Common", stars: 2, mythology: "Greek", description: "Nature spirit of the wild" },
            { name: "Hesperides", rarity: "Common", stars: 2, mythology: "Greek", description: "Nymphs of the evening" },
            { name: "Aura", rarity: "Common", stars: 2, mythology: "Greek", description: "Breeze spirit" },
            { name: "Meliae", rarity: "Common", stars: 2, mythology: "Greek", description: "Ash tree nymphs" },
            { name: "Oread", rarity: "Common", stars: 2, mythology: "Greek", description: "Mountain nymph" }
        ]
    },
    norse: {
        name: "Norse Mythology",
        creatures: [
            // Gods - Legendary (5★)
            { name: "Odin", rarity: "Legendary", stars: 5, mythology: "Norse", description: "All-Father, god of wisdom, poetry, death, and magic" },
            { name: "Thor", rarity: "Legendary", stars: 5, mythology: "Norse", description: "God of thunder, lightning, storms, and strength" },
            { name: "Freya", rarity: "Legendary", stars: 5, mythology: "Norse", description: "Goddess of love, beauty, fertility, and war" },
            { name: "Loki", rarity: "Legendary", stars: 5, mythology: "Norse", description: "God of mischief, chaos, and deception" },
            { name: "Tyr", rarity: "Legendary", stars: 5, mythology: "Norse", description: "One-handed god of war, law, and justice" },
            { name: "Heimdall", rarity: "Legendary", stars: 5, mythology: "Norse", description: "All-seeing guardian of Bifrost" },
            { name: "Baldur", rarity: "Legendary", stars: 5, mythology: "Norse", description: "God of light, purity, and beauty" },
            { name: "Frigg", rarity: "Legendary", stars: 5, mythology: "Norse", description: "Queen of Asgard, goddess of foresight" },
            { name: "Freyr", rarity: "Legendary", stars: 5, mythology: "Norse", description: "God of prosperity, fertility, and sunshine" },
            { name: "Hel", rarity: "Legendary", stars: 5, mythology: "Norse", description: "Ruler of Helheim and the dishonored dead" },

            // Divine Beasts - Epic (4★)
            { name: "Jormungandr", rarity: "Epic", stars: 4, mythology: "Norse", description: "The World Serpent, encircles Midgard" },
            { name: "Fenrir", rarity: "Epic", stars: 4, mythology: "Norse", description: "The mighty wolf, son of Loki" },
            { name: "Sleipnir", rarity: "Epic", stars: 4, mythology: "Norse", description: "Odin's eight-legged steed" },
            { name: "Nidhogg", rarity: "Epic", stars: 4, mythology: "Norse", description: "Dragon that gnaws at Yggdrasil" },
            { name: "Huginn & Muninn", rarity: "Epic", stars: 4, mythology: "Norse", description: "Odin's ravens of thought and memory" },
            { name: "Garmr", rarity: "Epic", stars: 4, mythology: "Norse", description: "Blood-stained guardian of Helheim" },
            { name: "Ratatoskr", rarity: "Epic", stars: 4, mythology: "Norse", description: "Messenger squirrel of Yggdrasil" },
            { name: "Hræsvelgr", rarity: "Epic", stars: 4, mythology: "Norse", description: "Giant eagle who creates the winds" },

            // Warriors & Spirits - Rare (3★)
            { name: "Valkyrie", rarity: "Rare", stars: 3, mythology: "Norse", description: "Chooser of the slain" },
            { name: "Frost Giant", rarity: "Rare", stars: 3, mythology: "Norse", description: "Ancient being of ice and snow" },
            { name: "Dwarf Smith", rarity: "Rare", stars: 3, mythology: "Norse", description: "Master craftsman of the underground" },
            { name: "Light Elf", rarity: "Rare", stars: 3, mythology: "Norse", description: "Beautiful being of Alfheim" },
            { name: "Lindworm", rarity: "Rare", stars: 3, mythology: "Norse", description: "Serpentine dragon" },
            { name: "Draugr", rarity: "Rare", stars: 3, mythology: "Norse", description: "Undead warrior guardian" },

            // Common Spirits - Common (2★)
            { name: "Nisse", rarity: "Common", stars: 2, mythology: "Norse", description: "Household guardian spirit" },
            { name: "Tomte", rarity: "Common", stars: 2, mythology: "Norse", description: "Farm guardian gnome" },
            { name: "Landvættir", rarity: "Common", stars: 2, mythology: "Norse", description: "Land spirit protector" },
            { name: "Fylgja", rarity: "Common", stars: 2, mythology: "Norse", description: "Following spirit guardian" },
            { name: "Vetter", rarity: "Common", stars: 2, mythology: "Norse", description: "Nature spirit" },
            { name: "Hulder", rarity: "Common", stars: 2, mythology: "Norse", description: "Seductive forest creature" },
            { name: "Fossegrim", rarity: "Common", stars: 2, mythology: "Norse", description: "Waterfall musician" },
            { name: "Vardøger", rarity: "Common", stars: 2, mythology: "Norse", description: "Premonition spirit" },
            { name: "Näcken", rarity: "Common", stars: 2, mythology: "Norse", description: "Water spirit musician" }
        ]
    },
    japanese: {
        name: "Japanese Mythology",
        creatures: [
            // Major Deities - Legendary (5★)
            { name: "Amaterasu", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "Supreme sun goddess and ruler of the heavens" },
            { name: "Susanoo", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "Powerful storm god and brother of Amaterasu" },
            { name: "Tsukuyomi", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "God of the moon and night" },
            { name: "Izanagi", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "Creator god, father of many deities" },
            { name: "Izanami", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "Creator goddess, mother of gods and death" },
            { name: "Hachiman", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "God of war and archery" },
            { name: "Inari", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "God/dess of fertility, rice, and foxes" },
            { name: "Benzaiten", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "Goddess of everything that flows" },
            { name: "Raijin", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "God of thunder and lightning" },
            { name: "Fujin", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "God of wind" },

            // Divine Beings - Epic (4★)
            { name: "Dragon King", rarity: "Epic", stars: 4, mythology: "Japanese", description: "Ruler of the seas" },
            { name: "Nine-Tailed Kitsune", rarity: "Epic", stars: 4, mythology: "Japanese", description: "Ancient fox spirit" },
            { name: "Yamata no Orochi", rarity: "Epic", stars: 4, mythology: "Japanese", description: "Eight-headed serpent dragon" },
            { name: "Oni", rarity: "Epic", stars: 4, mythology: "Japanese", description: "Fearsome demon warrior" },
            { name: "Tengu", rarity: "Epic", stars: 4, mythology: "Japanese", description: "Mountain spirit" },
            { name: "Raiju", rarity: "Epic", stars: 4, mythology: "Japanese", description: "Thunder beast" },
            { name: "Yatagarasu", rarity: "Epic", stars: 4, mythology: "Japanese", description: "Three-legged crow of the sun" },
            { name: "Shisa", rarity: "Epic", stars: 4, mythology: "Japanese", description: "Lion-dog guardian deity" },

            // Spirits - Rare (3★)
            { name: "Kappa", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Water imp" },
            { name: "Nekomata", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Fork-tailed cat spirit" },
            { name: "Kodama", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Tree spirit" },
            { name: "Kasa-obake", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Umbrella spirit" },
            { name: "Karakasa", rarity: "Rare", stars: 3, mythology: "Japanese", description: "One-eyed umbrella yokai" },
            { name: "Tsukumogami", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Ancient object spirit" },
            { name: "Nure-onna", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Snake-woman who hunts by water" },
            { name: "Jorogumo", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Spider woman who entrances men" },
            { name: "Futakuchi-onna", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Woman with a second mouth" },
            { name: "Rokurokubi", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Woman with an extending neck" },
            { name: "Yuki-onna", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Snow woman who freezes travelers" },

            // Common Yokai - Common (2★)
            { name: "Tanuki", rarity: "Common", stars: 2, mythology: "Japanese", description: "Shapeshifting raccoon dog" },
            { name: "Bakeneko", rarity: "Common", stars: 2, mythology: "Japanese", description: "Mysterious cat creature" },
            { name: "Kitsune", rarity: "Common", stars: 2, mythology: "Japanese", description: "Regular fox spirit" },
            { name: "Mujina", rarity: "Common", stars: 2, mythology: "Japanese", description: "Shapeshifting badger" },
            { name: "Zashiki-warashi", rarity: "Common", stars: 2, mythology: "Japanese", description: "Child house spirit" },
            { name: "Kawauso", rarity: "Common", stars: 2, mythology: "Japanese", description: "Playful river otter spirit" },
            { name: "Baku", rarity: "Common", stars: 2, mythology: "Japanese", description: "Dream-eating spirit" },
            { name: "Kitsune-bi", rarity: "Common", stars: 2, mythology: "Japanese", description: "Fox-fire spirit" },
            { name: "Koropokkuru", rarity: "Common", stars: 2, mythology: "Japanese", description: "Tiny people of the forest" }
        ]
    },
    welsh: {
        name: "Welsh Mythology",
        creatures: [
            { name: "Y Ddraig Goch", rarity: "Legendary", stars: 5, mythology: "Welsh", description: "The Great Red Dragon, symbol of Wales" },
            { name: "Arawn", rarity: "Legendary", stars: 5, mythology: "Welsh", description: "King of the Otherworld" },
            { name: "Gwynn ap Nudd", rarity: "Legendary", stars: 5, mythology: "Welsh", description: "King of the Fairies and Wild Hunt" },
            { name: "Gwyllgi", rarity: "Epic", stars: 4, mythology: "Welsh", description: "The Dark Hound, a fearsome black dog" },
            { name: "Ceffyl Dŵr", rarity: "Epic", stars: 4, mythology: "Welsh", description: "Water horse that lures riders to their doom" },
            { name: "Afanc", rarity: "Epic", stars: 4, mythology: "Welsh", description: "Lake monster of Welsh mythology" },
            { name: "Mari Lwyd", rarity: "Epic", stars: 4, mythology: "Welsh", description: "Grey Mare, skeletal horse spirit" },
            { name: "Tylwyth Teg", rarity: "Rare", stars: 3, mythology: "Welsh", description: "Fair Folk of the Welsh hills" },
            { name: "Coblynau", rarity: "Rare", stars: 3, mythology: "Welsh", description: "Mine-dwelling knockers" },
            { name: "Gwragedd Annwn", rarity: "Rare", stars: 3, mythology: "Welsh", description: "Lake maiden spirits" },
            { name: "Pwca", rarity: "Common", stars: 2, mythology: "Welsh", description: "Shapeshifting household spirit" },
            { name: "Bwbach", rarity: "Common", stars: 2, mythology: "Welsh", description: "Friendly household spirit" },
            { name: "Gwrach y Rhibyn", rarity: "Rare", stars: 3, mythology: "Welsh", description: "Hag of the mist" },
            { name: "Morgen y Dwr", rarity: "Rare", stars: 3, mythology: "Welsh", description: "Water spirit" },
            { name: "Bwca", rarity: "Rare", stars: 3, mythology: "Welsh", description: "Household spirit" },
            { name: "Gwyllion", rarity: "Rare", stars: 3, mythology: "Welsh", description: "Mountain spirit" },
            { name: "Llamhigyn Y Dwr", rarity: "Rare", stars: 3, mythology: "Welsh", description: "Water leaper monster" },
            { name: "Ellyllon", rarity: "Common", stars: 2, mythology: "Welsh", description: "Elf-like creature" },
            { name: "Bwbachod", rarity: "Common", stars: 2, mythology: "Welsh", description: "Helpful household spirit" },
            { name: "Gwragedd Annwn", rarity: "Common", stars: 2, mythology: "Welsh", description: "Lake fairy" },
            { name: "Coblynau", rarity: "Common", stars: 2, mythology: "Welsh", description: "Mine spirit" },
            { name: "Tylwyth Teg", rarity: "Common", stars: 2, mythology: "Welsh", description: "Fair folk" }
        ]
    },
    irish: {
        name: "Irish Mythology",
        creatures: [
            { name: "Mórrígan", rarity: "Legendary", stars: 5, mythology: "Irish", description: "The Phantom Queen, goddess of fate" },
            { name: "Cú Chulainn", rarity: "Legendary", stars: 5, mythology: "Irish", description: "The Hound of Ulster" },
            { name: "Dagda", rarity: "Legendary", stars: 5, mythology: "Irish", description: "The Good God, father-figure of Irish gods" },
            { name: "Banshee", rarity: "Epic", stars: 4, mythology: "Irish", description: "Wailing woman who heralds death" },
            { name: "Dullahan", rarity: "Epic", stars: 4, mythology: "Irish", description: "Headless horseman of Irish lore" },
            { name: "Balor", rarity: "Epic", stars: 4, mythology: "Irish", description: "King of the Fomorians with the evil eye" },
            { name: "Cailleach", rarity: "Epic", stars: 4, mythology: "Irish", description: "The divine hag, winter goddess" },
            { name: "Leprechaun", rarity: "Rare", stars: 3, mythology: "Irish", description: "Mischievous fairy shoemaker" },
            { name: "Selkie", rarity: "Rare", stars: 3, mythology: "Irish", description: "Seal shapeshifter" },
            { name: "Fear Gorta", rarity: "Rare", stars: 3, mythology: "Irish", description: "The Hungry Man" },
            { name: "Púca", rarity: "Common", stars: 2, mythology: "Irish", description: "Shape-changing goblin" },
            { name: "Far Darrig", rarity: "Common", stars: 2, mythology: "Irish", description: "The Red Man, practical joker fairy" },
            { name: "Gancanagh", rarity: "Rare", stars: 3, mythology: "Irish", description: "Love-talking fairy" },
            { name: "Sluagh", rarity: "Rare", stars: 3, mythology: "Irish", description: "Restless spirit host" },
            { name: "Merrow", rarity: "Rare", stars: 3, mythology: "Irish", description: "Sea-maiden" },
            { name: "Abhartach", rarity: "Rare", stars: 3, mythology: "Irish", description: "Undead dwarf vampire" },
            { name: "Aos Sí", rarity: "Common", stars: 2, mythology: "Irish", description: "Fairy folk" },
            { name: "Changeling", rarity: "Common", stars: 2, mythology: "Irish", description: "Fairy substitute" },
            { name: "Grogoch", rarity: "Common", stars: 2, mythology: "Irish", description: "Helpful hairy spirit" },
            { name: "Fear Dearg", rarity: "Common", stars: 2, mythology: "Irish", description: "Red man of the fairy mounds" },
            { name: "Leipreachán", rarity: "Common", stars: 2, mythology: "Irish", description: "Small fairy craftsman" }
        ]
    },
    breton: {
        name: "Breton Mythology",
        creatures: [
            // Major Deities - Legendary (5★)
            { name: "Ankou", rarity: "Legendary", stars: 5, mythology: "Breton", description: "Personification of death" },
            { name: "Morgen", rarity: "Legendary", stars: 5, mythology: "Breton", description: "Powerful water fairy" },
            { name: "Dahut", rarity: "Legendary", stars: 5, mythology: "Breton", description: "Princess of the sunken city of Ys" },
            { name: "Groac'h Vor", rarity: "Legendary", stars: 5, mythology: "Breton", description: "Great witch of the sea" },
            { name: "Korrigan Queen", rarity: "Legendary", stars: 5, mythology: "Breton", description: "Queen of the fairy folk" },

            // Divine Beings - Epic (4★)
            { name: "Bugul Noz", rarity: "Epic", stars: 4, mythology: "Breton", description: "Night Shepherd spirit" },
            { name: "Korrigan", rarity: "Epic", stars: 4, mythology: "Breton", description: "Beautiful fairy-like creature" },
            { name: "Mourioche", rarity: "Epic", stars: 4, mythology: "Breton", description: "Black mare spirit" },
            { name: "Nain Rouge", rarity: "Epic", stars: 4, mythology: "Breton", description: "Red dwarf harbinger" },
            { name: "Morvarc'h", rarity: "Epic", stars: 4, mythology: "Breton", description: "Magical sea horse" },
            { name: "Tad Kozh", rarity: "Epic", stars: 4, mythology: "Breton", description: "Ancient guardian spirit" },

            // Spirits - Rare (3★)
            { name: "Yan-gant-y-tan", rarity: "Rare", stars: 3, mythology: "Breton", description: "Night wanderer with burning eyes" },
            { name: "Kannerez Noz", rarity: "Rare", stars: 3, mythology: "Breton", description: "Night washerwoman" },
            { name: "Groac'h", rarity: "Rare", stars: 3, mythology: "Breton", description: "Lake fairy witch" },
            { name: "Laerez Noz", rarity: "Rare", stars: 3, mythology: "Breton", description: "Night thief spirit" },
            { name: "Morbleu", rarity: "Rare", stars: 3, mythology: "Breton", description: "Blue sea spirit" },
            { name: "Dre-Izen", rarity: "Rare", stars: 3, mythology: "Breton", description: "Thorny forest spirit" },

            // Common Spirits - Common (2★)
            { name: "Teuz", rarity: "Common", stars: 2, mythology: "Breton", description: "Household brownie spirit" },
            { name: "Poulpiquet", rarity: "Common", stars: 2, mythology: "Breton", description: "Mischievous fairy" },
            { name: "Kornigou", rarity: "Common", stars: 2, mythology: "Breton", description: "Little corner dweller" },
            { name: "Kerrighed", rarity: "Common", stars: 2, mythology: "Breton", description: "Stone circle guardian" },
            { name: "Boudic", rarity: "Common", stars: 2, mythology: "Breton", description: "Friendly house spirit" }
        ]
    },
    cornish: {
        name: "Cornish Mythology",
        creatures: [
            // Major Beings - Legendary (5★)
            { name: "Bucca", rarity: "Legendary", stars: 5, mythology: "Cornish", description: "Ancient sea spirit" },
            { name: "Morgawr", rarity: "Legendary", stars: 5, mythology: "Cornish", description: "Sea monster of Cornish waters" },
            { name: "Tregeagle", rarity: "Legendary", stars: 5, mythology: "Cornish", description: "The howling spirit of evil" },
            { name: "Giant Bolster", rarity: "Legendary", stars: 5, mythology: "Cornish", description: "Giant of St Agnes" },
            { name: "Cormoran", rarity: "Legendary", stars: 5, mythology: "Cornish", description: "Giant of St Michael's Mount" },

            // Powerful Beings - Epic (4★)
            { name: "Knocker", rarity: "Epic", stars: 4, mythology: "Cornish", description: "Mine-dwelling spirit" },
            { name: "Jack o' Lantern", rarity: "Epic", stars: 4, mythology: "Cornish", description: "Mysterious light that leads travelers astray" },
            { name: "Owlman", rarity: "Epic", stars: 4, mythology: "Cornish", description: "Winged creature of Mawnan" },
            { name: "Mermaid of Zennor", rarity: "Epic", stars: 4, mythology: "Cornish", description: "Beautiful sea enchantress" },
            { name: "Whooper", rarity: "Epic", stars: 4, mythology: "Cornish", description: "Warning spirit of death" },
            { name: "Beast of Bodmin", rarity: "Epic", stars: 4, mythology: "Cornish", description: "Mysterious big cat" },

            // Spirits - Rare (3★)
            { name: "Spriggan", rarity: "Rare", stars: 3, mythology: "Cornish", description: "Guardian of ancient treasures" },
            { name: "Pobel Vean", rarity: "Rare", stars: 3, mythology: "Cornish", description: "Little people of the hills" },
            { name: "Bucca Dhu", rarity: "Rare", stars: 3, mythology: "Cornish", description: "Dark spirit of storms" },
            { name: "Piskey", rarity: "Rare", stars: 3, mythology: "Cornish", description: "Mischievous fairy" },
            { name: "Hooper", rarity: "Rare", stars: 3, mythology: "Cornish", description: "Cooper spirit of mines" },
            { name: "Bucca Gwidden", rarity: "Rare", stars: 3, mythology: "Cornish", description: "White benevolent spirit" },

            // Common Spirits - Common (2★)
            { name: "Pixie", rarity: "Common", stars: 2, mythology: "Cornish", description: "Mischievous fairy creature" },
            { name: "Joan the Wad", rarity: "Common", stars: 2, mythology: "Cornish", description: "Queen of the Pixies" },
            { name: "Tommy Knocker", rarity: "Common", stars: 2, mythology: "Cornish", description: "Mine spirit guide" },
            { name: "Browney", rarity: "Common", stars: 2, mythology: "Cornish", description: "Helpful household spirit" },
            { name: "Wisht Hound", rarity: "Common", stars: 2, mythology: "Cornish", description: "Spectral black dog" }
        ]
    },
    cantabrian: {
        name: "Cantabrian Mythology",
        creatures: [
            // Major Beings - Legendary (5★)
            { name: "Cuélebre", rarity: "Legendary", stars: 5, mythology: "Cantabrian", description: "Winged serpent guardian of treasures" },
            { name: "Ojáncanu", rarity: "Legendary", stars: 5, mythology: "Cantabrian", description: "Giant cyclops of the mountains" },
            { name: "Anjana Reina", rarity: "Legendary", stars: 5, mythology: "Cantabrian", description: "Queen of the fairy nymphs" },
            { name: "Culebre Mayor", rarity: "Legendary", stars: 5, mythology: "Cantabrian", description: "Elder dragon of the caves" },
            { name: "Señora de la Montaña", rarity: "Legendary", stars: 5, mythology: "Cantabrian", description: "Lady of the Mountain" },

            // Powerful Beings - Epic (4★)
            { name: "Anjana", rarity: "Epic", stars: 4, mythology: "Cantabrian", description: "Beautiful fairy nymph" },
            { name: "Trasgu", rarity: "Epic", stars: 4, mythology: "Cantabrian", description: "Domestic goblin trickster" },
            { name: "Caballucos del Diablo", rarity: "Epic", stars: 4, mythology: "Cantabrian", description: "Devil's horses" },
            { name: "Ramidreju", rarity: "Epic", stars: 4, mythology: "Cantabrian", description: "Weasel-dragon hybrid" },
            { name: "Ojáncana", rarity: "Epic", stars: 4, mythology: "Cantabrian", description: "Female mountain giant" },
            { name: "Guardián del Bosque", rarity: "Epic", stars: 4, mythology: "Cantabrian", description: "Forest guardian spirit" },

            // Spirits - Rare (3★)
            { name: "Ventolín", rarity: "Rare", stars: 3, mythology: "Cantabrian", description: "Wind spirit of the valleys" },
            { name: "Musgosu", rarity: "Rare", stars: 3, mythology: "Cantabrian", description: "Moss-covered forest spirit" },
            { name: "Sirenuca", rarity: "Rare", stars: 3, mythology: "Cantabrian", description: "Small mountain siren" },
            { name: "Pataricu", rarity: "Rare", stars: 3, mythology: "Cantabrian", description: "Guardian of hidden treasures" },
            { name: "Tentiruju", rarity: "Rare", stars: 3, mythology: "Cantabrian", description: "Red-capped forest dweller" },
            { name: "Trenti Maligno", rarity: "Rare", stars: 3, mythology: "Cantabrian", description: "Malicious house spirit" },

            // Common Spirits - Common (2★)
            { name: "Tentirujo", rarity: "Common", stars: 2, mythology: "Cantabrian", description: "Forest dwelling imp" },
            { name: "Trenti", rarity: "Common", stars: 2, mythology: "Cantabrian", description: "House guardian spirit" },
            { name: "Duendecillo", rarity: "Common", stars: 2, mythology: "Cantabrian", description: "Little goblin" },
            { name: "Espumeru", rarity: "Common", stars: 2, mythology: "Cantabrian", description: "Foam sprite of the coast" },
            { name: "Trasno", rarity: "Common", stars: 2, mythology: "Cantabrian", description: "Mischievous household spirit" }
        ]
    },
    gaelic: {
        name: "Gaelic Mythology",
        creatures: [
            { name: "Cailleach", rarity: "Legendary", stars: 5, mythology: "Gaelic", description: "Divine creator and weather goddess" },
            { name: "Each Uisge", rarity: "Legendary", stars: 5, mythology: "Gaelic", description: "Dangerous water horse" },
            { name: "Beira", rarity: "Legendary", stars: 5, mythology: "Gaelic", description: "Queen of Winter" },
            { name: "Selkie", rarity: "Epic", stars: 4, mythology: "Gaelic", description: "Seal-folk shapeshifter" },
            { name: "Blue Men", rarity: "Epic", stars: 4, mythology: "Gaelic", description: "Storm-raising sea creatures" },
            { name: "Fachan", rarity: "Epic", stars: 4, mythology: "Gaelic", description: "One-eyed, one-legged monster" },
            { name: "Kelpie", rarity: "Epic", stars: 4, mythology: "Gaelic", description: "Shape-shifting water spirit" },
            { name: "Cat Sìth", rarity: "Rare", stars: 3, mythology: "Gaelic", description: "Fairy cat of the Highlands" },
            { name: "Glaistig", rarity: "Rare", stars: 3, mythology: "Gaelic", description: "Water spirit and vampire" },
            { name: "Fuath", rarity: "Rare", stars: 3, mythology: "Gaelic", description: "Malevolent water spirit" },
            { name: "Brownie", rarity: "Common", stars: 2, mythology: "Gaelic", description: "Helpful household spirit" },
            { name: "Gruagach", rarity: "Common", stars: 2, mythology: "Gaelic", description: "Long-haired fairy" }
        ]
    },
    egyptian: {
        name: "Egyptian Mythology",
        creatures: [
            // Major Gods - Legendary (5★)
            { name: "Ra", rarity: "Legendary", stars: 5, mythology: "Egyptian", description: "Supreme sun god, creator of all life" },
            { name: "Osiris", rarity: "Legendary", stars: 5, mythology: "Egyptian", description: "God of death, resurrection, and fertility" },
            { name: "Isis", rarity: "Legendary", stars: 5, mythology: "Egyptian", description: "Goddess of magic, motherhood, and healing" },
            { name: "Horus", rarity: "Legendary", stars: 5, mythology: "Egyptian", description: "God of the sky, kingship, and protection" },
            { name: "Anubis", rarity: "Legendary", stars: 5, mythology: "Egyptian", description: "God of mummification and the afterlife" },
            { name: "Thoth", rarity: "Legendary", stars: 5, mythology: "Egyptian", description: "God of wisdom, writing, and the moon" },
            { name: "Sekhmet", rarity: "Legendary", stars: 5, mythology: "Egyptian", description: "Goddess of war, fire, and vengeance" },
            { name: "Bastet", rarity: "Legendary", stars: 5, mythology: "Egyptian", description: "Goddess of cats, protection, and pleasure" },
            { name: "Set", rarity: "Legendary", stars: 5, mythology: "Egyptian", description: "God of chaos, storms, and the desert" },
            { name: "Hathor", rarity: "Legendary", stars: 5, mythology: "Egyptian", description: "Goddess of love, beauty, and music" },

            // Divine Beings - Epic (4★)
            { name: "Sphinx", rarity: "Epic", stars: 4, mythology: "Egyptian", description: "Legendary creature with human head and lion body" },
            { name: "Ammit", rarity: "Epic", stars: 4, mythology: "Egyptian", description: "Devourer of impure souls" },
            { name: "Wadjet", rarity: "Epic", stars: 4, mythology: "Egyptian", description: "Protective cobra goddess" },
            { name: "Nephthys", rarity: "Epic", stars: 4, mythology: "Egyptian", description: "Goddess of death and protection" },
            { name: "Taweret", rarity: "Epic", stars: 4, mythology: "Egyptian", description: "Hippo goddess of childbirth" },
            { name: "Khnum", rarity: "Epic", stars: 4, mythology: "Egyptian", description: "Ram-headed creator god" },
            { name: "Sobek", rarity: "Epic", stars: 4, mythology: "Egyptian", description: "Crocodile god of the Nile" },
            { name: "Bennu", rarity: "Epic", stars: 4, mythology: "Egyptian", description: "Phoenix-like bird of creation" },

            // Sacred Creatures - Rare (3★)
            { name: "Apis Bull", rarity: "Rare", stars: 3, mythology: "Egyptian", description: "Sacred bull of Memphis" },
            { name: "Serpopard", rarity: "Rare", stars: 3, mythology: "Egyptian", description: "Serpent-necked leopard" },
            { name: "Khepri", rarity: "Rare", stars: 3, mythology: "Egyptian", description: "Sacred scarab beetle" },
            { name: "Medjed", rarity: "Rare", stars: 3, mythology: "Egyptian", description: "Mysterious smiter god" },
            { name: "Uraeus", rarity: "Rare", stars: 3, mythology: "Egyptian", description: "Royal cobra symbol" },
            { name: "Ba Bird", rarity: "Rare", stars: 3, mythology: "Egyptian", description: "Soul bird of the deceased" },
            { name: "Mafdet", rarity: "Rare", stars: 3, mythology: "Egyptian", description: "Justice bringer feline" },
            { name: "Heqet", rarity: "Rare", stars: 3, mythology: "Egyptian", description: "Frog goddess of fertility" },
            { name: "Serket", rarity: "Rare", stars: 3, mythology: "Egyptian", description: "Scorpion goddess of healing" },
            { name: "Kebechet", rarity: "Rare", stars: 3, mythology: "Egyptian", description: "Serpent goddess of purification" },

            // Common Spirits - Common (2★)
            { name: "Sacred Cat", rarity: "Common", stars: 2, mythology: "Egyptian", description: "Divine feline guardian" },
            { name: "Desert Spirit", rarity: "Common", stars: 2, mythology: "Egyptian", description: "Wandering sand entity" },
            { name: "River Spirit", rarity: "Common", stars: 2, mythology: "Egyptian", description: "Nile water guardian" },
            { name: "Tomb Guardian", rarity: "Common", stars: 2, mythology: "Egyptian", description: "Protector of burial chambers" },
            { name: "Ka Spirit", rarity: "Common", stars: 2, mythology: "Egyptian", description: "Life force entity" },
            { name: "Pyramid Keeper", rarity: "Common", stars: 2, mythology: "Egyptian", description: "Ancient structure guardian" },
            { name: "Temple Servant", rarity: "Common", stars: 2, mythology: "Egyptian", description: "Sacred place protector" },
            { name: "Oasis Sprite", rarity: "Common", stars: 2, mythology: "Egyptian", description: "Desert water spirit" },
            { name: "Sand Wraith", rarity: "Common", stars: 2, mythology: "Egyptian", description: "Desert wind spirit" }
        ]
    }
};

let currentMythology = 'greek';
let gems = 100;
const summonCost = 10;
const collection = [];

// Add this at the top with other global variables
let nextCreatureId = 1;

// Update the HTML to add mythology selection
document.querySelector('.summon-section').innerHTML = `
    <div class="mythology-selector">
        <h3>Select Mythology</h3>
        <div class="mythology-buttons">
            ${Object.keys(mythologies).map(myth => `
                <button class="mythology-btn ${myth === currentMythology ? 'active' : ''}" 
                        data-mythology="${myth}">
                    ${mythologies[myth].name}
                </button>
            `).join('')}
        </div>
    </div>
    <button id="summonBtn" class="summon-button">Summon Creature</button>
    <div id="summonAnimation" class="summon-animation"></div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('startScreen');
    const gameContainer = document.getElementById('gameContainer');
    const pullBtn = document.getElementById('pullBtn');
    const collectionBtn = document.getElementById('collectionBtn');
    const summonBtn = document.getElementById('summonBtn');
    const gemCount = document.getElementById('gemCount');
    const summonAnimation = document.getElementById('summonAnimation');
    
    updateGemCount();
    
    // Show/hide sections function
    function showSection(section) {
        startScreen.style.opacity = '0';
        startScreen.style.transition = 'opacity 0.5s ease-out';
        
        setTimeout(() => {
            startScreen.style.display = 'none';
            gameContainer.style.display = 'block';
            gameContainer.style.opacity = '0';
            
            // Show/hide relevant sections based on button clicked
            document.querySelector('.summon-section').style.display = 
                section === 'pull' ? 'block' : 'none';
            document.querySelector('.collection-section').style.display = 
                section === 'collection' ? 'block' : 'none';
            
            // Trigger reflow
            void gameContainer.offsetWidth;
            
            gameContainer.style.opacity = '1';
            gameContainer.style.transition = 'opacity 0.5s ease-in';
        }, 500);
    }
    
    // Add click handlers for menu buttons
    pullBtn.addEventListener('click', () => showSection('pull'));
    collectionBtn.addEventListener('click', () => showSection('collection'));
    
    // Add a back button to return to menu
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.innerHTML = '← Back to Menu';
    gameContainer.insertBefore(backButton, gameContainer.firstChild);
    
    backButton.addEventListener('click', () => {
        gameContainer.style.opacity = '0';
        gameContainer.style.transition = 'opacity 0.5s ease-out';
        
        setTimeout(() => {
            gameContainer.style.display = 'none';
            startScreen.style.display = 'flex';
            startScreen.style.opacity = '0';
            
            // Trigger reflow
            void startScreen.offsetWidth;
            
            startScreen.style.opacity = '1';
            startScreen.style.transition = 'opacity 0.5s ease-in';
        }, 500);
    });
    
    // Add mythology button listeners
    document.querySelectorAll('.mythology-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentMythology = btn.dataset.mythology;
            document.querySelectorAll('.mythology-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    summonBtn.addEventListener('click', () => {
        if (gems >= summonCost) {
            gems -= summonCost;
            updateGemCount();
            summon();
        } else {
            alert('Not enough gems!');
        }
    });
    
    function summon() {
        const roll = Math.random() * 100;
        let summonedCreature;
        
        if (roll < 5) {
            summonedCreature = getRandomCreature("Legendary");
        } else if (roll < 20) {
            summonedCreature = getRandomCreature("Epic");
        } else if (roll < 50) {
            summonedCreature = getRandomCreature("Rare");
        } else {
            summonedCreature = getRandomCreature("Common");
        }
        
        collection.push(summonedCreature);
        showSummonAnimation(summonedCreature);
        updateCollection();
    }
    
    function getRandomCreature(rarity) {
        const mythologyCreatures = mythologies[currentMythology].creatures;
        const rarityCreatures = mythologyCreatures.filter(c => c.rarity === rarity);
        return rarityCreatures.length > 0 
            ? rarityCreatures[Math.floor(Math.random() * rarityCreatures.length)]
            : mythologyCreatures[Math.floor(Math.random() * mythologyCreatures.length)];
    }
    
    function showSummonAnimation(creature) {
        summonAnimation.className = 'summon-animation';
        void summonAnimation.offsetWidth;
        summonAnimation.className = 'summon-animation active';
        
        // Create magical particles
        createParticles();
        
        setTimeout(() => {
            summonAnimation.className = 'summon-animation';
            
            // Create and show the pulled card
            const pulledCard = document.createElement('div');
            pulledCard.className = 'creature-card pulled-card';
            
            // Create border element
            const borderDiv = document.createElement('div');
            borderDiv.className = 'card-border';
            pulledCard.appendChild(borderDiv);
            
            pulledCard.innerHTML += `
                <h3>${creature.name}</h3>
                <p class="rarity ${creature.rarity}">${creature.rarity}</p>
                <p class="stars">${'★'.repeat(creature.stars)}${'☆'.repeat(5-creature.stars)}</p>
                <p class="mythology">From ${creature.mythology} Mythology</p>
                <p class="description">${creature.description}</p>
            `;
            
            // Add rarity-specific effects
            switch(creature.rarity) {
                case 'Legendary':
                    pulledCard.style.background = `linear-gradient(145deg, 
                        rgba(255, 215, 0, 0.15), 
                        rgba(255, 215, 0, 0.05))`;
                    pulledCard.style.boxShadow = '0 8px 32px rgba(255, 215, 0, 0.2)';
                    break;
                case 'Epic':
                    pulledCard.style.background = `linear-gradient(145deg, 
                        rgba(255, 0, 255, 0.15), 
                        rgba(255, 0, 255, 0.05))`;
                    pulledCard.style.boxShadow = '0 8px 32px rgba(255, 0, 255, 0.2)';
                    break;
                case 'Rare':
                    pulledCard.style.background = `linear-gradient(145deg, 
                        rgba(0, 255, 255, 0.15), 
                        rgba(0, 255, 255, 0.05))`;
                    break;
            }
            
            // Clear previous pulled card if exists
            const previousCard = document.querySelector('.pulled-card');
            if (previousCard) {
                previousCard.remove();
            }
            
            // Add the new pulled card
            summonAnimation.parentElement.appendChild(pulledCard);
        }, 1000);
    }
    
    function createParticles() {
        const particles = document.createElement('div');
        particles.className = 'particles';
        for(let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.setProperty('--delay', `${Math.random() * 2}s`);
            particle.style.setProperty('--rotation', `${Math.random() * 360}deg`);
            particles.appendChild(particle);
        }
        summonAnimation.appendChild(particles);
        setTimeout(() => particles.remove(), 2000);
    }
    
    function updateCollection() {
        const collectionDiv = document.getElementById('collection');
        collectionDiv.innerHTML = '';
        
        // Create container for all mythologies
        const mythologyContainer = document.createElement('div');
        mythologyContainer.className = 'mythology-container';
        collectionDiv.appendChild(mythologyContainer);

        // Sort and group collection as before...
        const sortedCollection = [...collection].sort((a, b) => {
            if (a.mythology !== b.mythology) {
                return a.mythology.localeCompare(b.mythology);
            }
            const rarityOrder = {
                'Legendary': 0,
                'Epic': 1,
                'Rare': 2,
                'Common': 3
            };
            if (rarityOrder[a.rarity] !== rarityOrder[b.rarity]) {
                return rarityOrder[a.rarity] - rarityOrder[b.rarity];
            }
            return a.name.localeCompare(b.name);
        });

        // Add unique IDs to each creature if they don't have one
        collection.forEach((creature) => {
            if (!creature.id) {
                creature.id = nextCreatureId++;
            }
        });

        const groupedByMythology = sortedCollection.reduce((groups, creature) => {
            if (!groups[creature.mythology]) {
                groups[creature.mythology] = [];
            }
            groups[creature.mythology].push(creature);
            return groups;
        }, {});

        // Create sections for each mythology
        Object.entries(groupedByMythology).forEach(([mythology, creatures]) => {
            const mythologySection = document.createElement('div');
            mythologySection.className = 'mythology-section';
            
            const mythologyHeader = document.createElement('div');
            mythologyHeader.className = 'mythology-header';
            mythologyHeader.innerHTML = `
                <h2>${mythology} Mythology</h2>
                <p class="creature-count">${creatures.length} creatures</p>
            `;
            mythologySection.appendChild(mythologyHeader);

            creatures.forEach(creature => {
                const card = document.createElement('div');
                card.className = 'creature-card';
                if (sortedCollection.indexOf(creature) === collection.length - 1) {
                    card.classList.add('new');
                }
                
                const borderDiv = document.createElement('div');
                borderDiv.className = 'card-border';
                card.appendChild(borderDiv);
                
                card.innerHTML += `
                    <h3>${creature.name}</h3>
                    <p class="rarity ${creature.rarity}">${creature.rarity}</p>
                    <p class="stars">${'★'.repeat(creature.stars)}${'☆'.repeat(5-creature.stars)}</p>
                    <p class="mythology">From ${creature.mythology} Mythology</p>
                    <p class="description">${creature.description}</p>
                `;
                
                // Add rarity-specific effects
                switch(creature.rarity) {
                    case 'Legendary':
                        card.style.background = `linear-gradient(145deg, 
                            rgba(255, 215, 0, 0.15), 
                            rgba(255, 215, 0, 0.05))`;
                        card.style.boxShadow = '0 8px 32px rgba(255, 215, 0, 0.2)';
                        break;
                    case 'Epic':
                        card.style.background = `linear-gradient(145deg, 
                            rgba(255, 0, 255, 0.15), 
                            rgba(255, 0, 255, 0.05))`;
                        card.style.boxShadow = '0 8px 32px rgba(255, 0, 255, 0.2)';
                        break;
                    case 'Rare':
                        card.style.background = `linear-gradient(145deg, 
                            rgba(0, 255, 255, 0.15), 
                            rgba(0, 255, 255, 0.05))`;
                        break;
                }
                
                mythologySection.appendChild(card);
            });

            mythologyContainer.appendChild(mythologySection);
        });
    }
    
    function updateGemCount() {
        gemCount.textContent = gems;
    }

    // Add this after your other initialization code
    function initDevConsole() {
        const devConsole = document.getElementById('devConsole');
        const closeConsole = document.getElementById('closeConsole');
        const consoleLog = document.querySelector('.console-log');
        
        // Toggle console with = key
        document.addEventListener('keydown', (e) => {
            if (e.key === '=' || e.key === '+') {
                devConsole.style.display = devConsole.style.display === 'none' ? 'block' : 'none';
            }
        });
        
        // Close button
        closeConsole.addEventListener('click', () => {
            devConsole.style.display = 'none';
        });
        
        // Console commands
        const consoleCommands = {
            addGems: () => {
                gems += 1000;
                updateGemCount();
                logToConsole('Added 1000 gems');
            },
            addLegendary: () => {
                const mythologyKeys = Object.keys(mythologies);
                const randomMythology = mythologyKeys[Math.floor(Math.random() * mythologyKeys.length)];
                const legendaries = mythologies[randomMythology].creatures.filter(c => c.rarity === 'Legendary');
                const creature = legendaries[Math.floor(Math.random() * legendaries.length)];
                collection.push(creature);
                updateCollection();
                logToConsole(`Added legendary creature: ${creature.name}`);
            },
            clearCollection: () => {
                if (confirm('Are you sure you want to clear your collection?')) {
                    collection.length = 0;
                    updateCollection();
                    logToConsole('Collection cleared');
                }
            },
            addAllCreatures: () => {
                Object.values(mythologies).forEach(mythology => {
                    mythology.creatures.forEach(creature => {
                        collection.push({...creature});
                    });
                });
                updateCollection();
                logToConsole('Added all creatures to collection');
            }
        };
        
        // Add command listeners
        document.querySelectorAll('.console-buttons button').forEach(button => {
            button.addEventListener('click', () => {
                const command = button.dataset.command;
                if (consoleCommands[command]) {
                    consoleCommands[command]();
                }
            });
        });
        
        function logToConsole(message, type = 'success') {
            const p = document.createElement('p');
            p.className = type;
            p.textContent = `> ${message}`;
            consoleLog.appendChild(p);
            consoleLog.scrollTop = consoleLog.scrollHeight;
        }
    }

    // Call this after your DOM content loaded
    initDevConsole();
}); 