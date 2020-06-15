import TextBody from './text-body'
import Link from 'next/link'

const NavItem = ({ href, children }) => (
  <Link href={href}>
    <a>
      <TextBody className="hover:text-purple-500">{children}</TextBody>
    </a>
  </Link>
)

export default NavItem
