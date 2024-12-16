import React, { useState } from 'react';
import '../components/css/section.css';
import Modal from './Modal'; 

const Section = () => {

  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isPairLessonsModalOpen, setIsPairLessonsModalOpen] = useState(false);
  const [isGroupLessonsThreeModalOpen, setIsGroupLessonsThreeModalOpen] = useState(false); 
  const [isGroupLessonsFiveModalOpen, setIsGroupLessonsFiveModalOpen] = useState(false); 
  const [teacherModal, setTeacherModal] = useState({ isOpen: false, content: null });

  const openFirstModal = () => setIsFirstModalOpen(true);
  const closeFirstModal = () => setIsFirstModalOpen(false);

  const openSecondModal = () => setIsSecondModalOpen(true);
  const closeSecondModal = () => setIsSecondModalOpen(false);

  const openPairLessonsModal = () => setIsPairLessonsModalOpen(true);
  const closePairLessonsModal = () => setIsPairLessonsModalOpen(false);

  const openGroupLessonsThreeModal = () => setIsGroupLessonsThreeModalOpen(true);
  const closeGroupLessonsThreeModal = () => setIsGroupLessonsThreeModalOpen(false);

  const openGroupLessonsFiveModal = () => setIsGroupLessonsFiveModalOpen(true);
  const closeGroupLessonsFiveModal = () => setIsGroupLessonsFiveModalOpen(false);

  const openTeacherModal = (content) => setTeacherModal({ isOpen: true, content });
  const closeTeacherModal = () => setTeacherModal({ isOpen: false, content: null });

  return (
    <div>
     
      <section className="first-section" >
        <h1>КУРСЫ АНГЛИЙСКОГО ЯЗЫКА | БИШКЕК</h1>
        <p>Envio knows how to bring you results!</p>
        <div className="info-container">
          <div className="info-section">
            <h3 className="main-info">
              Envio — это языковая школа в Бишкеке, которая предоставляет курсы английского языка для всех возрастов и уровней. Мы ориентируемся на современные методики преподавания, включая коммуникативный подход, где акцент делается на развитие разговорных навыков. Студенты практикуются в свободном общении и преодолевают языковой барьер уже с первых уроков.
            </h3>
          </div>
          <div className="info-section2">
            <h3 className="info-text2">
              В Envio предлагаются программы для начинающих и продвинутых студентов (A1-C2): общий английский для улучшения аудирования, чтения, письма и говорения; английский для детей с игровым подходом; подготовка к экзаменам IELTS, TOEFL и другим международным тестам; бизнес-английский для карьерного роста и работы в международных компаниях.
            </h3>
          </div>
          <div className="info-section3">
            <h3 className="info-text2">
              В Envio вы встретите много классных, креативных учителей, которые используют индивидуальный подход к каждому ученику. Наши преподаватели создают комфортную и дружелюбную атмосферу, чтобы процесс обучения был легким и увлекательным. Мы разработали собственный метод обучения, который включает в себя использование увлекательных игр, интерактивных заданий и современных технологий.
            </h3>
          </div>
        </div>
      </section>


      <section className="courses-section" id='courses'>
        <div className="courses-info">
          <h2 className='about-courses-2'>О наших курсах</h2>
          <p>
            Наши курсы имеют <strong>широкое разнообразие</strong>. У нас имеются:
          </p>
          <ul>
            <li className="lessons">
              Индивидуальные занятия — <strong>3, 5 раз в неделю</strong>
            </li>
            <li className="lessons">
              Парные занятия — <strong>3, 5 раз в неделю</strong>
            </li>
            <li className="lessons">
              Групповые занятия — <strong>3, 5 раз в неделю</strong>
            </li>
          </ul>
        </div>
        <div className="main-prices">
        <div className="main-individual">
        
        <div className="individual-lessons-3">
          <h3 className='text-h3'>
            Индивидуальные занятия <br /> 3 раза в неделю
          </h3>
          <button onClick={openFirstModal} className='button3'>Нажмите, чтобы узнать</button>
        </div>

        
        {isFirstModalOpen && (
          <Modal onClose={closeFirstModal}>
            <h2 className='text-h2'>Подробнее о курсах 3 раза в неделю</h2>
            <p>1 час 30 минут <br /> 3 раза в неделю <br /> 12 занятий в месяц <br /> онлайн/оффлайн <br /> график обсуждается <br /> Стоимость занятий:10000 сом </p>
          </Modal>
        )}

        <div className="individual-lessons-5">
          <h3 className='text-h3'>
            Индивидуальные занятия <br /> 5 раз в неделю
          </h3>
          <button onClick={openSecondModal} className='button5'>Нажмите, чтобы узнать</button>
        </div>
        
        {isSecondModalOpen && (
          <Modal onClose={closeSecondModal}>
            <h2 className='text-h2'>Подробнее о курсах 5 раз в неделю</h2>
            <p>1 час 30 минут <br /> 5 раз в неделю <br /> 20 занятий в месяц <br /> онлайн/оффлайн <br /> график обсуждается <br /> Стоимость занятий:16000 сом</p>
          </Modal>
        )}
      </div>
        

        
      <div className="main-pair">

        <div className="pair-lessons-3">
          <h3 className='text-h3'>
            Парные занятия <br /> 3 раза в неделю
          </h3>
          <button onClick={openPairLessonsModal} className='button-pair'>Нажмите, чтобы узнать</button>
        </div>


        {isPairLessonsModalOpen && (
          <Modal onClose={closePairLessonsModal}>
            <h2 className='text-h2'>Подробнее о парных занятиях 3 раза в неделю</h2>
            <p>1 час 30 минут <br /> 3 раза в неделю <br /> 12 занятий в месяц <br /> для двух человек <br /> онлайн/оффлайн <br /> график обсуждается <br /> Стоимость: 7500 с каждого </p>
          </Modal>
        )}
      </div>
        
      <div className="main-group">

        <div className="group-lessons-3">
          <h3 className='text-h3'>
            Групповые занятия <br /> 3 раза в неделю
          </h3>
          <button onClick={openGroupLessonsThreeModal} className='button-group'>Нажмите, чтобы узнать</button>
        </div>


        {isGroupLessonsThreeModalOpen && (
          <Modal onClose={closeGroupLessonsThreeModal}>
            <h2 className='text-h2'>Подробнее о групповых занятиях 3 раза в неделю</h2>
            <p>1 час 30 минут <br /> 3 раза в неделю <br /> 12 занятий в месяц <br /> от 8 до 12 человек <br /> оффлайн <br /> график обсуждается <br /> Стоимость: 3500 с человека </p>
          </Modal>
        )}


        <div className="group-lessons-5">
          <h3 className='text-h3'>
            Групповые занятия <br /> 5 раз в неделю
          </h3>
          <button onClick={openGroupLessonsFiveModal} className='button-group'>Нажмите, чтобы узнать</button>
        </div>


        {isGroupLessonsFiveModalOpen && (
          <Modal onClose={closeGroupLessonsFiveModal}>
            <h2 className='text-h2'>Подробнее о групповых занятиях 5 раз в неделю</h2>
            <p>1 час 30 минут <br /> 5 раз в неделю <br /> 20 занятий в месяц <br /> от 8 до 12 человек <br /> оффлайн <br /> график обсуждается <br /> Стоимость: 5000 с человека </p>
          </Modal>
        )}
      </div>
        </div>
      </section>
        <section className='teachers-section' id='teachers'>
          <h1>Наши учителя</h1>
          <div className="teachers-card">
            <div className="Ai-Peri-card">
              <h3>Ms. Ai-Peri</h3>
              <button onClick={() => openTeacherModal('Ай-пери работает офлайн, преподает уровням elementary, pre-intermediate, intermediate, а также берет студентов на офлайн индивидуальные занятия.')}>Подробнее</button>
            </div>
            <div className="Aynazik-card">
            <h3>Ms. Ainazik</h3>
            <button onClick={() => openTeacherModal('Айназик работает как и офлайн так и онлайн группы всех уровней, также от elementary до upper-intermediate студентов на индивидуальные занятия берет на онлайн/офлайн.')}>Подробнее</button>
            </div>
            <div className="Belek-card">
            <h3>Mr. Belek</h3>
            <button onClick={() => openTeacherModal('Белек преподаватель со стажем в шесть лет группы разных уровней, от elementary до advanced.')}>Подробнее</button>
            </div>
            <div className="Nurtai-card">
            <h3>Mr. Nurtai</h3>
            <button onClick={() => openTeacherModal('Нуртай преподаватель с высоким стажем, преподает группам разных уровней: от elementary до advanced, принимает студентов офлайн формата обучения на индивидуальные и парные занятия.')}>Подробнее</button>
            </div>
            <div className="Aitolkun-card">
            <h3>Ms. Aitolkun</h3>
            <button onClick={() => openTeacherModal('Айтолкун преподаватель с 4 летним стажем работает онлайн.')}>Подробнее</button>
            </div>
            <div className="Kiana-card">
            <h3>Ms. Kiana</h3>
            <button onClick={() => openTeacherModal('Киана преподаватель с небольшим стажем работает онлайн.')}>Подробнее</button>
            </div>
          </div>

          {teacherModal.isOpen && (
            <Modal onClose={closeTeacherModal}>
              <h2>О преподавателе</h2>
              <p>{teacherModal.content}</p>
            </Modal>
          )}
          <div className="exem">
              <h4 className='test'>Тест</h4>
              <p>Данный тест поможет нам определить ваш уровень</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSceLw0UhiRlrHATxhf2wllFSRql0HW6c0g32-Ecu1O9MwzQsw/viewform?fbclid=PAAaYd3tRIfJi-mBQsnjR1opRMcONCQnGKTwTuhc8IFw2302CBXAngMVVBOL4_aem_AWrE8T0mL-Y-Arshj6IwpOB70dfs1Tc8J7aQ_NBVJ66SavAXyVpaMs4PJS-49bYwgG8"><button className='test-btn'>Пройти тест</button></a>
          </div>
              
          </section>
    </div>
  );
  
};


export default Section;
