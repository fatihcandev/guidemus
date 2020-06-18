import cn from 'classnames'
import { Field } from 'formik'

const Input = ({ name, type, ph, className }) => (
  <input
    type={type}
    name={name}
    className={cn(
      'rounded-md bg-gray-100 focus:outline-none focus:bg-white py-3',
      className
    )}
    placeholder={ph}
    aria-label={ph}
  />
)

export default Input
