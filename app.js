//sends get request to flickr endpoint and then add pics to page
function fetchFotos(name) {
	return $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
        tags:  name + ", food",  
        tagmode: "all",
        format: "json"
    })
  //formats response and appends picture links
  .then(function(data){
    if (!data.items.length) { noPicsMessage(name); }
    $.each(data.items, function(i, item){
        if(i <= 5) {
            $("<img/>").attr("src", item.media.m).appendTo("#pics").wrap("<a href=" + item.link + "></a>");
        }
    })
   })
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

