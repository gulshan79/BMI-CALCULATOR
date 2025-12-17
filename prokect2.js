// const e = require("cors");

const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const Weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('#result')

    //checking height and weight condition here 

    let bMI; 
    if(isNaN(height) || height <= 0){
       result.innerHTML = `Please Give a valid height ${height}` ;
    }
    else if(isNaN(Weight) || Weight <= 0){
       result.innerHTML = `Please Give a valid weight ${Weight}` ;
    }
    else{
      bMI =  (Weight/((height*height)/10000)).toFixed(2);

    //   show the result
    // result.innerHTML = `<span>${bMI} </span>`;

    }
    //  checking BMI GUIDE condition here 

     if (bMI < 18.6) {
        result.innerHTML = `Your BMI is ${bMI} (Under Weight)`;
    }
    else if (bMI >= 18.6 && bMI <= 24.9) {
        result.innerHTML = `Your BMI is ${bMI} (Normal Range)`;
    }
    else {
        result.innerHTML = `Your BMI is ${bMI} (Over Weight)`;
    }
     
});


