<script>
    import { faqOptions } from "../faq.js";
import FaqTopic from "./Components/FAQTopic.svelte";

    let currentIndex = 0;
</script>

<div class="relative w-full overflow-hidden h-auto bg-suso-light">
    {#each $faqOptions as faqOption, index}
        {#if faqOption[3].length > 0}    
            <FaqTopic index={index} />
        {/if}
    {/each}
</div>


<style lang="scss">
    /*
    CSS for the main interaction
    */
    .accordion > input[type="checkbox"] {
        position: absolute;
        left: -100vw;
    }

    .accordion .content {
        overflow-y: hidden;
        height: 0;
        transition: all 0s linear;
    }

    .accordion > input[type="checkbox"]:checked ~ .content {
        height: auto;
    }

    .accordion label {
        display: block;
    }

    /*
    Styling
    */

    .accordion {
        margin-bottom: 1em;
    }

    .accordion > input[type="checkbox"]:checked ~ .content {
        padding: 0px;
        border-top: 0;
    }

    .accordion .handle {
        margin: 0;
        font-size: 1.125em;
        line-height: 1.2em;
    }

    .accordion label {
        cursor: pointer;
        font-weight: normal;
        padding: 0px;
    }


    .accordion .handle label:before {
        display: inline-block;
        margin-right: 10px;
        font-size: .58em;
        line-height: 1.556em;
        vertical-align: middle;
    }

</style>