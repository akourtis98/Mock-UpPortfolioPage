$(document).ready(function(){$('#aboutbtn').click(function(){var page=$("html, body"); page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){page.stop();}); page.animate({scrollTop : $('#about').position().top}, 'slow'), function(){page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");}; return false;}); $('#portfoliobtn').click(function(){var page=$("html, body"); page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){page.stop();}); page.animate({scrollTop : $('#portfolio').position().top}, 'slow'), function(){page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");}; return false;}); $('#contactbtn').click(function(){var page=$("html, body"); page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){page.stop();}); page.animate({scrollTop : $('#contact').position().top}, 'slow'), function(){page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");}; return false;}); $('#alexkbtn').click(function(){var page=$("html, body"); page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){page.stop();}); page.animate({scrollTop : $('#alexkbtn').position().top}, 'slow'), function(){page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");}; return false;});});