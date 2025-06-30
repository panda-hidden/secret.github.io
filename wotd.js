var input = document.getElementById("Winput");
input.addEventListener("keypress", function(event2) {
    if (event2.key === "Enter") {
        event2.preventDefault();
        console.log(Winput.value);
    }
});
