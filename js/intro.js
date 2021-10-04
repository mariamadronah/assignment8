//print age and name 5 times using a function
function getmyage(yearofbirth){
    let currentyear = new Date().getFullYear();
    // console.log(currentyear);
    myage = currentyear - yearofbirth;
    return myage
}

function name_ageDynamic(name,yearofbirth){
    let age = getmyage(yearofbirth);
    text= "Your name is "  + name +  " and you are aged "   +age;
    console.log(text);
}
name_ageDynamic("mariam", 2000)
name_ageDynamic("winnie", 1900)
name_ageDynamic("rita", 1965)
name_ageDynamic("brian", 1986)
name_ageDynamic("roger", 1994)



//function that takes another function a parameter and returns result of calling the parameter function
function sign(){
    var a=1,b=3;
    return a+b;
}
function signed()



// arrow function that has 2 local variables concatenated together and assign the result to a new variable and function call shud print to the console
let mine = (me, you) => {
    // return a+b;
    let name = me +  you;
    console.log(name);
}
mine(7,2)
mine("mariam", "bless");

//write i love uganda 19 times using a loop
let times=18;
for(let num =0; num<=times; num++){
    console.log("i love uganda");
}