import handlebars from '@vituum/vite-plugin-handlebars'

export default {
  plugins: [
    handlebars()
  ],
  build: {
    rollupOptions: {
      input: ['src/index.hbs.html']
    }
  }
}
