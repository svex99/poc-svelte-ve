<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

    const { data1, data2 } = data;
</script>

<div class="flex flex-col items-center gap-10">
    <h1 class="text-xl text-center">
        This is a POC of Voter's Edge required features in SvelteKit
    </h1>
    <p class="text-center">
        Visit <a href="https://kit.svelte.dev" class="text-blue-500 underline">kit.svelte.dev</a> to
        read the documentation
    </p>

    <form method="get" action="/ballot" class="space-y-5 w-fit mx-auto">
        <div class="flex flex-col gap-1">
            <label for="address">Address (optional)</label>
            <input
                type="text"
                name="address"
                id="address"
                class="border border-gray-300 rounded px-2 py-1"
            />
        </div>

        <div class="flex flex-col gap-1">
            <label for="zipCode">ZIP Code</label>
            <input
                type="text"
                name="zipCode"
                id="zipCode"
                required
                class="border border-gray-300 rounded px-2 py-1"
            />
        </div>

        <button class="px-5 py-2 rounded-full font-medium text-white bg-green-600 w-full"
            >Find My Ballot!</button
        >
    </form>

    <div>
        <h3 class="text-xl">Some dynamic data "fetched"</h3>
        <p>Data fetched at {data1}</p>
        <p>Data fetched at {data2}</p>
    </div>

    <div class="w-[800px]">
        <h3 class="text-xl">How to test SSR on this site?</h3>
        <p>You have to options:</p>
        <ul>
            <li>
                1. Go to you browser dev tools > Options > Disable JavaScript. Then check that the
                site is fully rendered.
            </li>
            <li>
                2. Run on you console <code class="px-2 rounded-md bg-slate-600 text-slate-100"
                    >curl https://poc-svelte-ve.vercel.app</code
                > and check that you are receiving the HTML displayed on this page.
            </li>
        </ul>

        <h3 class="text-xl mt-5">Does this site is a SPA?</h3>
        <p>
            Yes the site works as a SPA while JavaScript is enabled. You can try to submit the form
            or change the language and you will note that the browser does not reload the page. But
            if you disable JavaScript, all this features will keep working but as in a MPA.
        </p>

        <h3 class="text-xl mt-5">How is the language updated?</h3>
        <p>
            The language option is stored in a cookie through a form action when you change it. You
            can go to dev tools and check the cookie storage for the site or the network traffic when updating the language.
        </p>
    </div>
</div>
