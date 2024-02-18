import './footerComponent.scss';
import { ICONS } from '../../Common/Icons';

const FooterComponent = () => {
  return (
    <section className='footer'>
      <article className='footer__container'>
        <article className='footer__container__payment-methods'>
          <div className='footer__container-title'>
            <h3>MÉTODOS DE PAGO</h3>
          </div>
          <div className='footer__container-contains-method'>
            <div>
              <img src={ICONS.YAPE} alt="yape" />
            </div>
            <div>
              <img src={ICONS.PLIN} alt="plin" />
            </div>
          </div>
          <div className='footer__container-title'>
            <h3>DEPÓSITO BANCARIO</h3>
          </div>
          <div className='footer__container-contains-deposit'>
            <div>
              <img src={ICONS.BCP} alt="bcp" />
            </div>
            <div>
              <img src={ICONS.BBVA} alt="bbva" />
            </div>
            <div>
              <img src={ICONS.INTERBANK} alt="interbank" />
            </div>
          </div>
        </article>
        <article className='footer__container__contact-us'>
          <div className='footer__container-title'>
            <h3>CONTACTENOS</h3>
          </div>
          <h3 className='footer__container__contact-us-tel'>Teléfono: 955452793</h3>
          <h3 className='footer__container__contact-us-wa'>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=051955452793" rel="noreferrer">
              WhatsApp: (+51)955452793
            </a>
          </h3>
          <div className='footer__container__contact-us-schedule'>
            <span>Lunes - Sabado:</span>
            <span>7.00 am - 10.00 pm</span>
          </div>
          <div className='footer__container__contact-us-schedule'>
            <span>Domingo:</span>
            <span>7.00 am - 08.00 pm</span>
          </div>
          <div className='footer__container__contact-us-social'>
            <div>
              <a href="https://www.facebook.com/profile.php?id=100088972125810" target="_blank" rel="noreferrer">
                <img src={ICONS.FACEBOOK} alt="facebook" />
              </a>
            </div>
            <div>
              <a target="_blank" href="https://www.instagram.com/dkrinioschan/?next=%2Faccounts%2Fconfirm_email%2FDQ2haBRz%2FZGtyaW5pb3NjaGFuQGdtYWlsLmNvbQ%2F%3Fapp_redirect%3DFalse" rel="noreferrer">
                <img src={ICONS.INSTAGRAM} alt="instagram" />
              </a>
            </div>
            <div>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=051955452793" rel="noreferrer">
                <img src={ICONS.WHATSAPP} alt="whatsapp" />
              </a>
            </div>
          </div>
        </article>
      </article>
      <hr />
      <article className='footer__copyright'>
        <h3 >Copyright © 2022 GiftStore - Todos los derechos reservados</h3>
      </article>
    </section>
  )
}

export default FooterComponent;
