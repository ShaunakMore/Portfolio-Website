import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b5he2ab', 'template_azraooj', form.current, 'jKUznPa_LKuWYbfJH')
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent successfully!", {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      }, (error) => {
        console.log(error.text);
        toast.error("Oops! Something went wrong.");
      });

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="w-full max-w-md flex flex-col gap-4">
      <input type="text" name="user_name" placeholder="Your Name" required className="p-2 border rounded" />
      <input type="email" name="user_email" placeholder="Your Email" required className="p-2 border rounded" />
      <textarea name="message" placeholder="Your Message" required className="p-2 border rounded h-32" />
      <button type="submit" className="text-base md:text-lg bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
        Send
      </button>
    </form>
  );
};

export default Contact;