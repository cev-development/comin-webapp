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
  svg,
  img {
    height: 10vh;
    width: auto;
  }
  @keyframes rotation {
    to {
      transform: rotate(1turn);
    }
  }
`;
