<script lang="ts">
    import TailwindCss from './TailwindCSS.svelte';

    import Page1 from './pages/Page1.svelte';
    import Page2 from './pages/Page2.svelte';
    import Page3 from './pages/Page3.svelte';
    import Page4 from './pages/Page4.svelte';
    import Page5 from './pages/Page5.svelte';
    import Page6 from './pages/Page6.svelte';
</script>
<TailwindCss />




<main>
    <div class="relative w-full h-full bg-suso-light">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
    </div>
</main>


<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>
