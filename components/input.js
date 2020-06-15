import cd from 'classnames'

const Input = ({ className, ph, ...props }) => (
  <input
    className={cd('rounded-md focus:outline-none', className)}
    placeholder={ph}
    {...props}
  />
)

export default Input
