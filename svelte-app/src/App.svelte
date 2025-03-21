<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import { onMount } from "svelte";

  let message = "";

  async function callServer() {
    try {
      const response = await fetch("http://172.187.194.129:8000/hello");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      message = data.message;
    } catch (error) {
      message = "Error: Could not reach the server.";
      console.error(error);
    }
  }
</script>

<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte Powered Front End</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
   This deployed site calls calls an R server and a CosmosDB Server as an imitiation of the real world application we are looking to build.
  </p>

<div>
  <p>Call our R server</p>
  <button on:click={callServer}>Click me</button>
  {#if message}
    <p>{message}</p>
  {/if}
</div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
