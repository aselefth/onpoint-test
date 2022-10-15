import bacteria from "../assets/images/bacteria.png";
import sperm from '../assets/images/pink_sperm_1.png';
import bacteriaLeft from '../assets/images/Layer 7.png';
import bigBacteria from '../assets/images/Layer 4.png';
import roundedBacteria from '../assets/images/Layer 5.png';
import { FC } from "react";
import "../assets//styles/FirstPage.scss";

interface FirstPageProps {
  setCurrPage: () => void
}

const FirstPage: React.FC<FirstPageProps> = ({setCurrPage}) => {
  return (
    <div className="container">
      <div className="hero">
        <p className="hero__welcome">привет,</p>
        <div className="hero__content">
          <p>это <span>не</span> коммерческое</p>
          <div className="hero__content__bottom">
            <p>задание</p>
            <div
              className="button"
              onClick={setCurrPage}
            >
              <div className="arrow">
                <div className="arrow__black">
                →
                </div>
              </div>
              <p>Что дальше?</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="bacteria__container">
        <img src={bacteria} />
      </div>
      <div className="sperm__container">
        <img src={sperm} />
      </div>
      <div className="bacteriaLeft__container">
        <img src={bacteriaLeft} />
      </div>
      <div className="bigBacteria__container">
        <img src={bigBacteria} />
      </div>
      <div className="roundedBacteria__container">
        <img src={roundedBacteria} />
      </div>
      <div className="roundedBacteria__container second">
        <img src={roundedBacteria} />
      </div>
      <div className="roundedBacteria__container roundedBacteria__blured">
        <img src={roundedBacteria} />
      </div>
      <div className="sperm__container sperm__blured">
        <img src={sperm} />
      </div>
    </div>
  );
};

export default FirstPage;
