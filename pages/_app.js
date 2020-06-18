import '../styles/app.css'
import '../styles/style.css'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'

const App = ({ Component, pageProps }) => {
  /*  const store = useStore(pageProps.initialReduxState)*/
  return <Component {...pageProps} />
}

export default App
