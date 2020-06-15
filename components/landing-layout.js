import LandingNav from './landing-nav'

const LandingLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <LandingNav />
    <main>{children}</main>
  </div>
)

export default LandingLayout
