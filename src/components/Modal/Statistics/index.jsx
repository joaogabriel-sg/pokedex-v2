import React from 'react';
import PropTypes from 'prop-types';

import { Title, Content, Statistic, Data, Bar } from './styles';

const Statistics = ({ stats }) => {
  function defineStatName(name) {
    switch (name) {
      case 'hp':
        return 'hp';
      case 'attack':
        return 'atk';
      case 'defense':
        return 'def';
      case 'special-attack':
        return 's.atk';
      case 'special-defense':
        return 's.def';
      case 'speed':
        return 'spd';
      default:
        return name;
    }
  }

  return (
    <>
      <Title>Statistics</Title>
      <Content>
        {stats &&
          stats.length &&
          stats.map(({ base_stat: baseStatValue, stat }) => {
            const statName = defineStatName(stat.name);
            const barValue = baseStatValue < 100 ? baseStatValue : 100;

            return (
              <Statistic key={statName}>
                <Data>{statName}</Data>
                <Bar value={barValue} />
                <Data>{baseStatValue}</Data>
              </Statistic>
            );
          })}
      </Content>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      base_stat: PropTypes.number.isRequired,
      stat: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default Statistics;
