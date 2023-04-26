import React from 'react'
import '../components/contact.css'
export default function Conatct() {
  return (
    <div>
        <section class="section-contact" id="contact">
        <div class="contact-box">
          <form class="form-grp" data-aos="fade-up">
            <h2 class="heading heading--2 margin-bottom">
              Get in <span class="yellow">Touch</span>
            </h2>

            <input type="text" class="form form__input" placeholder="Name" />
            <input type="text" class="form form__input" placeholder="Email" />
            <input type="text" class="form form__input" placeholder="Phone" />
            <textarea
              name="message"
              cols="5"
              rows="3"
              class="form form__input"
              placeholder="Message"
            ></textarea>
            <button class="btn btn__primary form-flex">Send &nbsp;</button>
          </form>
          <div id="mapid" data-aos="fade-up"></div>
        </div>
      </section>
    </div>
  )
}
