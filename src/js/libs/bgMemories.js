var bgMemories = function(){

	//randomises images for backlog memories
	
	

	url = "./static/img/backlog/",
	bgMemories = ["000", "001", "002", "003", "004"],
	ext = ".jpg",
	pickbgMemorie = Math.floor(Math.random()*bgMemories.length);

		
	$('.bg-random').css('background-image', "url("+url+bgMemories[pickbgMemorie]+ext+")");
	


}
module.exports = bgMemories;