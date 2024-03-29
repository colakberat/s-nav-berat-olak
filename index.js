const btn = document.getElementById('changeColor');

let randomNumber = () => { 

    let randomNum = (Math.floor(Math.random()*256));
    return randomNum; 
}    

let ChangeColor = () => {
    
    let randomColor = `rgb(${randomNumber()}, ${randomNumber()} ,${randomNumber()})`; 
    document.body.style.backgroundColor = randomColor;
    
}

btn.addEventListener('click', ChangeColor);
window.addEventListener('load', ChangeColor);
