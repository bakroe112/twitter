import React from 'react'

const ViewIcon = ({isOnHover,color}) => {
   return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
      width="20px"
      height="20px"
    >
      <g>
        <path
          fill={(isOnHover && color) || ""}
          d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
        ></path>
      </g>
    </svg>
  )
}

export default ViewIcon
