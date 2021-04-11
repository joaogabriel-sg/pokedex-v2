import styled from 'styled-components';
import { Subtitle } from '../../../components/PageSubtitle/styles';

export const Container = styled.div`
  max-width: 36rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${Subtitle} {
    text-align: center;
  }
`;
