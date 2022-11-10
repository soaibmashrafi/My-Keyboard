
document.getElementById('words').addEventListener('click', function(event){
    // console.log(event.target.innerText);
    const allWords = event.target.innerText;

    const typedWords = document.getElementById('message');
    const previousWord = typedWords.value;
    const newWord = previousWord + allWords;
    typedWords.value = newWord;
})
