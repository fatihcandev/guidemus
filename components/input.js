import cn from 'classnames'

const Input = ({ className, ph, label, ...props }) => (
  <input
    className={cn('rounded-md focus:outline-none', className)}
    placeholder={ph}
    aria-label={label}
    {...props}
  />
)

export default Input
