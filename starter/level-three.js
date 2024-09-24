/*
 * DOTS: Level Three
 *
 */let score = 0;
const ball = document.querySelectorAll('.js-ball');
console.log(ball)
const scoreDisplay = document.querySelector('.js-score');
const level3Winner = document.querySelector('.level-winner');
console.log(scoreDisplay)


for (let i=0; i<ball.length; i++) {
    ball[i].addEventListener('click', function(event) {
        console.log(event.target.dataset)
        const dataIncrement = parseInt(event.target.dataset.increment)
        score += dataIncrement;
        console.log(`Score: ${score}`);
        scoreDisplay.innerText = score;
        console.log(`Score Display: ${scoreDisplay.innerText}`);
    
        if (score >= 100) {
            console.log('Level complete!');
    
            level3Winner.style.opacity = 1;
        }
    })
    

}


