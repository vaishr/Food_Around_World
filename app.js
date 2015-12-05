var fetchFotos = function(name) {
	return $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
        tags: name + 'food',
        format: "json"
    })
  .then(function(data){
    if (!data.items.length) { noPicsMessage(name);};
    $.each(data.items, function(i, item){
        if(i <= 5) {
            $("<img/>").attr("src", item.media.m).appendTo("#pics").wrap("<a href=" + item.link + "></a>");
        }
    })
});
};

function formatNum(intNum) {
  var intNum = (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,').split(",");
  return intNum.length > 1 ? (Math.round(parseInt(intNum.join(""), 10) / Math.pow(1000, intNum.length-1)) + " " + ["thousand", "million", "billion"][intNum.length-2]) : intNum[0];

}

function noPicsMessage(name) {
    var message = "<br><p><i>Sorry, could not fetch any pictures of food from " + name + ".  Try another country :)</i></p>"
    $('#pics').append(message);
}

