var input = document.getElementById("Winput");
console.log(input);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        //e.preventDefault();
        console.log(Winput.value);
    }
});