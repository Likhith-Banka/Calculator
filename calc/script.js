
function Calculate(){  
let input = document.querySelector('.input-box');
let buttons = document.querySelectorAll('button');
let string='';
let lastChar='';
buttons.forEach((button) =>{
    button.addEventListener('click',(event)=>{
          const char = event.target.innerHTML;
        if(char === '='){
        try{
            string = eval(string);
            input.value = string;
        }
        catch{
            input.value= 'ERROR';
            string='';
          }
        }
        else if(char === 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else if(char === 'AC'){
            string='';
            input.value = string;
        }
        else{
            if(isOperator(lastChar) && isOperator(char)){
                string = string.substring(0,string.length-1)+char;
            }
            else{
                string += char;
            }
            input.value = string;
         }
       lastChar = char;
    });
});
}
function isOperator(char){
    if(char === '%' || char === '+' || char === '-' || char === '/' || char ==='*') return true;
    else false;
}

document.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        const input = document.querySelector('.input-box');
        try{
            input.value = eval(input.value);
        }
        catch{
            input.value = 'ERROR';
        }
    }
});

Calculate();