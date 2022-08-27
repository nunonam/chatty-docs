import React, { useEffect } from 'react'

import Head from 'next/head'

export function TitleAndMetaTags({ url, pathname, title, type, description, banner, schemaOrgJSONLD }) {
  useEffect(() => {
    if ('serviceworker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let registration of registrations) {
          registration.unregister()
        }
      })
    }
  })

  useEffect(() => {
    const docSearchScript = document.getElementById('docsearch')
    if (!docSearchScript) {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js'
      script.id = 'docsearch'
      script.defer = true
      document.head.appendChild(script)
      script.onload = () => {
        if (docSearchCallback) docSearchCallback()
      }
    }
    if (docSearchScript && docSearchCallback) docSearchCallback()
  })

  function docSearchCallback() {
    if (typeof docsearch == 'function') {
      docsearch({ // eslint-disable-line
        appId: 'BPNL9VRVWI',
        apiKey: '4e224ba0c25e61356926e32048d5a110',
        indexName: 'chattycloud-docs',
        inputSelector: '#searchbox',
        debug: false,
        transformData: (hits) => {
          let newHits = []
          hits.map((hit) => {
            if (hit.anchor !== null) {
              newHits.push(hit)
            }
          })
          return newHits
        }
      })
    }
  }

  return (
    <Head>
      <title>{title + ' - Documentation - ChattyCloud'}</title>

      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='description' content={description}></meta>

      <meta property='og:url' content={`${url}/${pathname}`} />
      <meta property='og:image' content={`${url}/${banner}`} />
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title + ' - Documentation - ChattyCloud'} />
      <meta property='og:description' content={description} />

      <meta name='twitter:url' content={`${url}/${pathname}`} />
      <meta name='twitter:image' content={`${url}/${banner}`} />
      <meta name='twitter:title' content={title + ' - Documentation - ChattyCloud'} />
      <meta name='twitter:description' content={description} />

      <script type='application/ld+json'>{JSON.stringify(schemaOrgJSONLD)}</script>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Head>
  )
}

TitleAndMetaTags.defaultProps = {
  url: 'https://chatty-cloud.com',
  pathname: '',
  title: 'ChattyCloud - Make your app chatty',
  type: 'website',
  description: 'Best solution to integrate chat service to your application',
  banner: 'img/index.png',
  schemaOrgJSONLD: {
    '@context': 'https://chatty-cloud.com',
    '@type': 'Organization',
    name: 'ChattyCloud, Inc.',
    url: 'https://chatty-cloud.com',
    sameAs: [
      'https://chatty-cloud.com/'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '25 Sinchon-ro',
      addressLocality: 'Seodaemun-Gu',
      addressRegion: 'Seoul',
      postalCode: '14041',
      addressCountry: 'Republic of Korea'
    }
  }
}
