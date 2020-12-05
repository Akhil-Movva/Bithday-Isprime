var readVariable = require('readline-sync');
const chalk= require('chalk');
var name= readVariable.question(chalk.yellow("Hello! May I know your name?\n"));

var db = readVariable.question(chalk.green('\nEnter your date of birth in (DD/MM)/(DD-MM)/DD.MM) format :\n'), {
  limit: function(input) {
  const dateFormat = new RegExp(/^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])$/); // Valid IP Address
  return dateFormat.test(input);
},
limitMessage: chalk.red('\nYou have not given your date of birth in (DD/MM)/(DD-MM)/DD.MM) format and/or date entered is not between 1 and 31 and/or month entered is not between 1 and 12. Please check and try again.\n')
});

var day = db.slice(0,2);
day=Number(day);

var month = db.slice(3,db.length);
month=Number(month);

function isPrime(num)
  {
     if(num===1)
        {
          return false;
        }

      else
       {
          var flag=true;
          for(var i=2;i<=Math.trunc(num/2);i++)
           {
            if(num%i===0)
             {
              flag=false;
              break;
             }
           }

          if(flag)
           {    
             return true;
           }

          else
          {
             return false;
          }
       }
    }
  

var temp;

if(((month===4||month==6||month==9||month==11)&&day==31)||(month===2&&(day===30||day===31)))
  {
         console.log(chalk.blue("\n"+db+" can never happen!"));
  }    
                
 else
   {
     temp=isPrime(day);
     if(temp===true)
       {
         console.log(chalk.green("\nYour birthday is a prime number, "+name+"!\nShare this on social media."));
                }
       else
        {
          console.log(chalk.blue("\nYour birthday is not a prime number, "+name+"."));
        }
   }

    

  

    
   



























