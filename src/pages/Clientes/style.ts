import styled from 'styled-components';

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

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    margin: 15px 3%;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 30%;
    min-width: 190px;

    input {
      margin: 20px 0px;
      height: 45px;
    }
  }
`;

export const Title = styled.div`
  font-family: poppins;
  font-size: 2rem;
  font-weight: 500;
  color: #323232;
  margin: 10px 0px;
`;

export const Label = styled.label`
  font-family: poppins;
  font-size: 1rem;
  font-weight: 400;
  color: #323232;
  margin: 10px 0px;
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

export const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: #84ae8a;
  border: none;
  padding: 15px 10px;
  color: #fff;
  font-family: poppins;
  font-weight: 500;
  transition: 0.5s;
  align-self: center;

  :hover {
    background-color: #9cbfa1;
  }
`;
