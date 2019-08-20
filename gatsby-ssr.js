/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
/* eslint-disable react/no-danger */

const React = require('react')
const { renderToString } = require('react-dom/server')
const JssProvider = require('react-jss/lib/JssProvider').default

function replaceRenderer({
  bodyComponent,
  replaceBodyHTMLString,
}) {
  // Get the context of the page to collected side effects.

  const bodyHTML = renderToString(
    <JssProvider registry={muiPageContext.sheetsRegistry}>
      {bodyComponent}
    </JssProvider>
  )

  replaceBodyHTMLString(bodyHTML)
}

exports.replaceRenderer = replaceRenderer

// It's not ready yet: https://github.com/gatsbyjs/gatsby/issues/8237.
//
// const withRoot = require('./src/withRoot').default;
// const WithRoot = withRoot(props => props.children);

// exports.wrapRootElement = ({ element }) => {
//   return <WithRoot>{element}</WithRoot>;
// };
