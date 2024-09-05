import React from 'react'

const Index = ({props}) => {
    return (
        <button className={`${props?.bg} text-zinc-900`}>{props.texto}</button>
    )
}

export default Index

