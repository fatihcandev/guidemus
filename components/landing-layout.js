import LandingNav from './landing-nav'
import cd from 'classnames'
import layoutStyles from '../styles/landing-layout.module.css'
import mainStyles from '../styles/main.module.css'

const LandingLayout = ({ children }) => (
  <div className={cd('min-h-screen flex flex-col', layoutStyles.layout)}>
    <LandingNav />
    <main className={mainStyles.main}>{children}</main>
  </div>
)

export default LandingLayout
