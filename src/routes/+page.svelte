<script>
  import Greet from "$lib/Greet.svelte";
  import Clock from "$lib/Clock.svelte";
  import Calendar from "$lib/Calendar.svelte";
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: center;
  }
</style>
<div class="row">
  <h2>@Home</h2>
  <Greet />
  <div class="grid">
    <Clock />
    <Calendar />
  </div>
</div>
