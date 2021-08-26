import Hero from '../components/Hero';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div className="topWrapper"></div>
      <Navbar />
      <Hero
        title="Petualangan Berharga"
        summary="Menumbuhkan sikap ramah tamah, bela lingkungan, olah raga alam bebas, dan minat masyarakat untuk menumbuhkan semangat hidup yang penuh mengisi jiwa pemuda."
        image={true}
        link="/tentang-kami"
        button="Tentang Kami"
        socmed={true}
      />

      {/* Division Card */}
      <section id="divisi">
        <div className="container">
          <div className="heading-line center">
            <div className="line"></div>
            <h1>5 Divisi</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sit tristique lectus amet. Sollicitudin posuere neque, non semper pharetra. Posuere
              pellentesque velit eget diam in facilisis eget sed pretium. Proin in vitae non orci feugiat leo auctor.</p>
          </div>
        </div>
      </section>

      {/* Pengurus */}
      <section id="pengurus">
        <div className="container">
          <div className="heading-line">
            <div className="line"></div>
            <h1>Pengurus</h1>
          </div>
        </div>
      </section>

      {/* 100KM section */}
      <section id="xpdc">
        <div className="container">
          <h1>XPDC 1000 KM Sungai Indonesia</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sit tristique lectus amet. Sollicitudin posuere neque, non semper pharetra.</p>
          <button className="btn-primary">RIVER GUIDE</button>
        </div>
      </section>

      {/* Blog Card */}
      <section id="blog">
        <div className="container">
          <div className="heading-line center">
            <div className="line"></div>
            <h1>Blog</h1>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className={styles.kontak}>
        <div className="container grid-col two">
          <div>
            <div className="heading-line">
              <div className="line"></div>
              <h1>Mari Berpetualang Bersama Kami</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sit tristique lectus amet.</p>
            </div>
          </div>
          <div>
            <button className="btn-secondary">Kontak Kami</button>
          </div>
        </div>
      </section>
    </>
  )
}

Home.layout = "default";
