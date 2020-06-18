import Button from './button'
import Spinner from './spinner'

const FormButton = ({ onClick, isLoading, children }) => (
  <Button
    type="submit"
    className="bg-blue-500 py-3 rounded-md text-white font-bold transition-colors duration-300 hover:bg-blue-600"
    disabled={isLoading}
    onClick={onClick}
  >
    {isLoading ? <Spinner /> : children}
  </Button>
)

export default FormButton
