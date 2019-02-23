<Template>
  <div class="content">
    <div class="number" contenteditable="true">
      <span>10deCast #XX</span>
    </div>
    <div class="title" contenteditable="true">
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
    </div>
  </div>
</Template>

<script>
  import Template from '../components/Template.svelte'
</script>

<style>
  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-family: var(--oswald);
    padding: 25px;
    line-height: 1.8;
  }

  span {
    background-color: var(--red);
    line-height: 1;
    color: var(--white);
  }

  .number {
    font-weight: bold;
    font-size: 32px;
  }

  .title {
    font-size: 44px;
    max-width: 80%;
  }
</style>
