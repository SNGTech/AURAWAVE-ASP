import React, { useState } from 'react';

import Sidebar from './Sidebar';

import '../Css/Settings.css';

export const Settings = () => {

    const [showNotifications, setShowNotifications] = useState(false);
    const [showCalibration, setShowCalibration] = useState(false);
    const [showMusic, setShowMusic] = useState(false);

    const handleButtonClick = (buttonType, e) => {
        e.preventDefault();

        if (buttonType === 'notifications') {
            setShowNotifications(!showNotifications);
            setShowCalibration(false);
            setShowMusic(false);
        } else if (buttonType === 'calibration') {
            setShowCalibration(!showCalibration);
            setShowNotifications(false);
            setShowMusic(false);
        } else if (buttonType === 'music') {
            setShowMusic(!showMusic);
            setShowNotifications(false);
            setShowCalibration(false);
        } else {
            setShowNotifications(false);
            setShowCalibration(false);
            setShowMusic(false);
        }
    };

    

    

    return (
        <body className='body-settings'>
            <Sidebar />
            <main className='section-grow'>
                <section className='section-settings'>
                    <div>
                        <ul className='topbar'>
                            <li>
                                <a href='#' onClick={(e) => handleButtonClick('music', e)} className={`remove-underline ${showMusic ? 'active' : ''}`}>
                                    Music
                                </a>
                            </li>
                            <li>
                                <a href='#' onClick={(e) => handleButtonClick('notifications', e)} className={`remove-underline ${showNotifications ? 'active' : ''}`}>
                                    Notifications
                                </a>
                            </li>
                            <li>
                                <a href='#' onClick={(e) => handleButtonClick('calibration', e)} className={`remove-underline ${showCalibration ? 'active' : ''}`}>

                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div style={{ display: showNotifications ? 'block' : 'none' }}>
                            <hr />
                            <section className='section-settings-n'>
                                <div className='section-grow'>
                                    <div className='section-notification'>
                                        <span>Lorem ipsum dolor</span>
                                        <div className='section-grow'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                        </div>
                                        <span>Lorem ipsum dolor</span>
                                        <div className='section-grow'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                        </div>
                                    </div>
                                    <div className='button-calibration'>
                                        <button className='button-setting'>Update Notifications</button>
                                        <button className='button-reset'>Reset</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div style={{ display: showCalibration ? 'block' : 'none' }}>
                            <hr />
                            <section className='section-settings-ic'>
                                <div className='section-interface'>
                                    <span>Brainwave Calibration</span>
                                    <div className='section-grow'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                    </div>
                                    <span>Calibration Summary</span>
                                    <div className='section-grow'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                    </div>
                                </div>
                                <div className='button-calibration'>
                                    <button className='button-setting'>Update Calibration</button>
                                    <button className='button-reset'>Reset</button>
                                </div>
                            </section>
                        </div>
                        <div style={{ display: showMusic ? 'block' : 'none' }}>
                            <hr />
                            <section className='section-settings-m'>
                                <div className='settings-music'>
                                    
                                </div>
                                <div className='button-calibration'>
                                    
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
};

export default Settings;