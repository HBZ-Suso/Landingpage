<script>
    import { faqOptions } from "../../faq.js";

    export let index;
    let currentElementShown = 0;
</script>



<h1 id="faqTopic{index}" class="noselect h-[30px] w-full text-center mb-[15px] text-xl italic text-white">{($faqOptions)[index][0]}</h1>
<div  class="transition-all relative h-[350px] bg-suso-light flex flex-row items-start" style="{"margin-left: -" + (currentElementShown * 85) + "vw;"}">
    <div class="w-[7.5vw] h-full text-suso-light shrink-0"></div> <!-- ugly hack for positioning -->
    {#each ($faqOptions)[index][3] as faqQuestion, questionIndex}
        <div class:notShownFullyRight="{questionIndex > currentElementShown}" class:notShownFullyLeft="{questionIndex < currentElementShown}" on:click={() => { currentElementShown = questionIndex; }} class="noselect p-4 hideScrollbar overflow-y-auto w-[80vw] h-[300px] bg-[#FFFFFF80] mr-[2.5vw] ml-[2.5vw] shrink-0 rounded shadow">
            <h1 class="w-full text-white font-bolder text-2xl text-center">{faqQuestion[0]}</h1>

            <p class="text-white w-full italic mt-4">
                {@html faqQuestion[1]}
            </p>
        </div>
    {/each}
</div>


<style>
    .notShownFullyRight {
        transform: scale(0.8);
        transform-origin: left;
        cursor: pointer;
    }
    .notShownFullyRight > p {
        pointer-events: none;
    }

    .notShownFullyLeft {
        transform: scale(0.8);
        transform-origin: right;
        cursor: pointer;
    }
    .notShownFullyLeft > p {
        pointer-events: none;
    }
</style>