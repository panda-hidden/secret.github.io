var input = document.getElementById("Winput");
console.log(input);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        //e.preventDefault();
        console.log(Winput.value);
        let input_hash = md5(Winput.value);
        if (input_hash == '8e96c1fb87ac069c2a39f1ed61b10428'){
            document.getElementById('wotd-out').innerHTML = 'Nice!';
        }
        else{
            document.getElementById('wotd-out').innerHTML = 'Not a word of the day, try again!';
            //console.log("Not a word of the day!");
        }
    }
});