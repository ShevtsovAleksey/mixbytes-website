import React, {Component} from 'react';

import Person from 'components/Person';

class Alexey extends Component {
  render() {
    return (
      <Person image={require('./img/alexey.jpg')}>
        <h2 id="alexey">Алексей Макеев</h2>
        {!this.props.noPosition &&
          <p><strong>Co-founder, Software Engineer</strong></p>
        }
        <ul>
          <li>Закончил МГТУ им. Н.&nbsp;Э.&nbsp;Баумана, кафедра &laquo;Компьютерные комплексы, системы и&nbsp;сети&raquo;, диплом о&nbsp;распределенных вычислениях</li>
          <li>Опыт программирования 17&nbsp;лет (Assembler, C/C++, Java, PHP, Perl, Python, JS)</li>
          <li>Опыт разработки Big Data решений на&nbsp;Hadoop-кластере промышленного масштаба</li>
          <li>Работал тимлидом в&nbsp;проекте интернет-поисковика Поиск@mail.ru</li>
          <li>Работал системным архитектором в&nbsp;фирме&nbsp;1С, отдел разработки платформы</li>
          <li>В&nbsp;сфере интересов: Big Data, распределенные вычисления, информационная безопасность, финтех, инвестиции</li>
        </ul>
      </Person>
    );
  }
}

export default Alexey;
