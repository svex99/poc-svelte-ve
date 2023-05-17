<script lang="ts">
    import { enhance } from '$app/forms';
    import type { LayoutServerData } from './$types';
    import '../app.css';

    export let data: LayoutServerData;

    $: ({ lang } = data);
</script>

<div class="flex items-center justify-between px-10 bg-green-600 text-white h-12">
    <span class="font-bold">Voter's Edge</span>
    <form method="post" action={`?/lang&lang=${lang === 'en' ? 'es' : 'en'}`} use:enhance>
        <button class="px-2 w-10 border">{(lang === 'en' ? 'es' : 'en').toUpperCase()}</button>
    </form>
</div>

<div class="mb-12">
    <p class="text-center my-5 text-gray-400">Your language is {lang.toLocaleUpperCase()}</p>

    <slot />
</div>
