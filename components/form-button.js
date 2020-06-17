import Button from './button'
import Spinner from './spinner'

const FormButton = ({ onClick, isLoading, children }) => (
  <Button
    className="bg-blue-500 py-3 rounded-md text-white font-bold"
    disabled={isLoading}
    onClick={onClick}
  >
    {isLoading ? <Spinner /> : children}
  </Button>
)

export default FormButton
