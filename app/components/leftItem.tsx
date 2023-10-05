import React from 'react'
import {leftData} from './ItemData'
import Items from './Items'


const leftItem = () => {
  return (
    <div>
        {leftData.map((i) => (
            <Items label={i.label} selected={i.selected}/>
        ))}
    </div>
  )
}

export default leftItem