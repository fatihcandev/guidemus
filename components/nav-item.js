import TextBody from './text-body'
import Link from 'next/link'

const NavItem = ({ href, children, ...props }) => (
  <Link href={href}>
    <a>
      <TextBody {...props}>{children}</TextBody>
    </a>
  </Link>
)

export default NavItem
