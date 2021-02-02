let val = document.getElementById('calc-display');

function calculator(num)
{
    val.value += num;

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
    let digits = val.value;
    digits = digits.split("");
    let lastDigit = digits[digits.length -1];
    digits = digits.join("");
    var ops = ["-", "+", "*", "/"];
    if(ops.indexOf(opr) !== -1)
    {
        val.value += opr;
    }

    else
    {
        lastDigit = opr;
    }


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