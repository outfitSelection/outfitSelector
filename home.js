function profile() {
    document.getElementById("dropdown-profile").classList.toggle("showProfile");
}


window.onclick = function(event2) {
  if (!event2.target.matches('.profilebtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-list-profile");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showProfile')) {
        openDropdown.classList.remove('showProfile');
      }
    }
  }
}

function hamburger() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}


window.onclick = function(event1) {
  if (!event1.target.matches('.dropdownbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-list");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// for the addOutfit page

function addOutfitConfirmation () {
  var clothingInput, tagsInput; 

  clothingInput = document.forms["add-outfit-form"]["clothing_types"].value;

  if (clothingInput == ""){
    alert("Please complete required field!!");
    return false;
  }

  alert("Outfit added to Closet!");
  return true;
}



// function to upload images
function myFunction(){
    var x = document.getElementById("myFile");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Select one or more files.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                var file = x.files[i];
                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "size: " + file.size + " bytes <br>";
                }
            }
        }
    } 
    else {
        if (x.value == "") {
            txt += "Select one or more files.";
        } else {
            txt += "The files property is not supported by your browser!";
            txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
        }
    }
    document.getElementById("demo").innerHTML = txt;
}

