import React from 'react'

const BookmartIcon = ({isOnHover,color}) => {
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
          d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
        ></path>
      </g>
    </svg>
  )
}

export default BookmartIcon
