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
    
    const about = useRef(null)
    const workExp = useRef(null)
    const education = useRef(null)
    const projects = useRef(null)
    const contact = useRef(null)

    const scrollTosection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior:'smooth',
        });
    }

    const setTrueorFalse = (type) => {
        setAboutButton(type === "about");
        setWorkButton(type === "work");
        setEducationButton(type === "education");
        setProjectsButton(type === "projects");
        setContactButton(type === "contact");
    };

    const setAbout = () => {
        setTrueorFalse("about")
        scrollTosection(about)
    }
    const setWork = () => {
        setTrueorFalse("work")
        scrollTosection(workExp)
    }
    const setEducation = () => {
        setTrueorFalse("education")
        scrollTosection(education)
    }
    const setProject = () => {
        setTrueorFalse("projects")
        scrollTosection(projects)
    }
    const setContact = () => {
        setTrueorFalse("contact")
        scrollTosection(content)
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
            setText(textToPrint.substring(0, i + 1))
            i++;
        }, 20);
    };

    useEffect(() => {
        typeOutHeading("Hi, I'm Reece Tredwell, Student Software Engineer")
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);


    return (
        <div>
            <section ref={about }className='background1'>
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
                    <div className='aboutBlurb'>
                        <p>I am a software engineer undergraduate, currently in my penultimate year of university.<br></br><br></br>  I was born and raised in Sydney, Australia
                            & I have approximately 2 years of profesional experience</p>
                    </div>
                    <div className='PersonImageBox'>
                        <img src={PersonCoding} className='personImg'></img>
                    </div>
                </div>
            </section>
            <section className='scrollSection'>
                <div className='workExpArea' ref={workExp}></div>
                <div className='educationArea' ref={education}></div>
                <div className='projectsArea' ref={projects}></div>
                <div ref={contact}></div>



            </section>

        </div>
    );
};

export default App;
