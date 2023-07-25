import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        game: resolve(__dirname, "game.html"),
        cadastro: resolve(__dirname, "cadastro.html"),
        listagem: resolve(__dirname, "listagem.html"),
      },
    },
  },
});
