import React from 'react';
import { IoExitOutline } from 'react-icons/io5';

import { Button, Text } from './styles';

import useAuth from '../../../hooks/useAuth';

const BtnLogout = () => {
  const { logout } = useAuth();

  return (
    <Button type="button" onClick={logout}>
      <Text>Sair</Text>
      <IoExitOutline title="Logout" />
    </Button>
  );
};

export default BtnLogout;
