function openbox(box) {
    display = document.getElementById('box').style.display;

    if(display == "none") {
        display = document.getElementById('box').style.display = "block"; 
    } else {
        document.getElementById('box').style.display = "none";
    }
}