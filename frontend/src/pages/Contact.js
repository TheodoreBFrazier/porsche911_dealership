import React  from "react";









function ContactForm() {
    //Return the form below here 
  return (
    <form>
      <div>
        <label htmlFor="name"> Name: </label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email"> Email: </label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message"> Your Message: </label>
        <textarea id="message" required />
      </div>
      <button type="submit"> Button </button>
    </form>
  );
}

export default ContactForm;
