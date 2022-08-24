var btn = document.getElementById('btn');
function Toggle() {
    if(btn.classList.contains("thumb_up")){
    btn.classList.remove("thumb_up");
    btn.classList.add("fas");
    } else {
        btn.classList.remove("fas");
        btn.classList.add("thumb_up");
    }
}