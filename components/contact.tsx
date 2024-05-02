"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact(){
    const { ref } = useSectionInView("Contact");
    return (
        <motion.section ref={ ref } viewport={{ once: true, }} initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1, }} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" id="contact">
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">Please contact me directly at <a className="underline" href="iayvob@gmail.com">iayvob@gmail.com</a> or through this form.</p>
            <form 
                action={ async (formData) => {
                     const { data, error } = await sendEmail(formData);
                     if (error) {
                        toast.error(error);
                        return;
                     }

                     toast.success ("Email sent successfully")
                    }} 
                className="mt-10 flex flex-col"
            >
                <input name="senderEmail" className="h-14 px-4 rounded-lg borderBlack" required maxLength={500} type="email" placeholder="Your Email" />
                <textarea name="message" className="h-52 my-3 rounded-lg borderBlack p-4" required maxLength={5000} placeholder="Your message"/>
                <SubmitBtn />
            </form>
        </motion.section>
    )
}