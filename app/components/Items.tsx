import React from 'react'
type ItemsProps = {
    label: string,
    selected: boolean
}

const Items:React.FC<ItemsProps> = ({label, selected}) => {
  return (
    <div className="form-control">
        <label className="cursor-pointer label gap-4">
             <input type="checkbox" checked={selected} className="checkbox" />
              <span className="label-text ">{label}</span>

        </label>
    </div>
  )
}

export default Items