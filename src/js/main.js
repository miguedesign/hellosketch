/*!
	Theme Name: HELLO my sketch is | @hellomysketch : Diseño de productos digitales pixel a pixel.
	Theme URI: http://hellomysketchis.com
	Author: @elnodos
	Author URI: http://migue.design
	Author Contact: hello@migue.design
	Description: Diseño de productos digitales pixel a pixel.
	Version: 2.0

	Licensed under the MIT license.
	Copyright 2017
*/

var easing = require('./vendor/easing');

var register = require('./libs/register');

var pageTitles = require('./libs/pageTitles');
var bgMemories = require('./libs/bgMemories');


jQuery(document).ready(function($) {
	
	register();
	pageTitles();
	bgMemories();


	$('.Cta')
	.mouseenter(function(){
		$(this).parents('section').children('.bg-full').addClass('is-hover');
	})
	.mouseleave(function(){
		$(this).parents('section').children('.bg-full').removeClass('is-hover');
	});



});





