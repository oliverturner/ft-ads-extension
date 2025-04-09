<script lang="ts">
  import type { GAMStateProps } from "@/utils/state-gam.svelte.ts";

  const state: GAMStateProps = $props();

  const params = $derived.by(() => {
    try {
      const params = filterVisible(state.params, "gam");
      const { dids, iu_parts, prev_iu_szs, prev_scp, ...raw } =
        params.visible as Record<string, string>;
      const parsed: Record<string, string[] | string> = {};
      parsed.dids = dids?.split("~") ?? [];
      parsed.iu_parts = iu_parts?.split(",") ?? [];
      parsed.prev_iu_szs = prev_iu_szs?.split(",") ?? [];
      parsed.prev_scp = prev_scp?.split("|") ?? [];

      params.visible = { ...parsed, ...raw };

      return params;
    } catch (error) {
      console.error("Error parsing GAM params", error);
    }

    return {
      visible: {},
      hidden: {},
    };
  });
  const custParams = $derived.by(() => {
    return filterVisible(state.custParams, "gamCustParams");
  });

  const objectKeys = {
    params: ["dids", "iu_parts", "prev_iu_szs", "prev_scp"],
  };
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
          {#if objectKeys.params.includes(key)}
            <li>
              {key}:
              <ul>
                {#each (value as string[]) as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </li>
          {:else}
            <li>
              {key}: {value}
            </li>
          {/if}
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
