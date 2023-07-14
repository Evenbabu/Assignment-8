import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import './ProfileData.css'

const ProfileData = ({ cards }) => {
    let [exTime, setExercise] = useState(0);
    let [breakTime, setBreak] = useState(0);
    useEffect(() => {
        const dataString = localStorage.getItem('activityData');
        if (dataString) {
            const data = JSON.parse(dataString);
            setExercise(data.exTime)
            setBreak(data.breakTime);
        }
    }, []);
    for (const card of cards) {
        exTime = exTime + parseFloat(card.time)
    }

    const getBreakTime = (value) => {
        setBreak(value)
    }

    const btnCompleted = () => {
        const data = {
            exTime,
            breakTime
        }
        localStorage.setItem('activityData', JSON.stringify(data))
    }



    return (
        <div className='profile-container'>
            <div className='profile'>
                <img className="profile-img" src="img/profile.png" alt="profileImg" />
                <div className='profile-info'>
                    <p className='name'>Name</p>
                    <div className='location'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p className='location'>Cumilla,Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className='detail'>
                <div >
                    <p><span className='bold'>75</span><span className='short'>kg</span></p>
                    <p className='short'>Weight</p>
                </div>
                <div>
                    <p><span className='bold'>6.5</span></p>
                    <p className='short'>Height</p>
                </div>
                <div>
                    <p><span className='bold'>25</span><span className='short'>yrs</span></p>
                    <p className='short'>Age</p>
                </div>
            </div>
            <h1>Add A Break</h1>
            <div className='break-container'>
                <button onClick={() => getBreakTime(10)} className="break-btn">10s</button>
                <button onClick={() => getBreakTime(20)} className="break-btn">20s</button>
                <button onClick={() => getBreakTime(30)} className="break-btn">30s</button>
                <button onClick={() => getBreakTime(40)} className="break-btn">40s</button>
                <button onClick={() => getBreakTime(50)} className="break-btn">50s</button>
            </div>

            <h1>Exercise Details</h1>
            <div className='exercise-time'>
                <div><p>Exercise Time</p></div>
                <div><span>{exTime} </span>minute</div>
            </div>
            <div className='break-time'>
                <div><p>Break Time</p></div>
                <div><span>{breakTime} </span>seconds</div>
            </div>
            <button onClick={btnCompleted} className='btn-complete'>Activity Completed</button>
        </div>
    );
};

export default ProfileData;