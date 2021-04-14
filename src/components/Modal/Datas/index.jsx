import React from 'react';
import PropTypes from 'prop-types';

import { Container, Data } from './styles';

const Datas = ({ datas }) => (
  <Container>
    {datas.length && datas.map((data) => <Data key={data}>{data}</Data>)}
  </Container>
);

Datas.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Datas;
