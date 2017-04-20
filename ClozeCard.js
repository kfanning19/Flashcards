var ClozeCard = function(text, cloze){
	if(!(text.includes(cloze))){
		console.log("Error: " + cloze + " does not appear in " + text);
	};
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");
	this.fulltext = text.replace(cloze, "*" + cloze + "*");
}

module.exports = ClozeCard;