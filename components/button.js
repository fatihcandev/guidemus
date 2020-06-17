import cn from 'classnames'

const Button = ({ className, children, ...props }) => (
  <button
    className={cn(
      'focus:outline-none border-none flex items-center justify-center',
      className
    )}
    {...props}
  >
    {children}
  </button>
)

export default Button
