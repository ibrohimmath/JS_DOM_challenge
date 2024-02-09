function changeCamelCase(word) {
    word = word.split("_").map(w =>  w.toLowerCase());
    for (let i = 1; i < word.length; i++) {
        word[i] = word[i].replace(word[i][0], word[i][0].toUpperCase());            
    }
    return word.join("");
}

const txtArea = document.createElement("textarea");
txtArea.rows = "10";
txtArea.cols = "30";
txtArea.classList += "textarea";

const button = document.createElement("button");
button.classList += "button";
button.innerHTML = "Submit";

document.body.append(txtArea);
document.body.append(button);

button.addEventListener("click", function(){
    const read = txtArea.value;
    txtArea.value = read.split(" ").map(w => changeCamelCase(w)).join(" ");
});