#!/usr/bin/env node
/**
 * Wire all 25 visual assets into Chain of War prototypes
 * Uses relative file paths (assets/) instead of base64 to keep files small
 */

const fs = require('fs');
const path = require('path');

const projectDir = '/Users/agentcory/Projects/chain-of-war';

// Asset manifest
const ASSETS_JS = `
// === CHAIN OF WAR ASSET MANIFEST ===
const COW_ASSETS = {
    logo: 'assets/logo.png',
    cardBack: 'assets/card-back.png',
    cardFrame: 'assets/card-frame.png',
    bgCommandCenter: 'assets/bg-command-center.png',
    warToken: 'assets/war-token.png',
    warToken3d: 'assets/war-token-3d.png',
    roleIcons: 'assets/role-icons.png',
    chests: {
        recruit: 'assets/chest-recruit.png',
        veteran: 'assets/chest-veteran.png',
        commander: 'assets/chest-commander.png'
    },
    terrain: {
        open: 'assets/terrain-open.png',
        lightCover: 'assets/terrain-light-cover.png',
        heavyCover: 'assets/terrain-heavy-cover.png',
        elevated: 'assets/terrain-elevated.png',
        hazardous: 'assets/terrain-hazardous.png'
    },
    emblems: {
        'Iron Covenant': 'assets/emblem-iron-covenant.png',
        'Swarm of Xeth': 'assets/emblem-swarm-of-xeth.png',
        'Void Pharaohs': 'assets/emblem-void-pharaohs.png',
        'Emerald Tide': 'assets/emblem-emerald-tide.png',
        'Celestial Order': 'assets/emblem-celestial-order.png',
        'Warp Touched': 'assets/emblem-warp-touched.png',
        'Shadow Kin': 'assets/emblem-shadow-kin.png',
        'Steel Legion': 'assets/emblem-steel-legion.png',
        'Bone Prophets': 'assets/emblem-bone-prophets.png',
        'Apex Hunters': 'assets/emblem-apex-hunters.png'
    }
};
`;

function patchFile(filename, patches) {
    const filepath = path.join(projectDir, filename);
    if (!fs.existsSync(filepath)) {
        console.log(`  SKIP: ${filename} not found`);
        return;
    }
    
    let content = fs.readFileSync(filepath, 'utf8');
    let changed = false;
    
    for (const [desc, search, replace] of patches) {
        if (content.includes(search)) {
            content = content.replace(search, replace);
            console.log(`  ✅ ${desc}`);
            changed = true;
        } else {
            // Try to inject asset manifest after <script> tag
            if (desc === 'inject_manifest') {
                const scriptTag = '<script>';
                const lastScriptIdx = content.lastIndexOf(scriptTag);
                if (lastScriptIdx !== -1) {
                    content = content.slice(0, lastScriptIdx + scriptTag.length) + '\n' + replace + '\n' + content.slice(lastScriptIdx + scriptTag.length);
                    console.log(`  ✅ Injected asset manifest`);
                    changed = true;
                }
            } else {
                console.log(`  ⚠️  ${desc} — search pattern not found, skipping`);
            }
        }
    }
    
    if (changed) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`  💾 Saved ${filename}`);
    }
}

// =============================================
// PATCH: warchest.html
// =============================================
console.log('\n📦 Patching warchest.html...');

let warchest = fs.readFileSync(path.join(projectDir, 'warchest.html'), 'utf8');

// Replace emoji chest icons with actual images
const chestReplacements = [
    [/(<div class="chest-icon">)⚔️(<\/div>)/g, '$1<img src="assets/chest-recruit.png" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 0 15px rgba(139,105,20,0.5));">$2'],
    [/(<div class="chest-icon">)🛡️(<\/div>)/g, '$1<img src="assets/chest-veteran.png" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 0 15px rgba(136,136,136,0.5));">$2'],
    [/(<div class="chest-icon">)👑(<\/div>)/g, '$1<img src="assets/chest-commander.png" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 0 20px rgba(218,165,32,0.6));">$2'],
];

for (const [regex, replacement] of chestReplacements) {
    warchest = warchest.replace(regex, replacement);
}

// Inject COW_ASSETS if not present
if (!warchest.includes('COW_ASSETS')) {
    const scriptIdx = warchest.lastIndexOf('<script>');
    if (scriptIdx !== -1) {
        warchest = warchest.slice(0, scriptIdx + 8) + '\n' + ASSETS_JS + '\n' + warchest.slice(scriptIdx + 8);
    }
}

fs.writeFileSync(path.join(projectDir, 'warchest.html'), warchest, 'utf8');
console.log('  ✅ Chest images wired');
console.log('  💾 Saved warchest.html');


// =============================================
// PATCH: index.html (Combat Simulator)
// =============================================
console.log('\n⚔️  Patching index.html (Combat Sim)...');

let combat = fs.readFileSync(path.join(projectDir, 'index.html'), 'utf8');

// Inject asset manifest
if (!combat.includes('COW_ASSETS')) {
    const scriptIdx = combat.lastIndexOf('<script>');
    if (scriptIdx !== -1) {
        combat = combat.slice(0, scriptIdx + 8) + '\n' + ASSETS_JS + '\n' + combat.slice(scriptIdx + 8);
        console.log('  ✅ Asset manifest injected');
    }
}

// Replace hex terrain CSS colors with background-image terrain tiles
const terrainCSS = `
/* Terrain tile backgrounds */
.hex.open { background: #1a1a1a url('assets/terrain-open.png') center/cover; }
.hex.light-cover, .hex.light_cover { background: #2d4a2d url('assets/terrain-light-cover.png') center/cover; }
.hex.heavy-cover, .hex.heavy_cover { background: #4a2d2d url('assets/terrain-heavy-cover.png') center/cover; }
.hex.elevated { background: #2d2d4a url('assets/terrain-elevated.png') center/cover; }
.hex.hazardous { background: #4a2d4a url('assets/terrain-hazardous.png') center/cover; }
`;

// Try to inject terrain CSS before the closing </style>
const styleCloseIdx = combat.lastIndexOf('</style>');
if (styleCloseIdx !== -1 && !combat.includes('terrain-open.png')) {
    combat = combat.slice(0, styleCloseIdx) + terrainCSS + '\n' + combat.slice(styleCloseIdx);
    console.log('  ✅ Terrain tile textures injected');
}

fs.writeFileSync(path.join(projectDir, 'index.html'), combat, 'utf8');
console.log('  💾 Saved index.html');


// =============================================
// PATCH: economy.html
// =============================================
console.log('\n📊 Patching economy.html...');

let economy = fs.readFileSync(path.join(projectDir, 'economy.html'), 'utf8');

// Add command center background
if (!economy.includes('bg-command-center.png')) {
    economy = economy.replace(
        /body\s*\{/,
        `body {\n    background: #050510 url('assets/bg-command-center.png') center/cover fixed;`
    );
    console.log('  ✅ Command center background added');
}

// Inject asset manifest
if (!economy.includes('COW_ASSETS')) {
    const scriptIdx = economy.lastIndexOf('<script>');
    if (scriptIdx !== -1) {
        economy = economy.slice(0, scriptIdx + 8) + '\n' + ASSETS_JS + '\n' + economy.slice(scriptIdx + 8);
        console.log('  ✅ Asset manifest injected');
    }
}

fs.writeFileSync(path.join(projectDir, 'economy.html'), economy, 'utf8');
console.log('  💾 Saved economy.html');


// =============================================
// PATCH: admin.html
// =============================================
console.log('\n🔧 Patching admin.html...');

let admin = fs.readFileSync(path.join(projectDir, 'admin.html'), 'utf8');

// Add command center background
if (!admin.includes('bg-command-center.png')) {
    admin = admin.replace(
        /body\s*\{/,
        `body {\n    background: #050510 url('assets/bg-command-center.png') center/cover fixed;`
    );
    console.log('  ✅ Command center background added');
}

// Inject asset manifest
if (!admin.includes('COW_ASSETS')) {
    const scriptIdx = admin.lastIndexOf('<script>');
    if (scriptIdx !== -1) {
        admin = admin.slice(0, scriptIdx + 8) + '\n' + ASSETS_JS + '\n' + admin.slice(scriptIdx + 8);
        console.log('  ✅ Asset manifest injected');
    }
}

fs.writeFileSync(path.join(projectDir, 'admin.html'), admin, 'utf8');
console.log('  💾 Saved admin.html');


// =============================================
// PATCH: armory.html
// =============================================
console.log('\n🏛️  Patching armory.html...');

let armory = fs.readFileSync(path.join(projectDir, 'armory.html'), 'utf8');

// Inject asset manifest
if (!armory.includes('COW_ASSETS')) {
    const scriptIdx = armory.lastIndexOf('<script>');
    if (scriptIdx !== -1) {
        armory = armory.slice(0, scriptIdx + 8) + '\n' + ASSETS_JS + '\n' + armory.slice(scriptIdx + 8);
        console.log('  ✅ Asset manifest injected');
    }
}

fs.writeFileSync(path.join(projectDir, 'armory.html'), armory, 'utf8');
console.log('  💾 Saved armory.html');


// =============================================
// Summary
// =============================================
console.log('\n' + '='.repeat(50));
console.log('🏁 ASSET WIRING COMPLETE');
console.log('='.repeat(50));
console.log(`
Files patched:
  📦 warchest.html — chest images (bronze/silver/gold)
  ⚔️  index.html   — terrain tile textures (5 types)
  📊 economy.html  — command center background
  🔧 admin.html    — command center background
  🏛️  armory.html   — asset manifest

All files now reference assets/ directory for images.
No base64 embedding — files stay small and fast.

Open in browser and assets load from local file paths.
`);
