var fetchFotos = function(name) {
	return $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: name + 'food',
            format: "json"
        })
		.then(function(data){
            $.each(data.items, function(i, item){
                if(i <= 8) {
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



// Key:
// ada57877f1d9ec39d7da7278e9ff0c95
