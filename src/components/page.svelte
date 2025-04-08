<script lang="ts">
  const { page }: { page: Record<string, string> } = $props();

  const { visible, hidden } = $derived.by(() => {
    return filterVisible(page, "gptPageTargeting");
  });
</script>

<div class="page">
  <h2>Page-level targeting</h2>
  {#if Object.keys(page).length === 0}
    <p>Loading</p>
  {:else}
    <ul>
      {#each Object.entries(visible) as [key, value] (key)}
        <li>{key}: {value}</li>
      {/each}
    </ul>
    <details>
      <summary>Additional keys</summary>
      <ul>
        {#each Object.entries(hidden) as [key, value] (key)}
          <li>{key}: {value}</li>
        {/each}
      </ul>
    </details>
  {/if}
</div>

<style>
  .page {
    display: grid;
    gap: 0.5rem;
  }
</style>
