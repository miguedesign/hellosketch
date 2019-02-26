var pageTitles = function(){

	//randomises the page title from a small handful of uninteresting options

	var pagetitles = ["Hello Sketch", "Sketch-MX", "Meetup Sketch CDMX", "Hello"];
	var pickpagetitle = Math.floor(Math.random()*pagetitles.length);

	$(document).attr('title', pagetitles[pickpagetitle]);


}
module.exports = pageTitles;
