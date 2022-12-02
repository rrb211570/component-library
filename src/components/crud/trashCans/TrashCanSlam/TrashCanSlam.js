import React from "react";
import './TrashCanSlam.css';

function TrashCanSlam({ deleteEntry }) {
    let hoverOnDelete = (e) => {
        e.currentTarget.querySelector('.trashCanSlam__lidImg').style.transition = null;
        e.currentTarget.querySelector('.trashCanSlam__lidImg').style.rotate = '-5deg';
    }

    let hoverOffDelete = (e) => {
        e.currentTarget.querySelector('.trashCanSlam__lidImg').style.transition = '0.1s rotate ease-out';
        e.currentTarget.querySelector('.trashCanSlam__lidImg').style.rotate = null;
    }

    return (
        <div className='trashCanSlam'>
            <button className='trashCanSlam__deleteButton' onClick={deleteEntry} onMouseEnter={hoverOnDelete} onMouseLeave={hoverOffDelete}>
                <img className='trashCanSlam__lidImg' src='images/trashCanLid.png' alt='trash can lid' />
                <img className='trashCanSlam__bodyImg' src='images/trashCan.png' alt='trash can' />
            </button>
        </div >
    );
}

export default TrashCanSlam;