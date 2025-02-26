import React, { useEffect, useState, useRef } from 'react';
import "./styles.css";
import education from "./assets/mortarboard.png";
import Code from "./assets/code.png";
import Work from "./assets/suitcase.png";
import backgroundImage from "./assets/stackedGreen.svg";
import PersonCoding from "./assets/personHomeImage2.png"

function App() {

    const [aboutButtonOn, setAboutButton] = useState(true);
    const [workButtonOn, setWorkButton] = useState(false);
    const [educationButtonOn, setEducationButton] = useState(false);
    const [projectsButtonOn, setProjectsButton] = useState(false);
    const [contactButtonOn, setContactButton] = useState(false);

    const [text, setText] = useState("");
    const [started, setStarted] = useState(false);
    const timerRef = useRef(null);

    const setTrueorFalse = (type) => {
        setAboutButton(type === "about");
        setWorkButton(type === "work");
        setEducationButton(type === "education");
        setProjectsButton(type === "projects");
        setContactButton(type === "contact");
    };

    const setAbout = () => {
        setTrueorFalse("about")
    }
    const setWork = () => {
        setTrueorFalse("work")
    }
    const setEducation = () => {
        setTrueorFalse("education")
    }
    const setProject = () => {
        setTrueorFalse("projects")
    }
    const setContact = () => {
        setTrueorFalse("contact")
    }

    const typeOutHeading = (text) => {
        const textToPrint = text
        if (started) {
            return;
        }
        setStarted(true);
        let i = -1;
        setText("");

        timerRef.current = setInterval(() => {
            if (i >= textToPrint.length) {
                clearInterval(timerRef);
            }
            setText(textToPrint.substring(0, i+1 ))
            i++;
        }, 20);
    };

    useEffect(() => {
        typeOutHeading("Hi, I'm Reece Tredwell👋")
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);


    return (
        <div>
            <section className='background1'>
                <div className='navBar'>
                    <div className='NameBox'>
                        <h1>Reece Tredwell</h1>
                    </div>
                    <div className="navButtonsDiv">
                        <button className={aboutButtonOn ? 'true-navBar-button' : 'false-navBar-button'} onClick={setAbout}>About</button>
                        <button className={workButtonOn ? 'true-navBar-button' : 'false-navBar-button'} onClick={setWork}>Work Experience</button>
                        <button className={educationButtonOn ? 'true-navBar-button' : 'false-navBar-button'} onClick={setEducation}>Education</button>
                        <button className={projectsButtonOn ? 'true-navBar-button' : 'false-navBar-button'} onClick={setProject}>Projects</button>
                        <button className={contactButtonOn ? 'true-navBar-button' : 'false-navBar-button'} onClick={setContact}>Contact</button>
                    </div>
                </div>
                <div className='aboutHome'>
                    <div className='pageTitleBox'>
                        <h1 className='pageTitle'>{text}</h1>
                    </div>
                    <div className='PersonImageBox'>
                        <img src={PersonCoding} className='personImg'></img>
                    </div>
                </div>
            </section>
            <section className='scrollSection'>

            </section>

        </div>
    );
};

export default App;
