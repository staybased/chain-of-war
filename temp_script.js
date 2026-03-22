        // Game Constants
        const GRID_ROWS = 10;
        const GRID_COLS = 12;

        // All 10 Factions with Complete Unit Rosters
        const FACTIONS = {
            iron: {
                name: "Iron Covenant",
                color: "#8A8A8A",
                accent: "#B87333",
                emblem: "assets/emblem-iron.png",
                description: "Elite augmented super-soldiers who believe in quality over quantity.",
                units: [
                    {name: "Iron Centurion", role: "HQ", cost: 300, war: 7, res: 8, vel: 5, acc: 6, dis: 9, ins: 5, icon: "👑", abilities: ["Hold the Line", "Tactical Supremacy"]},
                    {name: "Covenant Guard", role: "Troops", cost: 120, war: 5, res: 6, vel: 4, acc: 5, dis: 7, ins: 3, icon: "⚔️", abilities: ["Shield Wall"]},
                    {name: "Steel Brothers", role: "Troops", cost: 100, war: 4, res: 5, vel: 5, acc: 4, dis: 6, ins: 4, icon: "⚔️", abilities: ["Brotherhood Bond"]},
                    {name: "Iron Militia", role: "Troops", cost: 80, war: 3, res: 4, vel: 4, acc: 4, dis: 6, ins: 3, icon: "⚔️", abilities: ["Disciplined Fire"]},
                    {name: "Aegis Terminators", role: "Elites", cost: 250, war: 8, res: 8, vel: 3, acc: 6, dis: 8, ins: 2, icon: "⭐", abilities: ["Unstoppable", "Zone Control"]},
                    {name: "Covenant Exemplars", role: "Elites", cost: 200, war: 6, res: 6, vel: 6, acc: 6, dis: 8, ins: 3, icon: "⭐", abilities: ["Leading by Example"]},
                    {name: "Outrider Squadron", role: "Fast Attack", cost: 180, war: 6, res: 4, vel: 8, acc: 7, dis: 6, ins: 4, icon: "🏃", abilities: ["Hit and Run"]},
                    {name: "Strike Bikes", role: "Fast Attack", cost: 140, war: 5, res: 3, vel: 9, acc: 6, dis: 5, ins: 2, icon: "🏃", abilities: ["Lightning Assault"]},
                    {name: "Devastator Battery", role: "Heavy Support", cost: 350, war: 9, res: 6, vel: 2, acc: 8, dis: 7, ins: 3, icon: "💥", abilities: ["Suppressing Fire"]},
                    {name: "Iron Fortress", role: "Heavy Support", cost: 300, war: 6, res: 9, vel: 2, acc: 5, dis: 8, ins: 5, icon: "💥", abilities: ["Mobile Cover"]}
                ]
            },
            swarm: {
                name: "Swarm of Xeth",
                color: "#4A148C",
                accent: "#C6FF00",
                emblem: "assets/emblem-swarm.png",
                description: "Bio-organic hive mind that drowns enemies in endless waves of chittering death.",
                units: [
                    {name: "Overmind Node", role: "HQ", cost: 280, war: 5, res: 7, vel: 3, acc: 4, dis: 8, ins: 8, icon: "👑", abilities: ["Hive Control", "Spawn Command"]},
                    {name: "Skitterling Brood", role: "Troops", cost: 60, war: 4, res: 2, vel: 6, acc: 2, dis: 3, ins: 7, icon: "⚔️", abilities: ["Strength in Numbers"]},
                    {name: "Chitin Swarm", role: "Troops", cost: 50, war: 3, res: 2, vel: 7, acc: 1, dis: 2, ins: 8, icon: "⚔️", abilities: ["Overwhelming Mass"]},
                    {name: "Worker Drones", role: "Troops", cost: 70, war: 3, res: 3, vel: 5, acc: 3, dis: 4, ins: 6, icon: "⚔️", abilities: ["Swarm Construction"]},
                    {name: "Razor Beasts", role: "Elites", cost: 180, war: 7, res: 4, vel: 7, acc: 4, dis: 2, ins: 8, icon: "⭐", abilities: ["Frenzy", "Pack Hunter"]},
                    {name: "Brood Mothers", role: "Elites", cost: 220, war: 4, res: 6, vel: 4, acc: 3, dis: 6, ins: 9, icon: "⭐", abilities: ["Spawning", "Protective"]},
                    {name: "Winged Hunters", role: "Fast Attack", cost: 140, war: 5, res: 2, vel: 9, acc: 5, dis: 2, ins: 7, icon: "🏃", abilities: ["Aerial Assault"]},
                    {name: "Tunnel Stalkers", role: "Fast Attack", cost: 120, war: 6, res: 3, vel: 8, acc: 3, dis: 1, ins: 9, icon: "🏃", abilities: ["Ambush"]},
                    {name: "Siege Spitter", role: "Heavy Support", cost: 320, war: 8, res: 5, vel: 2, acc: 7, dis: 4, ins: 6, icon: "💥", abilities: ["Bio-Artillery"]},
                    {name: "Hive Leviathan", role: "Heavy Support", cost: 380, war: 7, res: 8, vel: 3, acc: 5, dis: 3, ins: 8, icon: "💥", abilities: ["Regeneration", "Spawning Platform"]}
                ]
            },
            void: {
                name: "Void Pharaohs",
                color: "#1A1A2E",
                accent: "#FFB300",
                emblem: "assets/emblem-void.png",
                description: "Ancient machine dynasty that views death as merely an inconvenience to be corrected.",
                units: [
                    {name: "Void Overlord", role: "HQ", cost: 320, war: 6, res: 8, vel: 4, acc: 7, dis: 9, ins: 6, icon: "👑", abilities: ["Reanimation Protocols", "Dark Command"]},
                    {name: "Scarab Warriors", role: "Troops", cost: 110, war: 5, res: 6, vel: 4, acc: 5, dis: 6, ins: 4, icon: "⚔️", abilities: ["Self-Repair"]},
                    {name: "Tomb Guardians", role: "Troops", cost: 90, war: 4, res: 7, vel: 3, acc: 4, dis: 7, ins: 3, icon: "⚔️", abilities: ["Eternal Vigilance"]},
                    {name: "Phalanx Infantry", role: "Troops", cost: 100, war: 4, res: 5, vel: 4, acc: 5, dis: 7, ins: 3, icon: "⚔️", abilities: ["Synchronized March"]},
                    {name: "Immortal Guard", role: "Elites", cost: 240, war: 7, res: 7, vel: 4, acc: 6, dis: 8, ins: 3, icon: "⭐", abilities: ["Death Denial"]},
                    {name: "Wraith Constructs", role: "Elites", cost: 200, war: 6, res: 5, vel: 6, acc: 6, dis: 6, ins: 6, icon: "⭐", abilities: ["Phase Walker"]},
                    {name: "Void Hunters", role: "Fast Attack", cost: 160, war: 5, res: 4, vel: 8, acc: 6, dis: 5, ins: 4, icon: "🏃", abilities: ["Quantum Leap"]},
                    {name: "Shadow Wraiths", role: "Fast Attack", cost: 140, war: 6, res: 3, vel: 7, acc: 5, dis: 4, ins: 5, icon: "🏃", abilities: ["Incorporeal"]},
                    {name: "Doomsday Engine", role: "Heavy Support", cost: 400, war: 10, res: 7, vel: 1, acc: 9, dis: 8, ins: 3, icon: "💥", abilities: ["Reality Rift"]},
                    {name: "Tomb Fortress", role: "Heavy Support", cost: 350, war: 5, res: 10, vel: 2, acc: 6, dis: 8, ins: 4, icon: "💥", abilities: ["Ancient Shields", "Resurrection Node"]}
                ]
            },
            emerald: {
                name: "Emerald Tide",
                color: "#BF360C",
                accent: "#FFD600",
                emblem: "assets/emblem-emerald.png",
                description: "Chaotic war-loving brutes who embrace the beautiful randomness of combat.",
                units: [
                    {name: "Warlord Smasher", role: "HQ", cost: 280, war: 8, res: 6, vel: 4, acc: 5, dis: 2, ins: 9, icon: "👑", abilities: ["WAAAGH!", "Brutal Cunning"]},
                    {name: "Boyz Mob", role: "Troops", cost: 80, war: 5, res: 4, vel: 5, acc: 3, dis: 2, ins: 6, icon: "⚔️", abilities: ["Mob Rule"]},
                    {name: "Choppa Squad", role: "Troops", cost: 70, war: 6, res: 3, vel: 5, acc: 2, dis: 1, ins: 7, icon: "⚔️", abilities: ["Berserker Charge"]},
                    {name: "Shoota Boyz", role: "Troops", cost: 90, war: 4, res: 4, vel: 4, acc: 4, dis: 3, ins: 5, icon: "⚔️", abilities: ["Dakka Dakka"]},
                    {name: "Nob Squad", role: "Elites", cost: 200, war: 8, res: 5, vel: 4, acc: 4, dis: 3, ins: 8, icon: "⭐", abilities: ["Big Boss", "Intimidation"]},
                    {name: "Burna Boyz", role: "Elites", cost: 180, war: 7, res: 4, vel: 4, acc: 5, dis: 2, ins: 6, icon: "⭐", abilities: ["Flame On", "Destruction"]},
                    {name: "Speed Freeks", role: "Fast Attack", cost: 140, war: 6, res: 3, vel: 9, acc: 4, dis: 1, ins: 7, icon: "🏃", abilities: ["Red Ones Go Faster"]},
                    {name: "Warbike Gang", role: "Fast Attack", cost: 120, war: 5, res: 4, vel: 8, acc: 3, dis: 2, ins: 6, icon: "🏃", abilities: ["Ramming Speed"]},
                    {name: "Big Gunz", role: "Heavy Support", cost: 320, war: 9, res: 5, vel: 1, acc: 6, dis: 4, ins: 7, icon: "💥", abilities: ["Random Targeting", "Massive Firepower"]},
                    {name: "Battle Wagon", role: "Heavy Support", cost: 300, war: 6, res: 8, vel: 4, acc: 4, dis: 3, ins: 7, icon: "💥", abilities: ["Troop Transport", "Mobile Fortress"]}
                ]
            },
            celestial: {
                name: "Celestial Order",
                color: "#2A2A3A",
                accent: "#00BFA5",
                emblem: "assets/emblem-celestial.png",
                description: "Tech-superior strategists who prefer precision strikes from impossible distances.",
                units: [
                    {name: "Prime Archon", role: "HQ", cost: 300, war: 5, res: 6, vel: 4, acc: 9, dis: 9, ins: 7, icon: "👑", abilities: ["Tactical Network", "Orbital Strike"]},
                    {name: "Guardian Cadre", role: "Troops", cost: 120, war: 4, res: 5, vel: 4, acc: 7, dis: 8, ins: 2, icon: "⚔️", abilities: ["Covering Fire"]},
                    {name: "Strike Team", role: "Troops", cost: 100, war: 3, res: 4, vel: 5, acc: 8, dis: 7, ins: 3, icon: "⚔️", abilities: ["Hunter Protocols"]},
                    {name: "Pathfinder Scouts", role: "Troops", cost: 110, war: 3, res: 3, vel: 6, acc: 9, dis: 6, ins: 3, icon: "⚔️", abilities: ["Advanced Reconnaissance"]},
                    {name: "Crisis Suits", role: "Elites", cost: 250, war: 7, res: 6, vel: 5, acc: 8, dis: 7, ins: 2, icon: "⭐", abilities: ["Jump-Shoot-Jump"]},
                    {name: "Stealth Cadre", role: "Elites", cost: 200, war: 5, res: 4, vel: 6, acc: 9, dis: 8, ins: 3, icon: "⭐", abilities: ["Camouflage Field"]},
                    {name: "Drone Swarm", role: "Fast Attack", cost: 140, war: 4, res: 2, vel: 8, acc: 8, dis: 9, ins: 4, icon: "🏃", abilities: ["Networked Intelligence"]},
                    {name: "Piranha Squadron", role: "Fast Attack", cost: 160, war: 5, res: 3, vel: 9, acc: 7, dis: 6, ins: 2, icon: "🏃", abilities: ["Hit and Fade"]},
                    {name: "Hammerhead Battery", role: "Heavy Support", cost: 380, war: 10, res: 6, vel: 3, acc: 9, dis: 8, ins: 2, icon: "💥", abilities: ["Railgun Strike"]},
                    {name: "Riptide Battlesuit", role: "Heavy Support", cost: 400, war: 8, res: 8, vel: 4, acc: 8, dis: 7, ins: 3, icon: "💥", abilities: ["Nova Charge", "Heavy Burst"]}
                ]
            },
            warp: {
                name: "Warp Touched",
                color: "#B71C1C",
                accent: "#FF5252",
                emblem: "assets/emblem-warp.png",
                description: "Reality-corrupted fanatics who sell their souls for power, embracing chaos for victory.",
                units: [
                    {name: "Chaos Lord", role: "HQ", cost: 290, war: 8, res: 6, vel: 5, acc: 6, dis: 3, ins: 9, icon: "👑", abilities: ["Dark Blessing", "Warp Aura"]},
                    {name: "Cultist Horde", role: "Troops", cost: 60, war: 3, res: 3, vel: 4, acc: 4, dis: 2, ins: 8, icon: "⚔️", abilities: ["Fanatical Devotion"]},
                    {name: "Chaos Marines", role: "Troops", cost: 110, war: 6, res: 5, vel: 4, acc: 5, dis: 4, ins: 6, icon: "⚔️", abilities: ["Bolter Discipline"]},
                    {name: "Lost Souls", role: "Troops", cost: 80, war: 4, res: 2, vel: 6, acc: 3, dis: 1, ins: 9, icon: "⚔️", abilities: ["Warp Madness"]},
                    {name: "Chosen Champions", role: "Elites", cost: 220, war: 8, res: 6, vel: 5, acc: 6, dis: 5, ins: 5, icon: "⭐", abilities: ["Dark Gifts", "Veteran Skills"]},
                    {name: "Possessed Warriors", role: "Elites", cost: 200, war: 9, res: 5, vel: 6, acc: 4, dis: 2, ins: 8, icon: "⭐", abilities: ["Daemonic Possession"]},
                    {name: "Chaos Spawn", role: "Fast Attack", cost: 140, war: 7, res: 4, vel: 8, acc: 3, dis: 1, ins: 7, icon: "🏃", abilities: ["Unstable Mutation"]},
                    {name: "Warp Talons", role: "Fast Attack", cost: 160, war: 8, res: 3, vel: 8, acc: 5, dis: 2, ins: 6, icon: "🏃", abilities: ["Lightning Claws", "Warp Strike"]},
                    {name: "Obliterator Cult", role: "Heavy Support", cost: 350, war: 9, res: 7, vel: 2, acc: 6, dis: 4, ins: 8, icon: "💥", abilities: ["Weapon Symbiosis"]},
                    {name: "Defiler Engine", role: "Heavy Support", cost: 380, war: 8, res: 8, vel: 4, acc: 7, dis: 3, ins: 6, icon: "💥", abilities: ["Daemonic Regeneration", "Soul Burn"]}
                ]
            },
            shadow: {
                name: "Shadow Kin",
                color: "#1A237E",
                accent: "#C0C0C0",
                emblem: "assets/emblem-shadow.png",
                description: "Ancient speed-warriors who strike once, strike perfectly, and melt away into darkness.",
                units: [
                    {name: "Shadow Archon", role: "HQ", cost: 320, war: 7, res: 4, vel: 8, acc: 8, dis: 7, ins: 6, icon: "👑", abilities: ["Perfect Strike", "Shadow Walk"]},
                    {name: "Kabalite Warriors", role: "Troops", cost: 100, war: 4, res: 3, vel: 7, acc: 6, dis: 5, ins: 5, icon: "⚔️", abilities: ["Poisoned Weapons"]},
                    {name: "Wyches", role: "Troops", cost: 90, war: 5, res: 2, vel: 8, acc: 5, dis: 4, ins: 6, icon: "⚔️", abilities: ["Combat Drugs"]},
                    {name: "Shadow Guard", role: "Troops", cost: 110, war: 4, res: 4, vel: 7, acc: 7, dis: 6, ins: 4, icon: "⚔️", abilities: ["Stealth Field"]},
                    {name: "Incubi", role: "Elites", cost: 200, war: 8, res: 3, vel: 7, acc: 7, dis: 6, ins: 4, icon: "⭐", abilities: ["Precision Strike"]},
                    {name: "Mandrakes", role: "Elites", cost: 180, war: 6, res: 2, vel: 8, acc: 6, dis: 5, ins: 8, icon: "⭐", abilities: ["Shadow Phase", "Terror"]},
                    {name: "Reavers", role: "Fast Attack", cost: 160, war: 6, res: 2, vel: 10, acc: 6, dis: 4, ins: 4, icon: "🏃", abilities: ["Blade Vanes"]},
                    {name: "Scourges", role: "Fast Attack", cost: 140, war: 5, res: 2, vel: 9, acc: 8, dis: 5, ins: 3, icon: "🏃", abilities: ["Winged Death"]},
                    {name: "Ravager", role: "Heavy Support", cost: 300, war: 8, res: 3, vel: 6, acc: 9, dis: 6, ins: 4, icon: "💥", abilities: ["Lance Strike"]},
                    {name: "Void Reaper", role: "Heavy Support", cost: 350, war: 9, res: 4, vel: 5, acc: 8, dis: 6, ins: 6, icon: "💥", abilities: ["Soul Harvest", "Dark Energy"]}
                ]
            },
            steel: {
                name: "Steel Legion",
                color: "#556B2F",
                accent: "#FFA000",
                emblem: "assets/emblem-steel.png",
                description: "Mass-produced war machine focused on cheap bodies and heavy armor working in perfect synchronization.",
                units: [
                    {name: "Field Marshal", role: "HQ", cost: 280, war: 6, res: 6, vel: 4, acc: 6, dis: 8, ins: 5, icon: "👑", abilities: ["Combined Arms", "Field Orders"]},
                    {name: "Infantry Squad", role: "Troops", cost: 80, war: 4, res: 4, vel: 4, acc: 5, dis: 6, ins: 3, icon: "⚔️", abilities: ["Massed Fire"]},
                    {name: "Assault Troops", role: "Troops", cost: 90, war: 5, res: 4, vel: 5, acc: 4, dis: 6, ins: 4, icon: "⚔️", abilities: ["Close Quarters"]},
                    {name: "Engineers", role: "Troops", cost: 100, war: 3, res: 5, vel: 3, acc: 4, dis: 7, ins: 5, icon: "⚔️", abilities: ["Fortification", "Repair"]},
                    {name: "Storm Troopers", role: "Elites", cost: 180, war: 6, res: 5, vel: 5, acc: 6, dis: 7, ins: 3, icon: "⭐", abilities: ["Elite Training"]},
                    {name: "Sentinels", role: "Elites", cost: 160, war: 5, res: 4, vel: 6, acc: 7, dis: 6, ins: 4, icon: "⭐", abilities: ["Scout Walker"]},
                    {name: "Rough Riders", role: "Fast Attack", cost: 120, war: 5, res: 4, vel: 8, acc: 4, dis: 5, ins: 4, icon: "🏃", abilities: ["Cavalry Charge"]},
                    {name: "Armored Bikes", role: "Fast Attack", cost: 140, war: 4, res: 5, vel: 7, acc: 5, dis: 6, ins: 2, icon: "🏃", abilities: ["Mobile Support"]},
                    {name: "Battle Tank", role: "Heavy Support", cost: 350, war: 8, res: 8, vel: 3, acc: 7, dis: 7, ins: 3, icon: "💥", abilities: ["Armor Superiority"]},
                    {name: "Artillery Battery", role: "Heavy Support", cost: 320, war: 9, res: 5, vel: 1, acc: 8, dis: 8, ins: 4, icon: "💥", abilities: ["Indirect Fire"]}
                ]
            },
            bone: {
                name: "Bone Prophets",
                color: "#2A2020",
                accent: "#E91E63",
                emblem: "assets/emblem-bone.png",
                description: "Psychic manipulators who win battles in the enemy's mind before a shot is fired.",
                units: [
                    {name: "Mind Lord", role: "HQ", cost: 310, war: 4, res: 6, vel: 4, acc: 5, dis: 7, ins: 9, icon: "👑", abilities: ["Domination", "Psychic Network"]},
                    {name: "Acolytes", role: "Troops", cost: 100, war: 3, res: 4, vel: 4, acc: 4, dis: 6, ins: 7, icon: "⚔️", abilities: ["Mind Link"]},
                    {name: "Bone Thralls", role: "Troops", cost: 70, war: 4, res: 5, vel: 3, acc: 3, dis: 8, ins: 5, icon: "⚔️", abilities: ["Undying Loyalty"]},
                    {name: "Ritual Circle", role: "Troops", cost: 120, war: 2, res: 3, vel: 3, acc: 5, dis: 8, ins: 9, icon: "⚔️", abilities: ["Group Casting"]},
                    {name: "Seers", role: "Elites", cost: 200, war: 3, res: 4, vel: 4, acc: 6, dis: 7, ins: 10, icon: "⭐", abilities: ["Precognition", "Divination"]},
                    {name: "Mind Flayers", role: "Elites", cost: 180, war: 5, res: 3, vel: 5, acc: 4, dis: 5, ins: 10, icon: "⭐", abilities: ["Brain Drain", "Mental Assault"]},
                    {name: "Soul Ravens", role: "Fast Attack", cost: 140, war: 4, res: 2, vel: 9, acc: 5, dis: 5, ins: 7, icon: "🏃", abilities: ["Aerial Psionics"]},
                    {name: "Wraith Riders", role: "Fast Attack", cost: 160, war: 5, res: 3, vel: 8, acc: 4, dis: 6, ins: 8, icon: "🏃", abilities: ["Phantom Mount"]},
                    {name: "Bone Titan", role: "Heavy Support", cost: 380, war: 6, res: 9, vel: 2, acc: 4, dis: 8, ins: 9, icon: "💥", abilities: ["Psychic Fortress", "Soul Prison"]},
                    {name: "Mind Colossus", role: "Heavy Support", cost: 400, war: 4, res: 7, vel: 3, acc: 6, dis: 9, ins: 10, icon: "💥", abilities: ["Mass Hypnosis", "Mental Override"]}
                ]
            },
            apex: {
                name: "Apex Hunters",
                color: "#00695C",
                accent: "#FF6D00",
                emblem: "assets/emblem-apex.png",
                description: "Adaptive beast-warriors who evolve mid-battle, becoming the perfect counter to whatever kills them.",
                units: [
                    {name: "Alpha Prime", role: "HQ", cost: 300, war: 6, res: 6, vel: 6, acc: 6, dis: 6, ins: 8, icon: "👑", abilities: ["Pack Leader", "Adaptive Command"]},
                    {name: "Hunter Pack", role: "Troops", cost: 90, war: 4, res: 3, vel: 6, acc: 4, dis: 4, ins: 7, icon: "⚔️", abilities: ["Pack Tactics"]},
                    {name: "Stalker Strain", role: "Troops", cost: 80, war: 5, res: 2, vel: 7, acc: 5, dis: 3, ins: 8, icon: "⚔️", abilities: ["Stealth Hunt"]},
                    {name: "Tracker Drones", role: "Troops", cost: 100, war: 3, res: 4, vel: 5, acc: 6, dis: 5, ins: 7, icon: "⚔️", abilities: ["Sensor Web"]},
                    {name: "Apex Warriors", role: "Elites", cost: 220, war: 7, res: 5, vel: 6, acc: 5, dis: 5, ins: 7, icon: "⭐", abilities: ["Evolution Trigger"]},
                    {name: "Gene-Thieves", role: "Elites", cost: 200, war: 5, res: 4, vel: 7, acc: 6, dis: 4, ins: 9, icon: "⭐", abilities: ["DNA Harvest", "Mimicry"]},
                    {name: "Swift Hunters", role: "Fast Attack", cost: 150, war: 5, res: 3, vel: 9, acc: 6, dis: 4, ins: 5, icon: "🏃", abilities: ["Lightning Reflexes"]},
                    {name: "Void Stalkers", role: "Fast Attack", cost: 140, war: 6, res: 3, vel: 8, acc: 5, dis: 3, ins: 7, icon: "🏃", abilities: ["Phase Hunt"]},
                    {name: "Hive Tyrant", role: "Heavy Support", cost: 380, war: 8, res: 7, vel: 4, acc: 6, dis: 6, ins: 7, icon: "💥", abilities: ["Synaptic Control", "Evolutionary Pressure"]},
                    {name: "Bio-Titan", role: "Heavy Support", cost: 400, war: 7, res: 8, vel: 3, acc: 6, dis: 5, ins: 9, icon: "💥", abilities: ["Adaptive Armor", "Regenerative Growth"]}
                ]
            }
        };

        const TERRAIN_TYPES = {
            open: { name: "Open", color: "#1a1a1a", moveCost: 1, cover: 0, image: "assets/terrain-open.png" },
            "light-cover": { name: "Light Cover", color: "#2a3a2a", moveCost: 1, cover: 2, image: "assets/terrain-light-cover.png" },
            "heavy-cover": { name: "Heavy Cover", color: "#3a2a2a", moveCost: 2, cover: 4, image: "assets/terrain-heavy-cover.png" },
            elevated: { name: "Elevated", color: "#2a2a3a", moveCost: 2, cover: 1, image: "assets/terrain-elevated.png" },
            hazardous: { name: "Hazardous", color: "#4a1a4a", moveCost: 1, cover: 0, image: "assets/terrain-hazardous.png" }
        };

        // Game State
        let gameState = {
            phase: "army_selection", // army_selection, deployment, movement, action, resolution
            turn: 1,
            activePlayer: 1,
            selectedUnit: null,
            selectedHex: null,
            battlefield: [],
            armies: { 1: [], 2: [] },
            factionChoices: { 1: null, 2: null },
            deploymentPhase: true,
            validMoves: [],
            validAttacks: [],
            battleLog: []
        };

        // Initialize Game
        function initGame() {
            setTimeout(() => {
                document.getElementById('loadingOverlay').classList.add('hidden');
                createBattlefield();
                showArmySelection();
                addToBattleLog("Tactical Grid initialized. Awaiting faction selection...", "info");
            }, 1500);
        }

        function createBattlefield() {
            const hexGrid = document.getElementById('hexGrid');
            hexGrid.innerHTML = '';
            
            // Create 12x10 hex grid
            for (let row = 0; row < GRID_ROWS; row++) {
                for (let col = 0; col < GRID_COLS; col++) {
                    const hex = document.createElement('div');
                    const hexId = `hex-${row}-${col}`;
                    hex.className = 'hex';
                    hex.id = hexId;
                    hex.dataset.row = row;
                    hex.dataset.col = col;
                    
                    // Assign terrain types
                    const terrainType = generateTerrain(row, col);
                    hex.classList.add(terrainType);
                    hex.title = `${row},${col} - ${TERRAIN_TYPES[terrainType].name}`;
                    
                    hex.addEventListener('click', () => onHexClick(row, col));
                    
                    gameState.battlefield[row] = gameState.battlefield[row] || [];
                    gameState.battlefield[row][col] = {
                        terrain: terrainType,
                        unit: null
                    };
                    
                    hexGrid.appendChild(hex);
                }
            }
        }

        function generateTerrain(row, col) {
            // Generate interesting terrain patterns
            const rand = Math.random();
            const distFromCenter = Math.abs(row - 5) + Math.abs(col - 6);
            
            // Deployment zones (rows 0-2 and 7-9) are mostly open
            if (row <= 2 || row >= 7) {
                return rand < 0.15 ? 'light-cover' : 'open';
            }
            
            // Create strategic terrain clusters in middle battlefield
            if (distFromCenter <= 2 && rand < 0.4) {
                return rand < 0.15 ? 'heavy-cover' : 'elevated';
            }
            
            // Standard terrain distribution
            if (rand < 0.25) return 'light-cover';
            if (rand < 0.35) return 'heavy-cover';
            if (rand < 0.45) return 'elevated';
            if (rand < 0.5) return 'hazardous';
            return 'open';
        }

        function showArmySelection() {
            const armySelection = document.getElementById('armySelection');
            const factionGrid = document.getElementById('factionGrid');
            
            factionGrid.innerHTML = '';
            
            Object.entries(FACTIONS).forEach(([key, faction]) => {
                const factionDiv = document.createElement('div');
                factionDiv.className = 'faction-option';
                factionDiv.style.setProperty('--faction-primary', faction.color);
                factionDiv.style.setProperty('--faction-accent', faction.accent);
                
                // Fix emblem paths to use correct assets
                const emblemPaths = {
                    iron: 'assets/emblem-iron-covenant.png',
                    swarm: 'assets/emblem-swarm-of-xeth.png',
                    void: 'assets/emblem-void-pharaohs.png',
                    emerald: 'assets/emblem-emerald-tide.png',
                    celestial: 'assets/emblem-celestial-order.png',
                    warp: 'assets/emblem-warp-touched.png',
                    shadow: 'assets/emblem-shadow-kin.png',
                    steel: 'assets/emblem-steel-legion.png',
                    bone: 'assets/emblem-bone-prophets.png',
                    apex: 'assets/emblem-apex-hunters.png'
                };
                
                const emblemDiv = document.createElement('div');
                emblemDiv.className = 'faction-emblem';
                emblemDiv.style.backgroundImage = `url(${emblemPaths[key] || faction.emblem})`;
                emblemDiv.style.backgroundColor = faction.accent;
                
                factionDiv.innerHTML = `
                    <h3 style="color: ${faction.accent}">${faction.name}</h3>
                    <p>${faction.description}</p>
                    <div style="font-size: 11px; color: #999; margin-top: 10px;">
                        <strong>Units:</strong> ${faction.units.length}/10<br>
                        <strong>Roles:</strong> HQ, Troops, Elites, Fast Attack, Heavy Support
                    </div>
                `;
                
                factionDiv.prepend(emblemDiv);
                factionDiv.addEventListener('click', () => {
                    // Highlight selected faction
                    document.querySelectorAll('.faction-option').forEach(f => f.classList.remove('selected'));
                    factionDiv.classList.add('selected');
                    
                    // Small delay for visual feedback
                    setTimeout(() => {
                        selectFaction(key);
                    }, 200);
                });
                factionGrid.appendChild(factionDiv);
            });
            
            armySelection.classList.remove('hidden');
        }

        function selectFaction(factionKey) {
            const currentPlayer = gameState.factionChoices[1] ? 2 : 1;
            gameState.factionChoices[currentPlayer] = factionKey;
            
            addToBattleLog(`Player ${currentPlayer} selected ${FACTIONS[factionKey].name}`, "info");
            
            // Show army building interface
            showArmyBuilder(currentPlayer, factionKey);
        }

        function showArmyBuilder(player, factionKey) {
            const faction = FACTIONS[factionKey];
            const armySelection = document.getElementById('armySelection');
            
            // Create army building interface
            armySelection.innerHTML = `
                <div class="faction-selection-header">
                    <div class="player-select" style="color: ${faction.accent};">
                        Player ${player} - Build Your ${faction.name} Army
                    </div>
                    <div style="color: #888; font-size: 14px; margin-bottom: 20px;">
                        Select units to build your army (1000 points maximum)
                    </div>
                    <div id="pointsTracker" style="font-family: 'JetBrains Mono', monospace; font-size: 18px; color: #FFD700; margin-bottom: 20px;">
                        <span id="currentPoints">0</span> / 1000 pts
                    </div>
                </div>
                
                <div style="display: flex; gap: 30px; max-width: 1400px;">
                    <!-- Unit Roster -->
                    <div style="flex: 2; background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px;">
                        <h3 style="color: ${faction.accent}; margin-bottom: 15px; font-family: 'Orbitron', sans-serif;">Unit Roster</h3>
                        <div id="unitRoster" style="max-height: 500px; overflow-y: auto;">
                            <!-- Units will be populated here -->
                        </div>
                    </div>
                    
                    <!-- Your Army -->
                    <div style="flex: 1; background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px;">
                        <h3 style="color: #FFD700; margin-bottom: 15px; font-family: 'Orbitron', sans-serif;">Your Army</h3>
                        <div id="playerArmy" style="min-height: 300px; margin-bottom: 20px;">
                            <div style="color: #888; font-style: italic; text-align: center; padding: 40px 0;">
                                No units selected
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px;">
                            <button id="startBattleBtn" class="btn primary" disabled>Start Battle</button>
                            <button id="clearArmyBtn" class="btn danger">Clear Army</button>
                        </div>
                    </div>
                </div>
            `;
            
            populateUnitRoster(factionKey, player);
            
            // Add event listeners
            document.getElementById('startBattleBtn').addEventListener('click', () => {
                if (gameState.armies[player] && gameState.armies[player].length > 0) {
                    startBattlePhase();
                }
            });
            
            document.getElementById('clearArmyBtn').addEventListener('click', () => {
                clearPlayerArmy(player);
            });
        }

        function populateUnitRoster(factionKey, player) {
            const faction = FACTIONS[factionKey];
            const unitRoster = document.getElementById('unitRoster');
            
            // Group units by role
            const roles = ['HQ', 'Troops', 'Elites', 'Fast Attack', 'Heavy Support'];
            
            unitRoster.innerHTML = roles.map(role => {
                const roleUnits = faction.units.filter(u => u.role === role);
                
                return `
                    <div style="margin-bottom: 25px;">
                        <h4 style="color: ${faction.accent}; font-size: 14px; margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid #444; font-family: 'Orbitron', sans-serif; letter-spacing: 2px;">
                            ${role}
                        </h4>
                        ${roleUnits.map(unit => `
                            <div class="unit-card" data-unit-name="${unit.name}" data-player="${player}" style="
                                background: rgba(0,0,0,0.4); 
                                border: 1px solid #555; 
                                border-radius: 8px; 
                                padding: 12px; 
                                margin-bottom: 8px; 
                                cursor: pointer; 
                                transition: all 0.2s ease;
                            ">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                        <span style="font-size: 20px;">${unit.icon}</span>
                                        <div>
                                            <div style="font-weight: bold; color: #fff;">${unit.name}</div>
                                            <div style="font-size: 11px; color: #888;">${unit.role}</div>
                                        </div>
                                    </div>
                                    <div style="text-align: right;">
                                        <div style="font-family: 'JetBrains Mono', monospace; font-weight: bold; color: #FFD700;">${unit.cost} pts</div>
                                        <div style="font-size: 10px; color: #888;">Click to add</div>
                                    </div>
                                </div>
                                
                                <!-- Stats -->
                                <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; margin-top: 10px;">
                                    <div style="text-align: center; padding: 4px; background: rgba(184, 115, 51, 0.2); border-radius: 3px;">
                                        <div style="font-size: 12px; font-weight: bold; color: #B87333;">${unit.war}</div>
                                        <div style="font-size: 8px; color: #B87333;">WAR</div>
                                    </div>
                                    <div style="text-align: center; padding: 4px; background: rgba(112, 128, 144, 0.2); border-radius: 3px;">
                                        <div style="font-size: 12px; font-weight: bold; color: #708090;">${unit.res}</div>
                                        <div style="font-size: 8px; color: #708090;">RES</div>
                                    </div>
                                    <div style="text-align: center; padding: 4px; background: rgba(0, 229, 255, 0.2); border-radius: 3px;">
                                        <div style="font-size: 12px; font-weight: bold; color: #00E5FF;">${unit.vel}</div>
                                        <div style="font-size: 8px; color: #00E5FF;">VEL</div>
                                    </div>
                                    <div style="text-align: center; padding: 4px; background: rgba(255, 179, 0, 0.2); border-radius: 3px;">
                                        <div style="font-size: 12px; font-weight: bold; color: #FFB300;">${unit.acc}</div>
                                        <div style="font-size: 8px; color: #FFB300;">ACC</div>
                                    </div>
                                    <div style="text-align: center; padding: 4px; background: rgba(123, 31, 162, 0.2); border-radius: 3px;">
                                        <div style="font-size: 12px; font-weight: bold; color: #7B1FA2;">${unit.dis}</div>
                                        <div style="font-size: 8px; color: #7B1FA2;">DIS</div>
                                    </div>
                                    <div style="text-align: center; padding: 4px; background: rgba(0, 200, 83, 0.2); border-radius: 3px;">
                                        <div style="font-size: 12px; font-weight: bold; color: #00C853;">${unit.ins}</div>
                                        <div style="font-size: 8px; color: #00C853;">INS</div>
                                    </div>
                                </div>
                                
                                <!-- Abilities -->
                                <div style="margin-top: 8px; font-size: 10px; color: #CCC;">
                                    <strong style="color: #FFD700;">Abilities:</strong> ${unit.abilities.join(', ')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
            }).join('');
            
            // Add click handlers to unit cards
            document.querySelectorAll('.unit-card').forEach(card => {
                card.addEventListener('click', function() {
                    const unitName = this.dataset.unitName;
                    const player = parseInt(this.dataset.player);
                    addUnitToArmy(unitName, factionKey, player);
                });
                
                card.addEventListener('mouseenter', function() {
                    this.style.borderColor = faction.accent;
                    this.style.background = `rgba(${hexToRgb(faction.accent).r}, ${hexToRgb(faction.accent).g}, ${hexToRgb(faction.accent).b}, 0.1)`;
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.borderColor = '#555';
                    this.style.background = 'rgba(0,0,0,0.4)';
                });
            });
        }

        function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : { r: 255, g: 255, b: 255 };
        }

        function addUnitToArmy(unitName, factionKey, player) {
            const faction = FACTIONS[factionKey];
            const unit = faction.units.find(u => u.name === unitName);
            
            if (!unit) return;
            
            // Initialize army if needed
            if (!gameState.armies[player]) {
                gameState.armies[player] = [];
            }
            
            // Check point limit
            const currentPoints = gameState.armies[player].reduce((sum, u) => sum + u.cost, 0);
            if (currentPoints + unit.cost > 1000) {
                addToBattleLog("Not enough points to add this unit!", "info");
                return;
            }
            
            // Create unit instance
            const unitInstance = {
                ...unit,
                id: `p${player}-${unit.role.toLowerCase().replace(' ', '')}-${gameState.armies[player].length}`,
                maxHp: unit.res * 3,
                currentHp: unit.res * 3,
                faction: factionKey,
                player: player,
                position: null,
                activated: false
            };
            
            gameState.armies[player].push(unitInstance);
            
            updatePlayerArmyDisplay(player, factionKey);
            updatePointsTracker(player);
            
            addToBattleLog(`${unit.name} added to Player ${player} army`, "info");
        }

        function updatePlayerArmyDisplay(player, factionKey) {
            const playerArmy = document.getElementById('playerArmy');
            const army = gameState.armies[player] || [];
            const faction = FACTIONS[factionKey];
            
            if (army.length === 0) {
                playerArmy.innerHTML = `
                    <div style="color: #888; font-style: italic; text-align: center; padding: 40px 0;">
                        No units selected
                    </div>
                `;
                return;
            }
            
            playerArmy.innerHTML = army.map((unit, index) => `
                <div style="
                    background: rgba(0,0,0,0.4); 
                    border: 1px solid #555; 
                    border-radius: 6px; 
                    padding: 10px; 
                    margin-bottom: 8px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 16px;">${unit.icon}</span>
                        <div>
                            <div style="font-size: 12px; font-weight: bold; color: #fff;">${unit.name}</div>
                            <div style="font-size: 10px; color: #888;">${unit.role} • ${unit.cost} pts</div>
                        </div>
                    </div>
                    <button onclick="removeUnitFromArmy(${index}, ${player}, '${factionKey}')" style="
                        background: #ff4444; 
                        border: none; 
                        color: white; 
                        padding: 4px 8px; 
                        border-radius: 4px; 
                        cursor: pointer; 
                        font-size: 10px;
                    ">Remove</button>
                </div>
            `).join('');
        }

        function removeUnitFromArmy(index, player, factionKey) {
            if (gameState.armies[player] && gameState.armies[player][index]) {
                const removedUnit = gameState.armies[player].splice(index, 1)[0];
                addToBattleLog(`${removedUnit.name} removed from Player ${player} army`, "info");
                
                updatePlayerArmyDisplay(player, factionKey);
                updatePointsTracker(player);
            }
        }

        function clearPlayerArmy(player) {
            if (confirm('Clear entire army?')) {
                gameState.armies[player] = [];
                const factionKey = gameState.factionChoices[player];
                updatePlayerArmyDisplay(player, factionKey);
                updatePointsTracker(player);
                addToBattleLog(`Player ${player} army cleared`, "info");
            }
        }

        function updatePointsTracker(player) {
            const army = gameState.armies[player] || [];
            const totalPoints = army.reduce((sum, unit) => sum + unit.cost, 0);
            
            const pointsElement = document.getElementById('currentPoints');
            if (pointsElement) {
                pointsElement.textContent = totalPoints;
                pointsElement.style.color = totalPoints > 1000 ? '#FF4444' : '#FFD700';
            }
            
            // Enable/disable start battle button
            const startBattleBtn = document.getElementById('startBattleBtn');
            if (startBattleBtn) {
                const hasUnits = army.length > 0;
                const withinBudget = totalPoints <= 1000;
                startBattleBtn.disabled = !hasUnits || !withinBudget;
                startBattleBtn.style.opacity = (hasUnits && withinBudget) ? '1' : '0.5';
            }
        }

        function startBattlePhase() {
            const currentPlayer = gameState.factionChoices[2] ? 2 : 1;
            
            if (currentPlayer === 1) {
                // Player 1 done, now Player 2's turn
                showArmySelection(); // Show faction selection for player 2
            } else {
                // Both players done, start deployment
                document.getElementById('armySelection').classList.add('hidden');
                gameState.phase = 'deployment';
                gameState.activePlayer = 1;
                updateUI();
                addToBattleLog("Army building complete. Begin deployment phase.", "info");
            }
        }

        function generateArmies() {
            // This function is now deprecated - armies are built by the player through the UI
            // But we keep it for backwards compatibility if needed
            console.log("Army generation complete - armies built via UI");
        }

        function showPhaseFlash(text) {
            const flash = document.createElement('div');
            flash.className = 'phase-flash';
            flash.textContent = text;
            document.body.appendChild(flash);
            
            setTimeout(() => {
                flash.remove();
            }, 500);
        }

        function onHexClick(row, col) {
            const hex = gameState.battlefield[row][col];
            
            if (gameState.phase === 'deployment') {
                handleDeploymentClick(row, col, hex);
            } else if (gameState.phase === 'movement') {
                handleMovementClick(row, col, hex);
            } else if (gameState.phase === 'action') {
                handleActionClick(row, col, hex);
            }
        }

        function handleDeploymentClick(row, col, hex) {
            const isPlayerDeploymentZone = (gameState.activePlayer === 1 && row <= 2) || 
                                         (gameState.activePlayer === 2 && row >= 7);
            
            if (!isPlayerDeploymentZone) {
                addToBattleLog("Cannot deploy outside your deployment zone!", "info");
                return;
            }
            
            if (hex.unit) {
                addToBattleLog("Hex already occupied!", "info");
                return;
            }
            
            // Find first undeployed unit
            const undeployedUnit = gameState.armies[gameState.activePlayer].find(u => !u.position);
            if (!undeployedUnit) {
                addToBattleLog("All units deployed!", "info");
                return;
            }
            
            // Deploy unit
            hex.unit = undeployedUnit;
            undeployedUnit.position = { row, col };
            
            updateHexDisplay(row, col);
            updateUI();
            
            addToBattleLog(`${undeployedUnit.name} deployed at ${row},${col}`, "info");
            
            // Check if deployment is complete
            const allUnitsDeployed = gameState.armies[gameState.activePlayer].every(u => u.position);
            if (allUnitsDeployed) {
                if (gameState.activePlayer === 1) {
                    gameState.activePlayer = 2;
                    addToBattleLog("Player 2 deployment phase begins", "info");
                } else {
                    gameState.phase = 'movement';
                    gameState.activePlayer = 1;
                    showPhaseFlash("MOVEMENT PHASE");
                    addToBattleLog("Deployment complete. Combat phase begins!", "info");
                    addToBattleLog(`Turn ${gameState.turn} - Player 1 movement phase`, "info");
                }
                updateUI();
            }
        }

        function handleMovementClick(row, col, hex) {
            if (gameState.selectedUnit) {
                // Try to move selected unit
                if (gameState.validMoves.find(m => m.row === row && m.col === col)) {
                    moveUnit(gameState.selectedUnit, row, col);
                    clearSelection();
                    gameState.phase = 'action';
                    showPhaseFlash("ACTION PHASE");
                    updateUI();
                    addToBattleLog("Movement complete. Action phase begins.", "info");
                }
            } else {
                // Select unit to move
                if (hex.unit && hex.unit.player === gameState.activePlayer && !hex.unit.activated) {
                    selectUnit(hex.unit);
                    calculateValidMoves(hex.unit);
                }
            }
        }

        function handleActionClick(row, col, hex) {
            if (gameState.selectedUnit) {
                // Try to attack target
                if (gameState.validAttacks.find(a => a.row === row && a.col === col)) {
                    if (hex.unit) {
                        combatResolution(gameState.selectedUnit, hex.unit);
                    }
                    gameState.selectedUnit.activated = true;
                    clearSelection();
                    checkPhaseEnd();
                }
            } else {
                // Select unit for action
                if (hex.unit && hex.unit.player === gameState.activePlayer && !hex.unit.activated) {
                    selectUnit(hex.unit);
                    calculateValidAttacks(hex.unit);
                }
            }
        }

        function selectUnit(unit) {
            gameState.selectedUnit = unit;
            
            // Highlight selected hex
            const allHexes = document.querySelectorAll('.hex');
            allHexes.forEach(h => h.classList.remove('selected'));
            
            const hex = document.getElementById(`hex-${unit.position.row}-${unit.position.col}`);
            hex.classList.add('selected');
            
            updateUnitDetails(unit);
        }

        function clearSelection() {
            gameState.selectedUnit = null;
            gameState.validMoves = [];
            gameState.validAttacks = [];
            
            const allHexes = document.querySelectorAll('.hex');
            allHexes.forEach(h => {
                h.classList.remove('selected', 'valid-move', 'valid-attack');
            });
        }

        function calculateValidMoves(unit) {
            gameState.validMoves = [];
            const moveRange = unit.vel * 2; // VEL × 2 movement points
            
            for (let dr = -moveRange; dr <= moveRange; dr++) {
                for (let dc = -moveRange; dc <= moveRange; dc++) {
                    const newRow = unit.position.row + dr;
                    const newCol = unit.position.col + dc;
                    
                    if (newRow < 0 || newRow >= GRID_ROWS || newCol < 0 || newCol >= GRID_COLS) continue;
                    if (dr === 0 && dc === 0) continue;
                    
                    const distance = Math.abs(dr) + Math.abs(dc);
                    if (distance <= moveRange) {
                        const targetHex = gameState.battlefield[newRow][newCol];
                        if (!targetHex.unit) {
                            gameState.validMoves.push({ row: newRow, col: newCol });
                            
                            const hexElement = document.getElementById(`hex-${newRow}-${newCol}`);
                            hexElement.classList.add('valid-move');
                        }
                    }
                }
            }
        }

        function calculateValidAttacks(unit) {
            gameState.validAttacks = [];
            const attackRange = 4; // Base attack range
            
            for (let dr = -attackRange; dr <= attackRange; dr++) {
                for (let dc = -attackRange; dc <= attackRange; dc++) {
                    const targetRow = unit.position.row + dr;
                    const targetCol = unit.position.col + dc;
                    
                    if (targetRow < 0 || targetRow >= GRID_ROWS || targetCol < 0 || targetCol >= GRID_COLS) continue;
                    if (dr === 0 && dc === 0) continue;
                    
                    const distance = Math.abs(dr) + Math.abs(dc);
                    if (distance <= attackRange) {
                        const targetHex = gameState.battlefield[targetRow][targetCol];
                        if (targetHex.unit && targetHex.unit.player !== unit.player) {
                            gameState.validAttacks.push({ row: targetRow, col: targetCol });
                            
                            const hexElement = document.getElementById(`hex-${targetRow}-${targetCol}`);
                            hexElement.classList.add('valid-attack');
                        }
                    }
                }
            }
        }

        function moveUnit(unit, newRow, newCol) {
            // Clear old position
            const oldHex = gameState.battlefield[unit.position.row][unit.position.col];
            oldHex.unit = null;
            updateHexDisplay(unit.position.row, unit.position.col);
            
            // Set new position
            unit.position = { row: newRow, col: newCol };
            const newHex = gameState.battlefield[newRow][newCol];
            newHex.unit = unit;
            updateHexDisplay(newRow, newCol);
            
            addToBattleLog(`${unit.name} moves to ${newRow},${newCol}`, "info");
        }

        function combatResolution(attacker, defender) {
            // Determine if melee or ranged
            const distance = Math.abs(attacker.position.row - defender.position.row) + 
                           Math.abs(attacker.position.col - defender.position.col);
            const isMelee = distance <= 1;
            
            // Roll initiative: d6 + VEL
            const attackerInitiative = rollD6() + attacker.vel;
            const defenderInitiative = rollD6() + defender.vel;
            
            let attackerRoll, defenderRoll;
            let attackerDamage = 0, defenderDamage = 0;
            
            // Attack hit animation
            const targetHex = document.getElementById(`hex-${defender.position.row}-${defender.position.col}`);
            targetHex.classList.add('attack-hit');
            setTimeout(() => targetHex.classList.remove('attack-hit'), 150);
            
            if (attackerInitiative >= defenderInitiative) {
                // Attacker goes first
                attackerRoll = rollD100() + (attacker.war * 8);
                defenderRoll = 50 + (defender.vel * 3);
                
                if (attackerRoll >= defenderRoll) {
                    attackerDamage = rollD10() + attacker.war - defender.res;
                    attackerDamage = Math.max(1, attackerDamage); // Minimum 1 damage
                    
                    defender.currentHp -= attackerDamage;
                    
                    const hitType = attackerRoll >= 95 ? "CRITICAL" : "HIT";
                    if (hitType === "CRITICAL") {
                        defender.currentHp -= attackerDamage; // Double damage on critical
                        addToBattleLog(`${attacker.name} scores a CRITICAL HIT on ${defender.name} for ${attackerDamage * 2} damage!`, "critical");
                    } else {
                        addToBattleLog(`${attacker.name} hits ${defender.name} for ${attackerDamage} damage`, "damage");
                    }
                } else {
                    const missType = attackerRoll <= 5 ? "FUMBLES" : "misses";
                    addToBattleLog(`${attacker.name} ${missType} ${defender.name}`, "miss");
                }
                
                // Defender counter-attack (if still alive and in range)
                if (defender.currentHp > 0 && isMelee) {
                    defenderRoll = rollD100() + (defender.war * 8);
                    attackerRoll = 50 + (attacker.vel * 3);
                    
                    if (defenderRoll >= attackerRoll) {
                        defenderDamage = rollD10() + defender.war - attacker.res;
                        defenderDamage = Math.max(1, defenderDamage);
                        
                        attacker.currentHp -= defenderDamage;
                        
                        const hitType = defenderRoll >= 95 ? "CRITICAL" : "HIT";
                        if (hitType === "CRITICAL") {
                            attacker.currentHp -= defenderDamage;
                            addToBattleLog(`${defender.name} counter-attacks with CRITICAL HIT for ${defenderDamage * 2} damage!`, "critical");
                        } else {
                            addToBattleLog(`${defender.name} counter-attacks for ${defenderDamage} damage`, "damage");
                        }
                    }
                }
            }
            
            // Check for unit destruction
            if (defender.currentHp <= 0) {
                addToBattleLog(`${defender.name} is destroyed!`, "damage");
                const targetHex = document.getElementById(`hex-${defender.position.row}-${defender.position.col}`);
                targetHex.classList.add('unit-death');
                setTimeout(() => targetHex.classList.remove('unit-death'), 300);
                removeUnit(defender);
            }
            
            if (attacker.currentHp <= 0) {
                addToBattleLog(`${attacker.name} is destroyed!`, "damage");
                const targetHex = document.getElementById(`hex-${attacker.position.row}-${attacker.position.col}`);
                targetHex.classList.add('unit-death');
                setTimeout(() => targetHex.classList.remove('unit-death'), 300);
                removeUnit(attacker);
            }
            
            updateHexDisplay(attacker.position?.row, attacker.position?.col);
            updateHexDisplay(defender.position?.row, defender.position?.col);
            updateUI();
            
            // Check for victory conditions
            checkVictoryConditions();
        }

        function removeUnit(unit) {
            if (unit.position) {
                const hex = gameState.battlefield[unit.position.row][unit.position.col];
                hex.unit = null;
                updateHexDisplay(unit.position.row, unit.position.col);
            }
            
            // Remove from army
            const armyIndex = gameState.armies[unit.player].indexOf(unit);
            if (armyIndex > -1) {
                gameState.armies[unit.player].splice(armyIndex, 1);
            }
        }

        function checkPhaseEnd() {
            // Check if all units have activated
            const activeUnits = gameState.armies[gameState.activePlayer].filter(u => !u.activated);
            
            if (activeUnits.length === 0) {
                endTurn();
            }
        }

        function endTurn() {
            // Reset activation for all units
            gameState.armies[gameState.activePlayer].forEach(unit => {
                unit.activated = false;
            });
            
            // Switch players
            gameState.activePlayer = gameState.activePlayer === 1 ? 2 : 1;
            
            // If back to player 1, increment turn
            if (gameState.activePlayer === 1) {
                gameState.turn++;
            }
            
            gameState.phase = 'movement';
            showPhaseFlash("MOVEMENT PHASE");
            clearSelection();
            updateUI();
            
            addToBattleLog(`Turn ${gameState.turn} - Player ${gameState.activePlayer} movement phase`, "info");
        }

        function checkVictoryConditions() {
            const player1Units = gameState.armies[1].length;
            const player2Units = gameState.armies[2].length;
            
            if (player1Units === 0) {
                addToBattleLog("🏆 PLAYER 2 VICTORY! All Player 1 units destroyed!", "critical");
                endGame(2);
            } else if (player2Units === 0) {
                addToBattleLog("🏆 PLAYER 1 VICTORY! All Player 2 units destroyed!", "critical");
                endGame(1);
            }
        }

        function endGame(winner) {
            gameState.phase = 'game_over';
            updateUI();
            
            setTimeout(() => {
                if (confirm(`Player ${winner} wins! Play again?`)) {
                    location.reload();
                }
            }, 2000);
        }

        function updateHexDisplay(row, col) {
            if (row === undefined || col === undefined) return;
            
            const hex = document.getElementById(`hex-${row}-${col}`);
            const hexData = gameState.battlefield[row][col];
            
            // Clear existing unit display
            const existingUnit = hex.querySelector('.unit');
            if (existingUnit) {
                existingUnit.remove();
            }
            
            // Add unit if present
            if (hexData.unit) {
                const unit = hexData.unit;
                const unitElement = document.createElement('div');
                unitElement.className = `unit player${unit.player}`;
                
                const healthPercent = (unit.currentHp / unit.maxHp) * 100;
                const healthClass = healthPercent > 66 ? 'health-high' : 
                                  healthPercent > 33 ? 'health-medium' : 'health-low';
                
                unitElement.innerHTML = `
                    <span>${unit.icon}</span>
                    <div class="health-bar">
                        <div class="health-fill ${healthClass}" style="width: ${healthPercent}%"></div>
                    </div>
                `;
                
                unitElement.title = `${unit.name} (${unit.currentHp}/${unit.maxHp} HP)`;
                hex.appendChild(unitElement);
            }
        }

        function updateUI() {
            // Update phase indicator
            const phaseIndicator = document.getElementById('phaseIndicator');
            const phaseText = {
                'army_selection': 'Army Selection',
                'deployment': `Deployment - Player ${gameState.activePlayer}`,
                'movement': `Turn ${gameState.turn} - Player ${gameState.activePlayer} Movement`,
                'action': `Turn ${gameState.turn} - Player ${gameState.activePlayer} Action`,
                'game_over': 'Game Over'
            };
            phaseIndicator.textContent = phaseText[gameState.phase] || 'Unknown Phase';
            
            // Update current player info
            const currentFactionKey = gameState.factionChoices[gameState.activePlayer];
            const currentFaction = currentFactionKey ? FACTIONS[currentFactionKey] : null;
            
            document.getElementById('currentFaction').textContent = currentFaction ? 
                `${currentFaction.name} (Player ${gameState.activePlayer})` : 'No faction selected';
            
            if (currentFaction) {
                const army = gameState.armies[gameState.activePlayer];
                const totalPoints = army.reduce((sum, unit) => sum + unit.cost, 0);
                document.getElementById('currentPoints').textContent = `${totalPoints} / 1000 pts`;
                document.getElementById('currentFaction').style.color = currentFaction.accent;
            }
            
            // Update army list
            updateArmyList();
        }

        function updateArmyList() {
            const armyList = document.getElementById('armyList');
            const army = gameState.armies[gameState.activePlayer] || [];
            
            if (army.length === 0) {
                armyList.innerHTML = '<div style="color: #888; font-style: italic;">No units deployed</div>';
                return;
            }
            
            armyList.innerHTML = army.map(unit => {
                const healthPercent = (unit.currentHp / unit.maxHp) * 100;
                const activatedClass = unit.activated ? 'opacity: 0.6;' : '';
                
                return `
                    <div class="unit-item" style="${activatedClass}" onclick="focusOnUnit('${unit.id}')">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span>${unit.icon} ${unit.name}</span>
                            <span style="font-size: 10px; color: #888; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.currentHp}/${unit.maxHp} HP</span>
                        </div>
                        <div class="stat-bars">
                            <div class="stat-bar">
                                <span class="stat-label" style="color: #B87333;">WAR</span>
                                <div class="stat-value">
                                    <div class="stat-fill war-stat" style="width: ${(unit.war / 10) * 100}%"></div>
                                </div>
                                <span style="font-size: 10px; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.war}</span>
                            </div>
                            <div class="stat-bar">
                                <span class="stat-label" style="color: #708090;">RES</span>
                                <div class="stat-value">
                                    <div class="stat-fill res-stat" style="width: ${(unit.res / 10) * 100}%"></div>
                                </div>
                                <span style="font-size: 10px; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.res}</span>
                            </div>
                            <div class="stat-bar">
                                <span class="stat-label" style="color: #00E5FF;">VEL</span>
                                <div class="stat-value">
                                    <div class="stat-fill vel-stat" style="width: ${(unit.vel / 10) * 100}%"></div>
                                </div>
                                <span style="font-size: 10px; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.vel}</span>
                            </div>
                            <div class="stat-bar">
                                <span class="stat-label" style="color: #FFB300;">ACC</span>
                                <div class="stat-value">
                                    <div class="stat-fill acc-stat" style="width: ${(unit.acc / 10) * 100}%"></div>
                                </div>
                                <span style="font-size: 10px; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.acc}</span>
                            </div>
                            <div class="stat-bar">
                                <span class="stat-label" style="color: #7B1FA2;">DIS</span>
                                <div class="stat-value">
                                    <div class="stat-fill dis-stat" style="width: ${(unit.dis / 10) * 100}%"></div>
                                </div>
                                <span style="font-size: 10px; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.dis}</span>
                            </div>
                            <div class="stat-bar">
                                <span class="stat-label" style="color: #00C853;">INS</span>
                                <div class="stat-value">
                                    <div class="stat-fill ins-stat" style="width: ${(unit.ins / 10) * 100}%"></div>
                                </div>
                                <span style="font-size: 10px; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.ins}</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function updateUnitDetails(unit) {
            const unitDetails = document.getElementById('unitDetails');
            
            if (!unit) {
                unitDetails.innerHTML = '<div style="color: #888; font-style: italic;">No unit selected</div>';
                return;
            }
            
            const faction = FACTIONS[unit.faction];
            const healthPercent = (unit.currentHp / unit.maxHp) * 100;
            
            unitDetails.innerHTML = `
                <div style="text-align: center; margin-bottom: 15px;">
                    <div style="font-size: 24px; margin-bottom: 5px;">${unit.icon}</div>
                    <div style="font-family: 'Orbitron', system-ui, sans-serif; font-size: 16px; font-weight: bold; color: ${faction.accent};">${unit.name}</div>
                    <div style="font-size: 12px; color: #888;">${unit.role} • <span style="font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.cost} pts</span></div>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <div style="font-size: 12px; margin-bottom: 5px; color: #FFD700; font-family: 'JetBrains Mono', 'Courier New', monospace;">Health: ${unit.currentHp}/${unit.maxHp}</div>
                    <div style="background: #333; height: 8px; border-radius: 4px; overflow: hidden;">
                        <div style="height: 100%; width: ${healthPercent}%; background: ${healthPercent > 66 ? '#00C853' : healthPercent > 33 ? '#FFB300' : '#FF2D2D'}; transition: width 0.3s ease;"></div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                    <div style="text-align: center; padding: 5px; background: rgba(184, 115, 51, 0.2); border-radius: 4px;">
                        <div style="font-size: 18px; font-weight: bold; color: #B87333; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.war}</div>
                        <div style="font-size: 10px; color: #B87333; font-family: 'JetBrains Mono', 'Courier New', monospace;">WAR</div>
                    </div>
                    <div style="text-align: center; padding: 5px; background: rgba(112, 128, 144, 0.2); border-radius: 4px;">
                        <div style="font-size: 18px; font-weight: bold; color: #708090; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.res}</div>
                        <div style="font-size: 10px; color: #708090; font-family: 'JetBrains Mono', 'Courier New', monospace;">RES</div>
                    </div>
                    <div style="text-align: center; padding: 5px; background: rgba(0, 229, 255, 0.2); border-radius: 4px;">
                        <div style="font-size: 18px; font-weight: bold; color: #00E5FF; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.vel}</div>
                        <div style="font-size: 10px; color: #00E5FF; font-family: 'JetBrains Mono', 'Courier New', monospace;">VEL</div>
                    </div>
                    <div style="text-align: center; padding: 5px; background: rgba(255, 179, 0, 0.2); border-radius: 4px;">
                        <div style="font-size: 18px; font-weight: bold; color: #FFB300; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.acc}</div>
                        <div style="font-size: 10px; color: #FFB300; font-family: 'JetBrains Mono', 'Courier New', monospace;">ACC</div>
                    </div>
                    <div style="text-align: center; padding: 5px; background: rgba(123, 31, 162, 0.2); border-radius: 4px;">
                        <div style="font-size: 18px; font-weight: bold; color: #7B1FA2; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.dis}</div>
                        <div style="font-size: 10px; color: #7B1FA2; font-family: 'JetBrains Mono', 'Courier New', monospace;">DIS</div>
                    </div>
                    <div style="text-align: center; padding: 5px; background: rgba(0, 200, 83, 0.2); border-radius: 4px;">
                        <div style="font-size: 18px; font-weight: bold; color: #00C853; font-family: 'JetBrains Mono', 'Courier New', monospace;">${unit.ins}</div>
                        <div style="font-size: 10px; color: #00C853; font-family: 'JetBrains Mono', 'Courier New', monospace;">INS</div>
                    </div>
                </div>
                
                <div>
                    <div style="font-size: 12px; font-weight: bold; color: #FFD700; margin-bottom: 5px; font-family: 'Orbitron', system-ui, sans-serif; letter-spacing: 4px; text-transform: uppercase; font-weight: 600;">Abilities:</div>
                    <div style="font-size: 11px; color: #CCC;">
                        ${unit.abilities.map(ability => `• ${ability}`).join('<br>')}
                    </div>
                </div>
            `;
        }

        function addToBattleLog(message, type = "info") {
            const battleLog = document.getElementById('battleLog');
            const logEntry = document.createElement('div');
            logEntry.className = `log-entry log-${type}`;
            logEntry.textContent = message;
            
            battleLog.appendChild(logEntry);
            battleLog.scrollTop = battleLog.scrollHeight;
            
            // Keep log from getting too long
            while (battleLog.children.length > 50) {
                battleLog.removeChild(battleLog.firstChild);
            }
        }

        function focusOnUnit(unitId) {
            const unit = [...gameState.armies[1], ...gameState.armies[2]].find(u => u.id === unitId);
            if (unit && unit.position) {
                clearSelection();
                selectUnit(unit);
                
                // Scroll hex into view (if needed)
                const hex = document.getElementById(`hex-${unit.position.row}-${unit.position.col}`);
                hex.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        // Dice Rolling Functions
        function rollD6() { return Math.floor(Math.random() * 6) + 1; }
        function rollD10() { return Math.floor(Math.random() * 10) + 1; }
        function rollD100() { return Math.floor(Math.random() * 100) + 1; }

        // Event Listeners
        document.getElementById('endTurnBtn').addEventListener('click', () => {
            if (gameState.phase === 'movement' || gameState.phase === 'action') {
                endTurn();
            }
        });

        document.getElementById('nextPhaseBtn').addEventListener('click', () => {
            if (gameState.phase === 'movement') {
                gameState.phase = 'action';
                showPhaseFlash("ACTION PHASE");
                clearSelection();
                updateUI();
                addToBattleLog("Action phase begins", "info");
            } else if (gameState.phase === 'action') {
                endTurn();
            }
        });

        document.getElementById('resetGameBtn').addEventListener('click', () => {
            if (confirm('Reset the entire game?')) {
                location.reload();
            }
        });

        // Global functions (called from onclick handlers)
        window.removeUnitFromArmy = removeUnitFromArmy;

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', initGame);
