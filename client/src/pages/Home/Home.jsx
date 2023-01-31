import React from "react";
import { toast } from "react-toastify";
import nophoto from "../../assets/images/nophoto.png";
import Calendar from "./Calendar";
import Clock from "./Clock";

const Home = () => {
  const handleClick = () => {
    toast.success("Remember recorded!");
  };

  return (
    <div>
      <section className="relative -mt-[65px] w-full overflow-hidden overflow-x-clip bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark:bg-[#0B1120] dark:bg-none lg:h-screen">
        <div className="absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
        <div className="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
        <div className="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>
        <div className="absolute h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
        <div className="absolute h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
        <div className="absolute hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
        <div className="absolute hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:top-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
        <div className="max-w-[1024px] mx-auto flex justify-center items-center mt-16 h-full dark:text-white">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <Calendar />
            <Clock />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-10 justify-center items-center">
            <div className="flex gap-5 items-center border-b border-gray-700 py-2 px-5">
              <img
                class="w-10 h-10 rounded-full"
                src={nophoto}
                alt="Rounded avatar"
              />
              <span>Jhon Doe</span>
              <button
                onClick={handleClick}
                className="px-3 py-1 bg-sky-500 rounded-sm"
              >
                Remember
              </button>
            </div>
            <div>Last 3 History</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
