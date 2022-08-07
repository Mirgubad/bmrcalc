alert("Welcome To BMR Calculator")
const username = prompt("Enter name");
const userheight=prompt("Enter height with meter");
const userweight=prompt("Enter Weight");

const bmr=userweight/(userheight*2);

        if (bmr<18.5) {
            alert("Underweight");
        }
        else if (bmr<=24.9) {
            alert("Normal");
        }
        else if(bmr<=29.9){
            alert("Overweight");

        }
        else if(bmr<=34.9){
            alert("Obese");
        }
        else if(bmr>=35){
            alert("Extremely Obese");
        }
        
    

