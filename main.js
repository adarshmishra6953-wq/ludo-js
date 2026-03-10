import { Ludo } from './ludo/Ludo.js';

const ludo = new Ludo();
// === COLORWIZ LUDO MASTER: SOUND & DICE UPDATE ===

// 1. फ्री साउंड इफेक्ट्स (इंटरनेट से)
const rollSound = new Audio('https://www.soundjay.com/buttons/sounds/button-3.mp3');
const moveSound = new Audio('https://www.soundjay.com/buttons/sounds/button-10.mp3');

// 2. साधारण नंबर की जगह असली पासे के डिज़ाइन (Unicode)
const diceFaces = ['🎲', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅']; 

// 3. Roll बटन पर आवाज़ और एनीमेशन सेट करना
const diceBtn = document.getElementById('dice-btn');
if(diceBtn) {
    diceBtn.addEventListener('click', () => {
        rollSound.play(); // पासा घूमने की आवाज़
        
        // गेम के लॉजिक को नंबर निकालने का समय देना (50ms), फिर उसे पासे में बदलना
        setTimeout(() => {
            let diceValElem = document.getElementById('dice-value');
            let num = parseInt(diceValElem.innerText);
            
            if(num >= 1 && num <= 6) {
                diceValElem.innerText = diceFaces[num]; // नंबर को पासे से बदलना
                diceValElem.style.fontSize = '60px'; // पासे को बड़ा और आकर्षक दिखाना
                diceValElem.style.color = '#ff4757';
                diceValElem.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
            }
        }, 50); 
    });
}

// 4. गोटी चलने पर 'टिक' की आवाज़ आना
const board = document.querySelector('.ludo-container');
if(board) {
    board.addEventListener('click', () => {
        moveSound.play();
    });
}
