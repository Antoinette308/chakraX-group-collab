import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    breakpoints: {
      tablet: "992px",
      desktop: "1200px",
      wide: "1400px",
    },
    colors: {
      brand: {
        500: "tomato",
      },
    },
  },
})

export const system = createSystem(defaultBaseConfig, customConfig)