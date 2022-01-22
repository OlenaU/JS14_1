let rating = 0;
const deduct = 12550;

function caltax()
{
let income = document.getElementById('xvar').value;
let incomeded = income - deduct;



let incomearr = [9950, 40525, 86375, 164926, 209426, 523601];
let taxarr = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];

//86375-995-3669-7898 

 
for (let i = 0; i <= incomearr.length-1; i++)
    {
        
       if (income <= deduct)
            {   
                console.log(`0$`);
                Taxresult.innerHTML = (`0$`);            
            }

        else if
            
                (income > deduct && incomeded <= incomearr[0])

                { let multiply = incomeded * taxarr[0]; //10% * taxarr[0]; //10%
                    console.log(multiply);
                    let total = income - multiply;
                    Taxresult.innerHTML = (multiply);
                    Totalincome.innerHTML = (total);
                    return;
                }

               else if 
                   (incomeded >= incomearr[0] && incomeded <= incomearr[1]) // 9951-40525
                {    
                   let multiply = incomearr[0]*taxarr[0] + (incomeded - incomearr[0])*taxarr[1]; //995 + 12% 
                   console.log(multiply);  
                   let total = income - multiply;
                   Taxresult.innerHTML = (multiply);
                   Totalincome.innerHTML = (total);
                   
                }
            
                else if
                       
                    (incomeded >= incomearr[1] && incomeded <= incomearr[2]) // 40526-86375
                {
                   let multiply =  incomearr[0]*taxarr[0] + (incomeded - incomearr[0])*taxarr[1] +  (incomeded - incomearr[1])*taxarr[2] ;//995+3669 (or4664$) +22% 10087
                   console.log(multiply);  
                   let total = income - multiply;
                   Taxresult.innerHTML = (multiply);
                   Totalincome.innerHTML = (total);
          

                }
                else if
                
                (incomeded >= incomearr[2] && incomeded <= incomearr[3])    //86376 -164926
                {
                let multiply =  14751 + (incomeded - incomearr[2])*taxarr[3] // (10087+4664) or 14751 + 24%  
                let total = income - multiply;
                console.log(multiply);
                Taxresult.innerHTML = (multiply);
                Totalincome.innerHTML = (total);

            }
            else if
                
                (incomeded >= incomearr[3] && incomeded <= incomearr[4])    //164927-209426
                {
                let multiply =  33603 + (incomeded - incomearr[3])*taxarr[4] // 33603+32%
                let total = income - multiply;
                console.log(multiply);
                Taxresult.innerHTML = (multiply);
                Totalincome.innerHTML = (total);

            }

            else if
                
            (incomeded >= incomearr[4] && incomeded <= incomearr[5])    //209426-523601
            {
            let multiply =  47843 + (incomeded - incomearr[4])*taxarr[5] // 47843+35%
            let total = income - multiply;
            console.log(multiply);
            Taxresult.innerHTML = (multiply);
            Totalincome.innerHTML = (total);

        }
        else 
                
            (incomeded >= incomearr[5])    //523602 and higher
            {
            let multiply =  157804.25 + (incomeded - incomearr[5])*taxarr[6] // 157804.25+37%
            let total = income - multiply;
            console.log(multiply);
            Taxresult.innerHTML = (multiply);
            Totalincome.innerHTML = (total);

        }

              
    }
}

   /* console.log(`ваш налог ${caltax}`);*/


/*console.log(Array.from(taxarr, x => income * x));*/
