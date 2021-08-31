import Link from 'next/link'
import ScrollButton from './BackToTop';
import SocmedLists from './SocmedLists'
import Logo from '../public/images/logo.png'

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="grid-col four">
                        <div>
                            <h4>Himapala Unesa</h4>
                            <p>Sekretariat Himapala Unesa, Gedung P7, Kampus Lidah Wetan
                                Universitas Negeri Surabaya
                                Lakarsantri, Surabaya<br /><br />
                                hmpl.unesa@gmail.com</p>
                        </div>
                        <div>
                            <h4>Tentang Kami</h4>
                            <ul>
                                <li>
                                    <Link href='/tentang-kami#sejarah' as={ process.env.BACKEND_URL + '/tentang-kami#sejarah'}>
                                        <a>Sejarah</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/tentang-kami#pengurus' as={ process.env.BACKEND_URL + '/tentang-kami#pengurus'}>
                                        <a>Pengurus</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/tentang-kami#rekamjejak' as={ process.env.BACKEND_URL + '/tentang-kami#rekamjejak'}>
                                        <a>Rekam Jejak</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/tentang-kami#kontak' as={ process.env.BACKEND_URL + '/tentang-kami#kontak'}>
                                        <a>Kontak Kami</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Halaman</h4>
                            <ul>
                                <li>
                                    <Link href='/tentang-kami#syarat' as={ process.env.BACKEND_URL + '/tentang-kami#syarat'}>
                                        <a>Syarat dan Ketentuan</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/tentang-kami#privasi' as={ process.env.BACKEND_URL + '/tentang-kami#privasi'}>
                                        <a>Aturan Privasi</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/tentang-kami#disclaimer' as={ process.env.BACKEND_URL + '/tentang-kami#disclaimer'}>
                                        <a>Disclaimer</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/administrator' as={ process.env.BACKEND_URL + '/tentang-kami#administrator'}>
                                        <a>Administrator</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img
                                src={`${Logo.src}?lqip`}
                                alt="hmpl-logo"
                                width="143"
                                height="175"
                            />
                        </div>
                    </div>
                    <div className="grid-col two">
                        <div>
                            <SocmedLists
                                facebook="https://www.facebook.com/hmpl.unesa/"
                                youtube="https://www.youtube.com/c/HimapalaUnesa"
                                instagram="https://www.instagram.com/himapala.unesa/"
                                twitter="https://twitter.com/hmpl_unesa"
                                linkedin="https://www.linkedin.com/company/himapala-unesa/"
                            />
                        </div>
                        <div>
                            <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
