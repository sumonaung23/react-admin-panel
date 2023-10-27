import React, { useContext } from 'react'
import './sidebar.scss'
import { Dashboard } from '@mui/icons-material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className='sidebar'>
            <div className="lists">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <span className="logo">Sumon Dev</span>
                </Link>
            </div>
            <hr /> 
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/' style={{textDecoration:'none'}}>
                        <li>
                            <Dashboard className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to='/users' style={{textDecoration: 'none'}}>
                        <li>
                            <PersonOutlineIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{textDecoration: 'none'}}>
                        <li>
                            <InventoryIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <ViewStreamIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="color-theme">
                <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar