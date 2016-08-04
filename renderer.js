// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
//console.log(keys.length);

for(var count = 0; count < keys.length; count++) {
    keys[count].onclick = function(e) {
        var inputBox = document.querySelector('.screen');
        var inputBoxVal = inputBox.innerHTML;
        var clickedButtonVal = this.innerHTML;
        var lastCharacterOfInput = inputBoxVal.slice(-1);
        
        if (clickedButtonVal == '←') {
            inputBox.innerHTML = inputBoxVal.slice(0,-1);
        } else if (clickedButtonVal == 'CE') {
            inputBox.innerHTML = '';
            this.innerHTML == '←';
        } 
        else if (clickedButtonVal == '=') {
            //console.log(inputBoxVal);
            if ($.inArray(lastCharacterOfInput, operators) != -1) {
                inputBoxVal = inputBoxVal.slice(0,-1);
            }
            inputBoxVal = inputBoxVal.replace(/x/g, '*').replace(/÷/g, '/');
            inputBox.innerHTML = eval(inputBoxVal);
            $('#clear').html('CE');
        } else if (($.inArray(lastCharacterOfInput, operators) != -1) && ($.inArray(clickedButtonVal, operators) != -1)) { 
            if (lastCharacterOfInput != clickedButtonVal ) {
                inputBox.innerHTML = inputBoxVal.slice(0,-1) + clickedButtonVal;
            }
        } else {
            inputBox.innerHTML += this.innerHTML;
            if ($('#clear').text() == 'CE') {
                $('#clear').html('←');
            }
        }
    }
}
