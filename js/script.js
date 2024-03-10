let buttons = document.getElementsByTagName('button');

//assign onClickButton function to each button
for(let button of buttons){
    button.onclick = onClickButton;
}

//function handling click event e as parameter
function onClickButton(e){
    let btn = e.target || e.srcElement; //getting element when clicked event
    let action = document.getElementById(btn.id).innerHTML; //get & holds button text
    let res = document.getElementById('res');

    switch(action) {
        case('C'):
            res.innerHTML = '';
            break;
        case('='):
            let resValue = res.innerHTML; //getting current value expression from res eg: 100+001
            let binaryToDecimal = /(\d+)/g; //regex expression to get binary to decimal value

            //replacing binary value into their decimal using regex
            resValue = resValue.replace(binaryToDecimal, function(match){
                return parseInt(match, 2);
            });

            //eval = do artihmetic operation in decimal according to operator in expression
            res.innerHTML = eval(resValue).toString(2);
            break;
        default:
            //getting value of buttons and concat then into result
            res.innerHTML += action;
            break;

    }
}

