document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    if(thumbnailElement){
        thumbnailElement.addEventListener("click", function() {
            thumbnailElement.className = "";
            if (thumbnailElement.className == "") {
                // write here the code that will execute if the image is big
                thumbnailElement.addEventListener("click", function() {
                    thumbnailElement.className = "small";
                });
            }
          });
      }
});