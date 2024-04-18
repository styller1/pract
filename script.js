let header_button = document.querySelector(".mobile_icon");
header_button.addEventListener("click", function() {
    // document.querySelector("header").classList.toggle("open");
    // header_button.querySelector ("img").src = "cancel.png";
    let header = document.querySelector("header");
    if (header.classList.contains("open")){
        close_ok();
    }
    else {
        header.classList.add("open");
        header_button.querySelector("img").src = "cancel.png";
    }
});

function close_ok() {
    document.querySelector("header").classList.remove("open");
    header_button.querySelector("img").src = "align-left.png";
}

document.querySelector("#grid").addEventListener("click", close_ok, false);

document.querySelector("header .ok").addEventListener("click", close_ok, false);

document.querySelector("#show_add_photo").addEventListener("click", function() {
    document.querySelector("#add_new_photo").classList.toggle("open");
});

document.querySelector("#cancel").addEventListener("click", function() {
    document.querySelector("#add_new_photo").classList.remove("open");
});

document.querySelector("#add_photo").addEventListener("click", function() {
    let src = document.querySelector("#new_photo_src").value;
    let text = document.querySelector("#new_photo_text").value;
    if (src){
       let new_photo_div = document.createElement("div");
    new_photo_div.classList.add("photo");
    let new_img = document.createElement("img");
    new_img.src = src;
    new_photo_div.append(new_img);
    let new_p = document.createElement("p");
    new_p.innerText = text? text: "Стандартный текст";
    new_photo_div.append(new_p);
    document.querySelector("#grid").prepend(new_photo_div);
    document.querySelector("#add_new_photo").classList.remove("open");    
    document.querySelector("#new_photo_src").value = "";
    document.querySelector("#new_photo_text").value = "";
    new_photo_div.addEventListener("click", open_photo, false);
    }
    else {
        if (!src) {
            document.querySelector("#new_photo_src").classList.add("error");
        // }
        // if (!text) {
        //     document.querySelector("#new_photo_text").classList.add("error");
        }
    }
});

function open_photo() {
    let src = this.querySelector("img").src;
    ok_photo = document.querySelector("#ok_photo");
    ok_photo.querySelector("img").src = src;
    ok_photo.classList.add("open");
} 

let photos = document.querySelectorAll(".photo");
for (let photo of photos){
    photo.addEventListener("click", open_photo, false);
}

document.querySelector("#ok_photo").addEventListener("click", function(){
    this.classList.remove("open");
});
