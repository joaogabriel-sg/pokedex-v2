import React from 'react';
import { IoExitOutline } from 'react-icons/io5';

import { Button, Text } from './styles';

const BtnLogout = () => (
  <Button type="button">
    <Text>Sair</Text>
    <IoExitOutline title="Logout" />
  </Button>
);

export default BtnLogout;
