# CHAIN OF WAR — Game Design Bible v1.0

> *"In the dying light of the 41st millennium, there is only war... and whoever mints first."*

---

## 1. ELEVATOR PITCH

**Chain of War** is a PvP tactical wargame built on-chain where players mint, collect, and battle NFT armies across two gameplay modes — fast async simulations and deep real-time tactics. Every unit is an NFT. Every battle earns $WAR. Every army tells a story.

Think: **Warhammer 40K army building** × **on-chain ownership** × **auto-battler meets turn-based tactics**.

---

## 2. THE TEN FACTIONS

Each faction has a distinct combat philosophy, visual identity, and collector appeal. No faction is "best" — they form a rock-paper-scissors web of advantages.

### ⚔️ Faction Roster

| # | Faction | Archetype | Combat Style | Collector Fantasy |
|---|---------|-----------|-------------|-------------------|
| 1 | **The Iron Covenant** | Augmented super-soldiers | Balanced / elite few | "Every unit is a hero" |
| 2 | **The Swarm of Xeth** | Bio-organic hive mind | Horde / melee flood | "Drown them in bodies" |
| 3 | **The Void Pharaohs** | Ancient machine dynasty | Attrition / resurrection | "They. Don't. Stay. Dead." |
| 4 | **The Emerald Tide** | Chaotic war-loving brutes | Unpredictable / explosive | "Beautiful chaos" |
| 5 | **The Celestial Order** | Tech-superior strategists | Long-range / drone warfare | "Precise, clinical, lethal" |
| 6 | **The Warp Touched** | Reality-corrupted fanatics | High-risk / high-reward | "Sell your soul to win" |
| 7 | **The Shadow Kin** | Ancient speed-warriors | Glass cannon / assassination | "Strike once, strike perfectly" |
| 8 | **The Steel Legion** | Mass-produced war machine | Cheap bodies + heavy armor | "Quantity is a quality" |
| 9 | **The Bone Prophets** | Psychic manipulators | Debuffs / mind control | "Win before the fight starts" |
| 10 | **The Apex Hunters** | Adaptive beast-warriors | Evolution / mid-battle adaptation | "They become what kills you" |

### Faction Advantage Web (simplified)
```
Iron Covenant > Emerald Tide > Shadow Kin > Celestial Order > Swarm of Xeth > Iron Covenant
Void Pharaohs > Steel Legion > Bone Prophets > Warp Touched > Apex Hunters > Void Pharaohs
```
Cross-web matchups are neutral (50/50 before army composition). This creates a meta without any faction being universally dominant.

---

## 3. UNIT CLASSIFICATION SYSTEM

Every unit falls into one of five battlefield roles:

| Role | Points Range | Per Army | Purpose |
|------|-------------|----------|---------|
| **Troops** | 50-150 pts | 2-6 | Line holders, objective grabbers. Cheap, reliable. |
| **Elites** | 150-300 pts | 1-3 | Specialists. High damage or utility. |
| **Fast Attack** | 100-250 pts | 1-3 | Flankers, scouts. High mobility. |
| **Heavy Support** | 200-400 pts | 1-2 | Tanks, artillery. Devastating but slow. |
| **HQ** | 200-350 pts | **1 (mandatory)** | Army leader. Buffs nearby units. If HQ dies, army morale crumbles. |

### Army Building Rules
- **Point caps**: 1000 / 1500 / 2000 (selected before matchmaking)
- **Mandatory**: 1 HQ + minimum 2 Troops
- **Faction-locked**: All units must be from the same faction (no mixing)
- **Equipment loadout**: Each unit has 1-3 equipment slots that can be customized pre-battle

### Unit Stat Block (6 core stats)

| Stat | Abbreviation | Range | Description |
|------|-------------|-------|-------------|
| **Warfare** | WAR | 1-10 | Attack power (melee + ranged base) |
| **Resilience** | RES | 1-10 | Damage absorption / effective HP |
| **Velocity** | VEL | 1-10 | Movement range + initiative order |
| **Accuracy** | ACC | 1-10 | Hit chance modifier for ranged attacks |
| **Discipline** | DIS | 1-10 | Morale resistance + ability to follow orders (slider compliance) |
| **Instinct** | INS | 1-10 | Reaction to unexpected events, counter-attack chance |

**Total stat points per unit type:**
- Troops: 20-25 total
- Elites: 28-35 total  
- Fast Attack: 25-30 total
- Heavy Support: 30-38 total
- HQ: 32-40 total

### Example Unit Cards

#### Iron Covenant — Centurion (HQ)
```
Points: 300
WAR: 7 | RES: 8 | VEL: 5 | ACC: 6 | DIS: 9 | INS: 5
Total: 40

Ability: "Hold the Line" — All friendly units within 2 tiles 
gain +2 DIS and +1 RES while Centurion is alive.

Equipment Slots: 3
Default Loadout: Power Blade (melee +2 WAR), Tactical Shield 
(+1 RES), Command Relay (+1 DIS aura range)
```

#### Swarm of Xeth — Skitterling Brood (Troops)
```
Points: 60
WAR: 4 | RES: 2 | VEL: 6 | ACC: 2 | DIS: 3 | INS: 7
Total: 24

Ability: "Strength in Numbers" — +1 WAR for each adjacent 
friendly Swarm unit (max +4).

Equipment Slots: 1
Default Loadout: Bioclaws (melee +1 WAR)
```

#### Celestial Order — Longstrike Battery (Heavy Support)
```
Points: 350
WAR: 3 | RES: 6 | VEL: 2 | ACC: 10 | DIS: 8 | INS: 3
Total: 32

Ability: "Orbital Lock" — Can attack any unit on the map 
regardless of range. Cannot fire if an enemy is adjacent.

Equipment Slots: 2
Default Loadout: Railcannon (ranged +4 WAR at 5+ tiles), 
Stabilizer Rig (+1 ACC)
```

---

## 4. COMBAT MATH ENGINE

### The Core Roll

Every attack resolves with this formula:

```
Hit Roll = d100 + (Attacker ACC × 5) - (Defender VEL × 3)
  → Hit if result ≥ 50

Damage Roll = d20 + Attacker WAR - Defender RES
  → Minimum 0 damage, no negative

Critical: Hit Roll ≥ 95 → double damage
Fumble:  Hit Roll ≤ 5  → attacker takes 1 self-damage (overextension)
```

### Combat Modifiers

| Modifier | Effect |
|----------|--------|
| **Flanking** (attacking from side/rear) | +15 to Hit Roll |
| **Cover** (behind terrain) | -10 to Hit Roll against this unit |
| **High Ground** | +5 to Hit Roll, +1 effective range |
| **Melee vs. Adjacent** | Uses WAR directly, ACC irrelevant |
| **Morale Broken** (HQ dead) | -3 DIS to all units, -10 to all Hit Rolls |
| **Offensive Slider 80%+** | +5 Hit Roll, -2 effective RES |
| **Defensive Slider 80%+** | +2 effective RES, -5 Hit Roll |

### Slider Influence on RNG Simulation (Async Mode)

The offense/defense slider (0-100 scale, 0 = full defense, 100 = full offense) modifies unit AI behavior:

| Slider Range | Unit Behavior |
|-------------|---------------|
| 0-20 (Fortress) | Hold position, prioritize cover, only attack adjacent enemies |
| 21-40 (Cautious) | Advance slowly, maintain cover, engage at range |
| 41-60 (Balanced) | Standard tactics, mix of advance and hold |
| 61-80 (Aggressive) | Push forward, prioritize high-value targets, accept risk |
| 81-100 (Blitz) | All-out advance, melee priority, ignore cover for speed |

**Discipline (DIS) determines slider compliance**: A unit with DIS 9 follows the slider almost exactly. A unit with DIS 3 deviates randomly — an Emerald Tide brute set to "defensive" might charge anyway because its DIS is low. This creates emergent, faction-appropriate behavior.

---

## 5. UNIT DEATH & PERMADEATH SYSTEM

### The Stakes Ladder

Chain of War has three tiers of consequence. Players choose their risk level.

| Mode | Unit Death | Stakes | $WAR Rewards |
|------|-----------|--------|-------------|
| **Skirmish** (async) | Temporary — units return to collection after match | None | 1× base |
| **Warzone** (real-time) | Temporary — units return to collection after match | None | 2.5× base |
| **Death Match** (opt-in) | **PERMANENT** — dead units are burned on-chain. Winner claims loser's fallen units as NFT transfers. | Real | 5× base |

### Death Match Rules

Death Match is the high-stakes mode for players who want real consequences:

1. **Opt-in only** — players must explicitly choose Death Match. No accidents.
2. **Army lock-in** — once you queue for Death Match, your army is escrowed in the smart contract. No swapping units out.
3. **Casualty transfer** — when a unit dies in Death Match, the NFT is transferred to the winning player at match end. The loser physically loses those NFTs from their wallet.
4. **Survivor bonus** — units that survive a Death Match receive an on-chain "Blooded" badge + permanent +1 to one random stat. Veterans of Death Match become the most valuable NFTs in the game.
5. **War Chest demand** — permanent losses drive continuous minting demand. Players who lose units need to replace them. This is the economic engine.

### Why This Works

- **Casual players** never risk anything. Skirmish and Warzone are safe, fun, and rewarding.
- **Competitive players** can prove skill in Warzone without risking their collection.
- **Hardcore players** get the adrenaline of real stakes in Death Match. Every move matters because every unit could die forever.
- **The economy** benefits because Death Match creates constant NFT demand (burned units need replacing) and a natural supply sink (reducing total NFT supply over time, increasing rarity of survivors).
- **Collectors** hunt for "Blooded" veterans — units with 10+ Death Match survival badges are genuinely rare artifacts with provable on-chain history.

### Anti-Grief Protections

- Death Match requires minimum ELO rating to enter (prevents smurfing)
- Army strength must be within 20% of opponent (prevents whales stomping)
- Maximum 1 Death Match per hour per player (prevents tilt-queuing)
- "Mercy rule" — if you lose your HQ in Death Match, you can concede. You lose the HQ NFT but keep all other surviving units. This prevents total army wipes from a single bad game.

---

## 6. GAME MODES

### ⚡ Skirmish (Asynchronous) — No Permadeath

**Time commitment**: 2-5 minutes (setup only)
**How it works**:
1. Player selects point cap (1000/1500/2000)
2. Deploys units on their half of a randomly selected map
3. Sets army-wide offense/defense slider (optionally per-unit)
4. Hits "Deploy" — army is locked
5. System waits for an opponent (or matches against an AI simulation of another player's deployed army)
6. Battle simulates in ~30 seconds using the combat math engine
7. Player receives a **Battle Report**: text play-by-play + 2D replay showing unit movements, attacks, deaths
8. Winner receives $WAR rewards

**The Battle Report** is key to making async feel meaningful. It should read like a war story:

> *"Turn 3: Skitterling Brood Alpha surges forward into the ruins, seeking cover. Centurion Marcus holds the ridge, his Command Relay boosting nearby Praetorians. The Longstrike Battery locks onto the exposed Brood — a devastating hit tears through three Skitterlings. But the swarm pushes on..."*

**Rewards**: Base $WAR payout × point cap multiplier × win streak bonus

### 🎯 Warzone (Real-Time Turn-Based) — No Permadeath

**Time commitment**: 15-30 minutes
**How it works**:
1. Matchmaking by army strength (point cap) and player rating (ELO)
2. Blind deployment phase (90 seconds) — both players place units simultaneously
3. Turn-based play begins:
   - **Movement Phase** (45 sec): Move units within VEL range
   - **Action Phase** (45 sec): Attack, use abilities, activate equipment
   - **Resolution Phase** (auto): Damage resolves, morale checks, triggered abilities
4. Max 12 turns or 25-minute hard cap
5. Victory: Destroy enemy HQ, control 3/5 objectives, or most points at time limit

**Rewards**: 2.5× the Skirmish payout for equivalent point cap. Additional bonus for decisive victories (HQ kill vs. points).

### 💀 Death Match (Opt-In Permadeath PvP)

**Time commitment**: 15-30 minutes
**Stakes**: REAL — dead units are burned/transferred permanently
**How it works**:
1. Player opts into Death Match queue (requires ELO 1200+)
2. Army is escrowed in smart contract — locked, no changes
3. Matchmaking by army strength (within 20% parity) and ELO
4. Game plays identical to Warzone rules (same turn structure, timing)
5. When a unit dies in battle, its NFT is marked for transfer
6. At match end: winner receives all of loser's fallen unit NFTs
7. Winner's surviving units receive "Blooded" badge (+1 random stat, permanent, on-chain)
8. **Mercy rule**: Concede after HQ death — lose HQ NFT, keep all surviving units

**Rewards**: 5× Skirmish base payout. The highest $WAR earning rate in the game. High risk, high reward.

**Limits**: 1 Death Match per hour per player. Prevents tilt-queuing.

### 🏆 Conquest (Tournaments)

**Time commitment**: Varies (bracket-based)
**Entry fee**: $WAR buy-in
**Format**: 8/16/32 player single-elimination Warzone brackets
**Prize pool**: Entry fees pooled, 70% to winners (50/30/20 split for top 3), 20% burned, 10% to treasury

---

## 6. NFT STRUCTURE & MINTING

### The Mint: War Chest

Players purchase **War Chests** — mystery box NFTs that contain a randomized army.

**One War Chest = One Complete Army** containing:
- 1 HQ unit (random from that faction)
- 2-4 Troops (random)
- 1-2 other units (Elites, Fast Attack, or Heavy Support — random)
- All units from the **same random faction**
- Basic equipment loadout included

**War Chest Pricing**:
| Tier | Price | Army Size | Guaranteed |
|------|-------|-----------|-----------|
| **Recruit Chest** | 0.02 ETH | 4-5 units | 1 HQ, 2 Troops, 1-2 random |
| **Veteran Chest** | 0.05 ETH | 5-7 units | 1 HQ, 3 Troops, 1-3 random, 1 guaranteed Elite+ |
| **Commander Chest** | 0.10 ETH | 7-9 units | 1 HQ, 4 Troops, 2-4 random, 1 guaranteed Heavy Support |

### Rarity System

Every unit has a rarity tier that modifies its base stats:

| Rarity | Stat Bonus | Drop Rate | Visual |
|--------|-----------|-----------|--------|
| **Common** | +0 | 50% | Standard skin |
| **Uncommon** | +1 to one random stat | 25% | Minor glow/accent |
| **Rare** | +1 to two stats | 15% | Distinct skin variant |
| **Epic** | +2 to one stat, +1 to another | 8% | Animated effects |
| **Legendary** | +2 to two stats + unique ability | 2% | Full alternate model + particle effects |

**Important balance note**: Rarity provides a modest edge, not an overwhelming one. A well-played Common army should beat a poorly-played Legendary army. The +1/+2 stat bonuses translate to roughly 5-10% combat effectiveness increase — meaningful but not decisive.

### NFT Metadata Structure
```json
{
  "name": "Centurion Marcus",
  "faction": "Iron Covenant",
  "role": "HQ",
  "rarity": "Rare",
  "stats": {
    "WAR": 7, "RES": 9, "VEL": 5, 
    "ACC": 6, "DIS": 9, "INS": 5
  },
  "abilities": ["Hold the Line"],
  "equipment_slots": 3,
  "equipment": ["Power Blade", "Tactical Shield", "Command Relay"],
  "battles_fought": 47,
  "victories": 31,
  "kills": 156,
  "level": 5,
  "mint_number": 1847,
  "image": "ipfs://...",
  "animation_url": "ipfs://..."
}

```

### Individual Unit Trading

While War Chests mint full armies, individual units can be:
- **Traded** on secondary markets (OpenSea, Blur, custom marketplace)
- **Combined** — players build custom armies from individually acquired units
- **Retired** — burned for $WAR (creates a token sink)

This means the meta-game includes a **transfer market** where skilled players can build optimized armies by trading for specific units they need.

---

## 7. $WAR TOKENOMICS

### Supply & Distribution

| Allocation | % | Vesting |
|-----------|---|---------|
| **Battle Rewards Pool** | 40% | Emitted over 4 years, decreasing schedule |
| **Treasury** | 20% | DAO-governed, for development & tournaments |
| **Team** | 15% | 1-year cliff, 3-year vest |
| **Liquidity** | 10% | Initial DEX offering |
| **Community & Airdrops** | 10% | Early player rewards, partnerships |
| **Advisors** | 5% | 6-month cliff, 2-year vest |

**Total Supply**: 1,000,000,000 $WAR (fixed, no inflation after emission ends)

### Earning $WAR (Faucets)

| Activity | Reward |
|----------|--------|
| Win a Skirmish (1000 pts) | 10-15 $WAR |
| Win a Skirmish (1500 pts) | 20-30 $WAR |
| Win a Skirmish (2000 pts) | 35-50 $WAR |
| Win a Warzone match | 2.5× equivalent Skirmish |
| Complete daily missions | 5-20 $WAR |
| Win streak (3+) | +25% bonus per streak win |
| Tournament placement | Entry pool distribution |

### Spending $WAR (Sinks) ← **Critical for sustainability**

| Sink | Cost |
|------|------|
| **Equipment upgrades** | 50-500 $WAR per upgrade tier |
| **Unit re-roll** | 100 $WAR — re-randomize one unit's stats within rarity band |
| **Faction transfer** | 500 $WAR — move a unit to a different faction (cosmetic + stat rebalance) |
| **Name your unit** | 25 $WAR — custom name on-chain |
| **Tournament entry** | 100-10,000 $WAR depending on tier |
| **Cosmetic skins** | 50-1,000 $WAR |
| **Army banner** | 200 $WAR — custom army emblem |
| **Retirement burn** | Burn a unit NFT → receive 30-70% of its point value in $WAR |
| **Mercenary hire** | Rent another player's unit for one battle (fee set by owner) |
| **War Chest discount** | Pay partial ETH + $WAR for War Chest mints |

### Anti-Inflation Mechanics

1. **Tournament burns**: 20% of all tournament entry fees are burned permanently
2. **Equipment durability**: Equipment degrades over 20-50 battles, requiring $WAR to repair or replace
3. **Season resets**: Each 3-month season introduces new maps, balance patches, and cosmetic-only season passes purchasable with $WAR
4. **Retirement program**: Incentivize burning low-rarity units by offering better $WAR returns for bulk retirements

---

## 8. PROGRESSION SYSTEM

### Unit Leveling

Units gain XP from battles (win or lose, winners get 2×).

| Level | XP Required | Reward |
|-------|-------------|--------|
| 1 | 0 | Base stats |
| 2 | 100 | +1 to lowest stat |
| 3 | 300 | Unlock equipment slot |
| 4 | 600 | +1 to any stat (player choice) |
| 5 | 1000 | Unlock secondary ability |
| 6-10 | +500 each | Alternating stat boosts and cosmetic unlocks |
| 10 (MAX) | 5000 total | "Veteran" title + unique visual flair |

**Max level cap keeps power creep in check.** A Level 10 unit is maybe 15-20% stronger than Level 1 — meaningful but not insurmountable.

### Player Rating (ELO)

- Starting ELO: 1000
- Gains/losses based on opponent strength differential
- Separate ELO for Skirmish and Warzone
- Seasonal leaderboards with $WAR prizes for top players
- Rank tiers: Conscript → Soldier → Sergeant → Lieutenant → Captain → Commander → Marshal → Warlord

### Battle History as NFT Metadata

Every battle a unit participates in is recorded on-chain:
- Battles fought, wins, losses
- Total kills, damage dealt
- Notable achievements ("Survived 5 battles at 1 HP", "Killed an HQ")

This makes **veteran units more valuable** on the secondary market — a Legendary Centurion with 200 wins and 500 kills is a collector's piece, not just a stat stick.

---

## 9. MAP SYSTEM

### Map Types

| Map | Size | Terrain Focus | Favors |
|-----|------|--------------|--------|
| **Ruined Citadel** | Small (8×8) | Dense cover, tight corridors | Melee, close combat |
| **Open Wasteland** | Large (16×16) | Minimal cover, long sight lines | Ranged, Heavy Support |
| **Urban Sprawl** | Medium (12×12) | Mixed cover, multiple levels | Balanced, flanking |
| **Toxic Marshlands** | Medium (12×12) | Movement penalties, toxic zones | High VEL, adaptive |
| **Orbital Platform** | Small (8×8) | Fall hazards, chokepoints | Elites, positioning |
| **Frozen Tundra** | Large (16×16) | Blizzard zones (reduced ACC), ice | Discipline, resilience |

Maps are randomly assigned but players can see the map before deployment — so map-reading skill matters.

### Terrain Types

| Terrain | Movement Cost | Cover Bonus | Special |
|---------|-------------|-------------|---------|
| Open | 1 | None | — |
| Light Cover | 1 | -5 to enemy Hit Roll | Bushes, debris |
| Heavy Cover | 2 | -15 to enemy Hit Roll | Walls, bunkers |
| Impassable | ∞ | — | Mountains, buildings |
| Elevated | 2 to climb | +5 to own Hit Roll | Rooftops, hills |
| Hazardous | 1 | None | 1 damage per turn spent here |

---

## 10. SOCIAL & META FEATURES

### Guilds (War Clans)
- Players form guilds of 5-50 members
- Guild Wars: async guild-vs-guild where each member contributes one battle
- Guild treasury for shared $WAR rewards
- Guild banners, custom colors, shared cosmetics

### The Armory (Marketplace)
- Custom in-game marketplace for trading units
- Price history, rarity filters, stat sorting
- "Wanted" board — post bounties for specific unit types
- Rental system for tournament preparation

### Spectator Mode
- Watch live Warzone matches
- Commentated tournament broadcasts
- Bet $WAR on match outcomes (small amounts, social feature)

### Lore System
- Each faction has deep lore delivered through:
  - Codex entries unlocked by playing that faction
  - Battle reports that weave narrative
  - Seasonal story events that shift the meta-narrative
  - Community-voted faction conflicts that determine seasonal bonuses

---

## 11. TECHNICAL ARCHITECTURE (High Level)

```
┌─────────────────────────────────────────┐
│              FRONTEND                    │
│  React/Next.js + Three.js (3D viewer)   │
│  + Pixi.js (2D battle replays)          │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│           GAME SERVER                    │
│  Combat engine (Rust for speed)          │
│  Matchmaking (ELO-based)                 │
│  Battle simulation (async + real-time)   │
│  Anti-cheat validation                   │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│          BLOCKCHAIN LAYER                │
│  EVM-compatible L2 (Base, Arbitrum,      │
│  or custom app-chain)                    │
│  - NFT contracts (ERC-721 for units)     │
│  - $WAR token (ERC-20)                   │
│  - Tournament escrow contracts           │
│  - Battle result attestation             │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│            STORAGE                       │
│  IPFS/Arweave — NFT art + metadata       │
│  PostgreSQL — game state, matchmaking    │
│  Redis — real-time session management    │
└─────────────────────────────────────────┘
```

### Why L2 over L1?
- Gas costs for minting armies and recording battles need to be < $0.01
- High throughput for battle result attestation
- Base or Arbitrum have the infrastructure and user base
- Custom app-chain (via OP Stack or Arbitrum Orbit) if volume justifies it

---

## 12. MONETIZATION STREAMS

| Revenue Source | Model |
|---------------|-------|
| War Chest sales | Primary mint revenue (ETH) |
| Secondary market royalties | 5% on all unit trades |
| Season passes | Cosmetic-only, $WAR or ETH |
| Tournament rake | 10% of prize pools |
| Cosmetic shop | Skins, banners, effects ($WAR) |
| Mercenary fees | Platform takes 5% of rental transactions |
| Partnership bundles | Collab factions with other NFT projects |

---

## 13. LAUNCH ROADMAP

### Phase 1: Foundation (Months 1-3)
- [ ] Finalize all 10 faction unit rosters (full stat blocks)
- [ ] Build and test combat math engine
- [ ] Design NFT art pipeline (generative with hand-crafted bases)
- [ ] Deploy smart contracts on testnet
- [ ] Community building (Discord, Twitter, lore drops)

### Phase 2: Alpha (Months 4-6)
- [ ] Closed alpha with Skirmish mode only
- [ ] 100-200 early testers
- [ ] Balance iteration based on win rates
- [ ] Battle report system
- [ ] Basic 2D replay viewer

### Phase 3: Beta (Months 7-9)
- [ ] Public beta with both Skirmish and Warzone
- [ ] War Chest minting on testnet
- [ ] Marketplace prototype
- [ ] Tournament system
- [ ] Mobile-responsive UI

### Phase 4: Launch (Months 10-12)
- [ ] Mainnet deployment
- [ ] Public War Chest sale
- [ ] $WAR token launch
- [ ] Full marketplace
- [ ] Season 1 begins

### Phase 5: Growth (Year 2+)
- [ ] New factions (community-voted)
- [ ] Guild Wars mode
- [ ] 3D battle viewer
- [ ] Mobile app
- [ ] Esports tournament circuit
- [ ] Cross-project collaborations

---

## 14. IMMERSION DESIGN — MAKING PLAYERS FEEL THE WAR

> The combat math is the skeleton. The NFTs are the economy. But immersion is what makes players come back.

### 14.1 Sound Design (50% of Immersion)

Every faction has a unique audio identity. Sound is the fastest path to emotional investment.

**Faction Audio Signatures:**

| Faction | Ambient | Attack | Death |
|---------|---------|--------|-------|
| Iron Covenant | Power armor hum, servo whirs | Heavy metallic impacts, blade resonance | Systems failing, hydraulic hiss |
| Swarm of Xeth | Wet chittering, spore pops, mycelial creak | Crystalline shatter, organic ripping | Spore burst, dissolving crackle |
| Void Pharaohs | Impossible reverb, spatial distortion | Reality tearing, sub-bass drop | Geometric collapse, folding sound |
| Emerald Tide | Distant explosions, metal grinding, cackling | LOUD. Everything loud. Chain-revving. | Comedic crash, debris scatter |
| Celestial Order | Serene electronic hum, data chirps | Clean laser precision, harmonic pulse | Light dissipating, crystalline fade |
| Warp Touched | Static, reversed whispers, dimensional hum | Reality cracking, impossible scream | Dimensional implosion, silence |
| Shadow Kin | Almost nothing. Wind. Your own heartbeat. | Mercury slash — quick, sharp, wet | Liquid splash, chrome hitting floor |
| Steel Legion | Radio chatter, boots marching, drone buzz | Gunfire volleys, artillery whistles | Flat thud. No drama. Just done. |
| Bone Prophets | Subsonic bass felt more than heard | Audible shockwave, resonance attack | Resonance shattering, glass-break |
| Apex Hunters | Predator clicks, breathing, rustling | Bone-crack impact, primal roar | Evolution sound — something growing |

**Dynamic Music System:**
- **Calm** (deployment, no contact): Ambient tension, low strings
- **Engaged** (first contact): Percussion kicks in, tempo rises
- **Critical** (HQ <50% HP or army <30%): Full orchestra, drums pounding
- **Victory**: Faction-specific triumph theme
- **Defeat**: Faction-specific loss theme (Iron Covenant: solemn horn. Emerald Tide: confused silence then laughter.)

**Battlefield Soundscape Layers:**
1. Map ambient (wind, distant rumbles, environment)
2. Unit idle sounds (faction murmurs, mechanical hums)
3. Action sounds (attacks, abilities, movement)
4. Dynamic music (shifts with battle state)
5. UI sounds (selection clicks, stat reveals, card draws)

### 14.2 Cinematic Camera System

Not a static isometric view — a war documentary camera that makes every moment feel epic.

**Standard View:** Tactical isometric, full battlefield visible. Player can rotate 360° and zoom. This is the planning view.

**Action Camera** (triggers on attacks, toggleable):
1. Camera swoops to attacker's shoulder level (0.3s)
2. Follows attack trajectory (projectile, charge, blade swing)
3. Impact: screen shake proportional to damage
4. Holds on result for 0.5s (hit/miss/critical)
5. Smooth pull-back to tactical view (0.5s)
6. Total: ~2 seconds. Fast enough to not interrupt flow.

**Kill Camera** (triggers on unit death):
- Slow-motion 0.5× for 1 second
- Camera rotates 90° around dying unit
- Faction-specific death animation plays
- Death Match kills: extended cam (2s) + the NFT card catches fire on screen and crumbles to ash. You WATCH your NFT die.

**HQ Ability Camera** (triggers on signature abilities):
- Dramatic zoom to HQ
- Ability VFX fills screen
- Affected area highlighted with faction color pulse
- Pull-back reveals battlefield effect
- Total: 3-4 seconds (rare, impactful moments)

**Replay System:** Every battle is recorded with full camera control — orbit, zoom, slow-mo, unit-follow. Death Match replays auto-save. Greatest victories become shareable content.

### 14.3 Environmental Storytelling

The battlefield is a place, not a grid.

**Before Battle:**
- Loading screen: orbital zoom into the battlefield
- Lore text: *"The Ruined Citadel. Once the capital of the Seventh Accord. Now, a graveyard of ambition."*
- Weather establishes: rain begins, dust kicks up, spores drift

**During Battle:**
- Terrain reacts to combat — explosions leave craters, fire spreads, cover crumbles
- Environmental hazards evolve — Toxic Marshlands rise, Frozen Tundra blizzard intensifies
- Corpses remain as new cover/obstacles — by Turn 10 the map tells the fight's story
- Collateral details — birds scatter, distant structures collapse, skybox darkens

**After Battle:**
- Camera pulls back to show devastated battlefield
- Survivors stand among wreckage
- Battle Report overlays with war-story text
- Death Match: burned NFTs appear as ghostly outlines — *they were here*

### 14.4 Tactile Feedback

Every click feels weighty. Every action has consequence.

**Unit Selection:**
- Click → faction-specific selection sound + subtle ground ripple
- Unit turns to face camera (acknowledging orders)
- Stats display as holographic overlay above unit, not separate UI panel

**Movement:**
- Drag path on hex grid → faction-color preview line
- Units move with physical weight — heavy units shake camera, fast units blur
- Footstep sounds match terrain (metal on stone, squelch in marsh, crunch on ice)

**Attack Orders:**
- Click target → threat line (red = low%, yellow = medium%, green = high%)
- Hit chance in large text above target: "73%"
- Hit: impact particles, damage numbers, target flinches
- Miss: projectile whiffs, "womp" sound, attacker resets
- Critical: screen flash, "CRITICAL" text, camera shake

**Ability Activation:**
- 1-2 second charge-up animation (building energy)
- Battlefield reacts — hex-grid spreads, mycelium pulses, gravity distorts
- Affected units respond — allies stand taller, enemies flinch

### 14.5 Commander Identity

The player is a commander, not a floating cursor.

**Command Post View (Pre-Battle):**
- First-person view of tactical table with unit NFT cards physically laid out
- Pick up cards, place on 3D holographic map to deploy
- Command post decorated with: faction banner, trophies from victories, dog-tags of units lost in Death Match

**Commander Voice Lines (HQ speaks at key moments):**
- Battle start: *"All units, hold position until my mark."*
- First kill: *"Contact neutralized. Stay focused."*
- HQ hit: *"I'm hit! Fall back to secondary positions!"*
- Victory: *"The field is ours. Collect the fallen. We honor them."*
- Death Match victory: *"Their army is ours now. They fought well. We fought better."*

**Battle Scars (3D model evolution):**
- 10+ battles: Minor wear, scratches on armor
- 50+ battles: Visible repairs with different materials (story in the metal)
- 100+ battles: Battle-hardened veteran look, trophies, custom weathering
- Death Match survivor: Glowing "Blooded" mark visible on model

### 14.6 Death Match Immersion (The Crown Jewel)

This is where players' hands shake.

**Pre-Match:**
- Screen goes dark. Red text: **DEATH MATCH**
- NFT cards display with current market value underneath each
- Total portfolio at risk: *"$247.30 at stake"*
- 10-second countdown with heartbeat audio
- Confirm button pulses red: **DEPLOY FOR REAL**

**During Match:**
- Subtle red border on screen at all times (this is real)
- YOUR unit dies: card visually cracks in corner of screen
- You KILL opponent's unit: their card slides into your collection tray with a *click*
- HQ death: full-screen moment, dying HQ's voice line, faction death theme

**Post-Match (Winner):**
- Surviving units line up on victory platform
- Captured enemy NFTs display as trophies
- Each captured card flips: "NEW OWNER" stamp
- $WAR reward cascade (visual coin rain)
- "Blooded" badge animation on each survivor

**Post-Match (Loser):**
- Camera pans slowly across devastated battlefield
- Ghost outlines where dead units fell
- Lost NFT cards gray out and crumble
- Wallet notification: assets transferred
- *"Your army remembers. Rebuild. Return. Revenge."*

### 14.7 3D Pipeline — Cards to Battlefield

**Phase 1 (Launch):** Browser-based 3D via Three.js/Babylon.js
- Card art → AI-generated 3D models (Rodin/Tripo) → Blender cleanup → auto-rig → shared animations
- Isometric hex-grid battlefield, particle effects, no download required
- Connect wallet, pick army, fight. Zero friction.

**Phase 2 (6 months post-launch):** Unity WebGL
- Hand-crafted stylized low-poly models (500-5000 polys per unit)
- Custom animations per faction, mobile app wrapper
- Shared animation skeletons: humanoid (40 units), beast (20), floating (20), unique (20)

**Phase 3 (Year 2):** Unreal Engine 5 standalone
- AAA visuals, Nanite geometry, Lumen lighting
- Cinematic battle replays (Death Match victories as shareable movies)
- Esports-ready spectator mode

**Platform Support:**
- Desktop: Full 3D, all cameras, max effects, keyboard shortcuts
- Mobile: Async Skirmish optimized for touch, haptic feedback on hits/kills
- Spectator: Commentator camera, auto-highlight detection, tournament overlays

---

## 15. WHAT MAKES THIS DIFFERENT

Most blockchain games fail because they're either:
1. **Finance cosplaying as games** — no actual fun gameplay, just yield farming with extra steps
2. **Games bolted onto blockchain** — the NFT/token adds nothing to the experience

Chain of War avoids both traps:

- **The NFT ownership is the game**. Your army IS your collection. Trading units, building optimal rosters, tracking battle history — this is what collector-gamers already love doing with physical minis. We're digitizing that dopamine.
- **The $WAR token has real utility**. Equipment, upgrades, tournaments, cosmetics, rentals — it's not just "governance token #4,729."
- **Two modes serve two audiences**. Async for the collector who wants to deploy and check results on lunch break. Real-time for the competitive player who wants to outmaneuver opponents live.
- **Battle history creates provenance**. A unit that's fought 500 battles has a story. That story has value. This is something physical Warhammer can never do.

---

*Chain of War: Mint. Deploy. Conquer.*

---

**Document version**: 1.0
**Author**: Celeste (game design) + CoryTheLight (vision)
**Status**: Concept / Pre-production
**Last updated**: 2026-03-18
