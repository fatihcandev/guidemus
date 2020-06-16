import LandingNav from './landing-nav'
import cn from 'classnames'
import layoutStyles from '../styles/landing-layout.module.scss'
import mainStyles from '../styles/main.module.scss'
import SEO from './seo'
import Image from './image'
import { Html } from 'next/document'

const landing = require('../public/landing.jpg?webp?lqip')

const LandingLayout = ({ children }) => (
  <>
    <SEO title="guidemus | Find the best guide for your Erasmus journey." />
    <Image
      src={landing.src}
      alt="directions"
      className="fixed min-h-screen object-cover top-0 bottom-0 right-0 left-0 z-0"
    />
    <section className={cn('min-h-screen flex flex-col', layoutStyles.layout)}>
      <LandingNav />
      <main className={cn('flex flex-col justify-center p-4', mainStyles.main)}>
        {children}
      </main>
    </section>
  </>
)

export default LandingLayout
