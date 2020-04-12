function movies() 
{
     var theImages = [{
        src: "http://alliswall.com/file/8446/1920x1200/crop/thor_the_dark_world-_official_poster.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://alliswall.com/file/8134/1920x1200/crop/walking_with_dinosaurs_hd_official_poster.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://alliswall.com/file/3278/1920x1200/crop/ripd-cover-art.jpg",
        width: "240",
        height: "160"
    },{
        src: "http://alliswall.com/file/1593/1920x1200/crop/world-war-z-cover-art.jpg",
        width: "240",
        height: "160"
    },{
        src: "http://alliswall.com/file/1968/1920x1200/crop/car-from-fast-and-furious.jpg",
        width: "240",
        height: "160"
    },{
        src: "http://alliswall.com/file/1726/1920x1200/crop/the-bad-spider-man-from-the-movie-the-amazing-spider-man-.jpg",
        width: "240",
        height: "160"
    },{
        src: "http://alliswall.com/file/2793/1920x1200/crop/despicable-me-2-cover-art.jpg",
        width: "240",
        height: "160"
    },{
        src: "http://alliswall.com/file/3296/1920x1200/crop/elysium-cover-art.jpg",
        width: "240",
        height: "160"
    },{
        src: "http://alliswall.com/file/10657/1920x1200/crop/300_rise_of_an_empire_2014_wallpaper.jpg",
        width: "240",
        height: "160"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var imgReplace = document.getElementsByClassName("my_img")[0];
imgReplace.src = newImage.src;
imgReplace.width = newImage.width;
imgReplace.height = newImage.height;
}
