import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  background-color: #ffffff;
  z-index: 997;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingCircle = styled.i`
  animation: linear rotation 2s infinite;
  border-top: 3px solid #b1e7fb;
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
  @keyframes rotation {
    to {
      transform: rotate(1turn);
    }
  }
`;
export const Title = styled.b`
  position: absolute;
  font-size: 1vh;
`;
