import BackgroundVideo from "./backgroundVideo";

class About extends React.Component {
  render() {
    return (
      <div className="about" style={{ backgroundColor: "black" }}>
        <BackgroundVideo
          isAbout={true}
          img="about.jpg"
          mainText="О КОМАНДЕ"
          secondaryText="C A M P U S"
        ></BackgroundVideo>
        <div className="persons-description">
          <div className="person-box" id="person1">
            <img src="person1.jpg" alt="person1"></img>
            <b>Межаков Никита</b>
            <p>
              CEO, Продюсер. В 14 лет взял камеру в руки и после 4-х лет
              практики начал успешно вести проекты в качестве продюсера.
            </p>
          </div>
          <div className="person-box" id="person2">
            <img src="person2.jpg" alt="person2"></img>
            <b>Жуйков Вячеслав</b>
            <p>
              Режиссер. Оператор. Клипмейкер. Реализовал более 100 проектов.
              Снимет кино даже на Sony Ericsson.
            </p>
          </div>
          <div className="person-box" id="person3">
            <img src="person3.jpg" alt="person3"></img>
            <b>Караджаев Кирилл</b>
            <p>
              Дизайнер, аниматор. Делает настолько круто, что даже не хочется
              говорить «Поиграй с шрифтами».
            </p>
          </div>
        </div>
        <div className="first">
          <h1 className="step-number">01</h1>
          <div className='step-number-margin'></div>
          <b>Как все начиналось</b>

          <p>
            Все члены команды начинали с фриланса. Кто-то снимал мероприятия.
            Кто-то делал логотипы для своих знакомых. Но с развитием
            профессиональных навыков каждый понял, что ресурсы одного человека
            ограничены – и было принято решение объединиться в команду.
          </p>
        </div>
        <div className="second">
          <img
            src="02back.jpg"
            className="second-background"
            alt="step-second"
          ></img>
          <div className="second-step-description">
            <h1 className="second-step-number">02</h1>
            <b>Наша философия</b>
            <p>
              Кампус в университетах – это территория, на которой лучшие умы
              объединяются, создают новые прорывные продукты. Именно поэтому
              главная задача Campus’а – руками молодых специалистов улучшать
              упаковку Российских бизнесов.
            </p>
          </div>
        </div>
        <div className="third">
          <img src="03.svg" alt="step"></img>
          <div className="third-margin"></div>
          <b>Продуманность</b>
          <p>
            Любой проект стартует с глубокого изучения Вашего клиента, начиная с
            его семейного статуса, заканчивая тем, сколько времени он проводит в
            Tik Tok. Это позволяет составить уникальный сценарий или дизайн
            проекта, который будет нацелен именно на Вашего покупателя.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
