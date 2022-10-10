import React from 'react'

import * as snippet from '@segment/snippet'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../components/Theme'

const {
  // This write key is associated with https://segment.com/nextjs-example/sources/nextjs.
  ANALYTICS_WRITE_KEY = 'gURNntij37hKxpSUjda9znzNaOxZBG6H',
  NODE_ENV = 'development'
} = process.env

export default class Document extends NextDocument {
  renderSnippet() {
    const opts = {
      apiKey: ANALYTICS_WRITE_KEY,
      // note: the page option only covers SSR tracking.
      // Page.js is used to track other events using `window.analytics.page()`
      page: true
    }

    if (NODE_ENV === 'development') {
      return snippet.max(opts)
    }

    return snippet.min(opts)
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
          <meta content='#262626' name='theme-color' />
          <link rel='shortcut icon' href='/favicon.svg' />
          <script
            type="text/javascript"
            src="https://app.termly.io/embed.min.js"
            data-auto-block="on"
            data-website-uuid="3eb2e29f-9e88-4035-a719-f09b516d6191"
            async
          />
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
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
