"use client"

import { FidgetSpinner } from "react-loader-spinner";



export default function Loding() {
  return (
    <div className='absolute top-[50%] left-[50%]'>
      render(<FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
      />)
    </div>
  )
}
