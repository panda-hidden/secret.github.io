var input = document.getElementById("Winput");
console.log(input);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        //e.preventDefault();
        console.log(Winput.value);
        if (Winput.value === "inspector"){
            document.getElementById('wotd-out').innerHTML = 'Nice!';
            console.log("Nice!");
        }
        else{
            document.getElementById('wotd-out').innerHTML = 'Not a word of the day, try again!';
            console.log("Not a word of the day!");
        }
    }
});