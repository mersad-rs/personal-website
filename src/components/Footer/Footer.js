import React from "react";
import "./Footer.css"

const Footer = () => {
    return(
        <div className="Footer">
            <div className="row bg-f p-5 align-items-center">
                <div className="col-md-8">
                    <p>Thank you for visiting my website!If you have any questions or would like to connect, feel free to reach out through my contact page or follow me on social media.</p>
                </div>
                <div className="col-md-4">
                    <ul className="list-unstyled">
                        <li><a className="text-decoration-none" href="#">Instagram</a></li>
                        <li><a className="text-decoration-none" href="#">Telegram</a></li>
                        <li><a className="text-decoration-none" href="#">Whatsapp</a></li>
                        <li><a className="text-decoration-none" href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <p className="text-secondary bg-f">© Mersad Haselmehri 2024. All Rights Reserved.</p>
        </div>
    )
}

export default Footer