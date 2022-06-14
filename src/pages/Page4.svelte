<script>
    import forumArticle from "../assets/img/forumarticle.png";
    import projektwocheSM from "../assets/img/projektwocheSocialMediaDebatieren.png"; 
    import agAbraxas from "../assets/img/Logo_Chemie_AG_Abraxas.png";
    import bildGalaabend from "../assets/img/Bild_Team_Livestream.jpg";
    import snowySuso from "../assets/img/snowysuso.jpeg";

    let images = [
        [forumArticle, "Das HBZ Forum"],
        [projektwocheSM, "Projektwoche"],
        [agAbraxas, "Arbeitsgemeinschaften"],
        [bildGalaabend, "HBZ-Galaabend"],
        [snowySuso, "Humanistisches Lehrangebot"],
    ];
</script>


<div class="w-full h-auto bg-suso-light flex flex-wrap justify-center items-center flex-row pt-16 pb-16">
    {#each images as image}
        <div class="h-[250px] w-[300px] flex justify-center items-center flex-col mr-8 ml-8 mt-8">
            <img class="h-[200px] w-[300px] shadow-md rounded-xl object-cover hover:scale-105 cursor-pointer transition-transform origin-center" src={image[0]} alt="">

            <p class="text-white text-l mt-2">{image[1]}</p>
        </div>
    {/each}
</div>