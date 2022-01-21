
/*const tax1 = 0.1;
const tax2 = 0.12;
const tax3 = 0.22;
const tax4 = 0.24;
const tax5 = 0.32;
const tax6 = 0.35;
const tax7 = 0.37;*/

let rating = 0;
const deduct = 12550;
function caltax()
{
let income = document.getElementById('xvar').value - deduct;
console.log(income);

let incomearr = [9950, 40525, 86375, 164926, 209426, 523601];
let taxarr = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];


/*console.log(Array.from(taxarr, x => income * x));*/
 
for (let i = 0; i <= incomearr.length-1; i++)
    {
        
       if (income <= 9950)
            {   let multiply = income*taxarr[0];
                console.log(multiply);
                return;
            }
    
            else if
            
                (income >= 9951 && income <= 40250)
                {
                    let multiply = incomearr[0]*taxarr[0] + (income - incomearr[0])*taxarr[1];
                    console.log(multiply);

                }
            
              
    }
   /* console.log(`ваш налог ${caltax}`);*/
}



/*for (let i=0; i<arr.length; i++);*/