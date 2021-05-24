var year =96;

function leapyear(year){
    if((year%100==0 && year%400==0)||(year%100!=0 && year%4==0)){
        console.log(year +" is a leap year");
    }else{ 
        console.log(year+" not a leap year");
        alert("hello")
    }
}leapyear(year);