document.getElementsByClassName('number_field')[0].addEventListener('keyup', phoneNumberMask);

function phoneNumberMask() {

    if (document.getElementsByClassName('number_field')[0].value.length != 0) {

        
        let phoneNumberLength = document.getElementsByClassName('number_field')[0].value.length;
        let userNumber = document.getElementsByClassName('number_field')[0].value[phoneNumberLength - 1];
        console.log(userNumber);

        if (phoneNumberLength < 18) {
            document.getElementsByClassName('warning')[0].style.visibility = 'hidden';
        }

        if (phoneNumberLength == 1) {

            if (userNumber == '+' || userNumber == '7' || userNumber == '8') {
                document.getElementsByClassName('number_field')[0].value = '+7';
            } else if (userNumber != '+' || userNumber != '7' || userNumber != '8') {
                document.getElementsByClassName('number_field')[0].value = `+7 (${userNumber}`;
            }

        } else if (phoneNumberLength > 1) {
            let pervUserNumber = document.getElementsByClassName('number_field')[0].value[phoneNumberLength - 2];
            console.log(pervUserNumber);
            console.log(phoneNumberLength);

            if (userNumber == '(' || userNumber == ')'){
                let correctNumber = '';

                for (let i = 0; i < phoneNumberLength - 1; i++) {
                    correctNumber += document.getElementsByClassName('number_field')[0].value[i];
                }

                document.getElementsByClassName('number_field')[0].value = correctNumber;
            } else if (phoneNumberLength == 3 && pervUserNumber == '7') {
                document.getElementsByClassName('number_field')[0].value = `+7 (${userNumber}`;
            } else if (phoneNumberLength == 7) {
                document.getElementsByClassName('number_field')[0].value += ')';
            } else if (phoneNumberLength == 9 && userNumber != ' ') {
                let correctNumber = '';

                for (let i = 0; i < phoneNumberLength - 1; i++) {
                    correctNumber += document.getElementsByClassName('number_field')[0].value[i];
                }

                correctNumber += ' ';
                correctNumber += document.getElementsByClassName('number_field')[0].value[phoneNumberLength - 1];
                console.log(correctNumber);

                document.getElementsByClassName('number_field')[0].value = correctNumber;
            } else if(phoneNumberLength == 13 && userNumber != '-') {
                let correctNumber = '';

                for (let i = 0; i < phoneNumberLength - 1; i++) {
                    correctNumber += document.getElementsByClassName('number_field')[0].value[i];
                }

                correctNumber += '-';
                correctNumber += document.getElementsByClassName('number_field')[0].value[phoneNumberLength - 1];
                console.log(correctNumber);

                document.getElementsByClassName('number_field')[0].value = correctNumber;
            } else if (phoneNumberLength == 16 && userNumber != '-') {
                let correctNumber = '';

                for (let i = 0; i < phoneNumberLength - 1; i++) {
                    correctNumber += document.getElementsByClassName('number_field')[0].value[i];
                }

                correctNumber += '-';
                correctNumber += document.getElementsByClassName('number_field')[0].value[phoneNumberLength - 1];
                console.log(correctNumber);

                document.getElementsByClassName('number_field')[0].value = correctNumber;
            } else if (phoneNumberLength == 18) {
                
            } else if (phoneNumberLength > 18) {
                let correctNumber = '';
                document.getElementsByClassName('warning')[0].style.visibility = 'visible';
                for (let i = 0; i < phoneNumberLength - 1; i++) {
                    correctNumber += document.getElementsByClassName('number_field')[0].value[i];
                }
                console.log(correctNumber);

                document.getElementsByClassName('number_field')[0].value = correctNumber;
            }
        }
        
        
    }
    
}