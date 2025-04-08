<script lang="ts">
  import type { FTAdsSlotData } from "@/types/data.d.ts";

  const { slot }: { slot: FTAdsSlotData } = $props();
  const sizes = $derived.by(() => {
    return slot.sizes
      .map((size) => {
        if (typeof size === "string") {
          return size === slot.size ? `<strong>${size}</strong>` : size;
        }
        if ("width" in size && "height" in size) {
          const s = `${size.width}x${size.height}`;
          return s === slot.size ? `<strong>${s}</strong>` : s;
        }
      })
      .join(", ");
  });

  const responseInfo = $derived.by(() => {
    if (slot.responseInformation) {
      const { creativeId, lineItemId, ...extra } = slot.responseInformation;
      const adManagerUrl = "https://admanager.google.com/5887#delivery";
      const creativeUrl = `${adManagerUrl}/CreativeDetail/creativeId=${creativeId}`;
      const lineItemUrl = `${adManagerUrl}/LineItemDetail/lineItemId=${lineItemId}`;

      return {
        extra,
        creativeIdLink: `Creative ID: <a href="${creativeUrl}" target="_blank">${creativeId}</a>`,
        lineItemIdLink: `Line Item ID: <a href="${lineItemUrl}" target="_blank">${lineItemId}</a>`,
      };
    }

    return null;
  });

  const targeting = $derived.by(() => {
    const { pos, ...extra } = slot.targetingMap;
    return { pos, extra };
  });
</script>

<div class="slot">
  <h3>#{slot.elementId}</h3>

  {#if slot.displayed}
    <p>Ad unit: {slot.adUnitPath}</p>
    <p>Pos: {targeting.pos}</p>
    <p>Sizes: {@html sizes}</p>

    {#if responseInfo}
      <p>{@html responseInfo.creativeIdLink}</p>
      <p>{@html responseInfo.lineItemIdLink}</p>

      <details>
        <summary>Response info</summary>
        <ul>
          {#each Object.entries(responseInfo.extra) as [key, value]}
            {#if value !== null}
              <li>{key}: {value}</li>
            {/if}
          {/each}
        </ul>
      </details>
    {/if}

    <details>
      <summary>Targeting info</summary>
      <ul>
        {#each Object.entries(targeting.extra) as [key, value]}
          {#if value !== null}
            <li>{key}: {value}</li>
          {/if}
        {/each}
      </ul>
    </details>
  {:else}
    <p>Slot not rendered</p>
  {/if}
</div>

<style>
  .slot {
    display: grid;
    gap: 0.5rem;

    padding: 0.5rem;
    background-color: var(--o-colors-box-background);
  }
</style>
