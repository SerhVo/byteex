import "./style.scss";
import image from "./assets/image.jpg";

console.log("Webpack настроен! 🚀");
const img = document.createElement("img");
img.src = image;
img.alt = "Demo Image";
document.body.appendChild(img);
