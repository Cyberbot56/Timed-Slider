let images = ["https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg",
     "https://images.pexels.com/photos/15334824/pexels-photo-15334824.jpeg", 
    "https://images.pexels.com/photos/1830252/pexels-photo-1830252.jpeg", 
    "https://images.pexels.com/photos/29965022/pexels-photo-29965022.jpeg", 
    "https://images.pexels.com/photos/8969921/pexels-photo-8969921.jpeg", 
    "https://images.pexels.com/photos/10525014/pexels-photo-10525014.jpeg",
    "https://images.pexels.com/photos/27641167/pexels-photo-27641167.jpeg", 
    "https://images.pexels.com/photos/4661726/pexels-photo-4661726.jpeg"];

let index = 0;
function myTimer(){
    document.getElementById("slider").src = images[index];
    index = (index + 1) % images.length;
}

setInterval(myTimer, 1000)