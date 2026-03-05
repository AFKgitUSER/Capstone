/* load.js */

const LoadManager = {
    init: function() {
        this.bindEvents();
    },

    toggle: function(show) {
        const overlay = document.getElementById('load-overlay');
        overlay.className = show ? 'overlay-visible' : 'overlay-hidden';
    },

    bindEvents: function() {
        const cards = document.querySelectorAll('.load-card:not(.corrupted)');
        
        cards.forEach(card => {
            card.addEventListener('click', () => {
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                console.log(`System: Slot ${card.dataset.slot} ready for injection.`);
            });
        });

        // Close button
        document.getElementById('close-load-btn').onclick = () => this.toggle(false);

        // Restore button (Triggers the HUD boot from your index.html)
        document.getElementById('restore-session-btn').onclick = () => {
            this.toggle(false);
            if(typeof startBootSequence === "function") {
                startBootSequence();
            }
        };
    }
};

document.addEventListener('DOMContentLoaded', () => LoadManager.init());