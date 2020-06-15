import TextBody from './text-body'
import Link from 'next/link'
import cd from 'classnames'

const NavItem = ({ href, className, children }) => (
  <Link href={href}>
    <a>
      <TextBody className={cd('text-white', className)}>{children}</TextBody>
    </a>
  </Link>
)

export default NavItem
