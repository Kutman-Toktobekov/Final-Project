import React from 'react'
import '../components/css/section.css'

const section = () => {
  return (
    <div>
      <section className="first-section">
        <h1>КУРСЫ АНГЛИЙСКОГО ЯЗЫКА | БИШКЕК</h1>
        <p>Envio knows how to bring you results!</p>
        <div className="info-container">
           <div className="info-section">
            <h3 className="main-info">Envio — это языковая школа в Бишкеке, которая предоставляет курсы английского языка для всех возрастов и уровней. Мы ориентируемся на современные методики преподавания, включая коммуникативный подход, где акцент делается на развитие разговорных навыков. Студенты практикуются в свободном общении и преодолевают языковой барьер уже с первых уроков.</h3>
            </div>
            <div className="info-section2">
                <h3 className='info-text2'>В Envio предлагаются программы для начинающих и продвинутых студентов (A1-C2): общий английский для улучшения аудирования, чтения, письма и говорения; английский для детей с игровым подходом; подготовка к экзаменам IELTS, TOEFL и другим международным тестам; бизнес-английский для карьерного роста и работы в международных компаниях.</h3>
            </div> 
        </div>
            
    </section>
    </div>
  )
}

export default section;
