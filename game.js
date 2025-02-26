const mythologies = {
    greek: {
        name: "Greek Mythology",
        creatures: [
            { name: "Zeus Dragon", rarity: "Legendary", stars: 5, mythology: "Greek", description: "A divine dragon blessed by Zeus himself" },
            { name: "Pegasus", rarity: "Legendary", stars: 5, mythology: "Greek", description: "The divine winged stallion" },
            { name: "Cerberus", rarity: "Legendary", stars: 5, mythology: "Greek", description: "Three-headed guardian of the Underworld" },
            { name: "Hydra", rarity: "Epic", stars: 4, mythology: "Greek", description: "Many-headed serpentine monster" },
            { name: "Minotaur", rarity: "Epic", stars: 4, mythology: "Greek", description: "Half-man, half-bull creature of the labyrinth" },
            { name: "Chimera", rarity: "Epic", stars: 4, mythology: "Greek", description: "Lion-headed beast with a serpent tail" },
            { name: "Griffin", rarity: "Epic", stars: 4, mythology: "Greek", description: "Majestic eagle-lion hybrid" },
            { name: "Centaur", rarity: "Rare", stars: 3, mythology: "Greek", description: "Half-human, half-horse warrior" },
            { name: "Harpy", rarity: "Rare", stars: 3, mythology: "Greek", description: "Half-bird, half-woman creature" },
            { name: "Siren", rarity: "Rare", stars: 3, mythology: "Greek", description: "Enchanting sea creature" },
            { name: "Satyr", rarity: "Common", stars: 2, mythology: "Greek", description: "Nature spirit with goat features" },
            { name: "Dryad", rarity: "Common", stars: 2, mythology: "Greek", description: "Tree nymph of the forests" }
        ]
    },
    norse: {
        name: "Norse Mythology",
        creatures: [
            { name: "Jormungandr", rarity: "Legendary", stars: 5, mythology: "Norse", description: "The World Serpent" },
            { name: "Fenrir", rarity: "Legendary", stars: 5, mythology: "Norse", description: "The mighty wolf, son of Loki" },
            { name: "Sleipnir", rarity: "Legendary", stars: 5, mythology: "Norse", description: "Odin's eight-legged steed" },
            { name: "Valkyrie", rarity: "Epic", stars: 4, mythology: "Norse", description: "Chooser of the slain" },
            { name: "Frost Giant", rarity: "Epic", stars: 4, mythology: "Norse", description: "Ancient being of ice and snow" },
            { name: "Nidhogg", rarity: "Epic", stars: 4, mythology: "Norse", description: "Dragon that gnaws at Yggdrasil" },
            { name: "Huginn & Muninn", rarity: "Epic", stars: 4, mythology: "Norse", description: "Odin's ravens of thought and memory" },
            { name: "Dwarf Smith", rarity: "Rare", stars: 3, mythology: "Norse", description: "Master craftsman of the underground" },
            { name: "Light Elf", rarity: "Rare", stars: 3, mythology: "Norse", description: "Beautiful being of Alfheim" },
            { name: "Lindworm", rarity: "Rare", stars: 3, mythology: "Norse", description: "Serpentine dragon" },
            { name: "Nisse", rarity: "Common", stars: 2, mythology: "Norse", description: "Household guardian spirit" },
            { name: "Tomte", rarity: "Common", stars: 2, mythology: "Norse", description: "Farm guardian gnome" }
        ]
    },
    japanese: {
        name: "Japanese Mythology",
        creatures: [
            { name: "Dragon King", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "Ruler of the seas" },
            { name: "Nine-Tailed Kitsune", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "Ancient fox spirit" },
            { name: "Amaterasu Wolf", rarity: "Legendary", stars: 5, mythology: "Japanese", description: "Divine sun wolf" },
            { name: "Oni", rarity: "Epic", stars: 4, mythology: "Japanese", description: "Fearsome demon warrior" },
            { name: "Tengu", rarity: "Epic", stars: 4, mythology: "Japanese", description: "Mountain spirit" },
            { name: "Tsukumogami", rarity: "Epic", stars: 4, mythology: "Japanese", description: "Ancient object spirit" },
            { name: "Raiju", rarity: "Epic", stars: 4, mythology: "Japanese", description: "Thunder beast" },
            { name: "Kappa", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Water imp" },
            { name: "Nekomata", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Fork-tailed cat spirit" },
            { name: "Kodama", rarity: "Rare", stars: 3, mythology: "Japanese", description: "Tree spirit" },
            { name: "Tanuki", rarity: "Common", stars: 2, mythology: "Japanese", description: "Shapeshifting raccoon dog" },
            { name: "Bakeneko", rarity: "Common", stars: 2, mythology: "Japanese", description: "Mysterious cat creature" }
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
            { name: "Bwbach", rarity: "Common", stars: 2, mythology: "Welsh", description: "Friendly household spirit" }
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
            { name: "Far Darrig", rarity: "Common", stars: 2, mythology: "Irish", description: "The Red Man, practical joker fairy" }
        ]
    },
    breton: {
        name: "Breton Mythology",
        creatures: [
            { name: "Ankou", rarity: "Legendary", stars: 5, mythology: "Breton", description: "Personification of death" },
            { name: "Morgen", rarity: "Legendary", stars: 5, mythology: "Breton", description: "Powerful water fairy" },
            { name: "Dahut", rarity: "Legendary", stars: 5, mythology: "Breton", description: "Princess of the sunken city of Ys" },
            { name: "Bugul Noz", rarity: "Epic", stars: 4, mythology: "Breton", description: "Night Shepherd spirit" },
            { name: "Korrigan", rarity: "Epic", stars: 4, mythology: "Breton", description: "Beautiful fairy-like creature" },
            { name: "Mourioche", rarity: "Epic", stars: 4, mythology: "Breton", description: "Black mare spirit" },
            { name: "Nain Rouge", rarity: "Epic", stars: 4, mythology: "Breton", description: "Red dwarf harbinger" },
            { name: "Yan-gant-y-tan", rarity: "Rare", stars: 3, mythology: "Breton", description: "Night wanderer with burning eyes" },
            { name: "Kannerez Noz", rarity: "Rare", stars: 3, mythology: "Breton", description: "Night washerwoman" },
            { name: "Groac'h", rarity: "Rare", stars: 3, mythology: "Breton", description: "Lake fairy witch" },
            { name: "Teuz", rarity: "Common", stars: 2, mythology: "Breton", description: "Household brownie spirit" },
            { name: "Poulpiquet", rarity: "Common", stars: 2, mythology: "Breton", description: "Mischievous fairy" }
        ]
    },
    cornish: {
        name: "Cornish Mythology",
        creatures: [
            { name: "Bucca", rarity: "Legendary", stars: 5, mythology: "Cornish", description: "Ancient sea spirit" },
            { name: "Morgawr", rarity: "Legendary", stars: 5, mythology: "Cornish", description: "Sea monster of Cornish waters" },
            { name: "Tregeagle", rarity: "Legendary", stars: 5, mythology: "Cornish", description: "The howling spirit of evil" },
            { name: "Knocker", rarity: "Epic", stars: 4, mythology: "Cornish", description: "Mine-dwelling spirit" },
            { name: "Jack o' Lantern", rarity: "Epic", stars: 4, mythology: "Cornish", description: "Mysterious light that leads travelers astray" },
            { name: "Owlman", rarity: "Epic", stars: 4, mythology: "Cornish", description: "Winged creature of Mawnan" },
            { name: "Mermaid of Zennor", rarity: "Epic", stars: 4, mythology: "Cornish", description: "Beautiful sea enchantress" },
            { name: "Spriggan", rarity: "Rare", stars: 3, mythology: "Cornish", description: "Guardian of ancient treasures" },
            { name: "Pobel Vean", rarity: "Rare", stars: 3, mythology: "Cornish", description: "Little people of the hills" },
            { name: "Bucca Dhu", rarity: "Rare", stars: 3, mythology: "Cornish", description: "Dark spirit of storms" },
            { name: "Pixie", rarity: "Common", stars: 2, mythology: "Cornish", description: "Mischievous fairy creature" },
            { name: "Joan the Wad", rarity: "Common", stars: 2, mythology: "Cornish", description: "Queen of the Pixies" }
        ]
    },
    cantabrian: {
        name: "Cantabrian Mythology",
        creatures: [
            { name: "Cuélebre", rarity: "Legendary", stars: 5, mythology: "Cantabrian", description: "Winged serpent guardian of treasures" },
            { name: "Ojáncanu", rarity: "Legendary", stars: 5, mythology: "Cantabrian", description: "Giant cyclops of the mountains" },
            { name: "Anjana Reina", rarity: "Legendary", stars: 5, mythology: "Cantabrian", description: "Queen of the fairy nymphs" },
            { name: "Anjana", rarity: "Epic", stars: 4, mythology: "Cantabrian", description: "Beautiful fairy nymph" },
            { name: "Trasgu", rarity: "Epic", stars: 4, mythology: "Cantabrian", description: "Domestic goblin trickster" },
            { name: "Caballucos del Diablo", rarity: "Epic", stars: 4, mythology: "Cantabrian", description: "Devil's horses" },
            { name: "Ramidreju", rarity: "Epic", stars: 4, mythology: "Cantabrian", description: "Weasel-dragon hybrid" },
            { name: "Ventolín", rarity: "Rare", stars: 3, mythology: "Cantabrian", description: "Wind spirit of the valleys" },
            { name: "Musgosu", rarity: "Rare", stars: 3, mythology: "Cantabrian", description: "Moss-covered forest spirit" },
            { name: "Sirenuca", rarity: "Rare", stars: 3, mythology: "Cantabrian", description: "Small mountain siren" },
            { name: "Tentirujo", rarity: "Common", stars: 2, mythology: "Cantabrian", description: "Forest dwelling imp" },
            { name: "Trenti", rarity: "Common", stars: 2, mythology: "Cantabrian", description: "House guardian spirit" }
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