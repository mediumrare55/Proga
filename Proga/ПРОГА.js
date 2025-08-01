console.warn(2+2);
function letMyName(Anna) {
    console.log("Кто я? Анна или "+Anna+"?");
}
letMyName("Мирон");

for (let i = 1; i<=10; i++) {
    if (i%2==0){
        console.log(i)
    }
}



document.addEventListener("click",checkForm);

function checkForm(){
    let passw=document.getElementById("AGE").value;
    if (passw=="qwerty"){
        document.getElementById("answerr").style.opacity="100%";
    } else{
        console.error("NEVERNO NAVERNO");
    }
}




