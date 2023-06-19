import React from 'react'
import Card from './Card'

const StackContent = () => {
  return (
    <div className='flex justify-between'>
      <Card title={'Test'} content={'Test'}/>
      <Card title={'Test'} content={'Test'}/>
      <Card title={'Test'} content={'Test'}/>
    </div>
  )
}

export default StackContent