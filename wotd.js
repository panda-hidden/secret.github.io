var input = document.getElementById("Winput");
console.log(input);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        //e.preventDefault();
        console.log(Winput.value);
        if (Winput.value === "inspector"){
            console.log("Nice!");
        }
        else{
            console.log("Not a word of the day!");
        }
    }
});