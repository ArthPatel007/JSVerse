// Dates
// let myDates = new Date();
// console.log(myDates.toString());
// console.log(myDates.toISOString());
// console.log(myDates.toLocaleString());
// console.log(myDates.toJSON());
// console.log(typeof myDates);

// timestamp

// let  myCreaterd =new Date("01-14-2024")

// let mytimestamp=Date.now();

// console.log(myCreaterd.getTime());

let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getDate());
// console.log(newDate.getMonth());

newDate.toLocaleDateString('default',{
    weekday:"long",
    day:"2-digit",
    
})

console.log(newDate);