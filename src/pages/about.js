import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"

const AboutPage = () => (
  <Layout>
    <SEO title="Tentang" />
    <section className="Tentang">
      <div className="container">
        {/* + Title */}
        <div className="row mt-4 justify-content-center">
          <div className="col-lg-7 col-sm-12 my-auto headline">
            <h1>biografi faras~</h1>
          </div>
        </div>
        {/* - Title */}

        <div className="row my-4 justify-content-center">
          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>
                    Hallo!
                    <span role="img" aria-label="Happy face">
                      😊
                    </span>
                  </h2>
                  <h3>perkenalkan</h3>
                </div>

                <div className="card-text">
                  saya Faras Adilah, yang akrab disapa Ayas, lahir di Bogor pada 29 Juni 2008. 
                  Saat ini, saya menempuh pendidikan di SMK Bina Putra Mandiri.
                </div>
              </div>
            </div>
          </div>
          {/* - Card */}

          {/* + Image */}
          <div className="col-lg-6 my-auto mx-auto">
            <Image
              fileName="ayas.jpg"
              alt="tentang saya"
              className="about-img-wrapper"
            />
          </div>
          {/* - Image */}

          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>lebih banyak tentang saya</h2>
                  <h3>ayo berkenalan</h3>
                </div>

                <div className="card-text">
                  <p>
                    Saya Faras Adilah, yang biasa dipanggil Ayas, lahir di Kota Bogor pada 29 Juni 2008. 
                  Saat ini saya sedang menempuh pendidikan di SMK Bina Putra Mandiri dengan jurusan Teknik Komputer dan Jaringan (TKJ). 
                  Dunia teknologi menjadi bidang yang menarik bagi saya, karena di dalamnya saya dapat belajar banyak hal
                  mulai dari dasar jaringan komputer hingga pengembangan website.
                  </p>
                  
                  <p>
                    Di luar kegiatan belajar formal, saya memiliki minat besar pada dunia hiburan, khususnya menonton drama. 
                  Bagi saya, drama bukan hanya sekadar tontonan, tetapi juga sarana untuk memperluas wawasan, memahami budaya, dan mempelajari bahasa asing secara menyenangkan. 
                  </p>

                  <p>
                    Saya senang mencoba hal baru, disiplin, dan berusaha konsisten dalam menyelesaikan tugas. 
                  Ke depan, saya berharap dapat mengembangkan keterampilan di bidang teknologi informasi sekaligus menggabungkannya dengan kreativitas
                  sehingga mampu menghasilkan karya yang bermanfaat.
                  </p>

                </div>
              </div>
            </div>
          </div>
          {/* - Card */}
        </div>
      </div>
    </section>
  </Layout>
)
export default AboutPage 
