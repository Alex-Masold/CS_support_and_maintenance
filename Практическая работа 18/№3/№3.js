function encryptText(text, step) {
    const words = text.split(' ');
    const encryptedWords = [];
    
    for (let i = step - 1; i < words.length; i += step) {
        encryptedWords.push(words[i]);
    }
    
    return encryptedWords.join(' ');
}
function PrintAnswer()
{
    const originalText = document.getElementById("Origin").textContent;
    const step = 3; // каждое третье слово
    
    const encryptedText = encryptText(originalText, step);
    document.getElementById("Answer").textContent = encryptedText;
}
