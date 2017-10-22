function ClozeCard(text, cloze) {
    if (this instanceof ClozeCard) {
        this.fullText = text;
        this.cloze = cloze;

        // Convert the incoming strings to lower case
        var textToLower = text.toLowerCase();
        var clozeToLower = cloze.toLowerCase();

        // Confirm that the cloze statement appears within the complete text
        if (!textToLower.includes(clozeToLower)) {
            console.log('ERROR: The text < ' + cloze + ' > does not appear in the full text. No card can be created');
            return;
        }
        else {
            this.partial = text.replace(cloze, '...');
        }
    } else {
        return new ClozeCard(text, cloze);
    }
}

// ClozeCard.prototype.checkCloze = function() {
//     if ((this.fullText).includes(cloze)){
//         this.partial = text.replace(cloze, "...");
//     }
//     else {
//         console.log("Oops, it doesn't look like that phrase is part of the fullText!")
//     }
// }

module.exports = ClozeCard; 