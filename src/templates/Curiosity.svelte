<Template>
	<div class="content">
		<div class="title" contenteditable="true">
			VOCÊ SABIA?
		</div>
		<div class="description" contenteditable="true">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur minus sed dolores ex velit itaque vitae
			nulla repellendus dicta, fuga, repudiandae libero quos maxime, commodi cupiditate ea explicabo facere.
		</div>
	</div>
</Template>


<script>
  import Template from "../components/Template.svelte";
</script>

<style>
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
