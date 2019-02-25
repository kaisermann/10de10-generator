<div class="template" style="{templateStyle}">
  <input type="file" class="upload-area" on:change="{uploadImage}" />

  {#if !bgSrc}
  <div class="upload-area-cta" bind:this="{uploadCTA}">
    Clique para subir uma imagem ou arraste-a
  </div>
  {/if}
  <slot></slot>
</div>

<script>
  import { onMount } from 'svelte'

  let bgFilename = ''
  let bgSrc
  let uploadCTA

  export let width = 1000
  export let height = 1000

  $: templateStyle = [
    `background-image: url(${bgSrc})`,
    `width: ${width}px`,
    `width: ${height}px`,
  ].join(';')

  const uploadImage = e => {
    const reader = new FileReader()
    reader.onload = ({ target: { result } }) => {
      bgSrc = result
      bgFilename = uploadedFile.name
    }
    const [uploadedFile] = e.target.files
    reader.readAsDataURL(uploadedFile)
  }

  onMount(() => {
    const chars = uploadCTA.innerText.split('')
    const colors = ['orange', '#eed600', 'green', 'cyan', 'blue', 'violet']
    uploadCTA.innerHTML = chars.reduce((acc, char) => {
      let curColor = colors.shift()
      colors.push(curColor)
      acc += `<span style="color: ${curColor}">${char}</span>`
      return acc
    }, '')
  })
</script>

<style>
  .template {
    position: relative;
    background-position: center;
    background-size: cover;
    width: 1000px;
    height: 1000px;
    background-color: #f0f0f0;
    overflow: hidden;
  }

  img {
    max-width: 100%;
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
</style>
