var txt = document.querySelector(".load_circle_txt");
var loading = 1;

function remove_loadcircle() {
    document.querySelector(".load_circle").remove();
    txt.remove();
    loading = 0;
}