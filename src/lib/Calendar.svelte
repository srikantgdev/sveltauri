<script>
  import {onMount} from 'svelte';
  import { invoke } from "@tauri-apps/api/tauri";
  import moment from 'moment-timezone';

  let days = [];
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  let monthMarks = [];
  let weekmarks = [];
  let dayMarks = [];
  let curmo = 0;
  let curyr = 0;
  let curdt = moment();
  let curday = {w:0, d:0};

  const Point = (ang, idx, len) => {
    const rad = (idx * ang - 90) * Math.PI / 180;
    const x = Math.cos(rad) * len;
    const y = Math.sin(rad) * len;
    return {x,y}
  }

  onMount(() => {
    const mthAng = 360 / months.length;
    curdt = moment();
    curday = {w: curdt.weekday(), d: curdt.date()}
    curmo = curdt.month();
    curyr = curdt.year();
    const angw = 360 / 7;
    weekmarks = weekdays.map((w,i) => {
      const pt = Point(angw,i,25)
      return {val: w, x: pt.x, y: pt.y}
    });
    monthMarks = months.map((m,i) => {
      const pt = Point(30,i,44)
      return {val: m, x: pt.x, y: pt.y}
    })
    updatedays();
  });
  const updatedays = () => {
    const ldt = moment([curyr, curmo]).endOf('month').date();
    const ang = 360 / (ldt);
    days = [];
    dayMarks = [];
    for (let d=1; d <= ldt; d++) {
      const dt = moment([curyr,curmo,d]);
      days = [...days, {w:dt.format('d'), d}]
      const pt = Point(ang,d,36);
      dayMarks = [...dayMarks, {x:pt.x, y:pt.y}]
    }
    console.log('days::', days);
  }

  const setMonth̐ = (m) => {
    curmo = m;
    updatedays();
  }
  $: lastdate = moment([curyr,curmo]).endOf('month').date();
  $: angw = curday.w * (360 / 7) - 90;
  $: angd = (curday.d) * (360 / lastdate) - 90;
  $: angm = (curmo * 30 - 90);

</script>

<main>
  <h2>Calendar</h2>
  <svg viewBox="-50 -50 100 100">
    <circle r={49} stroke="brown" />
    <circle r={40} fill='skyblue' stroke="olive" />
    <circle r={30} fill='aliceblue' stroke="olive" />
    {#each monthMarks as mark,m}
      <text x={mark.x} y={mark.y} on:click={() => setMonth̐(m)} text-anchor="middle" font-weight={m==curmo ? 600 : 400} fill={m==curmo ? 'brown':'olive'} font-size={m==curmo ? 4 : 3}>{mark.val}</text>
    {/each}
    {#each dayMarks as dm,d}
      <text x={dm.x} y={dm.y} font-size={d==curday.d ? 4 : 3} font-weight={d==curday.d ? 600 : 400} fill={d==curday.d ? 'purple':'navy'} font-family="Courier New" text-anchor="middle">{d+1}</text>
    {/each}
    {#each weekmarks as w,d}
      <text x={w.x} y={w.y} font-size={d==curday.w ? 4 : 3} fill={d==curday.w ? 'blue':'grey'} font-weight={d==curday.w ? 600 : 400} font-family="Consolas" text-anchor="middle">{w.val}</text>
    {/each}
    <polyline fill='transparent' stroke="blue" stroke-width="0.2" points="0,0 27,-2 30,3 26,5 0,0" transform={`rotate(${angw})`} />
    <polyline stroke='red' stroke-width="0.2" fill="transparent" points="0,0 34,-4 40,0 34,5 0,0" transform={`rotate(${angd})`}/>
    <polyline fill='transparent' stroke-width="0.4" stroke='brown' points="0,0 48,-5 48,4 0,0" transform={`rotate(${angm})`} />
  </svg>
</main>