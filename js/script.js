let val = document.getElementById('calc-display');
// val.value = "0";

function calculator(num)
{   
    val.value += num
}

function insertDecimal()
{
    if(val.value.indexOf('.') == -1)
    {
        val.value += '.';
    }
}

function operator(opr)
{
    let isOperator = false;
    //last digit of display
    let lastDigit = val.value.slice(val.value.length -1);

    var ops = ["-", "+", "*", "/"];
    //if last digit is an operator then isOperator should be true
    if(ops.indexOf(lastDigit) === -1)
    {
        isOperator = true;
    
    }

    if(isOperator)
    {
        val.value += opr;
    }

    else if(lastDigit === "+" && opr === "-")
    {
        val.value += opr;
    }

    else if(!isOperator)
    {
        let newStr = val.value.slice(0,-1);
        val.value = newStr;
        val.value += opr;
    }

        
    // val.value += opr;






}


function deleteBtn()
{
    var digits = val.value;
    digits = digits.split("");
    digits.splice(digits.length -1,1);
    val.value = digits.join("");

}



function getTotal()
{
    val.value = eval(val.value);

}



function clearAll()
{
    val.value = "";
}


