import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistic.module.css'
import { getRandomHexColor } from '../../utils/getRandomHexColor';

// const Statistic = ({statisticList, title = 'Upload stats'}) => {
  const Statistic = ({statisticList, title}) => {
  return (
    <section className={s.container}>
      {/* <h3 className={s.title}>{title}</h3> */}
      {title && <h3 className={s.title}>{title}</h3>}

      <ul className={s.statList}>
        {statisticList.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.item}
            style={{
             backgroundColor: getRandomHexColor()
            }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  statisticList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
  title: PropTypes.string,
};

export default Statistic;