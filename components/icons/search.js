import cn from 'classnames'

const SearchIcon = ({ className }) => (
  <svg
    className={cn('w-6 h-6', className)}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
)

export default SearchIcon
