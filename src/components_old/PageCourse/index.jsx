import React, {Component} from 'react';

import Navbar from 'components/Navbar';
import ContainerBlock from 'components/ContainerBlock';
import ContainerSeparator from 'components/ContainerSeparator';
import ContentBubble from 'components/ContentBubble';
import Person from 'components/Person';
import Sergey from 'components/Person/Sergey';
import Footer from 'components/Footer';

import './styles.css';

class PageCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggler: null
    }
  }

  handleTogglers(id) {
    const {toggler} = this.state;

    if (toggler && toggler === id) {
      this.setState({toggler: null})
    } else {
      this.setState({toggler: id})
    }
  }

  render() {
    const navLinks = [
      {link: 'course', name: 'О курсе'},
      {link: 'day1', name: 'День 1'},
      {link: 'day2', name: 'День 2'},
      {link: 'speakers', name: 'Ведущие'},
      {link: 'participation', name: 'Участие'}
      // {link: 'EXTERNAL', address: 'https://mixbytes.timepad.ru/event/560706/', name: 'Записаться'}
    ];

    const toggleContents = {
      blockchain: (<p><b>Блокчейн&nbsp;&mdash;</b> цифровой реестр транзакций, сделок, контрактов, по&nbsp;сути любой информации. Способ хранения и&nbsp;криптографической защиты данных от&nbsp;подделки. Описан в&nbsp;1991&nbsp;году.</p>),
      cryptoCurrencies: (<p><b>Криптовалюта&nbsp;&mdash;</b> цифровые счётные единицы, учёт которых децентрализован. Функционирование данных систем происходит при помощи распределённой компьютерной сети. Термин закрепился после публикации Forbes статьи o&nbsp;Биткоине &laquo;Crypto currency&raquo; в&nbsp;2011&nbsp;году.</p>),
      smartContracts: (<p><b>Смарт-контракт&nbsp;&mdash;</b> алгоритм, набор условий, выполнение которых влечет за&nbsp;собой некоторые события в&nbsp;реальном мире или цифровых системах. Для реализации требуется децентрализованная среда, исключающая человеческий фактор. Для передачи стоимости в&nbsp;смарт-контракте требуется криптовалюта. Идея предложена в&nbsp;1994&nbsp;году.</p>),
      icoIto: (<p><b>ITO или ICO&nbsp;&mdash;</b> форма привлечения инвестиций или краудфайндинга в&nbsp;виде эмиссии и&nbsp;продажи инвесторам новых криптовалют. Первое ICO проведено в&nbsp;2013 году (Mastercoin).</p>),
      bitcoin: (<p><b>Биткоин&nbsp;&mdash;</b> пиринговая платёжная система. Для функционирования и&nbsp;защиты использует криптографические методы (блокчейн). Вся информация о&nbsp;транзакциях между адресами системы доступна в&nbsp;открытом виде. Была запущена в&nbsp;2009&nbsp;году.</p>),
      ethereum: (<p><b>Ethereum&nbsp;&mdash;</b> платформа для создания децентрализованных онлайн-сервисов на&nbsp;базе блокчейна и&nbsp;смарт-контрактов. Реализована как единая децентрализованная виртуальная машина. Запущена 30&nbsp;июля 2015&nbsp;года.</p>)
    };

    const toggled = toggleContents[this.state.toggler];

    return (
      <div>
        <Navbar links={navLinks} />

        <ContainerBlock type="dark">
          <ContentBubble id="course">
            <h1 className="display-4">2-дневный курс<br />&laquo;Погружение в&nbsp;блокчейн&raquo;</h1>
            <div className="emph">
              <div className="togglers">
                <button className="btn btn-primary" onClick={() => this.handleTogglers('blockchain')}>Блокчейн</button>
                <button className="btn btn-primary" onClick={() => this.handleTogglers('cryptoCurrencies')}>Криптовалюты</button>
                <button className="btn btn-primary" onClick={() => this.handleTogglers('smartContracts')}>Смарт-контракты</button>
                <button className="btn btn-primary" onClick={() => this.handleTogglers('icoIto')}>ITO/ICO</button>
                <button className="btn btn-primary" onClick={() => this.handleTogglers('bitcoin')}>Bitcoin</button>
                <button className="btn btn-primary" onClick={() => this.handleTogglers('ethereum')}>Ethereum</button>
              </div>
              {this.state.toggler &&
                <div className="toggled card card-body">
                  {toggled}
                </div>
              }
              <p>Даем фундаментальное понимание технической и&nbsp;юридической базы блокчейн-технологий за&nbsp;2&nbsp;полных дня. От&nbsp;технических основ до&nbsp;юридической практики. Вы,&nbsp;наконец, поймете как и&nbsp;почему всё это работает!</p>
              <p>Курс проводится совместно с&nbsp;компанией <a href="http://cych.io">cych.io</a> и&nbsp;приглашёнными экспертами Центра Россия-ОЭСР РАНХиГС при Президенте&nbsp;РФ.</p>
            </div>
            <p>Блокчейн-технологии ворвались в&nbsp;нашу жизнь&nbsp;и, похоже, собираются полностью изменить&nbsp;её. Биткоин и&nbsp;ICO у&nbsp;всех на&nbsp;устах, в&nbsp;них вкладывают деньги, часто даже не&nbsp;понимая о&nbsp;чем идет речь.</p>
            <p>Ведь, к&nbsp;сожалению, большая часть доступной информации&nbsp;&mdash; либо слишком техническая и&nbsp;непонятная документация для программистов, либо слишком рекламная и&nbsp;провокационная, нацеленная на&nbsp;привлечение инвестиций в&nbsp;очередное ICO.</p>
            <p>Мы&nbsp;болеем за&nbsp;популяризацию блокчейн-технологий, за&nbsp;прозрачность и&nbsp;доступность информации, за&nbsp;безопасность финансовых операций. На&nbsp;курсе вы&nbsp;получите фундамент знаний, который позволит вам уверенно ориентироваться в&nbsp;новостном и&nbsp;рекламном потоке. И&nbsp;принимать взвешенные решения об&nbsp;использовании блокчейн-технологий в&nbsp;своей жизни, карьере и&nbsp;бизнесе.</p>
            <p><span className="badge badge-success">Наш материал будет полезен:</span> бизнесменам, инвесторам, юристам, менеджерам, программистам и&nbsp;всем, кто хочет получить исчерпывающее понимание основ блокчейн-технологий.</p>
            <p>Если вы&nbsp;скептик&nbsp;&mdash; приходите, вы&nbsp;сможете задать спикерам самые сложные вопросы. Cкорее всего, вы&nbsp;поверите в&nbsp;силу блокчейн-технологий больше, чем раньше.</p>
            <p>Если блокчейн и&nbsp;ICO уже вскружили вам голову&nbsp;&mdash; приходите, и&nbsp;мы&nbsp;постараемся немного охладить ваш пыл.</p>
            <p><span className="badge badge-warning">Обещаем!</span> Мы&nbsp;не&nbsp;будем ничего рекламировать или призывать вас вкладывать куда-то деньги.</p>
          </ContentBubble>
        </ContainerBlock>

        <ContainerSeparator />

        <ContainerBlock type="light">
          <ContentBubble id="day1">
            <h1 className="display-4">Программа</h1>
            <h2>День 1. Криптография, блокчейн, Биткоин: срываем покровы</h2>
            <table className="table table-bordered timetable">
              <tbody>
                <tr>
                  <th scope="row">
                    Блок 1<br />
                    <span>10:00-11:30</span>
                  </th>
                  <td>
                    <p>Часть&nbsp;1. Введение в&nbsp;криптографию</p>
                    <ul>
                      <li>Симметричные криптосистемы.</li>
                      <li>Внутреннее устройство симметричных шифров.</li>
                      <li>Целостность данных и&nbsp;контрольные суммы.</li>
                      <li>Схемы аутентификации и&nbsp;хранение паролей.</li>
                      <li>Алгоритмы работы программ защиты информации.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Блок 2<br />
                    <span>11:45-13:15</span>
                  </th>
                  <td>
                    <ul>
                      <li>Ассиметричные криптосистемы.</li>
                      <li>Схема электронной подписи.</li>
                      <li>Атаки типа man-in-the-middle и&nbsp;система сертификатов.</li>
                      <li>TOR и&nbsp;mixed networks.</li>
                      <li>Протокол подбрасывания монеты.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="break">Перерыв 1 час 15 минут</td>
                </tr>
                <tr>
                  <th scope="row">
                    Блок 3<br />
                    <span>14:30-16:00</span>
                  </th>
                  <td>
                    <p>Часть&nbsp;2. Блокчейн</p>
                    <ul>
                      <li>Определения блокчейна.</li>
                      <li>Блоки, механизмы сцепления блоков и&nbsp;целостность цепочки.</li>
                      <li>Основные моменты алгоритма Bitcoin.</li>
                      <li>Требования сложности и&nbsp;схема работы майнингового алгоритма.</li>
                      <li>Понятие консенсуса и&nbsp;подробное рассмотрение консенсуса Proof Of&nbsp;Work.</li>
                      <li>Атаки double spend и&nbsp;51%, стратегии майнинговых пулов, стабильность работы сети.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Блок 4<br />
                    <span>16:15-17:45</span>
                  </th>
                  <td>
                    <ul>
                      <li>Задача византийских генералов и&nbsp;другие виды консенсуса.</li>
                      <li>&laquo;Proof of&nbsp;stake&raquo; и&nbsp;&laquo;delegated proof of&nbsp;stake&raquo;.</li>
                      <li>Движок Graphene и&nbsp;проекты на&nbsp;его основе.</li>
                      <li>Примеры сложной внутренней экономики проекта, вопросы децентрализации.</li>
                      <li>&laquo;Proof of&nbsp;storage&raquo;, &laquo;proof of&nbsp;compute&raquo;, &laquo;Proof of&nbsp;everything&raquo;.</li>
                      <li>Примеры использования смарт-контрактов и&nbsp;схема работы сети Ethereum.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </ContentBubble>

          <ContentBubble id="day2">
            <h2>День&nbsp;2. Технологии ICO и&nbsp;мировая юридическая практика</h2>
            <table className="table table-bordered timetable">
              <tbody>
                <tr>
                  <th scope="row">
                    Блок 5<br />
                    <span>10:00-11:30</span>
                  </th>
                  <td>
                    <p>Часть 3. Блокчейн и бизнес</p>
                    <ul>
                      <li>Платежи в&nbsp;криптовалютах.</li>
                      <li>Криптовалютные биржи и&nbsp;кошельки.</li>
                      <li>Приоритетность транзакции, комиссии и&nbsp;газ.</li>
                      <li>Централизованные vs&nbsp;децентрализованные решения.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Блок 6<br />
                    <span>11:45-13:15</span>
                  </th>
                  <td>
                    <ul>
                      <li>Выпуск токенов, стандарт ERC20.</li>
                      <li>Анатомия crowdsale смарт-контракта для проведения ICO/ITO.</li>
                      <li>Аудит безопасности смарт-контрактов, примеры уязвимостей.</li>
                      <li>Ошибки проектирования и&nbsp;качество экономических моделей crowdsale.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="break">Перерыв 1 час 15 минут</td>
                </tr>
                <tr>
                  <th scope="row">
                    Блок 7<br />
                    <span>14:30-16:00</span>
                  </th>
                  <td>
                    <p>Часть&nbsp;4. Блокчейн и&nbsp;право. Правовые аспекты ITO/ICO</p>
                    <ul>
                      <li>Международный опыт регулирования криптовалют и&nbsp;токенов.</li>
                      <li>Анализ позиций международных организаций и&nbsp;стран.</li>
                      <li>Классификация криптовалюты и&nbsp;токена как объектов права в&nbsp;РФ.</li>
                      <li>Выбор договоров для передачи токена и&nbsp;получения криптовалюты.</li>
                      <li>Риски гражданской, административной, уголовной ответственности.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Блок 8<br />
                    <span>16:15-17:45</span>
                  </th>
                  <td>
                    <ul>
                      <li>Вопросы налогов, способы снижения налоговых рисков.</li>
                      <li>Вывод криптовалюты в&nbsp;фиатные средства. Вопросы ПОД/ФТ, валютного и&nbsp;налогового законодательства.</li>
                      <li>Позиции банков по&nbsp;получению фиатных средств от&nbsp;продажи криптовалюты.</li>
                      <li>Позиции крупнейших в&nbsp;мире криптобирж по&nbsp;возможности перевода средств в&nbsp;Россию.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </ContentBubble>

          <ContentBubble>
            <p>Специальная подготовка не&nbsp;требуется! Любой человек, владеющий цифрами, в&nbsp;состоянии усвоить до&nbsp;80-90% материала.</p>
            <p>Общая продолжительность программы 16&nbsp;академических часов.</p>
            {/*
              <a className="btn btn-success" href="https://mixbytes.timepad.ru/event/560706/#register">Зарегистрироваться на сайте Timepad.ru</a>
            */}
          </ContentBubble>
        </ContainerBlock>

        <ContainerSeparator />

        <ContainerBlock type="dark">
          <ContentBubble id="speakers">
            <h1 className="display-4">Ведущие. Техническая часть</h1>
            <Sergey noPosition={true} />
          </ContentBubble>

          <ContentBubble id="speakers">
            <h1 className="display-4">Ведущие. Юридическая часть</h1>
            <Person image={require('./img/antonina.jpg')}>
              <h2>Антонина Левашенко</h2>
              <ul>
                <li>Юрист международного права</li>
                <li>Эксперт Центра Стратегических Разработок</li>
                <li>Старший научный сотрудник Академии Внешней Торговли (ВАВТ) Минэкономразвития РФ</li>
                <li>Руководитель Центра компетенций и&nbsp;анализа стандартов ОЭСР РАНХиГС при Президенте&nbsp;РФ</li>
              </ul>
            </Person>

            <Person image={require('./img/ivan.jpg')}>
              <h2>Иван Ермохин</h2>
              <ul>
                <li>Юрист международного права</li>
                <li>Научный сотрудник ВАВТ Минэкономразвития РФ</li>
                <li>Эксперт Центра компетенций и&nbsp;анализа стандартов ОЭСР РАНХиГС при Президенте&nbsp;РФ.</li>
              </ul>
            </Person>

            <Person image={require('./img/sofia.jpg')}>
              <h2>Софья Лебедева</h2>
              <ul>
                <li>Экономист-международник</li>
                <li>Научный сотрудник Российского центра компетенций и&nbsp;анализа стандартов ОЭСР РАНХиГС при Президенте&nbsp;РФ</li>
              </ul>
            </Person>

            <Person image={require('./img/maria.jpg')}>
              <h2>Мария Гирич</h2>
              <ul>
                <li>Юрист международного права</li>
                <li>Научный сотрудник Клуба Россия-ОЭСР ВАВТ Минэкономразвития&nbsp;РФ</li>
              </ul>
            </Person>

            <Person image={require('./img/alexandra.jpg')}>
              <h2>Александра Коваль</h2>
              <ul>
                <li>Юрист международного права</li>
                <li>Директор Клуба Россия-ОЭСР ВАВТ Минэкономразвития&nbsp;РФ</li>
              </ul>
            </Person>
          </ContentBubble>
        </ContainerBlock>

        <ContainerSeparator />

        <ContainerBlock type="light">
          <ContentBubble id="participation">
            <h1 className="display-4">Участие</h1>
            <p>Курс прошел 9-10 сентября в Москве. В ближайшее время повторение курса не планируем.</p>
            {/*
            <p>Ближайший курс пройдет <b>9-10 сентября</b> (суббота и&nbsp;воскресенье) в&nbsp;Москве, в&nbsp;зале &laquo;Фокус Холл&raquo; (м.&nbsp;Фрунзенская)</p>
            <p>Время: оба дня с&nbsp;10:00 до&nbsp;18:00</p>
            <div className="emph">
              <h2>Стоимость</h2>
              <p>
                <b>До&nbsp;1&nbsp;сентября</b><br />
                Два дня: 6000&nbsp;&#8381; (первые 2&nbsp;ряда: 12000&nbsp;&#8381;)<br />
                Один день на&nbsp;выбор: 3500&nbsp;&#8381; (первые 2&nbsp;ряда: 7000&nbsp;&#8381;)
              </p>
              <p>
                <b>C&nbsp;1&nbsp;сентября</b><br />
                Два дня: 8000&nbsp;&#8381; (первые 2&nbsp;ряда: 16000&nbsp;&#8381;)<br />
                Один день на&nbsp;выбор: 5000&nbsp;&#8381; (первые 2&nbsp;ряда: 10000&nbsp;&#8381;)
              </p>
              <a className="btn btn-success" href="https://mixbytes.timepad.ru/event/560706/#register">Зарегистрироваться на сайте Timepad.ru</a>
              <div className="card border-success mt-3" style={{fontSize: '80%'}}>
                <div className="card-body">
                  <h4 className="card-title text-success">-20% при оплате Bitcoin или Ethereum</h4>
                  <p>Cделайте перевод по&nbsp;текущему курсу за&nbsp;вычетом&nbsp;20% и&nbsp;пришлите нам ФИО участников для внесения в&nbsp;список. При&nbsp;оплате биткоинами регистрация на&nbsp;Timepad.ru не&nbsp;требуется.</p>
                  <p>
                    Bitcoin: 1QKj9niHezvenxWWw5ZDrHv6i4yujo3ZPh<br />
                    Ethereum: 0x2B1d01Ac2c87F1FD3b07F0A09eF4A42a03368458
                  </p>
                </div>
              </div>

            </div>
            <p>Место проведения: Москва, ул. Ефремова, 12, стр&nbsp;2, зал &laquo;Фокус Холл&raquo;</p>
            <iframe src="https://yandex.ru/map-widget/v1/-/CBUubGqhcC" style={{width: '100%', height: '400px'}} frameborder="0"></iframe>
            */}
          </ContentBubble>

          <ContentBubble className="transparent">
            <h1>Информационная поддержка</h1>
            <div className="card mt-3 mb-3">
              <div className="card-body partners">
                <div><a href="https://allcoinshome.com/"><img src={require('./img/allcoinshome-logo.png')} width="250" height="75" /></a></div>
                <div><a href="https://t.me/cryptoinvest">t.me/cryptoinvest</a></div>
                <div><a href="https://freedman.club/"><img src={require('./img/freed-logo.jpg')} /></a></div>
                <div><a href="http://cryptomore.io/"><img src={require('./img/more-logo.jpg')} /></a></div>
              </div>
            </div>
          </ContentBubble>
        </ContainerBlock>

        <Footer feedback={true} />

      </div>
    );
  }
}

export default PageCourse;
