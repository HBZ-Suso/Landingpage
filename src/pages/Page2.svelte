<script>
    import { aktuelleAnlaesse } from "../aktuelles.js";



</script>


<div class="w-full h-auto bg-suso-light flex flex-wrap justify-center items-center flex-row pt-16 pb-16">
    {#each $aktuelleAnlaesse as image, index}
        <div on:click={() => { window.location.href = $aktuelleAnlaesse[index][2]}} class="h-[250px] w-[300px] flex justify-center items-center flex-col mr-8 ml-8 mt-8">
            <img class="h-[200px] w-[300px] shadow-md rounded-xl object-cover hover:scale-105 cursor-pointer transition-transform origin-center" src={image[0]} alt="">

            <p class="text-white text-l mt-2">{image[1]}</p>
        </div>
    {/each}
</div>