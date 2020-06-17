import cn from 'classnames'

const Input = ({ password, ph, onChange, value, className, ...props }) => (
  <input
    type={password ? 'password' : 'text'}
    className={cn(
      'rounded-md bg-gray-100 focus:outline-none focus:bg-white py-3',
      className
    )}
    placeholder={ph}
    aria-label={ph}
    onChange={(e) => onChange(e.target.value)}
    value={value}
    {...props}
  />
)

export default Input
