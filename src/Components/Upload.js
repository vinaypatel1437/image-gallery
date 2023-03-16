import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';
import { storage, database } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import { addDoc } from 'firebase/firestore';

export default function Upload({close}) {
    const [tag, setTag] = useState('');
    const [imageURL, setImageURL] = useState('');
    const handleUpload = (e) => {
        console.log(e.target.files[0]);
        let file = e.target.files[0];
        const imageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(imageRef, file);
        // f1 progress, f2 error, f3 completion 
        uploadTask.on('state_changed', f1, f2, f3);
        function f1(snapshot) {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }
        function f2(error) {
            console.log(error);
        }
        function f3(completion) {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setImageURL(downloadURL);
            });
        }
    }
    const uploadImage = (e) => {
        let obj = {
            id: uuidv4(),
            filePath: imageURL,
            tag: tag,
        }
        addDoc(database.images, obj).then(() => {
            console.log("Image Upload Success");
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className='uploadModal'>
            <h1>
                Upload Image
            </h1>
            <input type="file" className='uploadImage' onChange={handleUpload} placeholder="Upload Image" accept='image/*' />
            <input type="text" className='uploadTag' onChange={(e) => setTag(e.target.value)} placeholder="Give a tag to image" />
            <div className='uploadActions'>
            <button className='uploadAction' onClick={uploadImage}> Upload Image </button>
            <button className='closeAction' onClick={close} >Close</button>
            </div>
        </div>
    )
}
