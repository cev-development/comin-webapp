import { useState } from "react";
import { Header, Input } from "../../components";
import { generateRequiredInputValues } from "../../utils";
import {
  Button,
  Container,
  Content,
  ErroAlert,
  Label,
  Main,
  Title,
} from "./style";

interface IPropsInput {
  isValid: boolean;
  value: string;
  required: boolean;
  error: string;
}

type typeInput = {
  [key: string]: IPropsInput;
};

const Registration: React.FC = () => {
  const stateSchema = {
    ...generateRequiredInputValues(["name", "guardian", "contact", "age"]),
  };

  const [inputValue, setInputValue] = useState<typeInput>(stateSchema);

  const handleInput = async (value: string, inputName: string) => {
    let error = "";
    let isValid = true;

    if (inputValue[inputName].required && value.length === 0) {
      error = "campo obrigatorio";
      isValid = false;
    }

    setInputValue((prevState) => ({
      ...prevState,
      [inputName]: {
        isValid,
        value,
        required: inputValue[inputName].required,
        error,
      },
    }));
  };

  return (
    <Container>
      <Header />
      <Content>
        <Title>Cadastrar Crianças</Title>
        <Main>
          <Label htmlFor="nome">Nome:</Label>
          <Input
            id="nome"
            onChange={(e) => handleInput(e.target.value, "name")}
          ></Input>
          <ErroAlert erro={!!inputValue.name.error}>
            {inputValue.name.error}
          </ErroAlert>
          <Label htmlFor="idade">Idade:</Label>
          <Input
            id="idade"
            onChange={(e) => handleInput(e.target.value, "age")}
          ></Input>
          <ErroAlert erro={!!inputValue.age.error}>
            {inputValue.age.error}
          </ErroAlert>
          <Label htmlFor="responsavel">Responsável:</Label>
          <Input
            id="responsavel"
            onChange={(e) => handleInput(e.target.value, "guardian")}
          ></Input>
          <ErroAlert erro={!!inputValue.guardian.error}>
            {inputValue.guardian.error}
          </ErroAlert>
          <Label htmlFor="contato">Contato:</Label>
          <Input
            id="contato"
            onChange={(e) => handleInput(e.target.value, "contact")}
          ></Input>
          <ErroAlert erro={!!inputValue.contact.error}>
            {inputValue.contact.error}
          </ErroAlert>
          <Button>Salvar</Button>
        </Main>
      </Content>
    </Container>
  );
};

export default Registration;
