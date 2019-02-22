<div class="container">
	<header>
		<h1>10Ḋḕ10 ḠḕṆḕṙḀṮṏṙ</h1>
		<div class="menu">
			<button on:click={()=> (currentTemplate = Curiosity)}>Curiosidade</button>
			<button on:click={()=> (currentTemplate = Story)}>Story</button>
			<button on:click={()=> (currentTemplate = Cast)}>10deCast</button>
			<button on:click={()=> (currentTemplate = Sd10)}>Semana dos 10</button>
		</div>
	</header>
	<div class="content">
		{#if currentTemplate}
		<svelte:component this={currentTemplate} />
		{/if}
	</div>
</div>

<script>
  import Curiosity from "./templates/Curiosity.svelte";
  import Sd10 from "./templates/Sd10.svelte";
  import Cast from "./templates/10deCast.svelte";
  import Story from "./templates/Story.svelte";

  let currentTemplate;
</script>

<style>
  :root {
    --red: #9f0e00;
    --red-glow: #ff0029;
    --roboto: Roboto, Arial, sans-serif;
    --alberto: Alberto, Impact, Arial, sans-serif;
  }

  h1 {
    margin: 10px 0 15px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: #b8a9d1;
  }

  .menu {
    display: flex;
    justify-content: center;
  }

  .menu button + button {
    margin-left: 5px;
  }

  .container {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "header"
      "content";
    min-height: 100vh;
  }

  header {
    grid-area: header;
    padding: 16px 8px;
  }

  .content {
    grid-area: content;
    display: flex;
    justify-content: center;
    padding: 16px 8px;
    background: #f7f7f7;
  }
</style>
