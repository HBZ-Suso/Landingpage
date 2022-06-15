<script>
    import wave1 from "../assets/waves/wave_1.svg";
    import wave2 from "../assets/waves/wave_2.svg";

    import susoInnenhof from "../assets/img/Suso_Gymnasium_Konstanz.jpeg";
    import hbzLogo from "../assets/img/HBZ-Logo.png";
    import snapScreenshot from "../assets/img/Bewegung Zeitt Snap Projekt.png";
    import forumScreenshot from "../assets/img/forumv2Startscreen.png";

    let pages = [
        [susoInnenhof, "Das Gymnasium", "Mit seiner über 400-jährigen Geschichte ist das Heinrich-Suso-Gymnasium das älteste Gymnasium in Konstanz. Am Suso lernen alle Schülerinnen und Schüler ab der 5. Klasse Latein und Englisch. Das Heinrich-Suso-Gymnasium ist eines von 32 altsprachlichen Gymnasien in Baden-Württemberg. In der Tradition humanistischer Bildung verstehen wir uns als ein Ort, an dem die uns anvertrauten Kinder und Jugendlichen zu mündigen, eigenverantwortlich handelnden Menschen heranreifen. Der Hochbegabtenzug an einem humanistischen Gymnasium bietet besonders vielfältige und herausfordernde Enrichment-Angebote."],
        [hbzLogo, "Der HBZ", "Am Heinrich-Suso-Gymnasium Konstanz werden seit 2009 begabte und hochbegabte Kinder und Jugendliche aus der ganzen Region in den Klassen 5-10 nach einem besonderen integrativen Konzept unterrichtet.\r\nDas Konzept sieht den Unterricht in eigens dafür eingerichteten Klassen vor, die deutlich kleiner als die Regelklassen sind. Zusammen bilden alle Hochbegabtenklassen den Hochbegabtenzug (HBZ). Dadurch entsteht die Möglichkeit zur klasseninternen oder jahrgangsstufenübergreifenden Projektarbeit und damit verbunden zu einem begabtenfördernden sowie möglichst individuellen Betreuungsangebot."],
        [snapScreenshot, "Enrichement", "Enrichment findet am Heinrich-Suso-Gymnasium zwar auch im Unterricht, aber hauptsächlich in Form von Projektarbeiten und AGs statt.\r\nFür Projekte gibt es unter anderem eine extra Projektwoche. Für den HBZ exklusiv eingerichtete AGs sind die Programmier-AG Snap! (Klasse 5) und die Programmier-AG Java (Klasse 6). Außerdem gibt es noch viele andere, interessante Arbeitsgemeinschaften, in denen die HBZler*innen mitwirken können."],
        [forumScreenshot, "Die Webpräsenz", "Aktuell wird die Webpräsenz des Hochbegabtenzugs erweitert. In Kürze wird ein Forum für die Kommunikation zwischen aktuellen Schülerinnen und Schülern, Lehrpersonen sowie Ehemaligen verfügbar sein. \r\nAußerdem wird derzeit an einer Übersichtsseite für die HBZ-Projektwochen, einer App für das neue Grundschulprojekt \"Kopfrechnen\" und an dieser Homepage gearbeitet."]
    ];

    let currentIndex = 0;
    let pageChangeInterval = setInterval(() => {
        if (currentIndex < 3) {
            currentIndex++;
        } else {
            currentIndex = 0;
            clearInterval(pageChangeInterval);
        }
    }, 5500)
</script>


<div class="relative w-full h-auto bg-white">
    <img class="z-10 absolute top-0 left-0 right-0 w-full h-16 rotate-180" src={wave1} alt="" />

    <div class="z-0 relative w-full h-[100vh] min-h-[1000px] sm:min-h-[550px]">
        {#each pages as page, index}
            {#if index === currentIndex}
                <div class="relative w-full h-full">
                    <img class="absolute top-0 left-0 h-full object-cover object-center w-[35%] bottom-0" src={page[0]} alt="" />

                    <div class="absolute top-0 left-[35%] right-0 bottom-0 flex flex-col justify-center p-8">
                        <h2 class="ml-4 text-black text-3xl text-left">{page[1]}</h2>
                        <p class="ml-4 text-black text-md text-left mt-8 italic">{page[2]}</p>

                        <div class="absolute left-2 top-0 bottom-0 h-full w-8 mt-8 flex flex-col justify-center items-center">
                            {#each pages as page, index}
                                {#if index === currentIndex}
                                    <div on:click={() => { currentIndex = index; }} class="cursor-pointer h-4 w-4 rounded-[1000px] bg-suso-dark m-1"></div>
                                {:else}
                                    <div on:click={() => { currentIndex = index; }} class="cursor-pointer h-4 w-4 rounded-[1000px] bg-suso-light m-1"></div>
                                {/if}
                            {/each}
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>

    <img class="pointer-events-none z-10 absolute bottom-0 left-0 right-0 w-full h-32" src={wave2} alt="" />
</div>