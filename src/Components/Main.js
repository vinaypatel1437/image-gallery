import React, { useEffect, useState } from 'react'
import Upload from './Upload';
import { database } from '../firebase';
import { getDocs } from 'firebase/firestore';
import '../CSS/Main.css'

export default function Main() {
  const [ showModal, setShowModal ] = useState(false);
  const [images, setImages] = useState([]);
  const closeFunction = () => {
    setShowModal(false);
  }
  useEffect(() => {
    let imageArr =  [];
    getDocs(database.images).then((res) => {
      // console.log(res.docs[0].data());
      imageArr = [...res.docs];
      imageArr  = imageArr.map((ele) => {
        return ele.data();
      });
      setImages([...imageArr]);
    });
    console.log(imageArr);
  }, []);
  return (
    <div>
      <div className='uploadCont'>
      <button className='showModalButton' onClick={() => setShowModal(true)}>Upload Image</button>
      </div>
      {
        showModal && <Upload close={closeFunction} />
      }
      <div className='imageGrid'>
        {
          images.map((ele) => {
            return (
              <img key={ele.id} height="200px" width="200px" src={ele.filePath} />
            )
          })
        }
      </div>
    </div>
  )
}
