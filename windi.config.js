import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  extract: {
    include: [
      'src/**/*.{vue,jsx,tsx,svelte}',
      'shared/**/*.{vue,ts}',
      "./node_modules/flowbite/**/*.js",
    ],
    plugins: [
      require('flowbite/plugin')
    ]
  },
})