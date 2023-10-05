import React from 'react'
import { rightData } from './ItemData'
import Items from './Items'
const rightItem = () => {
  return (
    <div>
        {rightData.map((i) => (
            <Items label={i.label} selected={i.selected}/>
        ))}
    </div>
  )
}

export default rightItem