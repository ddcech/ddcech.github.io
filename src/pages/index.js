import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Header from 'components/Header'
import Quote from 'components/Quote'
import About from 'components/About'
import Portfolio from 'components/Portfolio'
import EndQuote from 'components/EndQuote'
import EndNote from 'components/EndNote'
import Footer from 'components/Footer'

class Home extends Component {
  render() {
    console.log(this.props)
    const { title, intro, quote, about } = this.props.data.allPagesJson.edges[0].node

    return (
      <Fragment>
        <Header title={title} intro={intro} />
        <Quote text={quote} />
        <About text={about} />
        {/* <Portfolio /> */}
        <EndQuote />
        <EndNote />
        <Footer />
      </Fragment>
    )
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
}


export const query = graphql`
  query IndexQuery {
    allPagesJson(filter: {pageName: {eq: "landing"}}) {
      edges {
        node {
          id
          title
          intro
          quote
          about
        }
      }
    }
  }
`

export default Home