import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% 3%;
`;

export const Subtitle = styled.div`
  font-family: poppins;
  font-size: 1rem;
  font-weight: 400;
  color: #323232;
  margin: 10px 0px;
`;

export const Title = styled.div`
  font-family: poppins;
  font-size: 2rem;
  font-weight: 500;
  color: #323232;
`;

export const ContentForm = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 2% 0px;
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  width: 50%;
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: #84ae8a;
  margin-top: 25px;
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
