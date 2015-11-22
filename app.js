var fetchFotos = function(name) {
	return $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: name + 'food',
            format: "json"
        })
		.then(function(data){
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

