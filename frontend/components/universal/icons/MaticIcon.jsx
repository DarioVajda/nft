import React from 'react'

const MaticIcon = ({ size, unit }) => {

  const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
  
  const svgStyle = {
    backgroundColor: 'var(--matic)',
    borderRadius: '50%',
    padding: '1px'
  }

  return (
    <div style={iconStyle} >
      <svg 
        style={svgStyle}
        xmlns="http://www.w3.org/2000/svg"
        role="img" 
        height={`${size?size:1}${unit?unit:'em'}`}
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 32 32"
      >
        <path fill="var(--light-background)" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16S7.163 0 16 0zm-5.13 7.662l-4.243 2.372A1.16 1.16 0 0 0 6 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618l1.955-1.114l2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 0 0-.627-1.042l-4.28-2.409c-.37-.215-.85-.215-1.255 0l-2.879 1.654l-1.955 1.078l-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 0 0-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0z"/>
      </svg>
    </div>
  )
}

export default MaticIcon