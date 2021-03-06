import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const Head = props => (
  <React.Fragment>
    <NextHead>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <title>{props.title || ''}</title>

      <link rel="shortcut icon" href="/static/favicon.ico"/>

      {/* css */}
      <link href="/static/css/css.css" rel="stylesheet"/>
      <link rel="stylesheet" href="/static/css/font-awesome.min.css"/>
      <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="/static/css/jquery.fancybox.min.css"/>
      {/* <link rel="stylesheet" href="/static/css/animate.css"/> */}
      {/* <link rel="stylesheet" href="/static/css/loadingAnimate.css"/> */}
      {/* <link rel="stylesheet" href="/static/css/owl.css"/> */}
      <link rel="stylesheet" href="/static/css/styles.css"/>
      <link rel="stylesheet" href="/static/css/responsive.css"/>

      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    </NextHead>
  </React.Fragment>
)

Head.propTypes = {
  title: string
}

export default Head
