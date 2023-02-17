<script lang="ts">
  import {onMount} from 'svelte';
  import { invoke } from "@tauri-apps/api/tauri";
  import moment from 'moment-timezone';
  let zone = {name:'', val:''}
  let ztime = moment()
  let localtime = moment()
  let textx = 0;
  let texty = 0;
  let zones = [
    {name: 'US-West', val:'America/Los_Angeles'},
    {name: 'US-East', val: 'America/New_York'},
    {name: 'U.K.', val: 'Europe/London'},
    {name: 'France', val: 'Europe/Paris'},
    {name: 'India', val: 'Asia/Kolkata'},
    {name: 'Japan', val: 'Asia/Tokyo'},
    {name: 'Perth', val: 'Australia/Perth'},
    {name: 'Sydney', val: 'Australia/Sydney'},
    {name: 'New Zealand', val: 'Pacific/Auckland'},
  ]
  let marks = [];
  let angh = 0;
  let angm = 0;
  let angs = 0;
  let anghl = 0;
  let angml = 0;

  onMount(() => {
    zone = zones[0]
    const ang = 360 / zones.length;
    for (let i=0; i < zones.length; i++) {
      const rad = (i * ang - 90) * Math.PI / 180
      const z = zones[i]
      marks = [
        ...marks,
        {
          x: Math.cos(rad) * 40,
          y: Math.sin(rad) * 40,
          val: z
        }
      ]
    }
    setInterval(async () => {
      const zt = moment().tz(zone.val)
      const localt = moment();
      ztime = zt
      localtime = localt.format("ddd DD MMM HH:mm:ss a Z")
      const thr = zt.hour()
      const tmi = zt.minute()
      const tse = zt.second()
      angh = await invoke("anghr", {h: thr, m: tmi})
      angm = await invoke("angmi", {m: tmi, s: tse})
      angs = await invoke("angse", {s: tse})
      anghl = await invoke("anghr", {h: localt.hour(), m: localt.minute()})
      angml = await invoke("angmi", {m: localt.minute(), s: localt.second()})
    },1000)
  })
</script>

<style>
  .hand {
    transition: all 0.5s;
  }
</style>
<div>
  <h2>{zone.name} <small>{zone.val}</small></h2>
  <h3>{ztime.format('ddd DD MMM HH:mm:ss \(a\) z Z')}</h3>
  <p style="background-color:#eee;color:brown">Local: {localtime}</p>
  <svg height={400} width={400} viewBox="-50 -50 100 100">
    <circle r={49} fill="transparent" stroke="cadetblue" stroke-width="0.2" />
    <circle r={32} fill="lightblue" />
    {#each marks as m,i}
      <text on:click={() => (zone=m.val)} font-weight={zone.name== m.val.name ? 600 :400} cursor="pointer" x={m.x} y={m.y} font-size={zone.name== m.val.name ? 5 : 4} text-anchor="middle">{m.val.name}</text>
    {/each}
    <line class="hand" x1={-6} x2={25} transform={`rotate(${angh} 0 0)`} stroke="blue" stroke-linecap="round" />
    <line class="hand" x1={-6} x2={30} transform={`rotate(${angm} 0 0)`} stroke="blue" stroke-linecap="round" />
    <line class="hand" x1={-6} x2={31} transform={`rotate(${angs} 0 0)`} stroke="blue" stroke-linecap="round" stroke-width="0.2" />
    <!-- show local time -->
    <line class="hand" x1={-6} x2={25} transform={`rotate(${anghl} 0 0)`} stroke="brown" stroke-width={0.4} stroke-linecap="round" />
    <line class="hand" x1={-6} x2={31} transform={`rotate(${angml} 0 0)`} stroke="brown" stroke-width={0.4} stroke-linecap="round" />
  </svg>
</div>