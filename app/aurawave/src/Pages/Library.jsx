import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';

import StaffSidebar from './StaffSidebar';

import '../Css/Library.css';

export const Library = () => {
    const [musicUpload, setMusicUpload] = useState(null);

    const isMp3File = (fileName) => {
        return fileName.toLowerCase().endsWith('.mp3');
    };

    const uploadMusic = () => {
        if (musicUpload == null) {
            alert('Please choose a file');
            return;
        }


        if (!isMp3File(musicUpload.name)) {
            alert('Please select an MP3 file');
            return;
        }

        const musicRef = ref(storage, `music/${musicUpload.name}`);
        uploadBytes(musicRef, musicUpload).then(() => {
            alert("Music Uploaded");
        })

    };

    return (
        <body className='body-library'>
            <StaffSidebar />

            <section className='section-settings-m'>
                <div className='settings-music'>
                    <span id="file-chosen">No file chosen</span>
                    <input className='file-input' type='file'
                        onChange={(event) => {
                            setMusicUpload(event.target.files[0]);
                            const fileChosen = document.getElementById('file-chosen');
                            fileChosen.textContent = event.target.files[0].name;
                        }}
                        id="musicfile" name="musicfile" />
                    <label className='custom-file-label' for='musicfile'>Choose Music</label>
                </div>
                <div className='button-calibration'>
                    <button className='button-setting' onClick={uploadMusic}>Upload Music</button>
                </div>
            </section>




        </body>
    );
};

export default Library;