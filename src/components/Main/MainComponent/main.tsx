import React from 'react';
import img from './img/bg_img.jpg'




function Main() {

  return (
    <div className="main bg-black">
      <div className="main_container">
        <div className="stars_container">
          <div className="h-screen bg-black relative">
            {[...Array(200)].map((_, index) => (
              <div
                key={index}
                className="stars absolute w-0.5 h-0.5 rounded-1 bg-white shadow-white animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
            <div className="flex justify-center items-center h-screen">
              <div className="stars-midle-data">
                  <div className="big-text text-9xl text-yellow-300">Star Wars</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_data">
          <div className="text_about_SW text-yellow-300 border-y-2 border-yellow-300 bg-black">
            <div className="caps_text text-5xl py-8">About us
</div>
          </div>
          <div className="bg_img relative">
            <img src={img} alt="starwars" />
            <div className="  flex flex-row items-center text-white p-10 border-t-2 border-yellow-300">
              <h1 className="text-4xl text-yellow-300 font-mono ">Star Wars is a cult epic fantasy
                a media franchise that tells the story of various conflicts and wars in the “far, far away
                 galaxy". In particular, the main saga that started it all focuses on the story
                  of the Skywalker family - Anakin, his children Luke and Leia and all those related to them.
                   Consists of 9 main films, 2 spin-offs, which are components of the anthology,
                    as well as animated series, cartoons, TV movies, books, comics, video games,
                     united by a single universe invented by the American director and film producer George Lucas in the late 1970s</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

