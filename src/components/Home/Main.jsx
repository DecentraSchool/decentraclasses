import React from 'react'
import About from './About';
import Courses from './Courses';
import Explore from './Explore';
import Start from './Start';
import Why from './Why';

export default function Main() {
    return (
        <main >
            <Explore />
            <Why />
            <About />
            <Start />
            <Courses />
        </main>
    )
}
