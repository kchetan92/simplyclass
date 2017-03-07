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

	function showEntry() {
		var hash = location.hash;
		if(hash === '' && !($(hash).length)) {
			$('.entry').show();
		}	else {
			$('.entry').show();
			$(hash).show();
			$('.entry:not(' + hash + ')').hide();
		}
	}

	if($('.showcase').length) {
		showEntry();
	}

	$(window).on('hashchange', function() {
	  showEntry();
	});

	$.each($('img[data-src]'), function(key, value) {
		$(value).attr('src', $(value).attr('data-src'));
	});
	function highResLoader(imgArray){
		var arr = imgArray;
		$.each(arr, function(key, value) {
			arr[key] = {
				el: arr[key],
				lowRes : true
			}
		});

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
				if(value.lowRes && checkVisible(value.el)) {
					var check = (function(value, key, arr){
						return function(){
							if(checkVisible(value.el)) {
								highResElement(value.el);
								value.lowRes = false;
								console.log('removed, ', value.el.getAttribute('src'));
							}
						}
					})(value);
					setTimeout(check, 150);
				}
			})
		}, 300);
	}
	highResLoader($('img.upgrade'));
})
