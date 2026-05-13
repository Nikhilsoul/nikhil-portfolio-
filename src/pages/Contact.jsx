const Contact = () => (
  <main>
    <div className="container">
      <form
        id="contact-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <h3>Quick Contact</h3>
        <h4>Contact us today, and get reply with in 24 hours!</h4>
        <fieldset>
          <input placeholder="First Name" type="text" tabIndex="1" required autoFocus />
        </fieldset>
        <fieldset>
          <input placeholder="Last Name" type="email" tabIndex="2" required />
        </fieldset>
        <fieldset>
          <input placeholder="Your Email Address" type="tel" tabIndex="3" required />
        </fieldset>
        <fieldset>
          <input placeholder="Your Phone Number" type="url" tabIndex="4" required />
        </fieldset>
        <fieldset>
          <textarea placeholder="Type your Message Here...." tabIndex="5" required />
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>
    </div>
  </main>
);

export default Contact;
