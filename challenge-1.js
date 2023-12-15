
//first initialize prompt
const prompt=require('prompt-sync')({sigint:true})

//created a Marks function using const
const Marks=()=>{

    let marks= prompt("What is your marks?")//prompt command
    //the marks should be between 0-100
    let finalMarks=parseInt(marks) //converted marks from string to number
    if(finalMarks<=100 && finalMarks>0){
        if(finalMarks>79){
            return "You got an A"
        }else if(finalMarks>60 && finalMarks<79){
            return "Thats a B"
        }else if(finalMarks>49 && finalMarks<60){
            return "You have a C"
        }else if(finalMarks>40 && finalMarks<49){
            return "It is a D!"
        }else{
            return "E!!"
        }

    }else{
        return "Marks should be between 0-100" /*returned if the marks are greater than 100 or less than 0*/
    }
    
}
console.log(Marks())