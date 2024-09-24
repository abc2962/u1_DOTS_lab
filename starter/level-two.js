/*
 * DOTS: Level Two
 *
 */
let score = 0;
const ball = document.querySelectorAll('.js-ball');
console.log(ball)
const scoreDisplay = document.querySelector('.js-score');
const level2Winner = document.querySelector('.level-winner');
for (let i=0; i<ball.length; i++) {
    ball[i].addEventListener('click', function() {
        score += 50;
        console.log(`Score: ${score}`);
        scoreDisplay.innerText = score;
        console.log(`Score Display: ${scoreDisplay.innerText}`);
    
        if (score >= 100) {
            console.log('Level complete!');
    
            level2Winner.style.opacity = 1;
        }
    })
    

}


