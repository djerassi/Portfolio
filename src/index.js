import "./styles.css"
import "./my-script"
import portraitBoy from './assets/portrait_boy.jpg'

/* Assign random colors to the card thumbnails until projects are added*/
function pickColor() {
    const colors = [
        "#8ad3d2", 
        "#A6D086", 
        "#609EC8", 
        "#2E7A92",
        "#a8cd89",
        "#2f7b99",
        "#68b861",
        "#e5a829",
        "#f44336",
    ];
    var random_color = colors[(Math.floor(Math.random() * colors.length))];
    return random_color;
};

const thumbnails = document.getElementsByClassName("card-thumbnail");
Array.from(thumbnails).forEach((tn) => {
    tn.style.backgroundColor = pickColor();
});