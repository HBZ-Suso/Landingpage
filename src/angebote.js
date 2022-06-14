import { readable } from "svelte/store";

import forumArticle from "./assets/img/forumarticle.png";
import projektwocheSM from "./assets/img/projektwocheSocialMediaDebatieren.png"; 
import agAbraxas from "./assets/img/Logo_Chemie_AG_Abraxas.png";
import bildGalaabend from "./assets/img/Bild_Team_Livestream.jpg";
import snowySuso from "./assets/img/snowysuso.jpeg";

export const angebote = readable([
    [forumArticle, "Das HBZ Forum", "https://hbz.suso.schulen.konstanz.de/forum/v2/"],
    [bildGalaabend, "Projektwoche", "https://hbz.suso.schulen.konstanz.de/HBZ/articles/?article=projektwochen"],
    [agAbraxas, "Arbeitsgemeinschaften", "https://hbz.suso.schulen.konstanz.de/HBZ/articles/?article=ags"],
    [snowySuso, "Humanistisches Lehrangebot", "https://www.suso.schulen.konstanz.de/HP/index.php/die-schule/wir-ueber-uns/schulphilosophie"],
]);