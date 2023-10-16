<script lang="ts">
  import Modal from "../modal/+page.svelte";

  export let primary: boolean = false;
  export let secondary: boolean = false;

  let modalOpen = false;

  function openModal() {
    modalOpen = true;
  }

  function closeModal() {
    modalOpen = false;
  }

  function handleClick(): any {
    openModal();
  }
</script>

<button
  on:click={handleClick}
  class="{primary
    ? 'bg-red-500 text-white hover:bg-red-700'
    : secondary
    ? 'bg-blue-500 text-white  hover:bg-blue-700'
    : 'bg-gray-400 text-white  hover:bg-gray-700 '} p-2 rounded-md"
>
  {primary ? "Primary" : secondary ? "Secondary" : "Default"}
</button>

<Modal isOpen={modalOpen} close={() => closeModal()} />
