document.querySelector("#show_add_photo").addEventListener("click", function() {
    document.querySelector("#add_new_photo").classList.add("open");
});

document.querySelector("#cancel").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#add_new_photo").classList.remove("open");
});

function open_photo() {
    let ok_photo = document.querySelector("#ok_photo");
    ok_photo.querySelector("img").src = this.querySelector("img").src;
    ok_photo.classList.add("open");
}

document.querySelectorAll(".photo").forEach(photo => {
    photo.addEventListener("click", open_photo);
});

document.querySelector("#ok_photo").addEventListener("click", function(){
    this.classList.remove("open");
});
