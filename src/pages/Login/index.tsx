import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input/style";
import { authRequest } from "../../store/modules/auth/actions";
import { Button, Container, Content, Form, Label, Title } from "./style";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const isLogged = useSelector((state: any) => state.auth.isLogged);

  useEffect(() => {
    if (isLogged) {
      history.push("/criancas");
    }
  }, [isLogged]);

  return (
    <Container>
      <Content>
        <Title>LOGIN</Title>
        <Form>
          <Label htmlFor="labelForEmail">Email:</Label>
          <Input
            id="labelForEmail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="labelForPassword">Senha:</Label>
          <Input
            id="labelForPassword"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={() => {
              dispatch(authRequest({ email, password }));
            }}
          >
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
