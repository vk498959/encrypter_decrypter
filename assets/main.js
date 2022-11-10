//selecting button from dom
const decryptbtn = document.querySelector("#decryptbtn");
const encryptbtn = document.querySelector("#encryptbtn");
var text = "";
const limit = letters.length;

//function for encryption of plain text to cipher text
encryptbtn.addEventListener("click", () => {
    var index = 0;
    var plaintext = document.getElementById("encrypt");
    var encryptkey = Number(document.getElementById("encryptkey").value);
    for (var i = 0; i < plaintext.value.length; i++) {
        index = letters.indexOf(plaintext.value[i]) + encryptkey;
        if (index > limit) {
            while (index > limit) {
                index = index - limit;
            }
        }
        text += letters[index];
    }
    plaintext.value = text;
    text = "";
});


//function for decryption of cipher text to plain text
decryptbtn.addEventListener("click", () => {
    var index = 0;
    const encrypttext = document.getElementById("decrypt");
    const decryptkey = Number(document.getElementById("decryptkey").value);
    for (var i = 0; i < encrypttext.value.length; i++) {
        index = letters.indexOf(encrypttext.value[i]) - decryptkey;
        if (index < 0) {
            while (index < 0) {
                index = index + limit;
            }
        }
        text += letters[index];
    }
    encrypttext.value = text;
    text = "";
});