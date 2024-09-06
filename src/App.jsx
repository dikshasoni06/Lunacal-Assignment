import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import SecondWidget from './components/SecondWidget'


function App() {
  const [showImage, setShowImage] = useState(0); 
  const handleImageClick = () => {
    setShowImage(true);
  };


  const handleNext = () => {
    if (currentIndex < images.length - 3) {
        setCurrentIndex(currentIndex + 1);
    }
};

const handlePrev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
    }
};


  return (
    <>

      <div className="container">
        <div className="left"> 
          
           </div>
        <div className="right">

          <div className="first">

            <div className="rec">
              <ul>
                <li>About Me</li>
                <li>Experiences</li>
                <li>Recommended</li>
              </ul>
            </div>

            <div className="layout">
              <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                <br />
                I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a</p>
            </div>
          </div>


          <div className="second">

            <button className='bttn font-bold'>Gallery</button>
            <button className="img" onClick={handleImageClick} >
              + ADD IMAGES
            </button>
            <div className="lr">
              <button class="icon">←</button >
              <button class="icon">→</button >
              </div>
              <div className="gallery-images">
                {showImage && (
                  <img
                    className="gallery-image"
                    src="https://picsum.photos/300/200" 
                    alt="Gallery Image"
                  />
                  
                )}
              </div>

            


          </div>

        </div>
      </div>
    </>
  )
}

export default App
