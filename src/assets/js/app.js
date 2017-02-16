$(document).foundation();
console.log('Like what you see here? Contact Chetan : kchetan.com, k.chetan92@gmail.com');
$(document).imagesLoaded()
	.done(function(){
		var hash = window.location.hash;
		if(hash) {
			window.location = hash;
		}
	});
