import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background-color: #fff;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  margin: 2% 3%;
  @media (max-width: 480px) {
    margin: 2% 0%;
  }
`;

export const Title = styled.div`
  font-family: poppins;
  font-size: 2rem;
  font-weight: 500;
  color: #323232;
  @media (max-width: 480px) {
    margin: 0% 3%;
  }
`;

export const ButtonTable = styled("button")<{ select: boolean }>`
  padding: 10px 20px;
  margin: 0px 10px;
  border-radius: 5px 5px 0px 0px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  color: #323232;
  cursor: pointer;
  ${({ select }) => select && `background: #b1e7fb;`}
`;

export const HeaderTable = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const ContainerTable = styled.main`
  display: flex;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  @media (max-width: 480px) {
    padding: 0px;
  }
`;
