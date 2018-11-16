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

// var simplezoom = require('./vendor/simplezoom');

// var typed = require('./vendor/typed');

// var scrollreveal = require('./libs/scrollreveal');

// var scrolled = require('./libs/scrolled');

// var topbar = require('./libs/topbar');

var hero = require('./libs/hero');

// var sticknav = require('./libs/sticknav');

// var tipedJS = require('./libs/tipedJS');

// var parallax = require('./libs/parallax');

var register = require('./libs/register');


jQuery(document).ready(function($) {
	
	setTimeout(function(){
		register();
		hero();
	},2000);

	// scrolled();
  
	// topbar();
	
	// sticknav();

	// scrollreveal();

	// tipedJS();
	
	// parallax();

});





