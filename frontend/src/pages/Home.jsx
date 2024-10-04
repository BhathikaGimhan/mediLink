import React from "react";
import { ReactComponent as Genarate } from "../assets/icons/genarate.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";

import { ReactComponent as ArrowR } from "../assets/icons/arrowR.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="flex justify-center items-center my-20">
        <h1 className="font-[Barcode] bg-gradient-to-r from-[#3B29FF] via-[#FF0000] to-[#BD00FF] drop-shadow-xl !shadow-white inline-block text-transparent bg-clip-text text-7xl">
          MediLink
        </h1>
      </div>
      <div className="home-para mb-20">
        <p className="text-lg md:w-[60%] text-center flex justify-center items-center text-wrap text-white mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          quia deleniti alias, accusantium itaque architecto est repudiandae
          error, voluptas rem quod! Nisi in dolorum, molestias similique
          voluptates iusto repudiandae numquam!
        </p>
      </div>
      <div className="home-cards flex justify-center gap-40 mb-20  flex-wrap">
        <div className="card w-[30rem] h-[30rem] relative bg-[#fff5ec] rounded-xl text-black flex flex-col">
          <div className="text flex justify-center items-start pt-10 font-black text-xl">
            {" "}
            <h2>Doctor Ranking</h2>{" "}
          </div>
          <div className="image-section flex justify-center items-center mt-20">
            <Star
              width="60px"
              height="60px"
              className="fill-current text-gradient"
            />
            <Star width="60px" height="60px" />
            <Star width="60px" height="60px" />
            <Star width="60px" height="60px" />
            <Star width="60px" height="60px" />
          </div>
          <p className="mx-20 text-center mt-[5.2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            expedita libero voluptatem assumenda, deleniti ab in impedit quam
          </p>
          <div className="button absolute bottom-5 right-7">
            <button className="bg-blue-500 hover:bg-blue-600 duration-300 flex justify-center items-center w-36 rounded-full text-white font-black px-3 py-0">
              Explore
              <ArrowR
                width="50px"
                height="50px"
                className="-mr-5 fill-current text-gradient"
              />
            </button>
          </div>
        </div>
        <div className="card w-[30rem] h-[30rem] relative bg-[#f5e7ff] rounded-xl text-black flex flex-col">
          <div className="text flex justify-center items-start pt-10 font-black text-xl">
            <h2>AI Doctor</h2>
          </div>
          <div className="image-section flex justify-center flex-col items-center mt-10">
            <Genarate width="150px" height="150px" />
            <p className="mx-20 text-center mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              expedita libero voluptatem assumenda, deleniti ab in impedit quam
            </p>
          </div>
          <div className="button absolute bottom-5 right-7">
            <Link to="/ai-doctor">
              <button className="bg-blue-500 hover:bg-blue-600 duration-300 flex justify-center items-center w-36 rounded-full text-white font-black px-3 py-0">
                Explore
                <ArrowR
                  width="50px"
                  height="50px"
                  className="-mr-5 fill-current text-gradient"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
