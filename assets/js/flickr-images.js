/**
 * Created by michaelma on 4/15/17.
 */

/**
 * Function to get images from Flickr
 *
 * @setId The flickr set the images belong to.
 */
function getImgs(setId) {
    var URL = "https://api.flickr.com/services/rest/" +  // Wake up the Flickr API gods.
        "?method=flickr.photosets.getPhotos" +  // Get photo from a photoset. https://www.flickr.com/services/api/flickr.photosets.getPhotos.htm
        "&api_key=4afdfefdc8bbbaee0fb2938f3e0410d0" +  // API key. Get one here: http://www.flickr.com/services/apps/create/apply/
        "&photoset_id=" + setId +  // The set ID.
        "&privacy_filter=1" +  // 1 signifies all public photos.
        "&per_page=20" + // For the sake of this example I am limiting it to 20 photos.
        "&format=json&nojsoncallback=1";  // Er, nothing much to explain here.

    // See the API in action here: https://www.flickr.com/services/api/explore/flickr.photosets.getPhotos
    $.getJSON(URL, function(data){
        $.each(data.photoset.photo, function(i, item){
            // Creating the image URL. Info: https://www.flickr.com/services/api/misc.urls.html
            var img_src = "https://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";
            var img_thumb = $("<img/>").attr("src", img_src).css("width", "300");

            $(img_thumb).appendTo("#flickr-images");

        });
    });
}

$(document).ready(function() {
    getImgs("72157668532570050"); // Call the function!
});