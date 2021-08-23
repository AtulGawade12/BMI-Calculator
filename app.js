window.onload = () =>{
    let button = document.querySelector('.btn');
    button.addEventListener('click', calculateBMI);
};
function calculateBMI(){
    let height = parseInt (document.querySelector('.ht').value);
    let weight = parseInt (document.querySelector('.wt').value);
    let result = document.querySelector('.result');
     
    if(height =='' || isNaN(height) || height< 0) {
        result.innerHTML = "Please Enter The Height "
    }
    else if (weight =='' || weight< 0 || isNaN(weight)) {
        result.innerHTML = "Please Enter The Weight "
    }
    else {
        let bmi = (weight/((height*height)/10000)).toFixed(2);
        if (bmi<18.6){
            result.innerHTML = `UNDERWEIGHT : <span> ${bmi} </span>`;
        }
        else if (bmi>=18.6 && bmi < 24.9){
            result.innerHTML = `NORMAL : <span> ${bmi} </span>`;
        }
        else {
            result.innerHTML = `OVERWEIGHT : <span> ${bmi} </span>`;
        }

    }
 
}