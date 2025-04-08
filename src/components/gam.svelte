<script lang="ts">
  import type { GAMStateProps } from "@/utils/state-gam.svelte.ts";

  const state: GAMStateProps = $props();

  const params = $derived.by(() => {
    return filterVisible(state.params, "gam");
  });
  const custParams = $derived.by(() => {
    return filterVisible(state.custParams, "gamCustParams");
  });
</script>

<div class="request">
  <p>
    Parses the query string of the request to the Google Ad Manager endpoint
  </p>

  {#if Object.keys(params.visible).length > 0}
    <div class="params">
      <h2>Params</h2>
      <ul>
        {#each Object.entries(params.visible) as [key, value] (key)}
          <li>
            {key}: {value}
          </li>
        {/each}
      </ul>
      <details>
        <summary>Additional params</summary>
        <ul>
          {#each Object.entries(params.hidden) as [key, value] (key)}
            <li>{key}: {value}</li>
          {/each}
        </ul>
      </details>
    </div>

    <div class="params">
      <h2>Cust Params</h2>
      <ul>
        {#each Object.entries(custParams.visible) as [key, value] (key)}
          <li>
            {key}: {value}
          </li>
        {/each}
      </ul>
      <details>
        <summary>Additional params</summary>
        <ul>
          {#each Object.entries(custParams.hidden) as [key, value] (key)}
            <li>{key}: {value}</li>
          {/each}
        </ul>
      </details>
    </div>
  {:else}
    <p>Loading</p>
    <p>If no data is displayed please refresh the page</p>
  {/if}
</div>

<style>
  .request {
    display: grid;
    gap: 0.5rem;

    padding-block: 0.5rem;
  }

  .params {
    display: grid;
    gap: 0.5rem;

    overflow-x: auto;
    padding: 0.5rem;
    background-color: var(--o-colors-box-background);
  }
</style>
