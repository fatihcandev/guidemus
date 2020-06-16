import cn from 'classnames'

const Header = ({ className, children, ...props }) => (
  <header className={cn('p-4 flex items-center', className)} {...props}>
    {children}
  </header>
)

export default Header
