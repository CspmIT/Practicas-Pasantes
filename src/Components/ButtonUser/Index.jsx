import React from 'react'

const Index = ({props}) => {
  return (
    <div>
      <button className={`${props.bg}, text-zinc-900`}>{props.texto}</button>


    </div>
  )
}

export default Index
