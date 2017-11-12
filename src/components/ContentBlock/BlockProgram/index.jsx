import React, {Component} from 'react';
import classNames from 'classnames';

import './styles.css';

class BlockProgram extends Component {
  render() {
    const {program} = this.props;

    return (
      <div className="block-program">
        <h2>Программа</h2>
        {program.map((day, i) => (
          <div className="day" key={`day${i}`}>
            <h3 dangerouslySetInnerHTML={{__html: day.dayName}} />
            <div className="white-block">
              {day.blocks.map((block, j) => (
                <div className="program-row">
                  <div className="name-time">
                    {block.type === 'lecture' &&
                      <p><b>{block.name}</b><br />{block.time}</p>
                    }
                  </div>
                  <div className={classNames('desc', {break: block.type === 'break'})}>
                    {block.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BlockProgram;
