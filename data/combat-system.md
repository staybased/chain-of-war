# CHAIN OF WAR — Comprehensive Combat System
## Simulation-Ready Rules Document v2.0

> *"War is mathematics painted in blood and glory."*

---

## TABLE OF CONTENTS

1. [**DETAILED COMBAT RESOLUTION**](#1-detailed-combat-resolution)
2. [**MORALE SYSTEM**](#2-morale-system)  
3. [**ABILITY KEYWORD SYSTEM**](#3-ability-keyword-system)
4. [**EQUIPMENT SYSTEM**](#4-equipment-system)
5. [**ASYNC SIMULATION AI**](#5-async-simulation-ai)
6. [**BALANCE FRAMEWORK**](#6-balance-framework)

---

## 1. DETAILED COMBAT RESOLUTION

### 1.1 Turn Sequence Overview

Each battle turn follows this strict sequence:

```
1. INITIATIVE PHASE
   → Roll initiative: d6 + VEL for each unit
   → Resolve in descending order

2. MOVEMENT PHASE  
   → Units move in initiative order
   → Movement triggers Overwatch reactions

3. ACTION PHASE
   → Units act in initiative order
   → Attacks, abilities, equipment usage

4. RESOLUTION PHASE
   → Apply all damage simultaneously
   → Morale checks for casualties/HQ death
   → Cleanup effects (end-of-turn abilities)
```

### 1.2 Initiative System

**Initiative Roll**: `d6 + VEL + situational modifiers`

**Initiative Modifiers**:
- High Ground: +1
- Wounded (below 50% HP): -2  
- Equipment Bonus: varies by item
- Morale Broken: -2

**Tie Resolution**: Higher base VEL wins. If still tied, simultaneous actions.

### 1.3 Movement Rules

**Base Movement**: `VEL × 2 = movement points per turn`

**Terrain Movement Costs**:
| Terrain Type | Cost per Tile | Notes |
|-------------|---------------|-------|
| Open Ground | 1 | Standard movement |
| Light Cover | 1 | Bushes, debris |
| Heavy Cover | 2 | Walls, bunkers |
| Difficult | 3 | Rubble, marsh |
| Elevated | 2 to climb | Must end movement to climb |
| Hazardous | 1 | Take 1 damage if ending turn here |

**Movement Rules**:
- Can move through friendly units (no cost penalty)
- Cannot end movement in same tile as another unit
- Can split movement before/after actions
- Moving within 1 tile of enemy triggers Overwatch (see §1.7)

### 1.4 Melee Combat Resolution

**When Melee Occurs**: 
- Units in adjacent tiles (orthogonal or diagonal)
- OR unit uses Charge ability to close distance

**Melee Attack Resolution**:
```
Hit Roll = d100 + (WAR × 8) + situational modifiers
Hit Threshold = 50 + (Defender VEL × 3)

If Hit: 
Damage = d10 + WAR - Defender RES (minimum 0)
```

**Melee-Specific Modifiers**:
- Flanking (attacking from rear/side): +20 Hit
- Charging: +10 Hit, +2 Damage  
- Multiple Attackers: +5 Hit per additional attacker (max +15)
- Height Advantage: +10 Hit

**Critical Hits (95+)**: Double damage + special effects:
- Push target 1 tile (if possible)
- Target loses next movement phase
- Extra effect based on weapon type

### 1.5 Ranged Combat Resolution

**Range Categories**:
- Point Blank (1-2 tiles): +10 Hit, Defender cannot use VEL bonus
- Short Range (3-5 tiles): Standard accuracy
- Medium Range (6-10 tiles): -5 Hit  
- Long Range (11-15 tiles): -15 Hit
- Extreme Range (16+ tiles): -25 Hit, requires special equipment

**Ranged Attack Resolution**:
```
Hit Roll = d100 + (ACC × 8) + range modifier + situational modifiers
Hit Threshold = 50 + (Defender VEL × 3)

If Hit:
Damage = d10 + WAR - Defender RES - cover bonus (minimum 0)
```

**Cover Bonuses to RES**:
- Light Cover: +2 RES vs ranged
- Heavy Cover: +4 RES vs ranged  
- Elevation Advantage: +1 RES vs lower attackers

**Line of Sight Rules**:
- Must trace clear path from center of attacker tile to any corner of target tile
- Units block LOS to tiles directly behind them
- Elevated units can see over Light Cover to units beyond

### 1.6 Multi-Attack Resolution

**Multiple Targets (Split Fire)**:
- Unit can attack multiple targets if it has multi-attack ability
- Each attack after the first suffers -10 Hit penalty (cumulative)
- Must declare all targets before rolling any attacks

**Multiple Attackers (Focus Fire)**:
- Multiple units targeting same defender
- Each attacker after first gets +5 Hit bonus (representing suppression)
- All damage applied simultaneously in Resolution Phase

**Example**: 3 Skitterlings attack 1 Centurion:
- 1st Skitterling: normal Hit roll
- 2nd Skitterling: +5 Hit bonus  
- 3rd Skitterling: +10 Hit bonus
- All damage applied at once (cannot kill target partway through)

### 1.7 Area of Effect (AoE) Attacks

**AoE Target Selection**:
- Primary Target: Center point of effect (must have LOS)
- Secondary Targets: All units within AoE radius
- Self-Damage: Attacker takes reduced effect if within AoE

**AoE Resolution Process**:
1. Declare primary target and AoE size
2. All affected units roll saves vs. effect
3. Apply damage/effects based on save results
4. Center target gets no save bonus, others may get cover saves

**AoE Save Formula**:
```
Save Roll = d20 + RES + cover bonus
Save Target = 10 + (Attacker WAR ÷ 2)

Success: Half damage (round down)
Failure: Full damage
```

**Common AoE Sizes**:
- Grenade/Small: 1 tile radius (7 tiles total)
- Artillery/Medium: 2 tile radius (19 tiles total)  
- Orbital/Large: 3 tile radius (37 tiles total)

### 1.8 Overwatch/Reaction Fire Mechanics

**Overwatch Setup**: 
- Declare during your turn that unit is "on Overwatch"
- Unit cannot move or attack normally that turn
- Lasts until start of your next turn

**Overwatch Triggers**:
- Enemy unit moves within weapon range AND line of sight
- Enemy unit moves adjacent to watching unit
- Enemy unit performs certain actions (faction-dependent)

**Overwatch Resolution**:
```
Trigger Check = d20 + INS vs. Target Movement Roll (d20 + VEL)
If Trigger succeeds: Make immediate attack with -10 Hit penalty
```

**Multiple Overwatch**: If multiple units watching same area, all can trigger, but each after first gets -5 additional Hit penalty.

### 1.9 Critical Failures and Fumbles

**Fumble Conditions** (Hit Roll ≤ 5):
- Melee: Attacker takes 1 damage (overextension)
- Ranged: Weapon jams (no attacks next turn) OR hit adjacent friendly (if any)
- AoE: Misfire - effect centers on attacker instead

**Critical Success** (Hit Roll ≥ 95):
- Double damage before applying RES
- Special weapon effects activate
- Target suffers condition effect (stun, knockback, etc.)

**Weapon-Specific Critical Effects**:
- Bladed Weapons: Causes Bleeding (1 damage per turn for 3 turns)
- Blunt Weapons: Stun (lose next action phase)
- Energy Weapons: Overload (target's equipment disabled 1 turn)
- Explosive Weapons: Knockback (pushed 1-2 tiles)

### 1.10 Edge Cases & Special Situations

**Simultaneous Death**:
- If units kill each other simultaneously, both die
- If HQ units kill each other, battle is a draw

**Underground/Flying Units**:
- Underground: Immune to most ranged, vulnerable to AoE
- Flying: +2 RES vs melee, -2 RES vs anti-air weapons
- Special movement rules apply

**Terrain Destruction**:
- Some weapons can destroy cover
- Cover becomes "Light" → "None" → "Crater" (difficult terrain)
- Each destruction level requires damage equal to RES 8

**Friendly Fire**:
- AoE weapons can hit friendlies
- Deliberately targeting friendlies requires DIS check (d20 + DIS vs 15)
- Some factions (Emerald Tide, Warp Touched) ignore friendly fire in combat

---

## 2. MORALE SYSTEM

### 2.1 Morale States

Every unit exists in one of four morale states:

| State | Effect | Trigger | Recovery |
|-------|--------|---------|----------|
| **Steady** | No penalties | Default state | N/A |
| **Shaken** | -1 to all stats | Failed morale check | Rally or remove threat |
| **Broken** | -3 to all stats, must retreat | Failed second check | Rally by Elite within 2 tiles |
| **Routing** | Cannot attack, move toward board edge | Failed third check | Cannot rally, must exit |

### 2.2 Morale Check Triggers

**Mandatory Morale Checks**:
1. **HQ Death**: All units immediately check DIS vs 15
2. **Unit Death**: All units within 2 tiles check DIS vs 12
3. **Heavy Casualties**: When army loses 50%+ points, all check DIS vs 10
4. **Surrounded**: When completely surrounded, check DIS vs 13
5. **Isolation**: When >6 tiles from any friendly, check DIS vs 11

**Morale Check Resolution**:
```
Morale Roll = d20 + DIS + situational modifiers
Target Number = varies by trigger (see above)

Success: No effect (or improve one morale state)
Failure: Degrade one morale state
Natural 1: Automatic failure regardless of DIS
Natural 20: Automatic success + bonus effect
```

**Morale Check Modifiers**:
- Elite unit: +3
- HQ within 2 tiles: +2  
- Outnumbered 2:1: -2
- Outnumbered 3:1: -4
- Faction-specific bonuses (see §2.4)

### 2.3 Rally Mechanics

**Who Can Rally**:
- Elite units can rally Shaken/Broken friendlies within 2 tiles
- HQ units can rally any friendly within 3 tiles
- Some faction abilities allow Troops to rally each other

**Rally Attempt**:
```
Rally Roll = d20 + (Rallying Unit's DIS ÷ 2) + unit bonuses
Target Number = 12 + current morale penalty

Success: Target improves one morale state
Failure: No effect, cannot try again this turn
```

**Rally Limitations**:
- Each unit can only attempt one rally per turn
- Routing units cannot be rallied
- Rallying unit cannot move or attack that turn

### 2.4 Faction-Specific Morale Behaviors

#### Iron Covenant
- **Disciplined**: +2 to all morale checks
- **Hold the Line**: When HQ dies, one random Elite becomes field commander (counts as HQ for morale)

#### Swarm of Xeth  
- **Hive Mind**: Individual deaths don't trigger morale checks
- **Swarm Frenzy**: When reduced to 50% strength, all remaining units get +1 WAR, ignore morale

#### Void Pharaohs
- **Undying**: Only check morale when HQ is permanently destroyed (not just knocked down)
- **Resurrection Protocol**: "Dead" units may return on 4+ (d6) during Resolution Phase

#### Emerald Tide
- **Bloodlust**: Failed morale checks cause Berserk instead of Retreat
- **Berserk**: +2 WAR, -2 ACC, must charge nearest enemy each turn

#### Celestial Order  
- **Tactical Network**: Adjacent units share highest DIS value for morale checks
- **Strategic Withdrawal**: Routing units move toward objectives, not board edge

#### Warp Touched
- **Embrace Chaos**: Broken units get +2 WAR instead of -3 penalty
- **Madness**: Each morale failure generates 1 random beneficial mutation

#### Shadow Kin
- **Strike and Fade**: Broken units gain Stealth instead of normal penalties  
- **Honor Before Death**: Cannot rout; Broken becomes suicidal charge (+4 WAR, die after attack)

#### Steel Legion
- **Expendable**: Troops don't trigger morale checks when they die
- **Iron Discipline**: -1 to all morale modifiers, but +5 vs Intimidation

#### Bone Prophets  
- **Foresight**: Can re-roll one morale check per turn per HQ
- **Mind Shield**: Immune to morale effects from psychic abilities

#### Apex Hunters
- **Pack Hunters**: Each pack member (same unit type) within 2 tiles gives +1 morale
- **Evolution**: Failed morale check grants random stat bonus (+1 to random stat)

### 2.5 Morale Victory Conditions

**Automatic Victory** - Army breaks when:
- All units are Routing or Dead
- Only 1-2 units remain and they're Broken
- HQ is dead and <25% army points remain

**Morale Effects on Objectives**:
- Broken units cannot capture/hold objectives
- Routing units must abandon held objectives
- Shaken units can hold but cannot capture

---

## 3. ABILITY KEYWORD SYSTEM

### 3.1 Keyword Library

Keywords provide standardized, stackable effects that abilities can reference. Each keyword has precise mechanical effects.

#### MOVEMENT KEYWORDS

**CHARGE**
```
Effect: Unit can move up to VEL×3 in straight line toward enemy
Bonus: +10 Hit, +2 Damage on melee attack after charge
Limitation: Must end adjacent to target, cannot charge through difficult terrain
```

**STEALTH**  
```
Effect: Cannot be targeted by ranged attacks beyond 6 tiles
Detection: Enemy must pass INS check (d20 + INS vs 15) to target within 6 tiles
Breaks: On attacking, moving adjacent to enemy, or taking damage
```

**FLY**
```
Effect: Ignore terrain movement costs, can move over units/obstacles
Bonus: +2 RES vs melee attacks (height advantage)
Penalty: -2 RES vs anti-air weapons
```

**TELEPORT (X)**
```
Effect: Once per turn, can instantly move X tiles ignoring terrain/units
No Trigger: Does not trigger Overwatch
Limitation: Must have line of sight to destination
```

#### COMBAT KEYWORDS

**REGENERATION (X)**
```
Effect: Heal X damage at start of each turn
Limitation: Cannot heal above starting HP, doesn't work if dead
Upgrade: Some abilities grant "Fast Regeneration" (heal at end of turn too)
```

**SHIELD (X)**
```
Effect: +X RES until shield is "broken" by taking damage equal to X
Recharge: Restored by spending full turn without attacking/moving
Visual: Unit glows/shimmers when shield is active
```

**OVERWATCH**
```
Effect: Can set Overwatch as free action (normally costs full turn)
Bonus: +2 INS for Overwatch trigger rolls
Limitation: Still only one Overwatch trigger per turn
```

**SNIPE**
```
Effect: No range penalties for ranged attacks beyond Medium range
Bonus: +1 range increment to all weapons
Special: Critical hits (95+) ignore cover entirely
```

#### SUPPORT KEYWORDS

**AURA (X, EFFECT)**
```
Effect: All friendly units within X tiles gain EFFECT
Types: +Stat bonuses, special abilities, resistances
Stack: Multiple auras stack unless specifically noted
Example: "Aura (2, +1 DIS)" gives +1 DIS to all friendlies within 2 tiles
```

**SUMMON (UNIT, X)**
```
Effect: Create temporary unit UNIT for X turns
Summon Rules: Acts immediately after summoner, counts for objectives
Limitation: Max 1 summon per summoner, summon dies when summoner dies
```

**REPAIR (X)**
```
Effect: Restore X damage to target friendly unit or equipment
Range: Adjacent tiles only (unless specified otherwise)
Limitation: Once per turn, cannot repair during combat round
```

### 3.2 Keyword Combinations

Keywords can be combined to create complex abilities:

**STEALTH + CHARGE = AMBUSH**
```
Combined Effect: Can Charge from Stealth without breaking concealment until impact
Bonus: +15 Hit (Stealth +5, Charge +10), +3 Damage instead of +2
Limitation: Can only target units that failed to detect the attacker
```

**FLY + REGENERATION = PHOENIX PROTOCOL**  
```
Combined Effect: If killed, unit revives next turn at half HP with FLY active
Limitation: Only works once per battle, requires 2 turns to fully regenerate
Special: Reviving unit appears in closest safe tile to death location
```

**AURA + SHIELD = AEGIS FIELD**
```
Combined Effect: Grants Shield (2) to all units within Aura range
Upgrade: Field strength increases based on caster's RES stat
Limitation: Requires caster to remain stationary to maintain
```

### 3.3 Advanced Keywords

**ADAPT (X)**
```
Effect: After taking damage type X, gain resistance to that type
Resistance: -2 damage from same source type for rest of battle
Stack: Can adapt to multiple damage types simultaneously
Example: Adapt (Energy) after being hit by plasma weapon
```

**PHASE**
```
Effect: Can move through units and terrain for one turn
Vulnerability: Take double damage from energy weapons while phasing
Limitation: Cannot end turn inside solid objects or other units
```

**SWARM**
```
Effect: +1 WAR for each adjacent friendly unit with Swarm (max +4)
Formation: Swarm units move as a group, maintaining adjacency
Weakness: AoE weapons deal +50% damage to Swarm units
```

**LEADERSHIP (X)**
```
Effect: Friendly units within X tiles use this unit's DIS for morale checks
Command: Can coordinate group actions (all affected units act simultaneously)
Vulnerability: If leader dies, all affected units take immediate morale check -3
```

### 3.4 Faction-Specific Keyword Modifiers

Each faction gains unique interactions with standard keywords:

**Iron Covenant**: All Shield effects last +1 turn
**Swarm of Xeth**: Regeneration works on adjacent Swarm units too  
**Void Pharaohs**: Can combine keywords from different equipment pieces
**Emerald Tide**: All keywords have 10% chance of random beneficial mutation
**Celestial Order**: Aura effects have +1 range
**Warp Touched**: Using any keyword requires DIS check or suffer random penalty
**Shadow Kin**: All keywords gain stealth-related secondary effects
**Steel Legion**: Keywords cost -1 equipment slot (minimum 1)
**Bone Prophets**: Can transfer keywords between units once per turn
**Apex Hunters**: Keywords "evolve" - gain additional effects after 3+ uses

---

## 4. EQUIPMENT SYSTEM

### 4.1 Equipment Categories

#### WEAPONS (Primary Equipment)

**Melee Weapons**:
| Weapon Type | Stat Bonus | Special Properties | Durability | Rarity |
|-------------|------------|-------------------|------------|--------|
| Combat Blade | +1 WAR | Parry (+1 RES vs melee) | 30 battles | Common |
| Power Sword | +3 WAR | Energy (ignores 2 RES) | 25 battles | Rare |
| Chain Weapon | +2 WAR | Cleave (hits adjacent enemies) | 20 battles | Uncommon |
| Force Weapon | +2 WAR, +1 INS | Psychic (uses DIS for damage) | 35 battles | Epic |
| Relic Blade | +4 WAR | Legendary effect varies | 50 battles | Legendary |

**Ranged Weapons**:
| Weapon Type | Stat Bonus | Special Properties | Durability | Rarity |
|-------------|------------|-------------------|------------|--------|
| Basic Rifle | +1 ACC | Standard range | 40 battles | Common |
| Sniper Rifle | +2 ACC | Long range, Snipe keyword | 30 battles | Uncommon |
| Plasma Gun | +3 WAR | Energy, AoE (1 tile) | 15 battles | Rare |
| Railgun | +4 WAR, +2 ACC | Piercing (hits multiple targets) | 20 battles | Epic |
| Artifact Cannon | +5 WAR | Legendary effect varies | 35 battles | Legendary |

#### ARMOR (Defensive Equipment)

| Armor Type | Stat Bonus | Special Properties | Durability | Rarity |
|------------|------------|-------------------|------------|--------|
| Combat Vest | +1 RES | None | 50 battles | Common |
| Carapace Armor | +2 RES | Cover (+1 cover bonus) | 40 battles | Uncommon |
| Power Armor | +3 RES, +1 VEL | Environmental protection | 30 battles | Rare |
| Terminator Suit | +4 RES, -1 VEL | Heavy (immune to knockback) | 35 battles | Epic |
| Relic Armor | +5 RES | Legendary effect varies | 60 battles | Legendary |

#### UTILITY (Support Equipment)

| Utility Type | Effect | Special Properties | Durability | Rarity |
|--------------|--------|-------------------|------------|--------|
| Med-Kit | Repair (2) per turn | Limited use (5 times) | 10 uses | Common |
| Scanner | +2 INS vs Stealth | Reveals hidden units | 50 battles | Uncommon |
| Jump Pack | Teleport (3) once/turn | Must recharge (skip movement) | 25 battles | Rare |
| Shield Generator | Shield (4) | AoE protection bubble | 20 battles | Epic |
| Time Relic | Extra turn once/battle | Legendary temporal effects | 100 battles | Legendary |

### 4.2 Equipment Modification System

**Upgrade Paths** (spend $WAR to improve):
```
Common → Uncommon (100 $WAR)
Uncommon → Rare (250 $WAR)  
Rare → Epic (500 $WAR)
Epic → Legendary (1000 $WAR)
```

**Modification Types**:
- **Stat Boost**: +1 to primary stat bonus (costs 50-200 $WAR)
- **Keyword Addition**: Add compatible keyword (costs 100-400 $WAR)
- **Durability Increase**: +10 battle lifespan (costs 75 $WAR)
- **Faction Adaptation**: Optimize for specific faction (costs 150 $WAR)

### 4.3 Equipment Durability & Degradation

**Durability Tracking**:
- Each piece of equipment has Battle Count (starts at max durability)
- Degrades by 1 each battle participated in
- At 50% durability: -1 to all bonuses
- At 25% durability: -2 to all bonuses  
- At 0% durability: Equipment breaks, provides no bonus

**Maintenance Options**:
- **Field Repair**: Restore 5 durability for 25 $WAR (during battle prep)
- **Workshop Overhaul**: Restore to full for 100 $WAR (between battles)
- **Master Crafting**: Increase max durability by 10 for 200 $WAR

**Equipment Insurance**:
- Pay 20% of upgrade costs to insure equipment
- If equipment breaks in battle, receive 50% $WAR compensation
- Insurance must be renewed every 20 battles

### 4.4 Legendary Equipment Effects

Legendary equipment has unique, game-changing effects:

**Frostbane Relic Blade (Melee)**
```
Stat: +4 WAR
Special: Enemies hit must pass RES check or be Frozen (cannot move next turn)
AoE: Critical hits create ice field (difficult terrain, 3x3 area)
Legendary: Once per battle, can create ice wall (blocks movement, 5 tiles long)
```

**Voidcaster Artifact Cannon (Ranged)**
```
Stat: +5 WAR, +2 ACC
Special: Shots teleport to target (ignore cover, no range limit)
Reality Tear: Critical hits create vortex (pulls enemies 2 tiles toward impact)
Legendary: Can fire through dimensions (target any unit, anywhere on map)
```

**Eternal Aegis Relic Armor (Armor)**  
```
Stat: +5 RES
Special: Regeneration (1), Shield (3) that recharges each turn
Martyr Protocol: When wearer dies, all equipment transfers to nearest ally
Legendary: Once per battle, become completely invulnerable for 1 turn
```

### 4.5 Equipment Synergy System

**Set Bonuses**: Equipment from same "family" provides additional bonuses:

**Covenant Sanctum Set** (Iron Covenant themed):
- 2 pieces: +1 DIS to wearer
- 3 pieces: Aura (2, +1 RES to allies)  
- 4+ pieces: Leadership (3), all allies can use wearer's equipment bonuses

**Hive Bio-Weapons** (Swarm of Xeth themed):
- 2 pieces: Regeneration (1)
- 3 pieces: Adapt (All damage types)
- 4+ pieces: Symbiosis - equipment evolves based on enemies faced

**Faction Resonance**: Using equipment designed for your faction:
- 20% durability bonus
- +1 to all equipment stat bonuses
- Access to faction-specific modifications

---

## 5. ASYNC SIMULATION AI

### 5.1 Offense/Defense Slider Translation

The core slider (0-100) translates to specific AI decision trees:

#### DEFENSIVE SETTINGS (0-40)

**Ultra-Defensive (0-20)**:
```python
Target Priority:
1. Enemies threatening HQ (within 4 tiles)
2. Enemies in weapon range of key units
3. Enemies advancing on held objectives
4. Closest threat

Movement Pattern:
- Never advance beyond starting positions unless forced
- Always seek cover when moving
- Maintain unit coherency (stay within 2 tiles of allies)
- Retreat wounded units to rear

Tactical Decisions:
- Use Overwatch constantly
- Prioritize defensive equipment
- Group units for mutual support
- Only take high-probability shots (65%+ hit chance)
```

**Conservative (21-40)**:  
```python
Target Priority:
1. Enemies in optimal weapon range
2. Enemies threatening objectives
3. Isolated enemy units
4. High-value targets (Elites, Heavy Support)

Movement Pattern:  
- Advance cautiously, using cover
- Maintain formation integrity
- Withdraw if taking heavy casualties
- Control key terrain features
```

#### BALANCED SETTINGS (41-60)

**Standard Tactics (41-60)**:
```python
Target Priority:
1. Highest value target in range
2. Enemies threatening objectives
3. Wounded enemies (finish kills)
4. Enemy HQ if viable shot exists

Movement Pattern:
- Advance with purpose toward objectives
- Balance offense and protection
- Opportunistic flanking moves
- Reasonable risk-taking for advantage
```

#### OFFENSIVE SETTINGS (61-100)

**Aggressive (61-80)**:
```python  
Target Priority:
1. Enemy HQ (priority target)
2. High-value units (Heavy Support, Elites)
3. Units blocking advance
4. Wounded enemies

Movement Pattern:
- Push forward aggressively
- Accept casualties for position
- Coordinate combined arms attacks
- Flank whenever possible
```

**Berserker (81-100)**:
```python
Target Priority:
1. ENEMY HQ AT ALL COSTS
2. Whatever is closest and killable
3. High-value targets
4. Anything that moves

Movement Pattern:
- Straight-line charges toward enemy
- Ignore cover in favor of speed
- Single units will charge multiple enemies
- No tactical withdrawals ever
```

### 5.2 Target Priority Algorithms

Each AI setting uses different targeting algorithms:

#### CLOSEST TARGET
```python
def select_closest_target(unit, enemies):
    valid_targets = [e for e in enemies if can_attack(unit, e)]
    if not valid_targets:
        return None
    return min(valid_targets, key=lambda e: distance(unit, e))
```

#### WEAKEST TARGET  
```python
def select_weakest_target(unit, enemies):
    valid_targets = [e for e in enemies if can_attack(unit, e)]
    if not valid_targets:
        return None
    return min(valid_targets, key=lambda e: e.current_hp)
```

#### HIGHEST VALUE
```python
def select_highest_value(unit, enemies):
    valid_targets = [e for e in enemies if can_attack(unit, e)]
    if not valid_targets:
        return None
    
    def value_score(enemy):
        base_value = enemy.point_cost
        if enemy.role == "HQ":
            base_value *= 2  # HQ is always high priority
        if enemy.current_hp < enemy.max_hp * 0.3:
            base_value *= 1.5  # Wounded targets easier to finish
        return base_value
    
    return max(valid_targets, key=value_score)
```

#### HQ HUNTER
```python
def select_hq_hunter(unit, enemies):
    # Always prioritize enemy HQ if attackable
    hq_targets = [e for e in enemies if e.role == "HQ" and can_attack(unit, e)]
    if hq_targets:
        return hq_targets[0]
    
    # Otherwise, target units protecting HQ or blocking path to HQ
    return select_blocking_target(unit, enemies)
```

### 5.3 Movement Pattern Implementation

**Formation Coherency**:
```python
def maintain_coherency(unit, allies, coherency_distance=2):
    nearby_allies = [a for a in allies if distance(unit, a) <= coherency_distance]
    if len(nearby_allies) < 2:  # Too isolated
        # Move toward nearest ally
        nearest_ally = min(allies, key=lambda a: distance(unit, a))
        return move_toward(unit, nearest_ally)
    return None  # Formation is fine
```

**Cover Seeking**:
```python
def find_cover_position(unit, enemies, movement_range):
    available_tiles = get_tiles_in_range(unit, movement_range)
    cover_tiles = [t for t in available_tiles if has_cover(t)]
    
    if not cover_tiles:
        return None
        
    # Score tiles by cover quality and tactical position
    def cover_score(tile):
        cover_value = get_cover_value(tile)  # 0-3 based on cover type
        enemy_threat = sum(1 for e in enemies if in_range(tile, e))
        objective_distance = distance(tile, nearest_objective)
        
        return cover_value - enemy_threat - objective_distance * 0.1
    
    return max(cover_tiles, key=cover_score)
```

### 5.4 DIS Stat and Slider Compliance

**Discipline Check System**:
```python
def check_discipline_compliance(unit, ordered_action, slider_setting):
    base_compliance = unit.DIS * 10  # 10-100% base chance
    
    # Slider extremes are easier to disobey
    slider_stress = abs(slider_setting - 50) * 0.5  # 0-25% penalty
    
    compliance_chance = base_compliance - slider_stress
    
    roll = random.randint(1, 100)
    
    if roll <= compliance_chance:
        return ordered_action  # Follow orders
    else:
        return generate_deviation_action(unit, slider_setting)

def generate_deviation_action(unit, slider_setting):
    """What unit does when it disobeys orders"""
    if slider_setting < 30:  # Ordered to be defensive
        # Might advance too aggressively
        return "aggressive_advance"
    elif slider_setting > 70:  # Ordered to be offensive  
        # Might be too cautious
        return "take_cover"
    else:  # Balanced orders
        # Random deviation
        return random.choice(["aggressive", "defensive", "panic_move"])
```

### 5.5 Faction AI Behavioral Modifiers

Each faction has inherent behaviors that modify the base AI:

#### IRON COVENANT
```python
def iron_covenant_modifier(base_action, unit, situation):
    # Always prioritize protecting allies
    if allies_in_danger():
        return "protective_action"
    
    # Disciplined - rarely deviate from orders
    unit.discipline_bonus = +20
    
    return base_action
```

#### SWARM OF XETH  
```python
def swarm_modifier(base_action, unit, situation):
    # Hive mind - coordinate attacks
    if multiple_swarm_units_nearby():
        return "coordinated_swarm_attack"
        
    # Expendable - take risks normal units won't
    if target_is_high_value():
        return "suicidal_charge"
        
    return base_action
```

#### EMERALD TIDE
```python
def emerald_tide_modifier(base_action, unit, situation):
    # Chaotic - 15% chance to ignore all orders
    if random.randint(1, 100) <= 15:
        return random.choice(["berserk_charge", "random_movement", "friendly_fire"])
    
    # Blood-hungry - always prefer melee
    if ranged_attack_planned() and melee_is_possible():
        return "charge_into_melee"
        
    return base_action
```

#### CELESTIAL ORDER
```python
def celestial_order_modifier(base_action, unit, situation):
    # Tactical network - share information perfectly
    unit.vision_range += 2  # Represents drone support
    
    # Precision - only take high-probability shots
    if attack_hit_chance < 60:
        return "reposition_for_better_shot"
        
    return base_action
```

### 5.6 Advanced AI Features

**Learning System** (for campaign mode):
```python
def update_ai_learning(battle_result, army_composition, tactics_used):
    """AI learns from battle outcomes"""
    if battle_result == "victory":
        # Reinforce successful tactics
        increase_tactic_weight(tactics_used, +0.1)
    else:
        # Reduce weight of failed tactics
        decrease_tactic_weight(tactics_used, -0.05)
        
    # Adapt to common enemy compositions
    update_counter_tactics(enemy_army_composition)
```

**Dynamic Difficulty**:
```python
def adjust_ai_difficulty(player_win_rate):
    """Keep games challenging but fair"""
    if player_win_rate > 65:
        ai_bonus_modifier += 0.1  # AI gets smarter
    elif player_win_rate < 45:
        ai_bonus_modifier -= 0.1  # AI makes more mistakes
        
    # Never exceed ±25% modification
    ai_bonus_modifier = max(-0.25, min(0.25, ai_bonus_modifier))
```

---

## 6. BALANCE FRAMEWORK

### 6.1 Expected Match Duration

**Duration Targets by Point Cap**:

| Point Cap | Target Duration | Turn Limit | Avg Units/Side |
|-----------|---------------|------------|----------------|
| 1000 pts | 8-12 minutes | 8 turns | 4-6 units |
| 1500 pts | 12-18 minutes | 10 turns | 6-9 units |  
| 2000 pts | 18-25 minutes | 12 turns | 8-12 units |

**Duration Factors**:
- **Aggressive armies**: -20% duration (faster resolution)
- **Defensive armies**: +15% duration (longer standoffs)
- **Elite-heavy**: +10% duration (fewer but tougher units)
- **Horde armies**: -10% duration (more decisive moments)

**Turn Limit Enforcement**:
- Hard caps prevent infinite games
- Final turn triggers "Sudden Death": objectives determine winner
- If tied on objectives: most total unit points surviving wins
- If still tied: faction with higher total DIS wins (better discipline)

### 6.2 Faction Matchup Balance Matrix

**Target Win Rates** (±5% variance acceptable):

|           | Iron | Swarm | Void | Emerald | Celestial | Warp | Shadow | Steel | Bone | Apex |
|-----------|------|-------|------|---------|-----------|------|--------|-------|------|------|
| **Iron Covenant** | 50% | 45% | 50% | 60% | 45% | 55% | 50% | 55% | 45% | 50% |
| **Swarm of Xeth** | 55% | 50% | 45% | 50% | 45% | 50% | 40% | 60% | 50% | 55% |
| **Void Pharaohs** | 50% | 55% | 50% | 45% | 50% | 45% | 55% | 50% | 40% | 45% |
| **Emerald Tide** | 40% | 50% | 55% | 50% | 50% | 45% | 60% | 45% | 55% | 50% |
| **Celestial Order** | 55% | 55% | 50% | 50% | 50% | 40% | 45% | 45% | 50% | 55% |
| **Warp Touched** | 45% | 50% | 55% | 55% | 60% | 50% | 50% | 50% | 45% | 40% |
| **Shadow Kin** | 50% | 60% | 45% | 40% | 55% | 50% | 50% | 40% | 60% | 55% |
| **Steel Legion** | 45% | 40% | 50% | 55% | 55% | 50% | 60% | 50% | 45% | 50% |
| **Bone Prophets** | 55% | 50% | 60% | 45% | 50% | 55% | 40% | 55% | 50% | 45% |
| **Apex Hunters** | 50% | 45% | 55% | 50% | 45% | 60% | 45% | 50% | 55% | 50% |

**Balance Enforcement**:
- Monthly data collection on actual win rates
- Automatic alerts when any matchup exceeds 60/40 split
- Quarterly balance patches to adjust outliers
- Community tournament data weighted 2× for balance decisions

### 6.3 Rarity Advantage Scaling

**Mathematical Advantage by Rarity**:

```
Common (baseline): 0% advantage
Uncommon: +5% effective power
Rare: +12% effective power  
Epic: +20% effective power
Legendary: +30% effective power

Power Calculation:
Effective Power = (WAR + RES + VEL + ACC + DIS + INS) × Rarity Multiplier
```

**Rarity Matchup Expected Outcomes**:

| Attacker Rarity | Defender Rarity | Expected Win Rate |
|-----------------|-----------------|-------------------|
| Common | Common | 50% |
| Uncommon | Common | 55% |
| Rare | Common | 58% |
| Epic | Common | 62% |
| Legendary | Common | 65% |
| Rare | Uncommon | 53% |
| Epic | Rare | 55% |
| Legendary | Epic | 52% |

**Key Balance Principle**: **Skill > Rarity > RNG**
- A skilled player with Common units should beat an unskilled player with Legendary units
- Rarity provides advantage, not guaranteed victory
- Maximum rarity advantage capped at +65% win rate vs baseline

### 6.4 Point Cost vs Power Curves

**Point Cost Formula**:
```
Base Cost = (Stat Total × Role Multiplier) + Equipment Value + Ability Value

Role Multipliers:
- Troops: 3.5× (efficient point per stat)
- Fast Attack: 4.0× (mobility premium)
- Elites: 4.5× (specialist premium)
- Heavy Support: 5.0× (power premium)
- HQ: 5.5× (leadership premium + mandatory)

Ability Value Calculation:
- Minor abilities: +10-25 points
- Major abilities: +30-60 points  
- Legendary abilities: +75-150 points

Equipment Value:
- Sum of all equipment point costs
- Synergy bonuses add 10% if 3+ items
```

**Power vs Cost Efficiency Targets**:

| Unit Role | Efficiency Range | Sweet Spot |
|-----------|------------------|------------|
| Troops | 8.5-12.0 stat points per 100 cost | 10.0 |
| Fast Attack | 7.5-10.5 stat points per 100 cost | 8.5 |
| Elites | 6.5-9.0 stat points per 100 cost | 7.5 |
| Heavy Support | 6.0-8.5 stat points per 100 cost | 7.0 |
| HQ | 5.5-7.5 stat points per 100 cost | 6.5 |

**Efficiency Validation Process**:
1. Calculate stat point efficiency for every unit
2. Flag units outside efficiency ranges
3. Simulate 1000 battles per flagged unit vs baseline units
4. Adjust point costs to bring win rates to 45-55% vs equivalent points

### 6.5 Army Composition Constraints

**Balanced Army Enforcement**:

```python
def validate_army_composition(army):
    total_points = sum(unit.point_cost for unit in army)
    
    # Role distribution limits
    role_percentages = {
        "troops": sum(u.point_cost for u in army if u.role == "troops") / total_points,
        "elites": sum(u.point_cost for u in army if u.role == "elites") / total_points,
        "fast_attack": sum(u.point_cost for u in army if u.role == "fast_attack") / total_points,
        "heavy_support": sum(u.point_cost for u in army if u.role == "heavy_support") / total_points,
        "hq": sum(u.point_cost for u in army if u.role == "hq") / total_points
    }
    
    # Enforce healthy mix - prevent spam armies
    if role_percentages["troops"] < 0.25:
        return "Error: Army must be at least 25% Troops"
    if role_percentages["hq"] > 0.35:
        return "Error: HQ cannot exceed 35% of army"
    if any(role_percentages[role] > 0.60 for role in ["elites", "fast_attack", "heavy_support"]):
        return "Error: No single non-troops role can exceed 60%"
    
    return "Valid"
```

### 6.6 Economic Balance Integration

**$WAR Economy Factors**:

```python
# Battle reward calculation
def calculate_battle_reward(victory, army_points, opponent_rarity, battle_duration):
    base_reward = army_points * 0.02  # 2% of army value
    
    if victory:
        reward = base_reward
        
        # Bonus for defeating higher rarity
        rarity_bonus = opponent_rarity_advantage * 0.1
        
        # Duration bonus/penalty
        if battle_duration < target_duration * 0.8:
            duration_modifier = 1.2  # Quick decisive victories
        elif battle_duration > target_duration * 1.3:
            duration_modifier = 0.8  # Long slogs penalized
        else:
            duration_modifier = 1.0
            
        reward = reward * (1 + rarity_bonus) * duration_modifier
    else:
        reward = base_reward * 0.3  # Consolation prize
    
    return int(reward)
```

**Equipment Economy Balance**:
- Equipment upgrade costs scale with current army value
- High-rarity armies face higher maintenance costs
- $WAR sink rate should match generation rate ±10%

### 6.7 Meta Health Monitoring

**Key Metrics Tracked**:

1. **Faction Popularity Distribution**:
   - Target: No faction below 5% or above 15% of player base
   - Alert if any faction hits <3% or >20%

2. **Army Composition Trends**:
   - Track role distribution across all armies
   - Flag if any role becomes >45% or <15% of total army points

3. **Equipment Usage Rates**:
   - Monitor which equipment pieces are never used
   - Buff underused equipment quarterly

4. **Battle Duration Distribution**:
   - Target: 80% of battles within ±25% of target duration
   - Alert if >15% of battles hit turn limit

5. **Economic Health**:
   - $WAR generation vs sink ratio (target: 0.95-1.05)
   - Equipment upgrade rate vs battle frequency

**Automated Balance Responses**:
- If faction win rate deviates >10% from target: Automatic +/-2% stat adjustment
- If equipment usage <5%: Auto-reduce cost by 20%
- If battle durations consistently long: Increase damage across the board by 5%

---

## IMPLEMENTATION NOTES

### Simulation Performance Targets
- Battle simulation: <500ms for 1000pt armies
- AI decision making: <50ms per unit per turn
- Memory usage: <100MB per concurrent battle
- Scalability: Support 1000+ concurrent simulations

### Data Validation Requirements  
- All combat formulas must produce deterministic results
- RNG seed system for battle replay capability
- Combat logs must capture every dice roll and modifier
- Balance changes require minimum 1000 battle sample size

### Integration Checkpoints
- Combat math engine unit tests: 100% code coverage
- AI behavior validation: Compare vs human player decisions
- Balance framework: Monthly automated win rate analysis
- Equipment system: Quarterly economic impact review

---

*"In Chain of War, every die roll tells a story, every battle shapes the meta, and every army builds a legend."*

---

**Document Version**: 2.0  
**Author**: Combat Systems Architect (Celeste)  
**Integration Target**: Chain of War Game Engine v1.0  
**Status**: Simulation-Ready Specification  
**Last Updated**: 2026-03-18  
**Next Review**: Balance Framework validation after 10,000 battle milestone