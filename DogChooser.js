pics = document.getElementById("pics")
createPicsHolders();
createDoggyImages();

function createPicsHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createDoggyImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolders.length; i++) {
        favorite = document.createElement("div");
        favorite.className = "favorite";
        favorite.id = "favorite_" + (i+1);
        DoggyImages = document.createElement("img");
        DoggyImages.src = "Dog chooser/dog" + (i+1) + ".jpg";
        DoggyImages.id = (i+1);
        DoggyImages.addEventListener("click", function() {
            makeFavorite(this.id);
        });
        pictureHolders[i].appendChild(favorite);
        pictureHolders[i].appendChild(DoggyImages);
    }
}

function makeFavorite(id) {
    console.log("Make me a favorite!" + id);
    notsofavorite = document.getElementsByClassName("favorite");

    for(var i = 0; i < notsofavorite.length; i++) {
        notsofavorite[i].style.backgroundImage = "none";
    }

    favorite = document.getElementById("favorite_" + id);
    favorite.style.backgroundImage = "url('Dog chooser/fav1.jpg')";
}