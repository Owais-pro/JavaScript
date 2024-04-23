function Toss(choice) {
    const coindiv = document.querySelector('#coin');
    const resultText = document.querySelector('#result');
    const randomNumber = Math.floor(Math.random()*2+1);

    if (choice === 'Head') {
        coindiv.innerHTML = '<img id="images" src="head.png" alt="" />';
        if (randomNumber === 1) {
            resultText.innerHTML = "Congratulation! You Won The Toss."
            
        }
        else
        {
            resultText.innerHTML = "Sorry! You Loss The Toss.";
        }
    }
    else if (choice === 'Tail') {
        coindiv.innerHTML = '<img id="images" src="tail.png" alt="" />';
        if (randomNumber === 2) {
            resultText.innerHTML = "Congratulation! You Won The Toss."
            
        }
        else
        {
            resultText.innerHTML = "Sorry! You Loss The Toss.";
        }
        
    }
    
    
}