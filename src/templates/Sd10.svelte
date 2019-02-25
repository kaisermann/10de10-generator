<Template showL>
  <div class="content">
    <div class="title" contenteditable="true">
      <span>Semana dos </span>
    </div>
    <img src="./assets/logo.png" class="logo" alt="10de10" />
    <div class="number" contenteditable="true">
      <span>#XXX XX/XX/XXXX</span>
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
    line-height: 1.6;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
  }

  span {
    color: var(--white);
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }

  .number {
    font-size: 52px;
    margin-top: 18px;
  }

  .title {
    font-weight: bold;
    font-size: 70px;
    max-width: 80%;
  }
</style>
