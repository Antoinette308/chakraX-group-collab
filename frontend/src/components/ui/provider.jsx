'use client'

import { ChakraProvider} from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import { createSystem, defaultConfig } from "@chakra-ui/react"

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Lexend Variable" },
        body: { value: "Lexend Variable" },
      },
    },
  },
})


export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
