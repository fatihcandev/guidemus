import LandingNav from './landing-nav'
import cd from 'classnames'
import layoutStyles from '../styles/landing-layout.module.css'
import mainStyles from '../styles/main.module.css'
import Seo from './seo'

const LandingLayout = ({ children }) => (
  <>
    <Seo title="guidemus | Find the best guide for your Erasmus journey." />
    <div className={cd('min-h-screen flex flex-col', layoutStyles.layout)}>
      <LandingNav />
      <main className={mainStyles.main}>{children}</main>
    </div>
  </>
)

export default LandingLayout
