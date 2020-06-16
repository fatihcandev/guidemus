import Spinner from './spinner'

const Button = ({ children, isLoading = false, ...props }) => (
  <button {...props} disabled={isLoading}>
    {isLoading ? <Spinner /> : children}
  </button>
)

export default Button
