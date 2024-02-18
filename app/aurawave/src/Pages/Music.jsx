import React, { useState, useEffect } from 'react';

import Sidebar from './Sidebar';

import '../Css/Music.css';

import Bleachers from '../Audio/Bleachers.mp3';
import CutMyHair from '../Audio/CutMyHair.mp3';
import Strangers from '../Audio/Strangers.mp3';
import AllINeed from '../Audio/AllINeed.mp3';
import ThisIsMyTime from '../Audio/ThisIsMyTime.mp3';

import TCutMyHair from '../Images/CutMyHair.jpg';
import TBleachers from '../Images/Bleachers.jpg';
import TStrangers from '../Images/Strangers.jpg';
import TAllINeed from '../Images/AllINeed.jpg';
import TThisIsMyTime from '../Images/ThisIsMyTime.jpg';

export const Music = () => {

    const [selectedCard, setSelectedCard] = useState(1);
    const [prevSelectedCard, setPrevSelectedCard] = useState(1);

    useEffect(() => {
        setPrevSelectedCard(selectedCard);

        const prevAudio = document.getElementById(`audio-${prevSelectedCard}`);
        if (prevAudio) {
            prevAudio.pause();
            prevAudio.currentTime = 0;
        }
    }, [selectedCard]);

    const handleShuffle = () => {
        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * 5) + 1;
        }
        while (randomIndex === prevSelectedCard);

        setSelectedCard(randomIndex);
    };

    return (

        <body className='body-music'>
            <Sidebar />
            <main className='section-grow'>
                <section className='section-music'>
                    <div className='statistics-music'>
                        <h1>Statistics of Your Recent Music (Insert Graphs Here)</h1>
                        <hr></hr>
                        <div className='recent-music'>
                            <div className='view-icon'>
                                <img src={TBleachers} alt=""></img>
                                <p>Bleachers - Templuv</p>
                            </div>
                            <div className='view-recent'>
                                <div className='recent-playback'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                </div>
                                <div className='recent-pauseresume'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='genre-music'>
                        <h1>Music Genres</h1>
                        <hr></hr>
                        <div className='music-image-container'>
                            <div class="music-media-scroller">
                            <div class="music-media-element">
                                    <img src="https://i.pinimg.com/474x/69/94/e9/6994e9441e7eca6960286c77d2629003.jpg" alt=""></img>
                                    <p>Rock</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://laughingsquid.com/wp-content/uploads/mjbad.jpg" alt=""></img>
                                    <p>Pop</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://res.heraldm.com/content/image/2021/04/05/20210405000596_0.jpg" alt=""></img>
                                    <p>K-Pop</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://cdns-images.dzcdn.net/images/cover/5769c5d15f76b06914bac5bf73577638/264x264.jpg" alt=""></img>
                                    <p>J-Pop</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://cdn.britannica.com/00/190900-050-74D1C311/DJ-crowd.jpg" alt=""></img>
                                    <p>EDM</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://i1.sndcdn.com/artworks-GADmsVYbF6gZgACS-YzMybg-t500x500.jpg" alt=""></img>
                                    <p>Electronic Funk</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://support.musicgateway.com/wp-content/uploads/2021/02/image.jpeg" alt=""></img>
                                    <p>Indie</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2019/09/country_music.jpg" alt=""></img>
                                    <p>Country</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://singersroom.com/wp-content/uploads/2020/04/Rb-music.jpg" alt=""></img>
                                    <p>R&B</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://npr.brightspotcdn.com/legacy/sites/ipr/files/202006/janine_jansen_new_york_phil.jpg" alt=""></img>
                                    <p>Classical</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://flypaper.soundfly.com/wp-content/uploads/2016/10/metal-covers-header.png" alt=""></img>
                                    <p>Metal</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://www.shutterstock.com/shutterstock/videos/26915740/thumb/1.jpg?ip=x480" alt=""></img>
                                    <p>Jazz</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://i.pinimg.com/474x/69/94/e9/6994e9441e7eca6960286c77d2629003.jpg" alt=""></img>
                                    <p>Rock</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://laughingsquid.com/wp-content/uploads/mjbad.jpg" alt=""></img>
                                    <p>Pop</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://res.heraldm.com/content/image/2021/04/05/20210405000596_0.jpg" alt=""></img>
                                    <p>K-Pop</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://cdns-images.dzcdn.net/images/cover/5769c5d15f76b06914bac5bf73577638/264x264.jpg" alt=""></img>
                                    <p>J-Pop</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://cdn.britannica.com/00/190900-050-74D1C311/DJ-crowd.jpg" alt=""></img>
                                    <p>EDM</p>
                                </div>
                                <div class="music-media-element">
                                    <img src="https://i1.sndcdn.com/artworks-GADmsVYbF6gZgACS-YzMybg-t500x500.jpg" alt=""></img>
                                    <p>Electronic Funk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-music'>
                    <div className='music-random'>
                        <h1>Music Randomizer</h1>
                        <hr></hr>
                        <div className='music-content'>
                            <div className='music-background'>
                                    <div className='background-filler'>
                                    </div>
                                    <div className='background-card'>
                                        <div className={`thumbnail-card ${selectedCard === 1 ? 'show' : 'hide'}`}>
                                            <img src={TThisIsMyTime} alt='' className="thumbnail" />
                                            <audio id={`audio-1`} src={ThisIsMyTime} controls />
                                        </div>
                                        <div className={`thumbnail-card ${selectedCard === 2 ? 'show' : 'hide'}`}>
                                            <img src={TStrangers} alt='' className='thumbnail'></img>
                                            <audio id={`audio-2`} src={Strangers} controls></audio>
                                        </div>
                                        <div className={`thumbnail-card ${selectedCard === 3 ? 'show' : 'hide'}`}>
                                            <img src={TCutMyHair} alt='' className='thumbnail'></img>
                                            <audio id={`audio-3`} src={CutMyHair} controls></audio>
                                        </div>
                                        <div className={`thumbnail-card ${selectedCard === 4 ? 'show' : 'hide'}`}>
                                            <img src={TBleachers} alt='' className='thumbnail'></img>
                                            <audio id={`audio-4`} src={Bleachers} controls></audio>
                                        </div>
                                        <div className={`thumbnail-card ${selectedCard === 5 ? 'show' : 'hide'}`}>
                                            <img src={TAllINeed} alt='' className='thumbnail'></img>
                                            <audio id={`audio-5`} src={AllINeed} controls></audio>
                                        </div>
                                    </div>
                                    <div className='background-randomizer'>
                                        <div className='background-thumbnail'>
                                            <div className='thumbnail-cards'>
                                                <img src={TThisIsMyTime} alt='' className={`thumbnails ${selectedCard === 1 ? 'hide' : 'show'}`}></img>
                                                <img src={TStrangers} alt='' className={`thumbnails ${selectedCard === 2 ? 'hide' : 'show'}`}></img>
                                                <img src={TCutMyHair} alt='' className={`thumbnails ${selectedCard === 3 ? 'hide' : 'show'}`}></img>
                                                <img src={TBleachers} alt='' className={`thumbnails ${selectedCard === 4 ? 'hide' : 'show'}`}></img>
                                                <img src={TAllINeed} alt='' className={`thumbnails ${selectedCard === 5 ? 'hide' : 'show'}`}></img>
                                            </div>
                                            <button className="button-music" onClick={handleShuffle}>
                                                Shuffle
                                            </button>
                                        </div>
                                    </div>
                                    <div className='background-filler'>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </main>
        </body>
    );
};

export default Music;