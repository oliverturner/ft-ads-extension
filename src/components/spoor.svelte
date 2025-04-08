<script lang="ts">
  import type { FTAdsSpoorData } from "@/types/data.d.ts";

  type SharedKeys = typeof sharedKeys;
  type SharedContext = Pick<
    FTAdsSpoorData["context"],
    SharedKeys["context"][number]
  >;

  const { requests }: { requests: Record<string, FTAdsSpoorData> } = $props();

  const sharedKeys = {
    context: [
      "adunit",
      "advert",
      "app",
      "appVersion",
      "active_ammit_flags",
      "deviceDimensions",
      "edition",
      "isProduction",
      "isUserLoggedIn",
      "pageKitVersion",
      "product",
      "root_id",
    ],
  } as const;

  const slotKeys = {
    context: ["creative", "id"],
  };

  const contextObjectKeys = [
    "adunit",
    "advert",
    "active_ammit_flags",
    "deviceDimensions",
  ];

  const advertObjectKeys = ["consents", "screen", "window"];

  const shared = $derived.by(() => {
    const firstKey = Object.keys(requests)[0];

    if (!firstKey) {
      return {
        context: {},
        device: {},
        system: {},
        user: {},
      };
    }

    const request = requests[firstKey] ?? {};

    const context = {} as SharedContext;
    for (const key of sharedKeys.context) {
      context[key] = request.context?.[key] as never;
    }

    return {
      context,
      device: request.device ?? {},
      system: request.system ?? {},
      user: request.user ?? {},
    };
  });
</script>

<div class="requests">
  <h2>Spoor requests</h2>

  <section class="shared">
    <h3>Shared</h3>
    <p>Data common to every slot request</p>
    <h4>Context</h4>
    <ul>
      {#each Object.entries(shared.context) as [key, value] (key)}
        <li>
          {#if contextObjectKeys.includes(key)}
            {key}
            <ul>
              {#each Object.entries(value) as [k, v] (k)}
                {#if advertObjectKeys.includes(k)}
                  <li>
                    {k}:
                    <ul>
                      {#each Object.entries(v) as [k1, v1] (k1)}
                        <li>{k1}: {v1}</li>
                      {/each}
                    </ul>
                  </li>
                {:else}
                  <li>{k}: {v}</li>
                {/if}
              {/each}
            </ul>
          {:else}
            {key}: {value}
          {/if}
        </li>
      {/each}
    </ul>

    <h4>Device</h4>
    <ul>
      {#each Object.entries(shared.device) as [k, v] (k)}
        <li>
          {k}: {v}
        </li>
      {/each}
    </ul>

    <h4>System</h4>
    <ul>
      {#each Object.entries(shared.system) as [k, v] (k)}
        <li>
          {k}: {v}
        </li>
      {/each}
    </ul>

    <h4>User</h4>
    <ul>
      {#each Object.entries(shared.user) as [k, v] (k)}
        <li>
          {k}: {v}
        </li>
      {/each}
    </ul>
  </section>

  <section class="slots">
    <h3>Slot-specific</h3>
    {#each Object.entries(requests) as [key, value] (key)}
      <div class="slot">
        <h3>{key}: {value.action}</h3>
        <h4>context</h4>

        {#each Object.entries(value.context) as [k, v] (k)}
          {#if slotKeys.context.includes(k)}
            {#if k === "id"}
              {k}: {v}
            {:else}
              {k}:
              <ul>
                {#each Object.entries(v) as [k2, v2] (k2)}
                  <li>
                    {k2}: {v2}
                  </li>
                {/each}
              </ul>
            {/if}
          {/if}
        {/each}
      </div>
    {/each}
  </section>
</div>

<style>
  .requests {
    display: grid;
    gap: 1rem;
  }

  .shared,
  .slots {
    display: grid;
    gap: 0.5rem;
  }

  .slot {
    display: grid;
    gap: 0.5rem;

    padding: 0.5rem;
    background-color: var(--o-colors-box-background);
  }
</style>
