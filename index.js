//detecting click
let l=document.querySelectorAll(".drum").length;
for(let i=0; i<l; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        let keyButton=this.innerHTML;
        
        eventHandler(keyButton);
        addAnnimation(keyButton);
    });
}


//detecting keypress


document.addEventListener("keydown",function(event){
   let keyButton=event.key;
    
    keyButton=keyButton.toLocaleLowerCase();
    eventHandler(keyButton);
    addAnnimation(keyButton);
});

//function to add songs
function eventHandler(letter)
{
    
    switch(letter){


        case "w":
            let audio1= new Audio("./sounds/tom-1.mp3");
            audio1.play();             break;
        case "a":
            let audio2= new Audio("./sounds/tom-2.mp3");
            audio2.play();
            break;
         case "s":
            let audio3= new Audio("./sounds/tom-3.mp3");
            audio3.play(); 
            break;
        case "d":
            let audio4= new Audio("./sounds/tom-4.mp3");
            audio4.play(); 
            break;
        case "j":
            let audio5= new Audio("./sounds/snare.mp3");
            audio5.play(); 
            break;
        case "k":
            let audio6= new Audio("./sounds/crash.mp3");
            audio6.play(); 
            break;
        case "l":
            let audio7= new Audio("./sounds/kick-bass.mp3");
            audio7.play(); 
            break;
        
    }
}   

//function to add animation
function addAnnimation(currentKey)
{
       document.querySelector('.'+currentKey).classList.toggle("pressed");
       setTimeout(function(){
        document.querySelector('.'+currentKey).classList.toggle("pressed");
       },100);
}


