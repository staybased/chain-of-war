// nav.js — Shared Navigation Bar for Chain of War
// Include this in any Chain of War page to add the shared nav

(function() {
    // Don't inject if nav already exists
    if (document.getElementById('cow-nav')) return;

    // Get current page for highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'landing.html';
    
    // Check admin state from localStorage
    let adminState = null;
    try {
        adminState = JSON.parse(localStorage.getItem('cow_admin_state') || '{}');
    } catch (e) {
        adminState = {};
    }

    // Navigation links configuration
    const navLinks = [
        { label: 'HOME', href: 'landing.html' },
        { label: 'BATTLE', href: 'index.html' },
        { label: 'DEATH MATCH', href: 'deathmatch.html' },
        { label: 'TOURNAMENT', href: 'tournament.html' },
        { label: 'WAR CHEST', href: 'warchest.html' },
        { label: 'ARMORY', href: 'armory.html' },
        { label: 'FORGE', href: 'forge.html' },
        { label: 'MARKET', href: 'marketplace.html' },
        { label: 'ECONOMY', href: 'economy.html' }
    ];

    // Add admin link if user has admin role
    if (adminState.role === 'admin') {
        navLinks.push({ label: 'ADMIN', href: 'admin.html' });
    }

    // Create navigation HTML
    const navHTML = `
        <nav id="cow-nav" style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 60px;
            background: rgba(5, 5, 16, 0.9);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 24px;
            border-bottom: 1px solid rgba(0, 229, 255, 0.1);
        ">
            <!-- Logo -->
            <div style="display: flex; align-items: center;">
                <img src="assets/logo.png" alt="Chain of War" style="
                    height: 40px;
                    mix-blend-mode: screen;
                    filter: brightness(1.2);
                ">
            </div>

            <!-- Desktop Navigation Links -->
            <div id="nav-links" style="
                display: flex;
                align-items: center;
                gap: 40px;
                font-family: 'Arial', sans-serif;
                font-size: 11px;
                font-weight: 600;
                letter-spacing: 3px;
                text-transform: uppercase;
            ">
                ${navLinks.map(link => `
                    <a href="${link.href}" style="
                        color: ${currentPage === link.href ? '#00E5FF' : '#666'};
                        text-decoration: none;
                        transition: color 0.3s ease;
                        position: relative;
                    " 
                    onmouseover="this.style.color='#00E5FF'"
                    onmouseout="this.style.color='${currentPage === link.href ? '#00E5FF' : '#666'}'"
                    >${link.label}</a>
                `).join('')}
            </div>

            <!-- Wallet/Admin Info -->
            <div style="display: flex; align-items: center; gap: 16px;">
                ${adminState.walletAddress ? `
                    <div style="
                        font-family: 'Arial', sans-serif;
                        font-size: 10px;
                        color: #888;
                        text-align: right;
                    ">
                        <div style="color: #FFD700; font-weight: bold;">
                            $WAR: ${adminState.warBalance || '0.00'}
                        </div>
                        <div style="margin-top: 2px;">
                            ${adminState.walletAddress.slice(0, 6)}...${adminState.walletAddress.slice(-4)}
                        </div>
                    </div>
                ` : ''}
                
                <button id="wallet-connect" style="
                    background: transparent;
                    border: 1px solid #00E5FF;
                    color: #00E5FF;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 10px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-family: 'Arial', sans-serif;
                "
                onmouseover="this.style.background='#00E5FF'; this.style.color='#000'"
                onmouseout="this.style.background='transparent'; this.style.color='#00E5FF'"
                >${adminState.walletAddress ? 'DISCONNECT' : 'CONNECT WALLET'}</button>
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" style="
                display: none;
                background: none;
                border: none;
                color: #00E5FF;
                font-size: 20px;
                cursor: pointer;
                padding: 8px;
            " onclick="toggleMobileMenu()">☰</button>

            <!-- Mobile Menu Overlay -->
            <div id="mobile-menu" style="
                position: fixed;
                top: 0;
                right: -100%;
                width: 280px;
                height: 100vh;
                background: rgba(5, 5, 16, 0.98);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                transition: right 0.3s ease;
                z-index: 10001;
                padding: 80px 24px 24px 24px;
                border-left: 1px solid rgba(0, 229, 255, 0.2);
            ">
                <button style="
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: none;
                    border: none;
                    color: #00E5FF;
                    font-size: 24px;
                    cursor: pointer;
                " onclick="toggleMobileMenu()">×</button>
                
                <div style="
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    font-family: 'Arial', sans-serif;
                ">
                    ${navLinks.map(link => `
                        <a href="${link.href}" style="
                            color: ${currentPage === link.href ? '#00E5FF' : '#888'};
                            text-decoration: none;
                            font-size: 14px;
                            font-weight: 600;
                            letter-spacing: 2px;
                            text-transform: uppercase;
                            padding: 12px 0;
                            border-bottom: 1px solid rgba(255,255,255,0.1);
                        ">${link.label}</a>
                    `).join('')}
                    
                    ${adminState.walletAddress ? `
                        <div style="
                            margin-top: 24px;
                            padding: 16px;
                            background: rgba(0, 229, 255, 0.1);
                            border-radius: 8px;
                            font-size: 12px;
                            color: #888;
                        ">
                            <div style="color: #FFD700; font-weight: bold; margin-bottom: 4px;">
                                $WAR: ${adminState.warBalance || '0.00'}
                            </div>
                            <div>
                                ${adminState.walletAddress.slice(0, 8)}...${adminState.walletAddress.slice(-6)}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </nav>
    `;

    // Add mobile styles
    const mobileStyles = `
        <style>
            @media (max-width: 768px) {
                #nav-links {
                    display: none !important;
                }
                #mobile-menu-btn {
                    display: block !important;
                }
            }
        </style>
    `;

    // Insert navigation and styles
    document.head.insertAdjacentHTML('beforeend', mobileStyles);
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Add body padding to account for fixed nav
    document.body.style.paddingTop = '60px';

    // Mobile menu toggle function
    window.toggleMobileMenu = function() {
        const mobileMenu = document.getElementById('mobile-menu');
        const isOpen = mobileMenu.style.right === '0px';
        mobileMenu.style.right = isOpen ? '-100%' : '0px';
    };

    // Wallet connect simulation
    document.getElementById('wallet-connect').addEventListener('click', function() {
        if (adminState.walletAddress) {
            // Disconnect
            localStorage.removeItem('cow_admin_state');
            location.reload();
        } else {
            // Simulate wallet connection
            const mockWallet = {
                walletAddress: '0x' + Math.random().toString(16).substring(2, 42).padStart(40, '0'),
                warBalance: (Math.random() * 10000).toFixed(2),
                role: Math.random() > 0.8 ? 'admin' : 'player'
            };
            localStorage.setItem('cow_admin_state', JSON.stringify(mockWallet));
            location.reload();
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobile-menu').style.right = '-100%';
        });
    });

})();