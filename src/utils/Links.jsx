import React from 'react'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { IoBarChart } from 'react-icons/io5'
import { MdAdminPanelSettings, MdQueryStats } from 'react-icons/md'

// ................................................................

const links = [
    {text:'add-job' , path :'.' , icon :  <FaWpforms/>  },
    {text:'all-job' , path :'all-job' , icon : <MdQueryStats/>},
    {text:'admin' , path :'admin' , icon : <MdAdminPanelSettings/>},
    {text:'stats' , path :'stats' , icon : <IoBarChart/>},
    {text:'profile' , path :'profile' , icon : <ImProfile/>}
]

    
  // ................................................................
  
    
    


export default links;