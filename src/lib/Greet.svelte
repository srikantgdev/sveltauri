<script lang="ts">
    import {onMount} from 'svelte';
    import { invoke } from "@tauri-apps/api/tauri"
    let name = "guest"
    let greetMsg = ""
    

    onMount(() => {
      greet()
    })

    $: {
      
    }

    async function greet(){
      // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
      greetMsg = await invoke("greet", { name })
    }
  </script>

  <div>
    <input id="greet-input" on:input={greet} placeholder="Enter a name..." bind:value={name} />
    <button on:click={greet}>
      Greet Me!!!
    </button>
  </div>
  <p>
    {greetMsg}
  </p>

