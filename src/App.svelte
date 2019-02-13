<div class="configs">
	<div class="row">
		<input type="file" class="input-full" on:change={uploadImage} />
	</div>
	<div class="row size">
		<input type="text" bind:value={width} />
		<div class="x">x</div>
		<input type="text" bind:value={height} />
	</div>
	<div class="row">
		<input type="text" class="input-full" placeholder="Título" bind:value={title} />
	</div>
	<div class="row">
		<textarea placeholder="Descrição" bind:value={description}></textarea>
	</div>
</div>

<div class="result">
	{#if bgSrc}
	<div class="figure" style={figureStyle}>
		<img src="./assets/logo.png" class="logo" alt="10de10">
		<div class="content">
			<div class="title">{title}</div>
			<div class="description">{description}</div>
		</div>
	</div>
	{/if}
</div>


<script>
  import { onMount } from "svelte";

  export let title = "VOCÊ SABIA?";
  export let description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur minus sed dolores ex velit itaque vitae nulla repellendus dicta, fuga, repudiandae libero quos maxime, commodi cupiditate ea explicabo facere.";
  export let width = 1000;
  export let height = 1000;

  let figure;
  let bgSrc;

  let figureStyle;
  $: {
    figureStyle = [
      `width: ${width}px`,
      `height: ${height}px`,
      `background-image: url(${bgSrc})`
    ].join(";");
  }

  const uploadImage = e => {
    const reader = new FileReader();
    reader.addEventListener("load", e => {
      const img = new Image();
      img.onload = () => {
        bgSrc = img.src;
      };
      img.src = e.target.result;
    });
    reader.readAsDataURL(e.target.files[0]);
  };
</script>

<style>
  :root {
    --red: #9f0e00;
    --red-glow: #ff0029;
  }

  input,
  textarea {
    margin: 0;
  }

  textarea {
    resize: none;
    width: 100%;
    height: 100px;
  }

  .row {
    margin-bottom: 10px;
  }

  .configs {
    width: 500px;
    margin: 0 auto 50px;
  }

  .size {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .size input {
    flex: 1 0 auto;
  }

  .x {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    text-align: center;
    flex: 0 0 auto;
  }

  .input-full {
    width: 100%;
  }

  .result {
    margin-bottom: 50px;
  }

  .figure {
    margin: 0 auto;
    position: relative;
    background-position: center;
    background-size: cover;
  }

  img {
    max-width: 100%;
  }

  .logo {
    position: absolute;
    top: 28px;
    right: 28px;
    width: 118px;
    height: auto;
  }

  .content {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    text-align: center;
  }

  .title,
  .description {
    background-color: var(--red);
    color: #fff;
  }

  .title {
    display: inline-block;
    position: relative;
    padding: 11px 28px;
    margin-bottom: 24px;
    font-family: Alberto;
    font-size: 67px;
    text-align: center;
  }

  .title::before {
    content: "";
    display: block;
    position: absolute;
    top: 12px;
    left: -6px;
    width: calc(100% - 19px);
    height: calc(100% - 6px);
    background-color: var(--red-glow);
    box-shadow: 0 0 24px var(--red-glow);
    z-index: -1;
  }

  .description {
    text-align: left;
    width: 100%;
    max-width: 82%;
    margin: 0 auto;
    font-family: Roboto;
    font-size: 40px;
    font-weight: 700;
    padding: 20px 22px;
    box-shadow: -13px 17px var(--red-glow), -13px 17px 24px var(--red-glow);
  }
</style>
