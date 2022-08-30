import React from 'react'

import AchievementFrame from './AchievementFrame';

const SkyCityIcon = ({ size, unit }) => {
  
  const wh = `${size>0?size:1}${unit?unit:'em'}`; // Width and Height

  const childStyle = { gridColumn: 1, gridRow: 1 }

  // <svg width={wh} height={wh} viewBox="0 0 32 32" style={{...childStyle, transform: 'scale(0.68) translateY(-15%)'}} >
  return (
    <AchievementFrame wh={wh} backgroundColor='cornflowerblue' >
      <svg width={wh} height={wh} viewBox="0 0 32 32" style={{...childStyle, transform: 'scale(0.65) translateY(-15%)'}} >
        <g fill="none">
          <path fill="#9B9B9B" d="M2 30h4.032l9.945-2.775L25.922 30H30V9.3A2.3 2.3 0 0 0 27.7 7H4.3A2.3 2.3 0 0 0 2 9.3V30Z"/>
          <path fill="#83CBFF" d="M27 14h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .56-.45 1-1 1Zm1 4v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.44 1-1Zm0 5v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.44 1-1ZM7 22v1c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1ZM6 11H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1Zm0 5H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1Z"/>
          <path fill="#D3D3D3" d="M26 30h-7.013l-3.016-1.73L12.956 30H6V4.46C6 3.1 7.1 2 8.46 2h15.08C24.9 2 26 3.1 26 4.46V30Z"/>
          <path fill="#1C1C1C" d="M19 30h-6v-3.75c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.26.56 1.26 1.26V30H19Z"/>
          <path fill="#83CBFF" d="M14.5 18h-3c-.27 0-.5-.22-.5-.5v-2.01c0-.27.22-.5.5-.5h3.01c.27 0 .5.22.5.5v2.01a.51.51 0 0 1-.51.5Zm6.5-.49V15.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5Zm-6 5V20.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5Zm6 0V20.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5Zm-6-15V5.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5Zm6 0V5.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5Zm-6 5V10.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5Zm6 0V10.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5Z"/>
        </g>
      </svg>
    </AchievementFrame>
  )
}

export default SkyCityIcon