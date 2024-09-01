const keys = document.querySelectorAll(".numberBtn");

const display = document.querySelector(".number");
// hello

let count = 0;
let check = false;
let result = 0;
let buffer = 0;
let input = 0;
let operation = "";

for (let key of keys)
{
    key.addEventListener('click', (e) => {

        const keyVal = key.textContent;

        if ("+-*/%=".includes(keyVal))
        {
            if(input == 0)
            {
                result = Number(display.textContent);
                operation = key.textContent;
            }
            else
            {
                buffer = Number(display.textContent);
            }
            count = 0;
            input++;
        }
        else
        {
            if (count == 0)
            {
                display.textContent = key.textContent;
                count++;
            }
            else
            {
                display.textContent = display.textContent + key.textContent;
            }
        }

        if (input > 1)
        {
            switch(operation)
            {
                case "+":
                    result += buffer;
                    break;
                
                case "-":
                    result -= buffer;
                    break;
                
                case "*":
                    result *= buffer;
                    break;
                
                case "/":
                    result /= buffer;
                    break;
                
                case "%":
                    result %= buffer;
                    break;
                
                case "=":
                    result = result;
                    break;
            }

            input--;
            display.textContent = result%1 === 0 ? result : result.toFixed(6);
            operation = key.textContent;
        }
    }); 
}


document.querySelector(".clearBtn").addEventListener('click', (e) => {
    e.preventDefault();
    display.textContent = 0;
    count = 0;
    result=0;
    input=0;
    buffer=0;
})

document.querySelector(".backspace").addEventListener('click', (e) => {
    e.preventDefault();
    const dispVal = display.textContent
    display.textContent = dispVal.substring(0, dispVal.length - 1);
    if (display.textContent == "")
    {
        display.textContent = 0;
    }
})
