var input = document.getElementById("Winput");
console.log(input);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        console.log(Winput.value);
        let input_hash = md5(Winput.value);
        if (input_hash == 'b637af78ada000a39023b4ead9db041a')
        {
            //:calendar:
            code_piece = XORwArray(Winput.value,['39', '1', '13', '9', '20', '4', '69']);
            document.getElementById('wotd-out').innerHTML = "Nice, that is Monday's Word of the Day! " + code_piece;
        }
        else if (input_hash == '8e96c1fb87ac069c2a39f1ed61b10428'){
            //Get it straight from the source!
            code_piece = XORwArray(Winput.value,['60', '33', '24', '23', '23', '0', '0', '10', '25']);
            document.getElementById('wotd-out').innerHTML = "Nice, that is Tuesday's Word of the Day! " + code_piece;
        }
        else if (input_hash == 'fd661d6be65eecb8a8866f6832b24a30'){
            // It's literally right in front of you.
            code_piece = XORwArray(Winput.value,['35', '13', '63', '10', '35', '55', '12', '83', '77']);
            document.getElementById('wotd-out').innerHTML = "Nice, that is Wednesday's Word of the Day! " + code_piece;
        }
        else if(input_hash == '8449280a23f8c4fcfb13469f6dc19592'){
            // This one is actually quite hard to find, smire :)
            // Note: Words of the day can be proper nouns and should be capitalized!
            code_piece = XORwArray(Winput.value,['41', '12', '14', '32', '12', '23', '25', '73']);
            document.getElementById('wotd-out').innerHTML = "Nice, that is Thursday's Word of the Day! " + code_piece;
        }
        else if(input_hash == 'c34867fa18588ae93bee8660cb1f2aec'){
            // What if it were gray and they were called greets?
            code_piece = XORwArray(Winput.value,['3', '10', '33', '7', '3', '95', '84']);
            document.getElementById('wotd-out').innerHTML = "Nice, that is Friday's Word of the Day! " + code_piece;
        }
        else if(input_hash == '8a54ca8a36b38d50c0180a099a9bbbf0'){
            document.getElementById('wotd-out').innerHTML = "Nice! This was a bonus Word of the Day to get you started (Think of it like Sunday's word of the day)!  There are 5 more to find, one per weekday.";
        }
        else{
            document.getElementById('wotd-out').innerHTML = "Not a word of the day, try again!";
            //console.log("Not a word of the day!");
        }
    }
});

//The below functions are used so that you guys can't cheat the secret message by inspecting elements and looking at the javascript.  
//I XOR the secret message w/ the Word of the Days so that the secret message is encrypted, and then when its time to print the secret message on the screen
// I XOR the encrypted message with the word of the days so that the secret message is decrypted for you guys to view. 
// Basically don't worry about the below functions, if I hosted my own server I could avoid all this shit because i could hide the secret message on the server
// but idk how to host a server and it costs money lol

function XOR(a, b) {
    console.log("In the function " + a + " " + b);
    const res = new Array(a.length);
    i = a.length - 1;
    while (i >= 0){
        console.log(a[i] + " " + a.charCodeAt(i));
        console.log(b[i] + " " + b.charCodeAt(i));
        console.log("Combining: " + (a.charCodeAt(i) ^ b.charCodeAt(i)).toString());
        console.log("res: " + res);
        res[i] = (a.charCodeAt(i) ^ b.charCodeAt(i)).toString();
        i--;
    }
    console.log("res: " + res);
    return res;
}

function XORwArray(a, b) {
    i = a.length - 1;
    var res = "";
    while (i >= 0){
        res = String.fromCharCode(a.charCodeAt(i)^b[i]) + res;
        i--;
    }
    return res;
}