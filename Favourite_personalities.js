function favourite_personalities() 
{
     var theImages = [{
        src:"https://www.mapsofindia.com/ci-moi-images/my-india/2014/12/narendra-modi.jpg",
        width: "240",
        height: "160"
    }, {
        src: "https://www.mapsofindia.com/ci-moi-images/my-india/2014/12/amit-shah.jpg",
        width: "240",
        height: "160"
    }, {
        src: "https://www.mapsofindia.com/ci-moi-images/my-india/2014/12/sundar-pichai.jpg",
        width: "240",
        height: "160"
    },{
	src:"https://www.mapsofindia.com/ci-moi-images/my-india/2014/12/m-s-dhoni.jpg",
        width: "240",
        height: "160"
    },{
	src:"https://www.mapsofindia.com/ci-moi-images/my-india/2014/12/satya-nadella.jpg",
        width: "240",
        height: "160"
    },{
	src:"https://admin.mashable.com/wp-content/uploads/2014/03/qualcomm.jpg",
        width: "240",
        height: "160"
    },{
	src:"https://admin.mashable.com/wp-content/uploads/2014/03/donahoeebay.jpg",
        width: "240",
        height: "160"
    },{
	src:"https://admin.mashable.com/wp-content/uploads/2014/03/zuckerb.jpg",
        width: "240",
        height: "160"
    },{
	src:"https://admin.mashable.com/wp-content/uploads/2014/03/benioff.jpg",
        width: "240",
        height: "160"
    },{
	src:"https://image.shutterstock.com/z/stock-photo-milan-italy-november-microsoft-founder-bill-gates-during-the-futurshow-convention-in-247513390.jpg",
        width: "240",
        height: "160"
    },{
	src:"https://www.webdesignerdepot.com/cdn-origin/uploads/iconic_portraits/dkmb86g_772cqqdk4c6_b.jpg",
        width: "240",
        height: "160"
    },{
	src:"https://www.webdesignerdepot.com/cdn-origin/uploads/iconic_portraits/dkmb86g_709dn5qgrgz_b.jpg",
        width: "240",
        height: "160"
    },{
	src:"https://www.webdesignerdepot.com/cdn-origin/uploads/iconic_portraits/Neil_Armstrong.jpg",
        width: "240",
        height: "160"
    },{
	src:"https://www.webdesignerdepot.com/cdn-origin/uploads/iconic_portraits/dkmb86g_776qv76r5g8_b.jpg",
        width: "240",
        height: "160"
    },{
	src:"https://www.webdesignerdepot.com/cdn-origin/uploads/iconic_portraits/beethoven.jpg",
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
var imgReplace = document.getElementsByClassName("my_img2")[0];
imgReplace.src = newImage.src;
imgReplace.width = newImage.width;
imgReplace.height = newImage.height;
}
