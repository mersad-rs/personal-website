import React from "react";
import "./About.css"

const About = () => {
    return(
        <div>
            <div className="container w-75 bg-d p-5 rounded-5 my-5 mborder">
                <p className="fw-lighter fs-5">Hello! I’m Mersad, a passionate programmer and technology enthusiast dedicated to crafting innovative solutions through code. With a foundation in Html, Css, JS, Reat, Bootstrap, I thrive on the challenges that come with developing software that not only meets user needs but also enhances their experiences.My journey into programming began about four years ago. I was captivated by the power of code to bring ideas to life and solve real-world problems.I am proficient in a some technologies and frameworks, including Html, css ,JS , Bootstrap ,linux ,and a little bit of graphics, and I am always eager to learn new languages and tools to stay current in this ever-evolving field. I am excited about the journey ahead and am always open to new opportunities and collaborations. If you’d like to connect, discuss programming, or explore potential projects, please feel free to reach out through the contact page.</p>
            </div>

            <div className="container">
                <h2 className="fw-bolder p-2">My Skills</h2>
                <div className="row">
                    <div className="col-2 text-danger fw-bolder">
                        <p>Html</p>
                        <p>Css</p>
                        <p>JavaScript</p>
                        <p>Bootstrap</p>
                        <p>React</p>
                        <p>Linux</p>
                    </div>
                    <div className="col-10">
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><div className="htmlp progress-bar bg-success">100%</div></div><br />
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><div className="cssp progress-bar bg-success">100%</div></div><br />
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"><div className="jsp progress-bar bg-primary">95%</div></div><br />
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"><div className="bootp progress-bar bg-primary">98%</div></div><br />
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="reactp progress-bar bg-primary">25%</div></div><br />
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"><div className="linuxp progress-bar bg-primary">35%</div></div><br />
                    </div>
                </div>
            
            </div>



        </div>
    )
}

export default About