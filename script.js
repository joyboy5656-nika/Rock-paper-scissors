let userscore=0;
let compscore=0;
function user_responce(){
    let user_choice=Number(prompt("enter your choice(1/2/3):\n1.Rock\n2.Paper\n3.Scissor"));
    if( Number.isNaN(user_choice) || user_choice<1 || user_choice>3){
        alert("invalid input!");
        user_responce();
    }
    return user_choice;
}
function comp_responce(){
    let comp_choice=Math.floor(Math.random()*10);
    if(comp_choice<=3){
        return 1;
    }
    else if(comp_choice>3 && comp_choice<=6){
        return 2;
    }
    else{
        return 3;
    }
}
function decision(){
    let comp=comp_responce();
    let user=user_responce();
    let user_score=0;
    let comp_score=0;
    if(comp==user){
        alert("it's a tie");
    }
    else if ((user==1 && comp==3)||(user==2 && comp==1)||(user==3 && comp==2)){
        user_score++;
        alert("YOU WIN AGAINST THE COMPUTER");
    }
    else{
        comp_score++;
        alert("COMPUTER WON AGAINST YOU");
    }
    userscore+=user_score;
    compscore+=comp_score;
}
function final_function(round_no){
    alert("let's start the round no "+round_no);
    decision();
    alert("RESULT:\nyour points:"+userscore+"\ncomputer points:"+compscore);
}
function deision(){
    if(userscore>compscore){
        alert("RESULT:you won the battle yeah!!");
    }
    else if(userscore===compscore){
        alert("RESULT: It's a tie reload to try again");
    }
    else{
        alert("RESULT: you lose better luck next time.");
    }
}
final_function(1);
final_function(2);
final_function(3);
final_function(4);
final_function(5);
deision();
