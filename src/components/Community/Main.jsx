import React, { useState } from "react";
import Toggle from "./Toggle";
import Cards from "./Cards";

const Main = () => {
    const [setIndex, getIndex] = useState(0);
    function moveClick(event) {
        if (setIndex === 1) {
            getIndex(0);
            event.target.classList.remove("toggleLeft");
            event.target.classList.add("toggleRight");
        } else {
            getIndex(1);
            event.target.classList.remove("toggleRight");
            event.target.classList.add("toggleLeft");
        }


    }
    return (
            <main>
                <section className='pb-20 flex flex-col gap-10 items-center'>
                    <div>
                        <h1 className='font-extrabold text-[3rem]'>Frens, join the community</h1>
                    </div>
                    <Toggle moveHorizon={moveClick} />
                    <Cards index={setIndex} />
                </section>

            </main>
    );
};

export default Main;