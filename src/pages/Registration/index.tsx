/* eslint-disable no-alert */
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import authService from '~/service/authService';

import { Header, Input } from '../../components';
import { generateRequiredInputValues } from '../../utils';
import {
  Button,
  Container,
  Content,
  ErroAlert,
  Label,
  Main,
  Title,
} from './style';

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
  const history = useHistory();

  const stateSchema = {
    ...generateRequiredInputValues([
      'name',
      'guardian',
      'contact',
      'age',
      'pcd',
      'sensitivity',
      'literacy',
      'learningDisorder',
      'escort',
    ]),
  };

  const [inputValue, setInputValue] = useState<typeInput>(stateSchema);

  const handleInput = async (value: string, inputName: string) => {
    let error = '';
    let isValid = true;

    if (inputValue[inputName].required && value.length === 0) {
      error = 'campo obrigatorio';
      isValid = false;
    }

    setInputValue(prevState => ({
      ...prevState,
      [inputName]: {
        isValid,
        value,
        required: inputValue[inputName].required,
        error,
      },
    }));
  };

  const toSave = async () => {
    await authService.create({
      name: inputValue.name.value,
      age: parseInt(inputValue.age.value, 10),
      guardian: inputValue.guardian.value,
      contact: inputValue.contact.value,
      pcd: inputValue.pcd.value,
      sensitivity: inputValue.sensitivity.value,
      literacy: inputValue.literacy.value,
      learningDisorder: inputValue.learningDisorder.value,
      escort: inputValue.escort.value,
    });

    alert('Criança criada com sucesso');

    history.push('/criancas');
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
            onChange={e => handleInput(e.target.value, 'name')}
          />
          <ErroAlert erro={!!inputValue.name.error}>
            {inputValue.name.error}
          </ErroAlert>
          <Label htmlFor="idade">Idade:</Label>
          <Input
            id="idade"
            onChange={e => handleInput(e.target.value, 'age')}
          />
          <ErroAlert erro={!!inputValue.age.error}>
            {inputValue.age.error}
          </ErroAlert>
          <Label htmlFor="responsavel">Responsável:</Label>
          <Input
            id="responsavel"
            onChange={e => handleInput(e.target.value, 'guardian')}
          />
          <ErroAlert erro={!!inputValue.guardian.error}>
            {inputValue.guardian.error}
          </ErroAlert>
          <Label htmlFor="contato">Contato:</Label>
          <Input
            id="contato"
            onChange={e => handleInput(e.target.value, 'contact')}
          />
          <Label htmlFor="pcd">A criança possui algum transtorno?</Label>
          <Input
            id="pcd"
            onChange={e => handleInput(e.target.value, 'pcd')}
            placeholder="TEA,TDAH,TOD,Síndrome de Down, Criança com mobilidade  reduzida ou Criança cadeirante, Surda, Cega, Outro"
          />
          <Label htmlFor="contato">
            A criança possui alguma sensibilidade?
          </Label>
          <Input
            id="sensitivity"
            onChange={e => handleInput(e.target.value, 'sensitivity')}
            placeholder="auditiva, visual, sensorial"
          />
          <Label htmlFor="literacy">A criança é alfabetiza?</Label>
          <Input
            id="literacy"
            onChange={e => handleInput(e.target.value, 'literacy')}
            placeholder="SIM | NÃO"
          />
          <Label htmlFor="learningDisorder">
            A criança tem algum transtorno de aprendizagem?
          </Label>
          <Input
            id="learningDisorder"
            onChange={e => handleInput(e.target.value, 'learningDisorder')}
            placeholder="SIM | NÃO"
          />
          <Label htmlFor="escort">
            A criança possui algum acompanhante para participar com ela durante
            a Comin 2024?
          </Label>
          <Input
            id="escort"
            onChange={e => handleInput(e.target.value, 'escort')}
            placeholder="SIM | NÃO"
          />

          <ErroAlert erro={!!inputValue.contact.error}>
            {inputValue.contact.error}
          </ErroAlert>
          <Button onClick={toSave}>Salvar</Button>
        </Main>
      </Content>
    </Container>
  );
};

export default Registration;
