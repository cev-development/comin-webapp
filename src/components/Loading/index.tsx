import { Container, LoadingCircle, Title } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <LoadingCircle />
      <Title>Carregando...</Title>
    </Container>
  );
};

export default Loading;
