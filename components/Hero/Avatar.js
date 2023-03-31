import * as React from 'react'

const Avatar = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 500 500'
    style={{
      opacity: 1
    }}
    {...props}
  >
    <image x='0' y='0' width='100%' height='100%' clip-path='url(#shape)' href='http://www.yimcan.com/thinking-face_1f914.gif' preserveAspectRatio='none'></image>

  </svg>
)

export default Avatar
