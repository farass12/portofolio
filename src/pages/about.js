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
            <h1>Profil Singkat</h1>
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
                  Saya Faras Adilah, fresh graduate jurusan Teknik Komputer dan Jaringan (TKJ) dari SMK Bina Putra Mandiri. 
                  Saya memiliki minat di bidang teknologi, administrasi, dan pengembangan website serta senang mempelajari hal baru dan mengembangkan keterampilan
                </div>
              </div>
            </div>
          </div>
          {/* - Card */}

          {/* + Image */}
          <div className="col-lg-6 my-auto mx-auto">
            <Image
              fileName="faras.jpg"
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
  <h2 className="about-title">
    <span className="emoji">✨</span>
    tentang saya
  </h2>
</div>

                <div className="card-text">
  <p>
    👋 Halo! Saya Faras Adilah, biasa dipanggil Ayas. Saya merupakan fresh graduate
    jurusan Teknik Komputer dan Jaringan (TKJ) dari SMK Bina Putra Mandiri.
  </p>

  <p>
    📌 Saya senang mencoba hal baru, disiplin, dan berusaha konsisten dalam menyelesaikan tugas. 
                  Ke depan, saya berharap dapat mengembangkan keterampilan di bidang teknologi informasi sekaligus menggabungkannya dengan kreativitas
                  sehingga mampu menghasilkan karya yang bermanfaat.
  </p>

                  <p>
                   💼 Melalui pengalaman organisasi dan kegiatan PKL, saya belajar mengenai
    tanggung jawab, komunikasi, dan pengembangan keterampilan di bidang
    teknologi informasi. Ke depan, saya berharap dapat terus berkembang dan
    menghasilkan karya yang bermanfaat.
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
