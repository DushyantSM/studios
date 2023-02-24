// import React from 'react'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
// import { Helmet } from "react-helmet-async";

const Home = () => {

    function message() {
        var Name = document.getElementById('name');
        var email = document.getElementById('mail');
        var msg = document.getElementById('msg');
        const success = document.getElementById('success');
        const danger = document.getElementById('danger');

        if (Name.value === '' || email.value === '' || msg.value === '') {
            danger.style.display = 'block';
        }
        else {
            setTimeout(() => {
                Name.value = '';
                email.value = '';
                msg.value = '';
            }, 2000);

            success.style.display = 'block';
        }


        setTimeout(() => {
            danger.style.display = 'none';
            success.style.display = 'none';
        }, 4000);

    }


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q7f6ob7', 'template_j5tv5jt', form.current, '2jLujKhLO-4FByLhm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (

        <>
            {/* <Helmet>
                <title>That Studios</title>
                <meta name='descriptions' content='We are a multi-disciplinary studio, specializing in architecture, branding and design and everything in between.' />
                <link rel="canonical" href="./Home" />
            </Helmet> */}
            <div class="home">
                <main class="home-child">
                    <h2>We are a multi-disciplinary studio, specializing in architecture, branding and design and everything in between.</h2>
                    <h3>Have something in mind for us?</h3>
                    <h1>LET'S WORK</h1>
                    <h1 class="h1tag">TOGETHER!</h1>
                </main>

                <div class="formp home-child">
                    <p>Please Feel free to reach out to us </p>
                    <form id='myform' ref={form} onSubmit={sendEmail}>

                        <input id='name' type="text" name='Name' placeholder='Your Name' required autoComplete='off' />
                        <input id='mail' type="email" name='Email' placeholder='Your Email' required autoComplete='off' />
                        {/* <input type="text" placeholder='Hi there, I am reaching out because I think we can collaborate…...' /> */}
                        <textarea id="msg" name="Message" cols="30" rows="10" placeholder='Hi there, I am reaching out because I think we can collaborate…...' required autoComplete='off'></textarea>
                        {/* <input type="submit" value="Send" onClick={openPopup} /> */}
                        <button id='send' type='submit' onClick={message} >Send</button>
                        <div class="message">
                            <div class="success" id="success">Your Message Successfully Sent!</div>
                            <div class="danger" id="danger">Fields Can't be Empty!</div>
                        </div>

                    </form>

                </div>

            </div>

            <div class="marquee">
                <div><span>|</span> Branding <span>|</span> Visual Identity <span>|</span> Packaging <span>|</span> Print Media <span>|</span> Illustrations <span>|</span> Graphic Design <span>|</span> <span> <a href="mailto:hello@thatstudios.in">hello@thatstudios.in</a></span> <span>|</span> Architecture <span>|</span> Interiors <span>|</span> Product Design <span>|</span> Furnitures <span>|</span> Modular Design <span>|</span> Branding </div>
                {/* <div>Graphic-Design | Branding | Visual-Identity | Illustrations | Print-Media | Packaging | Product-Design | Interior-Design</div> */}
            </div>


        </>
    )
}

export default Home