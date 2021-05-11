import React from 'react'
import "./bottom.css"
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ReplayIcon from '@material-ui/icons/Replay';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarRateIcon from '@material-ui/icons/StarRate';
import FlashOnIcon from '@material-ui/icons/FlashOn';
function Bottom() {
    return (
        <div className="bottom">
           
           <IconButton className="sw"> <CloseIcon fontSize="Large" className="s" /></IconButton>
           <IconButton className="sw"> <ReplayIcon fontSize="Large"  className="r" /></IconButton>
           <IconButton className="sw"> <StarRateIcon fontSize="Large"  className="a" /></IconButton>
           <IconButton className="sw"> <FavoriteIcon fontSize="Large"  className="j"  /></IconButton>
           <IconButton className="sw"> <FlashOnIcon fontSize="Large"  className="e" /></IconButton> 
            </div>
    )
}

export default Bottom
