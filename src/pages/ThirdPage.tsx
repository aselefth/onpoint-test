import styles from "../assets/styles/ThirdPage.module.scss";
import bottle from "../assets/images/bottle.png";
import bubble2 from "../assets/images/bubble2.png";
import bubble3 from "../assets/images/bubble3.png";
import bubble4 from "../assets/images/bubble4.png";
import leftLogo from '../assets/images/icon2.png';
import rightLogo from '../assets/images/icon1.png';
import { useState } from "react";


const ThirdPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="container">
      <div className={styles.hero}>
        {isModal && 
        <div 
          onClick={() => setIsModal(false)}
          className={styles.modal__wrapper}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={styles.modal}
          >
            <div 
              onClick={() =>setIsModal(false)}
              className={styles.close_modal}
            >
            </div>
            {page == 1 && <div className={styles.modal__page}>
              <div className={styles.modal__page__element}>
                <span>01</span>
                <p>lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div>
              <div className={styles.modal__page__element}>
                <span>02</span>
                <p>Faucibus pulnivefwe elementum interger enim</p>
              </div>
              <div className={styles.modal__page__element}>
                <span>03</span>
                <p>lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div>
            </div>}
            {page == 2 && <div className={styles.modal__page}>
              <div className={styles.modal__page__element}>
                <span>04</span>
                <p>lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div>
              <div className={styles.modal__page__element}>
                <span>05</span>
                <p>Faucibus pulnivefwe elementum interger enim</p>
              </div>
              <div className={styles.modal__page__element}>
                <span>06</span>
                <p>lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div>
            </div>}
            <div className={styles.pagination}>
              <span
                onClick={() => setPage(1)}
              >
                {'<'}
              </span>
              <p className={page == 1 ? styles.active : styles.nonactive}></p>
              <p className={page == 2 ? styles.active : styles.nonactive}></p>
              <span
                onClick={() => setPage(2)}
              >
                {'>'}
              </span>
            </div>
          </div>
        </div>}
        <img src={bottle} className={styles.bottle} />
        <div className={styles.bubble__container}>
          <img src={bubble2} className={styles.bubble} />
        </div>
        <div className={styles.bubble__container__second}>
          <img src={bubble2} className={styles.bubble} />
        </div>
        <div className={styles.bubble__container__third}>
          <img src={bubble3} className={styles.bubble} />
        </div>
        <div className={styles.bubble__container__fourth}>
          <img src={bubble4} className={styles.bubble} />
        </div>
        <div className={styles.bubble__container__fifth}>
          <img src={bubble3} className={styles.bubble} />
        </div>
        <div className={styles.hero__header}>
          {!isModal && <p>ключевое сообщение</p>}
          {isModal && <p>преимущества</p>}
          <h1>
            brend<span>xy</span>
          </h1>
        </div>
        <div className={styles.hero__content}>
          <div className={styles.hero__content__left}>
            <div className={styles.content__left__logo}>
              <img src={leftLogo} />
            </div>
            <div className={styles.content__left__wrapper}>
              Lorem ipsum dolor sit unde quibusdam saepe ipsam nisi, voluptas
              quidem. Enim voluptatibus aut rerum quod nesciunt.
            </div>
          </div>
          <div className={styles.hero__content__right}>
            <div className={styles.content__right__logo}>
              <img src={rightLogo} />
            </div>
            <div className={styles.content__right__top}>
              A arcu cursus vitae
            </div>
            <div 
              onClick={() => setIsModal(true)}
              className={styles.button}
            >
              <div className={styles.arrow}>
                <div className={styles.arrow__black}>+</div>
              </div>
              <p>Подробнее</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
