import withPrivateRoute from '../components/withPrivateRoute'
import { signOut } from '../firebase/auth'
import { auth } from '../firebase/config'

const Home = () => {
  return (
    <div>
      This is home
      <button onClick={() => signOut}>Logout</button>
    </div>
  )
}

Home.getInitialProps = async (props) => {
  const user = auth.currentUser
  console.log(user === null)
  return {}
}

export default withPrivateRoute(Home)
