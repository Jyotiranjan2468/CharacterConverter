import React from 'react'

export default function Aleart(props) {
  return (
    <div style={{height:'50px'}}>
      {props.aleart && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
           <strong>{props.aleart.type}</strong> {props.aleart.msg}
           {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
      </div>
    
  )
}
