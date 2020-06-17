import cn from 'classnames'

const Image = ({ src, dataSrc, alt, ...props }) => (
  <img src={src} data-src={dataSrc} alt={alt} {...props} />
)

export default Image
