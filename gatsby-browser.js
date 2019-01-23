/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import GlobalStyles from './src/styles/global'
import Layout from './src/components/Layout'


// eslint-disable-next-line
export const wrapRootElement = ({ element }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </React.Fragment>
  )
}
