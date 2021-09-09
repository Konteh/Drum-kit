//detecting button pressed
let numberOfButton = document.querySelectorAll('.drum').length
for(i=0; i<numberOfButton; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', handleClick)
function handleClick(){
    let buttonInnerHTML = this.innerHTML
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
}
}
//detecting keyboard pressed
document.addEventListener('keydown', function(){
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key) {
    switch(key){
        case 'w':
            let crash = new Audio('sounds/loko piano.wav')
            crash.play();
            break;

            case 'a':
            let kick = new Audio('sounds/smooth piano.wav')
            kick.play();
            break;

            case 's':
            let snare = new Audio('sounds/loko piano.wav')
            snare.play();
            break;

            case 'd':
            let tom1 = new Audio('sounds/mixed melody.wav')
            tom1.play();
            break;

            case 'j':
            let tom2 = new Audio('sounds/piano melody.wav')
            tom2.play();
            break;

            case 'k':
            let tom3 = new Audio('sounds/mixed melody.wav')
            tom3.play();
            break;

            case 'l':
            let tom4 = new Audio('sounds/piano melody.wav')
            tom4.play();
            break;

            
            case 'f':
            let crash1 = new Audio('sounds/piano melody.wav')
            crash1.play();
            break;

            
            case 'g':
            let tom22 = new Audio('sounds/smooth piano.wav')
            tom22.play();
            break;

            case 'e':
            let tom1e = new Audio('sounds/jazz piano.wav')
            tom1e.play();
            break;

            case 'r':
            let snare1r = new Audio('sounds/piano melody.wav')
            snare1r.play();
            break;

            case 'b':
            let tom3b = new Audio('sounds/mixed melody.wav')
            tom3b.play();
            break;

            case 'x':
            let tom4x = new Audio('sounds/mixed melody.wav')
            tom4x.play();
            break;

            case 'o':
            let crasho = new Audio('sounds/loko piano.wav')
            crasho.play();
            break;

            case 'p':
            let kickp = new Audio('sounds/mixed melody.wav')
            kickp.play();
            break;

            case 'm':
            let snareg = new Audio('sounds/smooth piano.wav')
            snareg.play();
            break;

            case 'u':
            let crashu = new Audio('sounds/jazz piano.wav')
            crashu.play();
            break;

            case 'v':
            let kickv = new Audio('sounds/piano melody.wav')
            kickv.play();
            break;
            default: console.log(innerHTML)
    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector('.'+ currentKey)
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed')
    }, 100)
}
