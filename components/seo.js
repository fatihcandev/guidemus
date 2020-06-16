import Head from 'next/head'
import { Helmet } from 'react-helmet'

const SEO = ({ title }) => {
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{title}</title>
      <link rel="canonical" href="https://guidemus-nextjs.vercel.app/" />
      <meta
        name="description"
        content="A platform for the students to find the best guide for their Erasmus journey."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://guidemus-nextjs.vercel.app/" />
      <meta property="og:title" content="Pomodoro Timer" />
      <meta
        property="og:description"
        content="A platform for the students to find the best guide for their Erasmus journey."
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://guidemus-nextjs.vercel.app/"
      />
      <meta property="twitter:title" content="Pomodoro Timer" />
      <meta
        property="twitter:description"
        content="A platform for the students to find the best guide for their Erasmus journey."
      />
    </Helmet>
  )
}

export default SEO
