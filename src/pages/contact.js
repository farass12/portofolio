import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Links from "../components/links"
import contactimg from "../images/contactimg.svg"

const ContactPage = () => (
  <Layout>
    <SEO title="Kontak" />
    <section className="Kontak">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8">
            <h1>kontak dan media sosial</h1>
            <p>
              Hai! Apa kabar? Terima kasih telah mengunjungi situs saya. Jika Anda memiliki
              pertanyaan atau masukan, jangan ragu untuk menghubungi saya. 
              di media sosial berikut:
            </p>
            <Links />
            <p>
              {/* I am currently available for freelance work. My scope of work
              includes but not limited to: */}
            </p>
            <ul>
              {/* <li>Website Development</li>
              <li>User Interface (UI) Design</li>
              <li>Logo Creation</li>
              <li>Website Scraping Automation</li>
              <li>Quality Assurance Testing</li> */}
            </ul>

            <a
              href="content"
              className="main-button btn btn-primary shadow-sm mt-2"
            >
              Download portofolio saya
            </a>
          </div>
          <div className="col-lg-4 my-auto">
            <div className="img-container">
              <img src={contactimg} alt="Vector of a man and a phone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
