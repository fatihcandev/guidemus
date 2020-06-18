import TextBody from './text-body'
import Link from 'next/link'
import cn from 'classnames'
const NavItem = ({ href, className, children, ...props }) => (
  <Link href={href}>
    <a>
      <TextBody className={cn('hover:underline', className)} {...props}>
        {children}
      </TextBody>
    </a>
  </Link>
)

export default NavItem
