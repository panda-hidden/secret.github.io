var input = document.getElementById("Winput");
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        //e.preventDefault();
        console.log(Winput.value);
    }
});