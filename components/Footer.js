import ScrollButton from './BackToTop';
import SocmedLists from './SocmedLists'
import Logo from '../public/images/logo.png'
import CustomLink from './CustomLink';
import Image from './Image';

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
                                himapala.unesa@unesa.ac.id</p>
                        </div>
                        <div>
                            <h4>Tentang Kami</h4>
                            <ul>
                                <li>
                                    <CustomLink href='/tentang-kami/sejarah'>
                                        <a>Sejarah</a>
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink href='/tentang-kami/pengurus'>
                                        <a>Pengurus</a>
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink href='/tentang-kami/rekamjejak'>
                                        <a>Rekam Jejak</a>
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink href='/tentang-kami/kontak'>
                                        <a>Kontak Kami</a>
                                    </CustomLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Halaman</h4>
                            <ul>
                                <li>
                                    <CustomLink href='/tentang-kami/syarat'>
                                        <a>Syarat dan Ketentuan</a>
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink href='/tentang-kami/privasi'>
                                        <a>Aturan Privasi</a>
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink href='/tentang-kami/disclaimer'>
                                        <a>Disclaimer</a>
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink href='/administrator'>
                                        <a>Administrator</a>
                                    </CustomLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src={Logo}
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
