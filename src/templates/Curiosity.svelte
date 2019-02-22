<div class="result">
	<div class="figure" style={figureStyle}>
		<input type="file" class="upload-area" on:change={uploadImage} />
		{#if !bgSrc}
		<div class="upload-area-cta" bind:this={uploadCTA}>
			Clique para subir uma imagem ou arraste-a
		</div>
		{/if}
		<img src="./assets/logo.png" class="logo" alt="10de10">
		<div class="content">
			<div class="title" contenteditable="true">
				VOCÊ SABIA?
			</div>
			<div class="description" contenteditable="true">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur minus sed dolores ex velit itaque vitae
				nulla repellendus dicta, fuga, repudiandae libero quos maxime, commodi cupiditate ea explicabo facere.
			</div>
		</div>
	</div>
</div>


<script>
  import { onMount } from "svelte";

  let bgFilename = "";
  let bgSrc;

  let uploadCTA;

  $: figureStyle = `background-image: url(${bgSrc})`;

  const uploadImage = e => {
    const reader = new FileReader();
    reader.onload = ({ target: { result } }) => {
      bgSrc = result;
      bgFilename = uploadedFile.name;
    };
    const [uploadedFile] = e.target.files;
    reader.readAsDataURL(uploadedFile);
  };

  onMount(() => {
    const chars = uploadCTA.innerText.split("");
    const colors = ["orange", "#eed600", "green", "cyan", "blue", "violet"];
    uploadCTA.innerHTML = chars.reduce((acc, char) => {
      let curColor = colors.shift();
      colors.push(curColor);
      acc += `<span style="color: ${curColor}">${char}</span>`;
      return acc;
    }, "");
  });
</script>

<style>
  h1 {
    text-align: center;
    margin: 10px 0 30px;
    color: #b8a9d1;
  }

  input {
    margin: 0;
  }
  .figure {
    position: relative;
    background-position: center;
    background-size: cover;
    width: 1000px;
    height: 1000px;
    background-color: #f0f0f0;
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
    pointer-events: none;
  }

  .upload-area {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  .upload-area-cta {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--roboto);
    font-size: 32px;
    width: 285px;
    text-align: center;
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
    font-family: var(--alberto);
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
    font-family: var(--roboto);
    font-size: 40px;
    font-weight: 700;
    padding: 20px 22px;
    box-shadow: -13px 17px var(--red-glow), -13px 17px 24px var(--red-glow);
  }
</style>
