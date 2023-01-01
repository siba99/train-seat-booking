
// To show all the ticket.
str = ``;
for(let i=1;i<=80;i++){
    str= str+ `
    <div class='col-xl-l'  id="${i}" >${i} <br /> ${i*100}</div>
    `
}
// console.log(str);
document.getElementById("maindiv").innerHTML = str;
    var count=1;

//To book tickets
    var booking=(num,Color)=>{
//   console.log("jks");
for(var i=count;i<num;i++){
    var div=document.getElementById(`${i}`);
    div.style.background=`${Color}`   
}
    }
    
    // To show individual ticket with randomcolor.
    function generateRandomColor(){
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);   
        return `#${randColor.toUpperCase()}`
    }
    // console.log(generateRandomColor()); 
    
// Take user input value and book tickets.
var submit=()=>{
        var input1 = document.getElementById("input1");
        var input2 = document.getElementById("input2");
    var num=count+parseInt(input1.value)
        //  console.log(num);
        booking(num,generateRandomColor())
        // console.log();
        count=count+parseInt(input1.value)
    }
