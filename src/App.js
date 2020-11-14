import Header from "./Header"
import './App.css';
import Hero from "./Hero";
import {useEffect} from "react"
import Cursor from "./cursor"
import {gsap} from "gsap"
import appsVid from "./videos/apps.mp4"
import brandingVid from "./videos/branding.mp4"
import websitesVid from "./videos/websites.mp4"

function App() {

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.remove("loading");
  gsap.from(body, {
    opacity: 0,
    duration: 1,
    ease: "Power3.easeInOut",
  });
  const cursor = new Cursor(document.querySelector(".cursor"));
  }, [])
  return (
    <div className="App">
      <Header/>
      <Hero/>
      {/* Chat */}
      <div className="chat">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30" id="chat">
        <path
          d="M16 26c8.84 0 16-5.82 16-13S24.84 0 16 0 0 5.82 0 13a11.72 11.72 0 004.12 8.71L3.33 30l7.53-4.69A19.11 19.11 0 0016 26z"
        ></path>
      </svg>
    </div>
      {/* Cursor */}
      <div className="cursor">
        <div className="cursor-media">
          <video
            src={appsVid}
            autoPlay muted controls="false" playsinline loop preload="none"
            id="websites"
          ></video>
          <video
            src={brandingVid}
            autoPlay muted controls="false" playsinline loop preload="none"
            id="apps"
          ></video>
          <video
            src={websitesVid}
            autoPlay muted controls="false" playsinline loop preload="none"
            id="branding"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default App;
