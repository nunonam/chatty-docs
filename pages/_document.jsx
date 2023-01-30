import React from 'react'

import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../components/Theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
          <meta content='#262626' name='theme-color' />
          <link rel='shortcut icon' href='/favicon.svg' />
          {/* <script
            type="text/javascript"
            src="https://app.termly.io/embed.min.js"
            data-auto-block="on"
            data-website-uuid="3eb2e29f-9e88-4035-a719-f09b516d6191"
            async
          /> */}
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
