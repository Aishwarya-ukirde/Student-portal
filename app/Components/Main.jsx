import React from 'react'
import Announcements from './Subcomponent/Announcements'
import Quicklink from './Subcomponent/Quicklink'
import Access from './Subcomponent/Access'

const Main = () => {
  return (
    <div 
      className="p-4 grid gap-4 mr-10 ml-10 
      md:grid-cols-3 md:place-items-center">
        
      <Announcements />
      <Quicklink />
      <Access />
    </div>
  )
}

export default Main
