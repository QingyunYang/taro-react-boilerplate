/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
const config = {
  content: ['./src/**/*.tsx'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = config
