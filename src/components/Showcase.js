import React from "react";
import showcase from "../images/illustration-working.svg";

const Showcase = () => {
  return <>
    <section className="py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
            <article className="text-center md:text-left">
                <h1 className="text-5xl lg:text-6xl mb-5 font-bold text-slate-800">
                    More than just Shorter Links
                </h1>
                <p className="lg:text-lg text-slate-400 mb-10">
                    Build Your Brand recognition a
                </p>
                <button className="bg-red-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">Get Started</button>
            </article>
        </div>
    </section>
  </>;
};

export default Showcase;
