<script lang="ts">
  type TabId = (typeof tabIds)[number];

  import { Tabs } from "melt/builders";

  import Page from "@/components/page.svelte";
  import GAM from "@/components/gam.svelte";
  import Slots from "@/components/slots.svelte";
  import Spoor from "@/components/spoor.svelte";

  import { gamState } from "@/utils/state-gam.svelte";
  import { gptState } from "@/utils/state-gpt.svelte";
  import { spoorState } from "@/utils/state-spoor.svelte";

  const tabIds = ["GPT", "GAM", "Spoor"] as const;
  const tabs = new Tabs<TabId>({ value: "GPT" });

  pageStorage.getValue().then(gptState.updatePage);
  pageStorage.watch(gptState.updatePage);

  slotsStorage.getValue().then(gptState.updateSlots);
  slotsStorage.watch(gptState.updateSlots);

  spoorStorage.getValue().then(spoorState.updateRequests);
  spoorStorage.watch(spoorState.updateRequests);

  gamStorage.getValue().then(gamState.updateState);
  gamStorage.watch(gamState.updateState);
</script>

<div {...tabs.triggerList}>
  {#each tabIds as id}
    <button {...tabs.getTrigger(id)}>
      {id}
    </button>
  {/each}
</div>

<div class="content">
  {#each tabIds as id}
    <div {...tabs.getContent(id)}>
      {#if id === "GPT"}
        <div class="gpt">
          <p>Data queried directly from the GPT library</p>
          <Page page={gptState.state.page} />
          <Slots slots={gptState.state.slots} />
        </div>
      {:else if id === "GAM"}
        <GAM {...gamState.state} />
      {:else if id === "Spoor"}
        <Spoor requests={spoorState.state.requests} />
      {/if}
    </div>
  {/each}
</div>

<style>
  [data-melt-tabs-trigger-list] {
    display: flex;
    gap: 0.5rem;

    padding: 0.5rem 0.5rem 0;
    background-color: var(--o-colors-body-text);
  }

  [data-melt-tabs-trigger] {
    --colour-bg: var(--o-colors-body-text);
    --colour-text: var(--o-colors-muted-text);

    padding: 0.5rem 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    border: 1px solid currentColor;
    border-bottom: none;
    background-color: var(--colour-bg);
    color: var(--colour-text);

    &:hover,
    &[aria-selected="true"] {
      --colour-bg: var(--o-colors-page-background);
      --colour-text: var(--o-colors-body-text);

      border-color: var(--colour-bg);
    }
  }

  .content {
    padding: 0 1rem;
  }

  .gpt {
    display: grid;
    gap: 0.5rem;

    padding-block: 0.5rem;
  }
</style>
