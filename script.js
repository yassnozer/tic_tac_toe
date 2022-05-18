let turn="X";
let click=0;
let title=document.getElementById("title")
let squares=[]

function end(num1,num2,num3) {
    title.innerText=` ${squares[num2]} win`
    document.getElementById("item"+num1).style.backgroundColor="#000";
    document.getElementById("item"+num2).style.backgroundColor="#000";
    document.getElementById("item"+num3).style.backgroundColor="#000";
    setInterval(()=>{title.innerText+="."},500);
    setTimeout(() =>{location.reload() },1500)
}

function winner(){
   
for(let i=1; i<10; i++){
    squares[i]=document.getElementById('item'+i).innerHTML
}
//line
if(squares[1]==squares[2] && squares[2]==squares[3] && squares[3] !=0){
    end(1,2,3)
}
else if(squares[4]==squares[5] && squares[6]==squares[5] && squares[5] !=0){
    end(4,5,6)
}

else if(squares[7]==squares[8] && squares[9]==squares[8] && squares[8] !=0){
    end(7,8,9)
}
//column
if(squares[1]==squares[4] && squares[7]==squares[4] && squares[4] !=0){
    end(1,4,7)
}
else if(squares[2]==squares[5] && squares[8]==squares[5] && squares[5] !=0){
    end(2,5,8)
}
else if(squares[3]==squares[6] && squares[9]==squares[6] && squares[6] !=0){
    end(3,6,9)
}
//diagonal
if(squares[1]==squares[5] && squares[9]==squares[1] && squares[1] !=0){
    end(1,5,9)
}
else if(squares[3]==squares[5] && squares[7]==squares[5] && squares[5] !=0){
    end(3,5,7)
}
}


function play(cordonne){
    let element=document.getElementById(cordonne)
    if(turn=="X" && element.innerHTML==""){document.getElementById(cordonne).innerText ="X";
    turn="O";title.innerText=turn;

}
    else if(turn=="O" && element.innerHTML==""){document.getElementById(cordonne).innerText ="O";
    turn="X";title.innerText=turn;

}
winner()
click++
}