<script>
  import { invoke } from "@tauri-apps/api/tauri";
  let num = 0;
  let currentOption = 'ctof';
  let result = '??';
  let options = {
    'ctof'    : '°C to °F',
    'ftoc'    : '°F to °C',
    'mtocm'   : 'Metre to Cm',
    'cmtom'   : 'Cm to Metre',
    'kmtomile': 'Km to Mile',
    'miletokm': 'Mile to Km',
    'kgtolbs' : 'Kg to Lbs',
    'lbstokg' : 'Lbs to Kg',
  }
  const doconvert = async (option) => {
    currentOption = option;
    result = await invoke('convert', {n: num, option: option});
  }

  const handleinput = async () => {
    result = await invoke('convert', {n: num, option: currentOption});
  }
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
    justify-content: space-around;
  }
  .row {
    display: flex;
    justify-content: space-evenly;
  }
  mark {
    padding: 0.125rem 0.5rem;
  }
</style>
<main>
  <h2>
    Conversions
  </h2>
  <p>
    Type a number in the textbox and press &lt;enter&gt;
  </p>
  <div style="margin: 1rem;display:flex;align-items:center;gap:1rem;justify-content: center;">
    <mark>{options[currentOption]}</mark> :: <input type="number" on:change={handleinput} bind:value={num}> &raquo; <h3>{result}</h3>
  </div>
  <div class="grid">
    {#each Object.keys(options) as key}
    <button on:click={() => doconvert(key)}>{options[key]}</button>
    {/each}
    <!-- <button on:click={() => doconvert('ctof')}>°C to °F</button>
    <button on:click={() => doconvert('mtocm')}>Metre to Cm</button>
    <button on:click={() => doconvert('cmtom')}>Cm to Metre</button>
    <button on:click={() => doconvert('kmtomile')}>Km to Mile</button>
    <button on:click={() => doconvert('miletokm')}>Mile to Km</button>
    <button on:click={() => doconvert('kgtolbs')}>Kg to Lbs</button>
    <button on:click={() => doconvert('lbstokg')}>Lbs to Kg</button> -->
  </div>
</main>