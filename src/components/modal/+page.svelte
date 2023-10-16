<script lang="ts">
  // import { onMount } from "svelte";
  export let isOpen: boolean;
  export let close: () => void;

  
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
 
  class={isOpen
    ? "fixed inset-0 flex p-4 items-center justify-center z-50"
    : "hidden"}
  style="background: rgba(0, 0, 0, 0.5);"
>
  <div class="bg-white p-4 w-96 h-72 overflow-y-auto rounded-lg shadow-lg">
    <div class="flex justify-between items-center">
      <div class="text-xl font-bold mb-4">Modal Header</div>
      <div on:click={close} class="text-xl font-bold mb-4 cursor-pointer">X</div>
  </div>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
      blanditiis repellendus quod iusto expedita adipisci exercitationem eos et,
      facilis aut reiciendis sit eum culpa asperiores temporibus ea quos
      eligendi, harum officia. eum culpa asperiores temporibus ea quos eligendi,
      harum officia. eum culpa asperiores temporibus ea quos eligendi, harum
      officia.
    </p>
  </div>
</div>
