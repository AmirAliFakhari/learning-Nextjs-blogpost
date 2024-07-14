import classes from "./contact-form.module.css"

function ContactForm() {
    const formHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formEntries = {};
        formData.forEach((value, key) => {
            formEntries[key] = value;
        });
        console.log(formEntries);
        const data = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ email: formEntries.email, name: formEntries.name, message: formEntries.message }),
            headers: {
                'Content-Type': "application/json"
            }
        });

        const res = await data.json();
        console.log(res);
    };

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={formHandler}>
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
        </section>
    );
}

export default ContactForm;
