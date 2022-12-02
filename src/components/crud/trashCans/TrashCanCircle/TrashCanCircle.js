import React from "react";
import './TrashCanCircle.css';

function TrashCanCircle({ deleteEntry }) {
    let hoverOnDelete = (e) => {
        e.currentTarget.querySelector('.trashCanCircle__lidImg').style.transition = null;
        e.currentTarget.querySelector('.trashCanCircle__lidImg').style.paddingTop = '0px';
        e.currentTarget.querySelector('.trashCanCircle__bodyImg').style.paddingTop = '2px';
    }

    let hoverOffDelete = (e) => {
        e.currentTarget.querySelector('.trashCanCircle__lidImg').style.transition = '0.1s rotate ease-out';
        e.currentTarget.querySelector('.trashCanCircle__lidImg').style.paddingTop = '2px';
        e.currentTarget.querySelector('.trashCanCircle__bodyImg').style.paddingTop = '0px';
    }

    return (
        <div className='trashCanCircle'>
            <button className='trashCanCircle__deleteButton' onClick={deleteEntry} onMouseEnter={hoverOnDelete} onMouseLeave={hoverOffDelete}>
                <img className='trashCanCircle__lidImg' src='images/trashCanLid.png' alt='trash can lid' />
                <img className='trashCanCircle__bodyImg' src='images/trashCan.png' alt='trash can' />
            </button>
        </div >
    );
}

export default TrashCanCircle;