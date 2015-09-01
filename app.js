var APIkey = "ada57877f1d9ec39d7da7278e9ff0c95";

var fetchFotos = function(name) {
	return $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: name + 'food', 
            format: "json"
        })
		.then(function(data){
            $.each(data.items, function(i,item){
                //append image to the grid, wrap with a link tag so it's clickable
                $("<img/>").attr("src", item.media.m).appendTo("#pics").wrap("<a href=" + item.link + "></a>");
                //if ( i >= 10 ) return false; //display 9 images
            });
        })

	// return $.get("https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=ad02f4ee57e64cbf39e4457af9f0f188&extras=nigeria&format=json&nojsoncallback=1&auth_token=72157655724395674-1828e8c4e2ab3928&api_sig=ee1a2a089fec28c78642267a0ba552c7", name) {
	// 	  $( ".result" ).html( data );
	// 	  alert( "Load was performed." );
};




// Key:
// ada57877f1d9ec39d7da7278e9ff0c95
