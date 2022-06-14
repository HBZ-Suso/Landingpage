<script>
    import headerImg1 from "../assets/headers/20210727_105549.jpg";
    import headerImg2 from "../assets/headers/Bild_HP_III.jpg";
    import headerImg3 from "../assets/headers/Jansen_Bild_Suso_Herbst.jpg";
    import headerImg4 from "../assets/headers/Bild_HP_II.jpg";


    let images = [
        [headerImg1, false],
        [headerImg2, true],
        [headerImg3, true],
        [headerImg4, false],
    ];

    import wave from "../assets/waves/wave_3.svg";
    import logoKonstanz from "../assets/logo/logo-konstanz.png"; 


    let currentImgIndex = 0;
    let currentImg = images[0];

    let imageChangeInterval = setInterval(() => {
        if (currentImgIndex < 3) {
            currentImgIndex++;
        } else {
            currentImgIndex = 0;
        }

        currentImg = images[currentImgIndex];
    }, 3000)
</script>


<div class="relative md:h-screen">
    {#if currentImg[1]}
        <img class="hidden sm:block z-10 absolute top-8 right-8  w-64" src={logoKonstanz} alt="">
    {/if}

    <div class="relative w-full h-screen">
        <img class="h-full w-full object-cover object-center" src={currentImg[0]} alt="">
    </div>


    
    <div class="absolute bottom-32 left-0 right-0 h-32">
        <img class="h-full w-full" src={wave} alt="">
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-suso-light">
        <div class="absolute left-4 sm:left-8 bottom-16 text-3xl sm:text-5xl text-white"> Hochbegabtenzug </div>
        <div class="absolute left-4 sm:left-8 bottom-8 text-lg sm:text-xl text-white italic font-light"> des Heinrich-Suso-Gymnasium Konstanz </div>
    </div>
</div>