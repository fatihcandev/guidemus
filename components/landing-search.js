import Input from './input'
import SearchIcon from './icons/search'
import Stack from './stack'

const LandingSearch = () => (
  <Stack row className="w-full mx-auto sm:w-3/4 md:w-1/2 lg:w-1/3">
    <SearchIcon className="absolute transform translate-x-6" />
    <Input
      className="w-full py-4 px-2 pl-12 shadow-md rounded-md"
      ph="Search for a country, city or university"
    />
  </Stack>
)

export default LandingSearch
