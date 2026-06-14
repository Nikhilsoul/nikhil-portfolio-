const Contact = () => (
  <main>
    <div className="container">
      <form
        id="contact-form"
        action="https://formsubmit.co/nikhilkumar4714@gmail.com"
        method="POST"
      >
        <h3>Quick Contact</h3>
        <h4>Contact us today, and get reply with in 24 hours!</h4>
        <input type="hidden" name="_subject" value="New portfolio contact request" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
        <fieldset>
          <input name="First Name" placeholder="First Name" type="text" tabIndex="1" required autoFocus />
        </fieldset>
        <fieldset>
          <input name="Last Name" placeholder="Last Name" type="text" tabIndex="2" required />
        </fieldset>
        <fieldset>
          <input name="Email Address" placeholder="Your Email Address" type="email" tabIndex="3" required />
        </fieldset>
        <fieldset>
          <input name="Phone Number" placeholder="Your Phone Number" type="tel" tabIndex="4" required />
        </fieldset>
        <fieldset>
          <textarea name="Message" placeholder="Type your Message Here...." tabIndex="5" required />
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>
    </div>
  </main>
);

export default Contact;
