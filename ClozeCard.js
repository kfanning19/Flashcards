var ClozeCard = function(text, cloze){
	if(!(text.includes(cloze))){
		console.log("Error: " + cloze + " does not appear in " + text);
	} else if (this instanceof ClozeCard){
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");
	this.fullText = text;
	} else{
		return new ClozeCard(text, cloze);
	}
}

module.exports = ClozeCard;