var tipedJS = function () {


	$("#typed").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-strings'),
            typeSpeed: 80,
            backDelay: 500,
            loop: true,
            loopCount: false
        });

	}

module.exports = tipedJS;