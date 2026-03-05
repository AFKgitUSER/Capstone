/* settings.js - Focused Core Functions */

const ArgusSettings = {
    init: function() {
        this.bindEvents();
        console.log("ARGUS: Settings Module Initialized.");
    },

    bindEvents: function() {
        // --- Quality Calibration ---
        const qualityBtns = document.querySelectorAll('.small-btn[data-quality]');
        qualityBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // UI feedback
                qualityBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Execution
                this.updateGraphics(btn.getAttribute('data-quality'));
            });
        });

        // --- Subtitle/Toggle Logic ---
        const subToggle = document.getElementById('sub-toggle');
        if (subToggle) {
            subToggle.onclick = function() {
                const isActive = this.classList.toggle('active');
                this.innerText = isActive ? "ENABLED" : "DISABLED";
                console.log(`System: Subtitles ${isActive ? 'ON' : 'OFF'}`);
            };
        }

        // --- Return to Main Menu ---
        // Replacing 'Close Overlay' with a direct link back to index.html
        const backBtn = document.getElementById('back-to-menu');
        if (backBtn) {
            backBtn.onclick = () => {
                window.location.href = 'index.html';
            };
        }
    },

    updateGraphics: function(level) {
        // Here you can add logic to change CSS variables or Three.js settings
        console.log(`System: Graphics quality calibrated to ${level.toUpperCase()}`);
    }
};

document.addEventListener('DOMContentLoaded', () => ArgusSettings.init());