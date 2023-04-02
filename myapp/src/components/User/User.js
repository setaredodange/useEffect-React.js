import React, { useEffect } from 'react'

export default function User(props) {

useEffect(()=> {

    console.log (' User component Mount!')

    return () => {
        console.log ('User component unMount!')
    }
}, [])



    function clickHandler(id){
        props.onRemove(id)

    }
  return (
    <div>
        <li>
            {props.name}
            <button onClick={()=> clickHandler(props.id)}>Remove</button>
        </li>
       
      
    </div>
  )
}
