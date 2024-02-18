import React from 'react';

import Sidebar from './Sidebar';

import '../Css/Diagnosis.css';

export const Diagnosis = () => {

    return (
        <body className='body-diagnosis'>
            <Sidebar />
            <main className='section-grow'>
                <section className='section-diagnosis'>
                    <div className='diagnosis-main'>
                        <h1>Average Power Spectral Density (Insert Graphs Here)</h1>
                        <hr></hr>
                        <div className='diagnosis-container'>
                            <div className='diagnosis-item1'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                            </div>
                            <div className='diagnosis-item2'>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-diagnosis'>
                    <div className='diagnosis-sub'>
                        <h1>Diagnosis & Consultation (Insert Graphs Here)</h1>
                        <hr></hr>
                        <div className='sub-container'>
                            <div className='sub-comment'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                            </div>
                            <div className='sub-doctor'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                <button className='button-doctor'>
                                    Connect with a doctor
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
};

export default Diagnosis;