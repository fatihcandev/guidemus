import Exclamation from './icons/exclamation'
import TextBody from './text-body'
import Check from './icons/check'
import Stack from './stack'

const Alert = ({ code = null, type, message }) => (
  <div
    className={`${
      type === 'success' ? 'bg-green-200' : 'bg-red-200'
    } rounded-md px-2 py-3 flex justify-start items-center mt-2`}
  >
    <Stack row gap={5}>
      {type === 'success' ? <Check /> : <Exclamation />}
      <TextBody className="text-sm">{message}</TextBody>
    </Stack>
  </div>
)

export default Alert
