<script>
  import feather from "feather-icons";
  export const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];

  /**
   * @type {string | number}
   */
   // @ts-ignore
   export let name;
  export let direction = "n";
  /**
   * @type {number}
   */
   export let strokeWidth = 2;
  /**
   * @type {any}
   */
   export let color = "#2D0A95";
  export let width = "1.6em";
  export let height = "1.6em";

 // @ts-ignore
   $: icon = feather.icons[name];
  $: rotation = directions.indexOf(direction) * 45;
 // @ts-ignore
   $: if (icon) {
    if (color) icon.attrs["stroke"] = color;
    if (strokeWidth) icon.attrs["stroke-width"] = strokeWidth;
  }
</script>

{#if icon}
  <svg
    {...icon.attrs}
    style="width: {width}; height: {height}; transform: rotate({rotation}deg);"
  >
    <g>
      {@html icon.contents}
    </g>
  </svg>
{/if}

<style>
  svg {
    width: 1em;
    height: 1em;
    overflow: visible;
    transform-origin: 50% 50%;
  }
</style>