//alert("hello world!"); 
//const myButton=document.getElementByClassName("w drum");
//myButton.addEventListener("click", handleClick);

/*for (var i=0; i<document.querySelectorAll(".drum").length);{
document.querySelectorAll("button").addEventListener ("click",handleClick);

function handleClick(){
    alert(" i got clicked");
}
}
*/

// detects button pressed
var numberOfButtons =document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
   
   var buttonInnerHtml=this.innerHTML;
   makeSound(buttonInnerHtml);
   buttonAnimation(buttonInnerHtml);
  
});
}
//detects keyboard pressed
document.addEventListener("keypress", (event)=>{
    //alert(" key was Pressed");
    makeSound(event.key);
    buttonAnimation(event.key);
})
function makeSound(key) {  
    switch (key) {
        case "w":
            var tom1 = new Audio ('sounds/tom-1.mp3');
            tom1.play();
            break;
                case "a":
                    var crash = new Audio ('sounds/crash.mp3');
                    crash.play();
                    break;
                    case "s":
                        var kickBass = new Audio ('sounds/kick-bass.mp3');
                        kickBass.play();
                        break;
                        case "d":
                            var snare = new Audio ('sounds/snare.mp3');
                            snare.play();
                            break;
                            case "j":
                                var tom2 = new Audio ('sounds/tom-2.mp3');
                                tom2.play();
                                break;
                                case "k":
                                    var tom3 = new Audio ('sounds/tom-3.mp3');
                                    tom3.play();
                                    break;
                                    case "l":
                                        var tom4= new Audio ('sounds/tom-4.mp3');
                                        tom4.play();
                                        break;
        default:
            console.log(buttonInnerHtml);
        
    }
}

function buttonAnimation(currentKey) {
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(()=>{
        activeButton.classList.remove("pressed");
    },100);

};












// 
// audio.play();