import React, {useState} from 'react'
import './HeaderOption.css'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function HeaderOption({avatar, Icon,  title, onClick}) {
   
  const [user,setUser] = useState(useSelector(selectUser));
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon  className='headerOption__icon'  />}
        {avatar && (<Avatar className="headerOption__icon" src={user?.photoUrl}>
         {user?.displayName[0].toUpperCase()}
        </Avatar>)}
        
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption