import React from "react";
import "./Contact.css"

const Contact = () => {
    return(
        <div>
            <div className="container w-75 p-4 bg-d mborder rounded-5 my-5">
                <p>I’d love to hear from you! Whether you have a question, feedback, or just want to say hello, please feel free to reach out. Your thoughts are important to me, and I’m here to help.You can use one of the ways below to send a message, or contact me directly at <b>mersad.rss@gmail.com</b> . I aim to respond to all messages within 24 hours.Thank you for visiting my site, and I look forward to connecting with you!</p>
            </div>

            <h2>My Social Media</h2>
            <div className="buts my-5">
                <a href="#" className="btn btn-outline-danger btn-lg px-5 py-3 m-3 rounded-5">Instagram</a>
                <a href="#" className="btn btn-outline-danger btn-lg px-5 py-3 m-3 rounded-5">Telegram</a>
                <a href="#" className="btn btn-outline-danger btn-lg px-5 py-3 m-3 rounded-5">Whatsapp</a>
                <a href="#" className="btn btn-outline-danger btn-lg px-5 py-3 m-3 rounded-5">LinkedIn</a>
            </div>
        </div>
    )
}

export default Contact