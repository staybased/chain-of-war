// nav.js — Chain of War Navigation & Loading Experience
// Self-executing IIFE that injects navigation and loading splash

(function() {
    'use strict';

    // Prevent multiple injections
    if (document.getElementById('cow-nav') || document.getElementById('cow-loading-splash')) return;

    // Loading Splash - plays once per session
    function createLoadingSplash() {
        const hasPlayed = sessionStorage.getItem('cow_splash_played');
        if (hasPlayed) return;

        const splashHTML = `
            <div id="cow-loading-splash" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: #050510;
                z-index: 99999;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                opacity: 1;
                transition: opacity 0.4s ease;
            ">
                <img src="assets/logo.png" id="splash-logo" style="
                    width: 200px;
                    height: auto;
                    opacity: 0;
                    transition: opacity 0.5s ease;
                    mix-blend-mode: screen;
                " alt="Chain of War">
                
                <div id="progress-container" style="
                    width: 300px;
                    height: 2px;
                    background: rgba(0, 229, 255, 0.2);
                    margin-top: 40px;
                    border-radius: 1px;
                    overflow: hidden;
                ">
                    <div id="progress-bar" style="
                        width: 0%;
                        height: 100%;
                        background: #00E5FF;
                        transition: width 1.5s ease;
                        border-radius: 1px;
                    "></div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', splashHTML);

        // Animation sequence
        setTimeout(() => {
            document.getElementById('splash-logo').style.opacity = '1';
            document.getElementById('progress-bar').style.width = '100%';
        }, 50);

        setTimeout(() => {
            document.getElementById('cow-loading-splash').style.opacity = '0';
            sessionStorage.setItem('cow_splash_played', 'true');
            
            setTimeout(() => {
                const splash = document.getElementById('cow-loading-splash');
                if (splash) splash.remove();
            }, 400);
        }, 1300); // 0.5s fade in + 0.8s hold = 1.3s
    }

    // Get current page for active highlighting
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        return page.replace('.html', '');
    }

    // Get admin state from localStorage
    function getAdminState() {
        try {
            return JSON.parse(localStorage.getItem('cow_admin_state') || '{}');
        } catch (e) {
            return {};
        }
    }

    // Navigation configuration
    function getNavConfig() {
        const adminState = getAdminState();
        
        return {
            groups: [
                {
                    label: 'PLAY',
                    links: [
                        { label: 'BATTLE', href: 'battle.html', page: 'battle' },
                        { label: 'DEATH MATCH', href: 'deathmatch.html', page: 'deathmatch' },
                        { label: 'TOURNAMENT', href: 'tournament.html', page: 'tournament' }
                    ]
                },
                {
                    label: 'COLLECT',
                    links: [
                        { label: 'WAR CHEST', href: 'warchest.html', page: 'warchest' },
                        { label: 'ARMORY', href: 'armory.html', page: 'armory' },
                        { label: 'FORGE', href: 'forge.html', page: 'forge' },
                        { label: 'MARKET', href: 'market.html', page: 'market' }
                    ]
                },
                {
                    label: 'DATA',
                    links: [
                        { label: 'ECONOMY', href: 'economy.html', page: 'economy' }
                    ]
                }
            ],
            adminLink: adminState.role === 'admin' ? { label: 'ADMIN', href: 'admin.html', page: 'admin' } : null,
            wallet: {
                balance: '12,450 $WAR',
                connected: adminState.walletAddress || false
            }
        };
    }

    // CSS Styles
    function injectStyles() {
        const styles = `
            <style id="cow-nav-styles">
                @keyframes slideInRight {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .cow-nav-link {
                    font-family: system-ui, -apple-system, sans-serif;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #555;
                    text-decoration: none;
                    transition: color 0.2s ease;
                    position: relative;
                }

                .cow-nav-link:hover {
                    color: #00E5FF;
                }

                .cow-nav-link.active {
                    color: #00E5FF;
                }

                .cow-nav-link.active::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: #00E5FF;
                }

                .cow-nav-group-label {
                    font-family: system-ui, -apple-system, sans-serif;
                    font-size: 8px;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 12px;
                    font-weight: 600;
                }

                .cow-nav-group {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .cow-nav-group-links {
                    display: flex;
                    gap: 24px;
                }

                .cow-hamburger {
                    width: 44px;
                    height: 44px;
                    position: relative;
                    cursor: pointer;
                    display: none;
                    padding: 13px 10px;
                    box-sizing: border-box;
                }

                .cow-hamburger span {
                    display: block;
                    position: absolute;
                    height: 2px;
                    width: 100%;
                    background: #00E5FF;
                    border-radius: 1px;
                    opacity: 1;
                    left: 0;
                    transform: rotate(0deg);
                    transition: 0.25s ease-in-out;
                }

                .cow-hamburger span:nth-child(1) { top: 0px; }
                .cow-hamburger span:nth-child(2) { top: 8px; }
                .cow-hamburger span:nth-child(3) { top: 16px; }

                .cow-hamburger.open span:nth-child(1) {
                    top: 8px;
                    transform: rotate(135deg);
                }

                .cow-hamburger.open span:nth-child(2) {
                    opacity: 0;
                    left: -60px;
                }

                .cow-hamburger.open span:nth-child(3) {
                    top: 8px;
                    transform: rotate(-135deg);
                }

                .cow-wallet-pill {
                    background: rgba(255, 215, 0, 0.1);
                    border: 1px solid rgba(255, 215, 0, 0.3);
                    border-radius: 20px;
                    padding: 8px 16px;
                    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
                    font-size: 12px;
                    color: #FFD700;
                    font-weight: 600;
                    min-width: 120px;
                    white-space: nowrap;
                }

                .cow-connect-button {
                    background: transparent;
                    border: 1px solid #00E5FF;
                    color: #00E5FF;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-family: system-ui, -apple-system, sans-serif;
                }

                .cow-connect-button:hover {
                    background: #00E5FF;
                    color: #000;
                }

                .cow-admin-link {
                    font-family: system-ui, -apple-system, sans-serif;
                    font-size: 9px;
                    color: #666;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-left: 20px;
                }

                @media (max-width: 768px) {
                    .cow-nav-desktop {
                        display: none !important;
                    }
                    
                    .cow-hamburger {
                        display: block !important;
                    }
                    
                    .cow-wallet-pill {
                        display: none !important;
                    }
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    // Create desktop navigation
    function createDesktopNav(config, currentPage) {
        const groupsHTML = config.groups.map(group => `
            <div class="cow-nav-group">
                <div class="cow-nav-group-label">${group.label}</div>
                <div class="cow-nav-group-links">
                    ${group.links.map(link => `
                        <a href="${link.href}" class="cow-nav-link ${currentPage === link.page ? 'active' : ''}">
                            ${link.label}
                        </a>
                    `).join('')}
                </div>
            </div>
        `).join('');

        return `
            <div class="cow-nav-desktop" style="display: flex; align-items: center; gap: 32px;">
                ${groupsHTML}
            </div>
        `;
    }

    // Create mobile overlay menu
    function createMobileMenu(config, currentPage) {
        const allLinks = config.groups.flatMap(group => 
            group.links.map(link => ({...link, group: group.label}))
        );

        return `
            <div id="cow-mobile-menu" style="
                position: fixed;
                top: 0;
                right: -100%;
                width: 100vw;
                height: 100vh;
                background: #050510;
                z-index: 50000;
                transition: right 0.3s ease;
                overflow-y: auto;
                padding: 80px 0 40px 0;
            ">
                <div style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    max-width: 300px;
                    margin: 0 auto;
                    padding: 0 20px;
                ">
                    ${config.groups.map(group => `
                        <div style="
                            width: 100%;
                            margin-bottom: 40px;
                            text-align: center;
                        ">
                            <div class="cow-nav-group-label" style="
                                margin-bottom: 20px;
                                color: #00E5FF;
                                font-size: 10px;
                            ">${group.label}</div>
                            <div style="
                                border-bottom: 1px solid rgba(0, 229, 255, 0.1);
                                padding-bottom: 20px;
                            ">
                                ${group.links.map(link => `
                                    <a href="${link.href}" style="
                                        display: block;
                                        color: ${currentPage === link.page ? '#00E5FF' : '#888'};
                                        text-decoration: none;
                                        font-family: system-ui, -apple-system, sans-serif;
                                        font-size: 14px;
                                        font-weight: 600;
                                        letter-spacing: 2px;
                                        text-transform: uppercase;
                                        padding: 12px 0;
                                        transition: color 0.2s ease;
                                    " onclick="window.cowNavToggleMobile()">${link.label}</a>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                    
                    <div class="cow-wallet-pill" style="
                        display: block !important;
                        margin-top: 20px;
                    ">${config.wallet.balance}</div>
                    
                    <button class="cow-connect-button" style="
                        margin-top: 16px;
                    " onclick="window.cowNavConnect()">CONNECT</button>
                    
                    ${config.adminLink ? `
                        <a href="${config.adminLink.href}" class="cow-admin-link" style="
                            margin: 20px 0 0 0;
                        " onclick="window.cowNavToggleMobile()">${config.adminLink.label}</a>
                    ` : ''}
                </div>
            </div>
        `;
    }

    // Create navigation
    function createNavigation() {
        const config = getNavConfig();
        const currentPage = getCurrentPage();

        const navHTML = `
            <nav id="cow-nav" style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: 64px;
                background: rgba(5, 5, 16, 0.92);
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 24px;
                animation: fadeIn 0.3s ease;
            ">
                <!-- Logo -->
                <div style="display: flex; align-items: center;">
                    <img src="assets/logo.png" alt="Chain of War" style="
                        height: 40px;
                        mix-blend-mode: screen;
                    ">
                </div>

                <!-- Desktop Navigation -->
                ${createDesktopNav(config, currentPage)}

                <!-- Right Section -->
                <div style="display: flex; align-items: center; gap: 16px;">
                    <div class="cow-wallet-pill">${config.wallet.balance}</div>
                    <button class="cow-connect-button" onclick="window.cowNavConnect()">CONNECT</button>
                    ${config.adminLink ? `
                        <a href="${config.adminLink.href}" class="cow-admin-link">${config.adminLink.label}</a>
                    ` : ''}
                    
                    <!-- Mobile Hamburger -->
                    <div class="cow-hamburger" onclick="window.cowNavToggleMobile()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            ${createMobileMenu(config, currentPage)}
        `;

        return navHTML;
    }

    // Global functions
    window.cowNavToggleMobile = function() {
        const menu = document.getElementById('cow-mobile-menu');
        const hamburger = document.querySelector('.cow-hamburger');
        const isOpen = menu.style.right === '0px';
        
        menu.style.right = isOpen ? '-100%' : '0px';
        hamburger.classList.toggle('open', !isOpen);
    };

    window.cowNavConnect = function() {
        // Simulate wallet connection
        alert('Wallet connection simulated');
    };

    // Initialize everything
    function init() {
        // Add loading splash first
        createLoadingSplash();
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initNav);
        } else {
            initNav();
        }
    }

    function initNav() {
        // Inject styles
        injectStyles();
        
        // Create and inject navigation
        document.body.insertAdjacentHTML('afterbegin', createNavigation());
        
        // Add body padding to account for fixed nav
        document.body.style.paddingTop = '64px';
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            const menu = document.getElementById('cow-mobile-menu');
            const hamburger = document.querySelector('.cow-hamburger');
            
            if (menu && !menu.contains(e.target) && !hamburger.contains(e.target) && menu.style.right === '0px') {
                window.cowNavToggleMobile();
            }
        });
    }

    // Start initialization
    init();

})();