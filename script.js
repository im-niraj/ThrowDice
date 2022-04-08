document.querySelector('#roll').addEventListener('click', rollDice);
var winner = document.querySelector('#winner');
var member1 = document.querySelector('#member-1');
var member2 = document.querySelector('#member-2');
var member3 = document.querySelector('#member-3');


function rollDice(){
   var result1 =  Math.floor(Math.random() * 6)+1;
   var result2 =  Math.floor(Math.random() * 6)+1;
   var result3 =  Math.floor(Math.random() * 6)+1;
   member1.innerText = result1;
   member2.innerText = result2;
   member3.innerText = result3;
   if(result1 === result2 && result1 === result3){
        member1.style.backgroundColor = 'blue';
        member2.style.backgroundColor = 'blue';
        member3.style.backgroundColor = 'blue';
        member2.style.color = 'white';
        member1.style.color = 'white';
        member3.style.color = 'white';
        winner.textContent = 'Draw';
   }
   else if(result1 === result2){
        member1.style.backgroundColor = 'blue';
        member2.style.backgroundColor = 'blue';
        member3.style.backgroundColor = 'rgb(248, 245, 245)';
        member3.style.color = 'black';
        member2.style.color = 'white';
        member1.style.color = 'white';
        winner.textContent = 'Draw';
   }
   else if(result1 === result3){
        member1.style.backgroundColor = 'blue';
        member3.style.backgroundColor = 'blue';
        member2.style.backgroundColor = 'rgb(248, 245, 245)';
        member2.style.color = 'black';
        member3.style.color = 'white';
        member1.style.color = 'white';
        winner.textContent = 'Draw';
   }
   else if(result3 === result2){
        member3.style.backgroundColor = 'blue';
        member2.style.backgroundColor = 'blue';
        member1.style.backgroundColor = 'rgb(248, 245, 245)';
        member1.style.color = 'black';
        member2.style.color = 'white';
        member3.style.color = 'white';
        winner.textContent = 'Draw';
   }

   else if(result1 > result2 && result1 > result3){

        if(result2 > result3){
            member2.style.backgroundColor = 'yellow';
            member3.style.backgroundColor = 'red';
            member2.style.color = 'black';
            member3.style.color = 'black';
        }
        else{
            member3.style.backgroundColor = 'yellow';
            member2.style.backgroundColor = 'red';
            member2.style.color = 'black';
            member3.style.color = 'black';
        }
        member1.style.backgroundColor = 'green';
        member1.style.color = 'black';
        winner.textContent = 'Winner - Member A';
   }
   else if(result2 > result3 && result2 > result1){
       if(result3 > result1){
           member3.style.backgroundColor = 'yellow';
           member1.style.backgroundColor = 'red';
           member1.style.color = 'black';
           member3.style.color = 'black';
       }
       else{
           member1.style.backgroundColor = 'yellow';
           member3.style.backgroundColor = 'red';
           member1.style.color = 'black';
           member3.style.color = 'black';
       }
       member2.style.backgroundColor = 'green';
       member2.style.color = 'black';
       winner.textContent = 'Winner - Member B';
   }
   else{
        if(result2 > result1){
           member2.style.backgroundColor = 'yellow';
           member1.style.backgroundColor = 'red';
           member2.style.color = 'black';
           member1.style.color = 'black';
        }
        else{
            member1.style.backgroundColor = 'yellow';
            member2.style.backgroundColor = 'red';
            member2.style.color = 'black';
            member1.style.color = 'black';
        }
        member3.style.backgroundColor = 'green';
        member3.style.color = 'black';
        winner.textContent = 'Winner - Member C';
   }
}
