const prompt=require('prompt-sync')({sigint:true}) //initialized prompt
//created a function
const netSalary=()=>{
let basicSalary=prompt("What is the basic salary:")
//deductions
let nhif=parseFloat(prompt('NHIF amount:')) //input the nhif value and convert from string to number
let nssf=parseFloat(prompt ('NSSF amount:')) //input nssf values and convert from syring to number
let personalRelief=2400
let benefits=nhif + nssf + personalRelief
let netPay= basicSalary-benefits //net salary for salaries below 24000

 //calculate payee
if(basicSalary>=24000){
    //for salaries above 24000
   if(basicSalary==24000){
payee=(24000/100)*10
 payWithPayee=basicSalary-payee
  let netPay=payWithPayee-benefits //calculate the netpay
 return `Your netpay is: ${netPay} and payee is: ${payee}` //return neypay and the payee
}
else if(basicSalary>24000 && basicSalary<=32333){
   let payee=Math.floor((basicSalary/100)*25) //calculate payee to the nearest integer
    payWithPayee=basicSalary-payee
    let netPay=payWithPayee-benefits
    return `Your netpay is: ${netPay} and payee is: ${payee}`
 }else if(basicSalary>32333 && basicSalary<=500000){
    let payee=Math.floor((basicSalary/100)*30)
    payWithPayee=basicSalary-payee
    let netPay=payWithPayee-benefits;
    return `Your netpay is: ${netPay} and payee is: ${payee}`

 }else if(basicSalary>500000&& basicSalary<=800000){
    let payee=Math.floor((basicSalary/100)*32.5)
    payWithPayee=basicSalary-payee
    let netPay=payWithPayee-benefits
    return `Your netpay is: ${netPay} and payee is: ${payee}`
 }
}else{
    return `Your netpay is ${netPay}` //netpay that has no payee included
}


}
console.log(netSalary())