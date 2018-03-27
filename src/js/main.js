/*!
	Theme Name: HELLO my sketch is | @hellomysketch : Diseño de productos digitales pixel a pixel.
	Theme URI: http://hellomysketchis.com
	Author: @mishortcut
	Author URI: http://minz.design
	Author Contact: hello@minz.design
	Description: Diseño de productos digitales pixel a pixel.
	Version: 2.0

	Licensed under the MIT license.
	Copyright 2017
*/

var easing = require('./vendor/easing');

var simplezoom = require('./vendor/simplezoom');

var typed = require('./vendor/typed');

var scrollreveal = require('./libs/scrollreveal');

var scrolled = require('./libs/scrolled');

var topbar = require('./libs/topbar');

var hero = require('./libs/hero');

var sticknav = require('./libs/sticknav');

var tipedJS = require('./libs/tipedJS');

var parallax = require('./libs/parallax');


jQuery(document).ready(function($) {

	hero();

	scrolled();
  
	topbar();
	
	sticknav();

	scrollreveal();

	tipedJS();
	
	parallax();

});





