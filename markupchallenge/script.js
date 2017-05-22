//modal code
function changePicture(){

    // Get the modal
    var modal = document.getElementById('myModal');

// Get the button that opens the modal
    var Btn = document.getElementById("myBtncart");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
    Btn.onclick = function() {
        modal.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}



//Expanding and collapsing the sections on the lower right quadrant of the page.
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}

//small product images to update the large hero product image.
function showImage(imgName) {
   var curImage = document.getElementById('currentImg');
   var thePath = 'assets/';
   var theSource = thePath + imgName;
   curImage.src = theSource;
   curImage.alt = imgName;
   curImage.title = imgName;
}


