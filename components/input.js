import cd from 'classnames'

const Input = ({ className, ph, label, ...props }) => (
  <input
    className={cd('rounded-md focus:outline-none', className)}
    placeholder={ph}
    aria-label={label}
    {...props}
  />
)

export default Input
