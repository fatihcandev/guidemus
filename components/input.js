import cn from 'classnames'
import { Field } from 'formik'

const Input = ({
  name,
  type,
  ph,
  onChange,
  value,
  validationFunc,
  className,
  ...props
}) => (
  <Field
    type={type}
    name={name}
    className={cn(
      'rounded-md bg-gray-100 focus:outline-none focus:bg-white py-3',
      className
    )}
    placeholder={ph}
    validate={validationFunc}
    aria-label={ph}
    {...props}
  />
)

export default Input
