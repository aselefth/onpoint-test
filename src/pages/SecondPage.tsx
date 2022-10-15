import { useRef } from 'react'
import styles from '../assets/styles/SecondPage.module.scss';
import sperm from '../assets/images/pink_sperm_1.png';

interface SecondPageProps {
  currPage: number
}

const SecondPage: React.FC<SecondPageProps> =  ({currPage}) => {
  const ref = useRef(null);
  
  return (
    <div className="container">
      <div className={styles.hero}>
        <h1 className={styles.hero__header}>
          Текст сообщения
        </h1>
        <div className={styles.hero__wrapper} ref={ref}>
           <p
          className={styles.hero__wrapper__textbox}
          >  
            <span>Lorem ipsum dolor sit amet,</span> consectetur adipisicing elit. Delectus commodi placeat fugit atque, et possimus iusto corporis suscipit alias consequatur magni dicta eos quidem quasi odio beatae. Est, dolor asperiores? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptate doloribus nostrum dolor possimus earum vero alias voluptatem ad rerum voluptatibus mollitia quaerat, a eius reprehenderit, aut ullam provident architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptate doloribus nostrum dolor possimus earum vero alias voluptatem ad rerum voluptatibus mollitia quaerat, a eius reprehenderit, aut ullam provident architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptate doloribus nostrum dolor possimus earum vero alias voluptatem ad rerum voluptatibus mollitia quaerat, a eius reprehenderit, aut ullam provident architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptate doloribus nostrum dolor possimus earum vero alias voluptatem ad rerum voluptatibus mollitia quaerat, a eius reprehenderit, aut ullam provident architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptate doloribus nostrum dolor possimus earum vero alias voluptatem ad rerum voluptatibus mollitia quaerat, a eius reprehenderit, aut ullam provident architecto!
          </p> 
        </div>
        {currPage === -1 && <div className={styles.sperm__container}>
          <img src={sperm} />
        </div>}
        {currPage === -1 && <div className={styles.sperm__container__second}>
          <img src={sperm} />
        </div>}
      </div>
    </div>
  )
}

export default SecondPage;