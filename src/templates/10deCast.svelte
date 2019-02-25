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
    padding: 35px;
  }

  span {
    background-color: var(--red);
    line-height: 1;
    color: var(--white);
    box-decoration-break: clone;
    box-shadow: 10px 0 0 var(--red), -10px 0 0 var(--red);
  }

  .number {
    font-size: 32px;
    line-height: 1.8;
  }

  .title {
    font-weight: bold;
    font-size: 52px;
    max-width: 80%;
    line-height: 1.6;
  }
</style>
