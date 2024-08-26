import { useState, useEffect, useRef } from "react";
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import "./App.css";
import ParticleBackground from "./components/Particle";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
// images
import honor from "../public/image/honor.png";
import fighting from "../public/image/Fighting.jpeg";
import youtube from "../public/image/11734893.png";
import Vs from "../public/image/Screenshot_2024-06-26_142428-removebg-preview.png";
import guild from "../public/image/guild.png";
import Guild_1 from "../public/image/guild__1.jpg";
import BGimage from "../public/image/Bgimage.png";
import Pic from "../public/image/animegirl.png";
import PUBG from "../public/image/PUBG.jpeg";
import FF from "../public/image/FreeFire.jpg";
import COD from "../public/image/GGG.jpeg";
import VR from "../public/image/vr.jpg";
import AOS from "aos";
import one_g from "../public/image/one-removebg-preview.png";
import two_g from "../public/image/two-removebg-preview.png";
import three_g from "../public/image/three-removebg-preview.png";
import four_g from "../public/image/Four-removebg-preview.png";
import Five_g from "../public/image/Screenshot_2024-08-16_153008-removebg-preview.png";
import six_g from "../public/image/MADJ-removebg-preview.png";
import BGMIS from "../public/image/BGMIS.png";
import stome from "../public/image/Storm-removebg-preview.png";
import Knight from "../public/image/slient.png";
import six from "../public/image/six-removebg-preview.png";
// FB image
// import facebook from "../public/image/FB-removebg-preview.png";
import youtube_st from "../public/image/Youtube-removebg-preview.png";
import instagram from "../public/image/instagram-removebg-preview.png";
import FaceBook_one from "../public/image/Facebook-removebg-preview.png";
import intro from "../public/image/intero.jpg"
import Footer from "./components/footer";
// game name
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);
  const onHandleClick = () => {
    setCount((count) => count + 1);
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    toast.promise(resolveAfter3Sec, {});
  };
  // text
  const TEXTS = ["Gaming", "Streaming", "Play", "Improve", "& WIN"];
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  AOS.init();
  // end Text animations
  // Number scroll effect
  // end number scroll

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <section className="One_section">
        <div className="intro_box" id="intro_box1">
          <h1>THE NEXT GENERATION OF <span>GAMING</span></h1>
          <div class="box_main">
            <div class="container__main">
              <div class="clock">
                <h2>
                  {" "}
                  <TextTransition springConfig={presets.wobbly}>
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>
                </h2>
              </div>
            </div>
            <a href="/" target="_blank"></a>
          </div>
          <br />
          {/* button */}
          <button class="button-86" role="button">
            JOIN GAMING
          </button>
        </div>
        <div className="intro_box" id="intro_box2">
          <div class="square github">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <img src={BGimage} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* section two */}
      <section className="Two__section">
        <div className="query">
          <h1>About The Game</h1>
          <hr />
          <p>
            Gaming has evolved from simple, pixelated experiences into a
            multi-billion-dollar global industry with profound cultural and
            technological influence. It's no longer just about playing; gaming
            encompasses storytelling, competitive sports, and even virtual
            socialization. With advancements in AI, virtual reality (VR), and
            augmented reality (AR), gaming is pushing the boundaries of
            immersion, allowing players to step into vast, complex worlds
          </p>
        </div>

        <div className="card_container">
          <div className="card" id="card1" data-aos="zoom-in-up">
            <img src={VR} alt="" />
            <h1>Virtual Reality</h1>
            <hr />
            <p>
              Virtual Reality (VR) is an immersive technology that simulates a
              user’s presence in a computer-generated environment, typically
              through the use of a headset and sometimes additional sensory
              devices like gloves or controllers
            </p>
          </div>
          <div className="card" id="card2" data-aos="zoom-in-up">
            <img src={fighting} alt="" />
            <h1>Fighting EXP</h1>
            <hr />
            <p>
              In Free Fire, a popular battle royale game, the fighting
              experience is intense, fast-paced, and highly strategic. Players
              are dropped onto an island with the objective of being the last
              person or team standing
            </p>
          </div>
          <div className="card" id="card3" data-aos="zoom-in-up">
            <img src={honor} alt="" />
            <h1>Achievements </h1>

            <hr />

            <p>
           <li>Battle Royale Wins</li>
            <li>Kill Count Milestones</li>
            <li>Survivor Achievements</li>
            <li>Ranked Achievements</li>
            <li>Weapon Mastery</li>
            </p>
          </div>
        </div>
      </section>
      {/* section 3  */}
      <section className="section3">
        <div
          className="heading_box"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <h1>UPCOMING MATCH</h1>
        </div>
        <div className="boxes_container">
          <div
            className="game_box"
            id="game_box1"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="game__box_heading" id="game_box_">
              <h2>20 August 2024 - 09:00 PM</h2>
              <h1>ROAR SPRING GAME </h1>
              02 Teams Registered
            </div>
            <div className="youtube_button" id="game_box_">
              <img src={youtube} alt="" />
            </div>
            <div className="match_details" id="game_box_">
              <div className="match_box" id="match_box">
                {" "}
                <img src={one_g} alt="" />
              </div>
              <div className="match_box" id="match_box__vs">
                <img src={Vs} alt="" />
              </div>
              <div className="match_box" id="match_box">
                <img src={two_g} alt="" />
              </div>
            </div>
          </div>
          <div
            className="game_box"
            id="game_box2"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="game__box_heading" id="game_box_">
              <h2>17 August 2024 - 07:00 PM</h2>
              <h1>Rusher Squad </h1>
              02 Teams Registered
            </div>
            <div className="youtube_button" id="game_box_">
              <img src={youtube} alt="" />
            </div>
            <div className="match_details" id="game_box_">
              <div className="match_box" id="match_box">
                <img src={three_g} alt="" />
              </div>
              <div className="match_box" id="match_box__vs">
                <img src={Vs} alt="" />
              </div>
              <div className="match_box" id="match_box">
                <img src={four_g} alt="" />
              </div>
            </div>
          </div>
          <div
            className="game_box"
            id="game_box3"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="game__box_heading" id="game_box_">
              <h2>30 August 2024 - 10:00 PM</h2>
              <h1>Custom Room </h1>
              02 Teams Registered
            </div>
            <div className="youtube_button" id="game_box_">
              <img src={youtube} alt="" />
            </div>
            <div className="match_details" id="game_box_">
              <div className="match_box" id="match_box">
                <img src={Five_g} alt="" />
              </div>
              <div className="match_box" id="match_box__vs">
                <img src={Vs} alt="" />
              </div>
              <div className="match_box" id="match_box">
                <img src={six_g} alt="" />
              </div>
            </div>
          </div>

          <div
            className="game_box"
            id="game_box4"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="game__box_heading" id="game_box_">
              <h2>26 August 2021 - 11:00 PM</h2>
              <h1>Custom Room</h1>
              02 Teams Registered
            </div>
            <div className="youtube_button" id="game_box_">
              <img src={youtube} alt="" />
            </div>
            <div className="match_details" id="game_box_">
              <div className="match_box" id="match_box">
                <img src={BGMIS} alt="" />
              </div>
              <div className="match_box" id="match_box__vs">
                <img src={Vs} alt="" />
              </div>
              <div className="match_box" id="match_box">
                <img src={stome} alt="" />
              </div>
            </div>
          </div>

          <div
            className="game_box"
            id="game_box5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="game__box_heading" id="game_box_">
              <h2>22 August 2024 - 09:00 PM</h2>
              <h1>2 VS / 2</h1>
              02 Teams Registered
            </div>
            <div className="youtube_button" id="game_box_">
              <img src={youtube} alt="" />
            </div>
            <div className="match_details" id="game_box_">
              <div className="match_box" id="match_box">
                <img src={six} alt="" />
              </div>
              <div className="match_box" id="match_box__vs">
                <img src={Vs} alt="" />
              </div>
              <div className="match_box" id="match_box">
                <img src={Knight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section className="Four">
        <div className="container_guild">
          <div className="guild_box" id="guild_box1"  data-aos="fade-up"
     data-aos-duration="3000">
            <img src={guild} alt="" />
          </div>
          <div className="guild_box" id="guild_box2" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <img className="Squad" src={Guild_1} alt="" />
          </div>
        </div>
        <div className="container_guild">
          <div data-aos="zoom-in-up">
            {" "}
            <h1>Join Our Guild</h1>
            <h2>128569635465</h2>
           
          </div>
        </div>
      </section>{" "}
      <br />
      <section className="about_section">
        <div className="container_about">
          <div className="about_details" id="about_details2" data-aos="fade-down-right"
          data-aos-easing="linear"
          data-aos-duration="1500">
            <img src={Pic} alt="" />
          </div>
          <div className="about_details" id="about_details1" data-aos="fade-down-left"
          data-aos-easing="linear"
          data-aos-duration="2500">
            <img src={intro} alt="" />
          </div>
        </div>
      </section>
      {/* Card details  */}
      <section className="Card_section_1">
        <h1>Game we Play </h1>
        <hr />
        <br />
        <br />
        <div className="cont_box">
          <div className="card_anime" id="card_anime1" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <img src={PUBG} alt="" />
              <h2>Battlegrounds Mobile India </h2>
              <p>
                <a>
                  All our modules are designed to play nicely with responsive of
                  course. At the end of the day it comes down to the theme you
                  use - our code doesn't get in your way.
                </a>
              </p>
            </div>
          </div>
          <div className="card_anime" id="card_anime2" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <img src={FF} alt="" />
              <h2>Free Fire </h2>
              <p>
                <a>
                  All our modules are designed to play nicely with responsive of
                  course. At the end of the day it comes down to the theme you
                  use - our code doesn't get in your way.
                </a>
              </p>
            </div>
          </div>
          <div className="card_anime" id="card_anime3" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2500">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <img src={COD} alt="" />
              <h2>Call Of Duty </h2>
              <p>
                <a>
                  All our modules are designed to play nicely with responsive of
                  course. At the end of the day it comes down to the theme you
                  use - our code doesn't get in your way.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Scroll_Number">
        <div className="scroll_container">
          <div className="scroll_box" id="scroll_box1" data-aos="fade-down" data-aos-easing="linear"
          data-aos-duration="500">
            <div>
              <img src={youtube_st} alt="" />
            </div>
            <h1>
              {" "}
              <span>Subscribes </span> <br />  512K &nbsp; + <br />
            </h1>
          </div>
          <div className="scroll_box" id="scroll_box2" data-aos="fade-down" data-aos-easing="linear"
          data-aos-duration="1500" >
            <div>
              <img src={instagram} alt="" />
            </div>
            <h1>
              {" "}
              <span>Followers </span> <br /> 400K &nbsp; +<br />
            </h1>
          </div>
          <div className="scroll_box" id="scroll_box3" data-aos="fade-down" data-aos-easing="linear"
          data-aos-duration="2500" >
            <div>
              <img src={FaceBook_one} alt="" />
            </div>
            <h1>
              {" "}
              <span>Followers</span> <br /> 100K &nbsp; +<br />
            </h1>
          </div>
        </div>
      </section>
      {/* form section */}
      <div className="form_container">
        <div class="container">
          <form action="">
            <div class="text"> custom challenge </div>
            <div class="form-row">
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="">First Name</label>
              </div>
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="">Game Name </label>
              </div>
            </div>
            <div class="form-row">
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="">instagram</label>
              </div>
              <div class="input-data">
                <input type="number" required />
                <div class="underline"></div>
                <label for="">UID</label>
              </div>
            </div>
            <div class="form-row">
              <div class="input-data textarea">
                <textarea rows="8" cols="80" required></textarea>
                <br />
                <div class="underline"></div>
                <label for="">Write your message</label>
                <br />
                <div class="form-row submit-btn">
                  <div class="input-data">
                    <div class="inner"></div>
                    <input type="submit" value="submit" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
export default App;
