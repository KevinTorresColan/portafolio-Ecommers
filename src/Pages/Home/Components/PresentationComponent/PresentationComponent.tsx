import { ICONS } from '../../../../Common/Icons';
import { presentationTexts } from '../../../../Data';
import './presentationComponent.scss';

const PresentationComponent = () => {
  
  return (
    <section className='presentation'>
      <article className='presentation__picture'>
        <div className="presentation__picture-message">
          <h2 className='presentation__picture-message-text-two' >{presentationTexts.textOne}</h2>
          <h2 className='presentation__picture-message-text-three' >{presentationTexts.textTwo}</h2>
        </div>
      </article>
      <div className='presentation__bar'>
        <img src={ICONS.BAR} alt="" />
      </div>
    </section>
  )
}

export default PresentationComponent;