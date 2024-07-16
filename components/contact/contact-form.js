import { useEffect, useState } from "react";
import classes from "./contact-form.module.css"
import Notification from "../../ul/notification";




async function sendContactData(formData) {

    const formEntries = {};
    formData.forEach((value, key) => {
        formEntries[key] = value;
    });
    const data = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ email: formEntries.email, name: formEntries.name, message: formEntries.message }),
        headers: {
            'Content-Type': "application/json"
        }
    });

    const res = await data.json();
    console.log(res)

    if (!data.ok) {
        throw new Error(data.message || "some went wrong")
    }
}

function ContactForm() {
    const [reqStatus, setReqStatus] = useState()

    useEffect(() => {
        if (reqStatus === "success" || reqStatus === "error") {
            const timer = setTimeout(() => {
                setReqStatus(null)
            }, 3000);
            return () => clearTimeout(timer)
        }
    }, [reqStatus])


    const formHandler = async (event) => {

        event.preventDefault();
        const formData = new FormData(event.target);
        setReqStatus('pending')
        try {
            sendContactData(formData)
            document.getElementById("SubmitForm").reset();
            console.log("okeye")
        } catch (error) {
            setReqStatus("error")
            throw new Error(error.message)
        }
        setReqStatus('success')
    };


    let notification


    if (reqStatus === "pending") {
        notification = {
            status: 'pending',
            title: 'Sending messages',
            message: "Your message is on the way"
        }
    }


    if (reqStatus === "success") {
        notification = {
            status: 'success',
            title: "ok shode baby!",
            message: "reside"
        }
    }

    if (reqStatus === "error") {
        notification = {

            status: "error",
            title: "error khorde",
            message: "nashod ke"
        }
    }



    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} id="SubmitForm" onSubmit={formHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="message">Your message</label>
                        <textarea id="message" rows="5" name="message" ></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button type="submit">Send message</button>
                    </div>
                </div>
            </form>
            {notification ? <Notification status={notification.status} title={notification.title} message={notification.message} /> : ""}
        </section>
    );
}

export default ContactForm;
