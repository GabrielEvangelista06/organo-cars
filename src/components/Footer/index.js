import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <section>
        <ul className="footer__social-medias">
          <li>
            <img src="/assets/images/fb.png" alt="" className="fb" />
          </li>
          <li>
            <img src="/assets/images/tw.png" alt="" className="tw" />
          </li>
          <li>
            <img src="/assets/images/ig.png" alt="" className="ig" />
          </li>
        </ul>
      </section>
      <section className="logo">
        <img src="/assets/images/logo.png" alt="" />
      </section>
      <section className="text">
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
}
