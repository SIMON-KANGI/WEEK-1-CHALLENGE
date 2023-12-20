
const prompt=require('prompt-sync')({sigint:true}) //initialized prompt
// a function to ho  //initial points
function speedDetector(){
    let speed=prompt('what is your speed:')
    let maxSpeed=70;
    let points=0;
    if(speed<=70){
   return `OK  and demerit points is ${points}`
}else if(speed>70){
    let extraSpeed= speed-maxSpeed //calculate the amount of speed above the limit
    let pointsGotten=Math.floor(extraSpeed/5); //divide by five then covert the answer to the nearest integer
    points+=pointsGotten //calculates the number of points
    if(points>=12){
        return "You points are too high. License suspended!" // if points are equal to 12 or higher
    }else{
        return `your points are ${points}`
    }
}
}


console.log(speedDetector())