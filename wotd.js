var input = document.getElementById("Winput");
console.log(input);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        //e.preventDefault();
        console.log(Winput.value);
        let input_hash = md5(Winput.value);
        if (input_hash == '8e96c1fb87ac069c2a39f1ed61b10428'){
            document.getElementById('wotd-out').innerHTML = "Nice!";
        }
        else if(input_hash == '8449280a23f8c4fcfb13469f6dc19592'){
            document.getElementById('wotd-out').innerHTML = 'Nice, that is Thursday's Word of the Day!';
        }
        else if(input_hash == '8a54ca8a36b38d50c0180a099a9bbbf0'){
            document.getElementById('wotd-out').innerHTML = "Nice! This was a bonus Word of the Day to get you started (Think of it like Sunday's word of the day)!  There are 5 more to find, one per weekday.";
        }
        else{
            document.getElementById('wotd-out').innerHTML = 'Not a word of the day, try again!';
            //console.log("Not a word of the day!");
        }
    }
});