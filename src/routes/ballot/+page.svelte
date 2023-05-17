<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

    const { fullAddress, contestants, offices } = data;
</script>

<div>
    <div class="mx-auto w-fit flex flex-col gap-10">
        <h1 class="text-3xl">Election information for <span>{fullAddress}</span></h1>

        <div>
            <h3 class="text-xl">Contestants</h3>
            <div>
                {#if contestants?.length}
                    {#each contestants as contestant}
                        <p>{contestant}</p>
                    {/each}
                {:else}
                    <p>No contestants</p>
                {/if}
            </div>
        </div>

        <div>
            <h3 class="text-xl">Offices</h3>
            <div>
                {#if offices?.length}
                    {#each offices as office}
                        <p>{office}</p>
                    {/each}
                {:else}
                    <p>No offices</p>
                {/if}
            </div>
        </div>
    </div>
</div>
