import React from 'react'
import { ToggleGroupItem } from '../../ui/toggle-group'
import { ITabCurrency } from '../../../global/interface/interface'

const CardCurrency: React.FC<ITabCurrency> = ({ icon, abbrev }) => {
  return (

    <ToggleGroupItem
      value={abbrev}
      aria-label="Toggle bold"
      className='text-foreground/80 rounded pr-24 py-2 gap-2 h-auto w-full flex items-center text-start hover:bg-foreground/5 hover:text-foreground'
    >
      <span>
        {icon}
      </span>

      <span className=''>
        {abbrev}
      </span>
    </ToggleGroupItem>
  )
}

export default CardCurrency