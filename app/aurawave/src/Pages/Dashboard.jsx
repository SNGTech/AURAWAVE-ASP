import React from 'react';

import Sidebar from './Sidebar';

import '../Css/Dashboard.css';

import TCutMyHair from '../Images/CutMyHair.jpg';
import TBleachers from '../Images/Bleachers.jpg';
import TStrangers from '../Images/Strangers.jpg';
import TAllINeed from '../Images/AllINeed.jpg';
import TThisIsMyTime from '../Images/ThisIsMyTime.jpg';

export const Dashboard = () => {

    return (
        <body className='body-dashboard'>
            <Sidebar />
            <main className='section-grow'>
                <section className='section-dashboard'>
                    <div className='mainsub-splitter'>
                        <div className='main-split'>
                            <div className='main-graph'>
                                <h1>Your Data This Past Month</h1>
                                <hr></hr>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                            </div>
                            <div className='graph-description'>
                                <div className='gd'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                </div>
                                <div className='md'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                </div>
                            </div>
                        </div>
                        <div className='sub-split'>
                            <div className='sub-key-area'>
                                <h1>Key Improvement Areas</h1>
                                <hr></hr>
                                <p>Your brainwave data looks good! Based on its patterns, here are a few pieces of music that might suit you well.</p>
                                <div className='sub-grid'>
                                    <div className='sub-card'>
                                        <img src={TAllINeed} alt=""></img>
                                        <p>All I Need</p>
                                    </div>
                                    <div className='sub-card'>
                                        <img src={TBleachers} alt=""></img>
                                        <p>Bleachers</p>
                                    </div>
                                    <div className="sub-card">
                                        <img src={TStrangers} alt=""></img>
                                        <p>Strangers</p>
                                    </div>
                                    <div className="sub-card">
                                        <img src={TThisIsMyTime} alt=""></img>
                                        <p>This Is My Time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-dashboard'>
                    <div className='mainsub-splitter'>
                        <div className='main-split'>
                            <div>
                                <div className='sub-padding'>
                                    <h1>Recently Tuned</h1>
                                    <hr></hr>
                                    <div className='Image-Container'>
                                        <div className="media-scroller snaps-inline">
                                            <div className="media-element">
                                                <img src={TAllINeed} alt=""></img>
                                                <p>Lorem ipsum dolor</p>
                                            </div>
                                            <div className="media-element">
                                                <img src={TBleachers} alt=""></img>
                                                <p>Lorem ipsum dolor</p>
                                            </div>
                                            <div className="media-element">
                                                <img src={TStrangers} alt=""></img>
                                                <p>Lorem ipsum dolor</p>
                                            </div>
                                            <div className="media-element">
                                                <img src={TThisIsMyTime} alt=""></img>
                                                <p>Lorem ipsum dolor</p>
                                            </div>
                                            <div className="media-element">
                                                <img src={TCutMyHair} alt=""></img>
                                                <p>Lorem ipsum dolor</p>
                                            </div>
                                            <div className="media-element">
                                                <img src={TAllINeed} alt=""></img>
                                                <p>Lorem ipsum dolor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sub-split'>
                            <div className='sub-target-area'>
                                <h1>Targetted Improvement</h1>
                                <hr></hr>
                                <p>Your alpha level seems balanced, which indicates a state of calmness and focus. In our next session, you can explore using specific music types to target and enhance your alpha waves, potentially deepening your relaxation or concentration.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
};

export default Dashboard;