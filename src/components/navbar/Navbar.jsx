import React, { useContext } from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

const Navbar = () => {
    const { darkMode, dispatch } = useContext(DarkModeContext);

    const renderModeToggleIcon = () => {
        if (darkMode) {
            return <LightModeOutlined className='icon' onClick={() => dispatch({ type: "TOGGLE" })} />;
        } else {
            return <DarkModeOutlined className='icon' onClick={() => dispatch({ type: "TOGGLE" })} />;
        }
    }


    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon' />
                        English
                    </div>
                    <div className="item">
                        {/* <DarkModeOutlinedIcon className='icon'
                        onClick={()=>dispatch({type:"TOGGLE"})} /> */}

                        {renderModeToggleIcon()}
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon' />
                        <div className="counter">2 </div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <img src="https://th.bing.com/th?q=Girl+PNG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=MM&setlang=en&adlt=moderate&t=1&mw=247" alt="profile" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar