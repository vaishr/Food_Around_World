var fetchFotos = function(name) {
	return $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: name + 'food',
            format: "json"
        })
		.then(function(data){
            if (!data.items.length) {noPicsMessage(name);};
            $.each(data.items, function(i, item){
                if(i <= 5) {
                console.log("data.items", data.items);
                console.log("data", data);
                $("<img/>").attr("src", item.media.m).appendTo("#pics").wrap("<a href=" + item.link + "></a>");
                }
            })
        });
};

function addCommas(intNum) {
  return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

function noPicsMessage(name) {
     var message = "<br><p><i>Sorry, could not fetch any pictures of food from " + name + ".  Try another country! :)</i></p>"
     $('#pics').append(message);
}

