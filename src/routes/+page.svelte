<script lang="ts">
  import Button from "../components/button/+page.svelte";

  export let data: any;

  let blogData: unknown = data?.todos || [];
 console.log(data);
</script>


<div class="flex flex-row w-screen h-screen justify-center items-center gap-5">
  <Button primary={false} secondary={false} />
  <Button primary={true} secondary={false} />
  <Button primary={false} secondary={true} />
</div>
