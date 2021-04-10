import React from 'react';
import PropTypes from 'prop-types';

import { Subtitle } from './styles';

const PageSubtitle = ({ children }) => <Subtitle>{children}</Subtitle>;

PageSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageSubtitle;
