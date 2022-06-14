<script>
    import { faqOptions } from "../faq.js";

    import caretRight from "../assets/icons/caret-right.svg";
    import mailIcon from "../assets/icons/envelope-open.svg";
    import phoneIcon from "../assets/icons/phone.svg";

    let currentOptionExpanded = -1;



    function scrollToFaqTopic (index) {
        document.getElementById('faqTopic' + index).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
</script>

<div class="p-[30px] sm:p-0 relative w-full h-auto sm:h-[700px] bg-suso-light sm:flex-none flex flex-col-reverse ">
    <div class="mt-[20px] sm:mt-0 sm:absolute sm:left-16 sm:bottom-16 sm:top-16 h-[540px] sm:w-[30%] bg-[#FFFFFF80] rounded-2xl flex flex-col justify-center items-start p-8">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            E-Mail-Addresse
        </label>
        <input class="shadow appearance-none borderbg-white rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ihre E-Mail-Addresse">
        
        
        <label class="block text-gray-700 text-sm font-bold mb-2 mt-8" for="username">
            Nachricht
        </label>
        <textarea class="flex-grow shadow appearance-none borderbg-white rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline resize-none" id="username" type="text" placeholder="Ihre Nachricht" />
    
        <div class="bg-suso-dark w-full h-12 rounded shadow mt-8 cursor-pointer text-white text-center flex justify-center items-center"><p>Absenden</p></div>
    
    
        <div class="w-full bg-[#777777] h-[2px] mt-8 mb-8"></div>

        <p class="text-[#777777] text-sm"> Heinrich-Suso-Gymnasium Konstanz </p>
        <p class="text-[#777777] text-sm"> Neuhauser Str. 1 </p>
        <p class="text-[#777777] text-sm mb-2"> 78464 Konstanz </p>

        <p class="text-[#777777] text-sm"><img class="h-4 mt-[-3px] inline" src={mailIcon} alt=""> hbz.suso.schulen.konstanz.de </p>
        <p class="text-[#777777] text-sm"><img class="h-4 mt-[-3px] inline" src={phoneIcon} alt=""> +49 (0)7531 66278 (Sekretariat) </p>
    </div>

    <div class="text-white sm:absolute sm:left-[calc(30%)] sm:ml-32 sm:right-0 sm:top-0 sm:bottom-0 flex flex-col items-start justify-center">
        <h1 class="text-4xl w-[50%] font-bold">FAQ</h1>

        <p class="text-md w-full mt-2 text-[#00BABA]"> Fragen und Antworten zum Hochbegabtenzug und zum Suso</p>
    
        <div class="w-full h-auto mt-4">
            {#each $faqOptions as option, index}
                {#if currentOptionExpanded == -1 || currentOptionExpanded == index }
                <div class="faq-element relative w-[100%] sm:w-[80%] min-h-[3rem] h-auto mt-4 cursor-pointer flex flex-col" on:click={() => { scrollToFaqTopic(index); }}>
                    <h1 class="top-0 left-0 text-lg font-bold">{option[0]}</h1>
                    <p class="bottom-1 leading-tight w-[85%] left-0 text-sm text-[#00BABA] mb-[5px]">{@html option[1]}</p>
                    <div class="faq-element-bar absolute bottom-0 left-0 right-0 h-[2px] bg-[#00BABA]"></div>

                    <img class="absolute right-0 bottom-2 h-8" src={caretRight} alt="">
                </div>
                {/if}
            {/each}
        </div>

        <p class="text-md w-[100%] sm:w-[50%] italic mt-8 text-center sm:text-left"> Ist ihre Frage weiterhin  nicht geklärt oder haben Sie ein anderes Anliegen, können Sie uns auch direkt über das nebenstehende Formular kontaktieren.</p>
    </div>
</div>


<style lang="scss">
    .faq-element > .faq-element-bar::before {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 0px;
        height: 2px;
        transition: 0.08s all ease-in-out;
        content: '';
        background-color: white;
    }
    .faq-element:hover > .faq-element-bar::before {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 40%;
    }


    .faq-element > img {
        transition: 0.1s all linear;
        filter: invert(50%) sepia(73%) saturate(642%) hue-rotate(133deg) brightness(96%) contrast(100%);
    }
    .faq-element:hover > img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(359deg) brightness(102%) contrast(101%);
    }
</style>