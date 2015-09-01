var APIkey = "ada57877f1d9ec39d7da7278e9ff0c95";

var fetchFotos = function(name) {
	return $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: name, 
            format: "json"
        })
		.then(function(data){
            $.each(data.items, function(i,item){
                //append image to the grid, wrap with a link tag so it's clickable
                $("<img/>").attr("src", item.media.m).appendTo("#pics").wrap("<a href=" + item.link + "></a>");
                if ( i >= 10 ) return false; //display 9 images
            });
        })
}




// Key:
// ada57877f1d9ec39d7da7278e9ff0c95
