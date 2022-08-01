import styles from "../styles/contact.module.css"
import { useState } from "react";
import Head from "next/head";

const Contact = () => {
    const [formData, setFormData] = useState({name: "", contact: "", message: "", submitted: false})

    function handleSubmit(event) {
        event.preventDefault()
        setFormData(prevData => ({...prevData, submitted: true}))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevData => ({...prevData, [name]: value}))
    }

    const Submission = () => {
        return ( 
            <div className={styles.container}>
                <div id={styles.submission}>
                    <div id={styles.bar}></div>
                    <label className={styles.title}>Contact Form</label>
                    <p className={styles.desc}>Your response has been submitted.</p>
                    <p onClick={() => {setFormData(x => ({...x, submitted:false}))}} id={styles.edit}>Make an edit</p>
                </div>
            </div>
            
        );
    }
    

    if (formData.submitted) return (
        <>
            <Head>
                <title>Contact | Food Concepts</title>
            </Head>
            <Submission />
        </>
    )
    if (!formData.submitted) return (
        <div className={styles.container}>
            <Head>
                <title>Contact | Food Concepts</title>
            </Head>
            <form onSubmit={handleSubmit} className={styles.form}>
                <section className={styles.section}>
                    <div id={styles.bar}></div>
                    <label className={styles.title}>Contact Form</label>
                    <p className={styles.desc}>This form is for demonstrative purposes only.</p>
                </section>
                <section className={styles.section}>
                    <label className={styles.label}>Name</label>
                    <input className={styles.input} type="text" placeholder="Your response" name="name" value={formData.name} onChange={handleChange} />
                </section>
                <section className={styles.section}>
                    <label className={styles.label}>How can we reach you?</label>
                    <input className={styles.input} type="text" placeholder="Your response" name="contact" value={formData.contact} onChange={handleChange} />
                </section>
                <section className={styles.section}>
                    <label className={styles.label}>Message</label>
                    <input className={styles.input} type="text" placeholder="Your response" name="message" value={formData.message} onChange={handleChange} />
                </section>
                <button id={styles.button}>Submit</button>
            </form>
        </div>
    )
}
 
export default Contact;