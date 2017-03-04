$(document).foundation();
console.log('Like what you see here? Contact Chetan : kchetan.com, k.chetan92@gmail.com');
$(document).imagesLoaded()
	.done(function(){
		var hash = window.location.hash;
		if(hash) {
			window.location = hash;
		}
	});
$(document).ready(function(){
	$.each($('img[data-src]'), function(key, value) {
		$(value).attr('src', $(value).attr('data-src'));
	});

	function highResLoader(imgArray){
		var arr = imgArray;
		var windowHeight = window.innerHeight;
		function checkVisible(element) {
			if(!element) {
				return false;
			}
			var positions = element.getBoundingClientRect();
			var a = positions.top > 0,
				b = positions.bottom > 0;

			if(a === b) {
				if(a && b) {
					if(positions.top < windowHeight) {
						return true;
					}	else {
						return false;
					}
				}
				
				if( element.height > windowHeight ) {
					return false
				}	else {
					return true;
				}
			}	else {
				return true;
			}
		}
		function highResElement(element) {
			var src = element.getAttribute('src');
			if(src.indexOf('img_small') > -1) {
				element.setAttribute('src', src.replace('img_small', 'img'));
			}
		}
		setInterval(function(){
			$.each(arr, function(key, value){
				if(checkVisible(value)) {
					
					var check = (function(value){
						return function(){
							if(checkVisible(value)) {
								highResElement(value);
								console.log('removed, ', value.getAttribute('src'));
							}
						}
					})(value);
					setTimeout(check, 200);
				}
			})
		}, 500);
	}

	highResLoader($('img.upgrade'));
})
