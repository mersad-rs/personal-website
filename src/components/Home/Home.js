import React from "react";
import "./Home.css"

const Home = () => {
    return(
        <div className="homeContain">
            <div className="homeHead bg-d p-5 mx-5 rounded-5">
                <p>Hello and thank you for visiting my personal website! Feel free to browse around, and don’t hesitate to reach out if you have any questions or just want to say hi. Your thoughts and feedback are always welcome!</p>
            </div>
            <div className="w-md-50 container my-5 text-start p-5 rounded-5 bg-d">
                <p className="des fs-5"><span className="display-5 text-danger fw-bolder">&#60;p&#62;</span>Over the past two years, I have immersed myself in the world of front-end development, transforming my passion for technology and design into tangible skills. Through dedicated learning and hands-on practice, I have gained a solid foundation in creating dynamic and user-friendly web applications.I have become proficient in key technologies such as HTML, CSS, JavaScript, Bootstrap, and React and I am continually expanding my knowledge of frameworks. My journey has allowed me to work on various projects, where I have honed my ability to translate design concepts into functional, responsive websites.I take pride in my attention to detail and my commitment to delivering high-quality work. I am excited to continue growing as a developer and to take on new challenges that push my skills further.<span className="display-5 text-danger fw-bolder">&#60;&#47;p&#62;</span></p>
            </div>
            <div className="container w-75 my-5 text-start">
                <h3 className="text-danger">What I Do</h3>
                <ul>
                    <li><p><span className="text-primary">Front-End Development :</span> Over the past two years, I have developed a strong foundation in front-end development, mastering technologies like HTML, CSS, and JavaScript to create dynamic and user-friendly web applications.</p></li>
                    <li><p><span className="text-primary">Linux : </span>I have embraced Linux as a powerful operating system, enjoying its flexibility and command-line capabilities while enhancing my technical skills and problem-solving abilities.</p></li>
                    <li><p><span className="text-primary">Graphic :</span>While I’m not a professional, I have a foundational understanding of graphic editing, allowing me to create visually appealing content that enhances my web projects.</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Home