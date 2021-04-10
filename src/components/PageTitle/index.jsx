import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './styles';

const PageTitle = ({ children }) => <Title>{children}</Title>;

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
