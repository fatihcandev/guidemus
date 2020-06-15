import React from 'react'
import cn from 'classnames'
import styles from '../styles/stack.module.css'

function Stack({
  gap = 10,
  row = false,
  responsive = false,
  className,
  children,
  ...props
}) {
  return (
    <div
      className={cn(
        styles.stack,
        row && styles.row,
        responsive && styles.responsive,
        className
      )}
      style={{ '--gap': `${gap}px` }}
      {...props}
    >
      {children}
    </div>
  )
}
export default Stack
