<script lang="ts">
  import type { FTAdsSlotData } from "@/types/data.d.ts";

  import Slot from "@/components/slot.svelte";

  const { slots }: { slots: FTAdsSlotData[] } = $props();

  // $inspect(slots).with(console.trace);
</script>

<div class="slots">
  <h2>Slot data</h2>
  {#if slots.length === 0}
    <p>Loading</p>
  {:else}
    {#each slots as slot (slot.elementId)}
      <Slot {slot} />
    {/each}
  {/if}
</div>

<style>
  .slots {
    display: grid;
    gap: 0.5rem;
  }
</style>
