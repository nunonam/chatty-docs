import React from 'react'

import Router from 'next/router'
import { logEvent } from 'firebase/analytics';
import { analytics } from '../lib/analytics';

// Track client-side page views with Segment
Router.events.on('routeChangeComplete', (url) => {
  // window.analytics.page(url)
  logEvent(analytics, 'page_view', { url: url });
})

const Page = ({ children }) => <div>{children}</div>

export default Page
