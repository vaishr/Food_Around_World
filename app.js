//sends get request to flickr endpoint and then add pics to page
function fetchFotos(name) {
    $('#pics').append('<div id="picSpinner" class="container"><img src="/styles/flickr.gif" id="flickerSpinner"><p>Fetching Photos...</p></div>');
	return $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
        tags:  name + ", food",  
        tagmode: "all",
        format: "json"
    })
  //formats response and appends picture links
  .then(function(data){
    var loadedImages = [];
    var loadedCount = 6;
    if (!data.items.length) { 
        noPicsMessage(name); 
        $('#picSpinner').hide();
    }
    if (data.items.length < 6) {
        loadedCount = data.items.length;
    }
    for (var i = 0; i < 6; i++) {
        console.log(data.items[i]);
        $("<img>").load(function(event){ 
            loadedImages.push(data.items[i]);
            if (loadedImages.length === loadedCount) {
                    $('#picSpinner').hide();
            }
        })
        .attr("src", data.items[i].media.m)
        .appendTo("#pics")
        .wrap("<a href=" + data.items[i].link + "></a>");
    }
   });
}

//rounds population numbers for readability
function formatNum(intNum) {
    var intNum = (intNum + "").replace(/(\d)(?=(\d{3})+$)/g, "$1,").split(",");
    return intNum.length > 1 ? (Math.round(parseInt(intNum.join(""), 10) / Math.pow(1000, intNum.length-1)) + " " + ["thousand", "million", "billion"][intNum.length-2]) : intNum[0];
}

//displays message if no pics available for a country
function noPicsMessage(name) {
    var message = "<br><p><i>Sorry, could not fetch any pictures of food from " + name + ".  Try another country :)</i></p>"
    $("#pics").append(message);
}

