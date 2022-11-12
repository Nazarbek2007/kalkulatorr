var numbers = document.querySelectorAll(".header__num-bers"),
inputt = document.querySelector(".inputt"),
sym = document.querySelectorAll(".header__calcY-symb"),
clearr = document.querySelector(".header__cleaner"),
prosentt = document.querySelector(".header__protsent"),
ravno = document.querySelector(".header__calc-res");

var a = "",b = "",c = "", d="", p = "";

clearr.addEventListener("click", function () {
    inputt.value = "";
    a = "";
    b = "";
    c = "";
    d = "";
    p = "";
})

prosentt.addEventListener("click", function () {
    p = "%";
    inputt.value = p;
})
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        a = a + this.innerHTML;
        inputt.value = a;
    })
}
for (let r = 0; r < sym.length; r++) {
    sym[r].addEventListener("click", function(){
        c = this.innerHTML;
        b = a; // пойми зачем я это сделал
        a = ""; 
        inputt.value = c; 
    })
}




// if(inputt.value != p ){
//     Ravno.addEventListener("click", function () {
//         switch (c) {
//             case "+":
//                 d = parseInt(b) + parseInt(a);
//                 inputt.value = d; //дальше сам я смотрю 
//                 break;
//             case "-":
//                 d = parseInt(b) - parseInt(a);
//                 inputt.value = d; 
//                 break;
//             case "x":
//                 d = parseInt(b) * parseInt(a);
//                 inputt.value = d; 
//                 break;
//             case "÷":
//                 d = parseInt(b) / parseInt(a);
//                 inputt.value = d; 
//                 break;
//             /* case "%":
//                 d = parseInt(b) - (parseInt(b) / 100 * parseInt(a)) */
            
//             default:
//                 break;
//         }
    
       
//     })
//     } else {
    
    
//     Ravno.addEventListener("click", function () {
//         switch (c) {
//             case "+":
//                 d = parseInt(b) + ( parseInt(b) / 100 * parseInt(a)) ;
//                 inputt.value = d;  
//                 break;
//             case "-":
//                 d = parseInt(b) - ( parseInt(b) / 100 * parseInt(a));
//                 inputt.value = d;  
//                 break;
//             case "x":
//                 d = parseInt(b) * ( parseInt(b) / 100 * parseInt(a));
//                 inputt.value = d; 
//                 break;
//             case "÷":
//                 d = parseInt(b) / ( parseInt(b) / 100 * parseInt(a)); 
//                 inputt.value = d; 
//                 break;
//             /* case "%":
//                 d = parseInt(b) - (parseInt(b) / 100 * parseInt(a)) */
            
//             default:
//                 break;
//         }
//     })
// }


//все

    ravno.addEventListener('click', function () {
        if (inputt.value != p ) {
            switch (c) {
                case "+":
                    d = parseInt(b) + parseInt(a);
                    inputt.value = d;
                    break;
                case "-":
                    d = parseInt(b) - parseInt(a);
                    inputt.value = d;
                    break;
                case "x":
                    d = parseInt(b) * parseInt(a);
                    inputt.value = d;
                    break;
                case "÷":
                    d = parseInt(b) / parseInt(a);
                    inputt.value = d;
                    break;
            } 
        }
        else{
            switch (c) {
                case "+":
                    d = parseInt(b) + (parseInt(b) / 100 * parseInt(a));
                    inputt.value = d;
                    break;
                case "-":
                    d = parseInt(b) - (parseInt(b) / 100 * parseInt(a));
                    inputt.value = d;
                    break;
                case "x":
                    d = parseInt(b) * (parseInt(b) / 100 * parseInt(a));
                    inputt.value = d;
                    break;
                case "÷":
                    d = parseInt(b) / (parseInt(b) / 100 * parseInt(a));
                    inputt.value = d;
                    break;
            }
        }
         
    })     
    
    

