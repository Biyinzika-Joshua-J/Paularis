import React from 'react'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const FilterBtn = () => {
  return (
    <Button>
        <span className='mr-2'>Filter </span>
        <FontAwesomeIcon icon={faFilter}/>
    </Button>
  )
}

export default FilterBtn