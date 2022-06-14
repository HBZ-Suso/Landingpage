<script>
    let links = [
        [
            "Projekte & Allgemeines",
            [
                ["Forum", "https://hbz.suso.schulen.konstanz.de/forum"],
                ["FAQ", "https://hbz.suso.schulen.konstanz.de/HBZ/articles/?article=faq"],
                ["Newsletter", "https://hbz.suso.schulen.konstanz.de/HBZ/articles/?article=anmeldung"],
                ["Anmeldung", "https://hbz.suso.schulen.konstanz.de/HBZ/articles/?article=kopfrechenprojekt-webpage"],
                ["Grundschulprojekt \"Kopfrechnen\"", "https://hbz.suso.schulen.konstanz.de/HBZ/articles/?article=hbz-newsletter"],
                ["Youtube-Kanal", "https://www.youtube.com/channel/UCEOz73mdU92rZNsvR8CSzrA/about"],
            ]
        ], [
            "Heinrich-Suso-Gymnasium (offiziell)",
            [
                ["Suso-Homepage", "https://suso.schulen.konstanz.de/HP"],
                ["HBZ auf der Suso-Homepage", "https://www.suso.schulen.konstanz.de/HP/hbz"],
                ["Kontakt", "https://www.suso.schulen.konstanz.de/HP/?option=com_content&view=article&id=9"],
                ["Anfahrt", "https://www.suso.schulen.konstanz.de/HP/die-schule/wir-ueber-uns/anfahrt"],
                ["Datenschutzerklärung", "https://www.suso.schulen.konstanz.de/HP/?option=com_content&view=article&id=479"],
                ["Impressum", "https://www.suso.schulen.konstanz.de/HP/?option=com_content&view=article&id=8"]
            ]
        ]
    ]
</script>


<div class="h-128 sm:h-[220px] bg-suso-dark flex flex-col sm:flex-row p-4 pb-0">
    {#each links as category, categoryIndex}
        <div class="h-64 sm:h-full w-full sm:w-[50%] flex flex-col p-0">
            <h1 class="text-white text-2xl sm:text-lg">{category[0]}</h1>
            <div class="mt-1 h-[2px] bg-white w-full mb-[3px]"></div>

            {#each category[1] as link, linkIndex}
                <a href={link[1]} class="text-suso-light text-lg sm:text-sm p-[3px]">{link[0]}</a>
            {/each}
        </div>
    {/each}
</div>