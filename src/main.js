import App from './App.svelte'

window.process = {
  env: { NODE_ENV: 'development' },
}

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
})

export default app
