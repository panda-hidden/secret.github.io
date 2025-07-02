var input = document.getElementById("Winput");
console.log(input);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        //e.preventDefault();
        // NEED TO ADD FAKE WORDS SO THEY CANT BE DECODED OR MAYBE ADD AN ENCRYPTION USING THE WORD OF THE DAY ITSELF
        console.log(Winput.value);
        let input_hash = md5(Winput.value);
        if (input_hash == 'b637af78ada000a39023b4ead9db041a')
        {
            document.getElementById('wotd-out').innerHTML = "Nice, that is Monday's Word of the Day!";
        }
        else if (input_hash == '8e96c1fb87ac069c2a39f1ed61b10428'){
            document.getElementById('wotd-out').innerHTML = "Nice, that is Tuesday's Word of the Day!";
        }
        else if (input_hash == 'fd661d6be65eecb8a8866f6832b24a30'){
            document.getElementById('wotd-out').innerHTML = "Nice, that is Wednesday's Word of the Day!";
        }
        else if(input_hash == '8449280a23f8c4fcfb13469f6dc19592'){
            document.getElementById('wotd-out').innerHTML = "Nice, that is Thursday's Word of the Day!";
        }
        else if(input_hash == 'c34867fa18588ae93bee8660cb1f2aec'){
            document.getElementById('wotd-out').innerHTML = "Nice, that is Friday's Word of the Day!";
        }
        else if(input_hash == '8a54ca8a36b38d50c0180a099a9bbbf0'){
            test_out = XOR(Winput.value, "testing12");
            console.log(test_out);
            document.getElementById('wotd-out').innerHTML = "Nice! This was a bonus Word of the Day to get you started (Think of it like Sunday's word of the day)!  There are 5 more to find, one per weekday.";
        }
        else{
            document.getElementById('wotd-out').innerHTML = "Not a word of the day, try again!";
            //console.log("Not a word of the day!");
        }
    }
});

function XOR(a, b) {
    console.log("In the function " + a + " " + b);
    var res = "",
    i = a.length,
    j = b.length;
    while (i-->0 && j-->0)
        console.log(a[i] + " " + a.charCodeAt(i));
        console.log(b[j] + " " + b.charCodeAt(j));
        console.log("Combining: " + (a.ctharCodeAt(i) ^ b.charCodeAt(j)).toString());
        console.log("res: " + res);
        res = (a.charCodeAt(i) ^ b.charCodeAt(j)).toString() + res;
    console.log("res: " + res);
    return res;
}