var x=document.querySelectorAll("button");
for(var i=0;i<7;i++){
    x[i].addEventListener("click",function () {
        // var p=new Audio("sound/crash.mp3");
        // p.play();
  
        
        if(this.innerHTML=='w'){
            var p=new Audio("sounds/crash.mp3");
            p.play();
          
        }else if(this.innerHTML=='a'){
            var p=new Audio('sounds/kick-bass.mp3');
            p.play();
        }else if(this.innerHTML=='s'){
            var p=new Audio("sounds/snare.mp3");
            p.play();
        }else if(this.innerHTML=='d'){
            var p=new Audio("sounds/tom-1.mp3");
            p.play();
        }else if(this.innerHTML=='j'){
            var p=new Audio("sounds/tom-2.mp3");
            p.play();
        }else if(this.innerHTML=='k'){
            var p=new Audio("sounds/tom-3.mp3");
            p.play();
        }else if(this.innerHTML=='l'){
            var p=new Audio("sounds/tom-4.mp3");
            p.play();
        }

        buttonanimation(this.innerHTML);
    });
    
}
function houseKeeper(name,age,numberofyearsExperience){
        this.name=name;
        this.age=age;
        this.numberofyearsExperience=numberofyearsExperience;
        this.clean=function(){
            alert("cleaning in progress");
        }

}
var houseKeeper1=new houseKeeper("sahil",21,2);


document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});
function makesound(key){
    if(key=='w'){
        var p=new Audio("sounds/crash.mp3");
        p.play();
      
    }else if(key=='a'){
        var p=new Audio('sounds/kick-bass.mp3');
        p.play();
    }else if(key=='s'){
        var p=new Audio("sounds/snare.mp3");
        p.play();
    }else if(key=='d'){
        var p=new Audio("sounds/tom-1.mp3");
        p.play();
    }else if(key=='j'){
        var p=new Audio("sounds/tom-2.mp3");
        p.play();
    }else if(key=='k'){
        var p=new Audio("sounds/tom-3.mp3");
        p.play();
    }else if(key=='l'){
        var p=new Audio("sounds/tom-4.mp3");
        p.play();
    }
}

function anotherEventListerner(type,callback){
    var clickfun={typeof:'press',key:'p'};
    if(clickfun.typeof==type){
        callback(clickfun);
        callback();
    }
}


function buttonanimation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");
    },500);
}