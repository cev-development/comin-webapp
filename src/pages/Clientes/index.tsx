import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Loading, TablePage, Input } from '../../components';
import authService from '../../service/authService';
import {
  Button,
  Container,
  ContainerTable,
  Content,
  HeaderContent,
  Title,
} from './style';

const Clientes: React.FC = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typingTimer, setTypingTimer] = useState<any>(null);

  const history = useHistory();

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Idade',
      dataIndex: 'idade',
      key: 'idade',
    },
    {
      title: 'Localização',
      dataIndex: 'local',
      key: 'local',
    },
    {
      title: 'Responsavel',
      dataIndex: 'responsavel',
      key: 'responsavel',
    },
    {
      title: 'Contato',
      dataIndex: 'contato',
      key: 'contato',
    },
  ];

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const response = await authService.getKids();
      setDataSource(response);
      setLoading(false);
    };
    load();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Container>
        <Header />
        <Content>
          <HeaderContent>
            <Title>Crianças</Title>
            <div>
              <Button onClick={() => history.push('/registrar')}>
                + Cadastar Crianças
              </Button>
              <Input
                placeholder="Pesquisar"
                onChange={e => {
                  clearTimeout(typingTimer);
                  if (e.target.value) {
                    setTypingTimer(
                      setTimeout(async () => {
                        const response = await authService.getKids(
                          e.target.value,
                        );
                        setDataSource(response);
                      }, 1000),
                    );
                  }
                }}
              />
            </div>
          </HeaderContent>
          <ContainerTable>
            <TablePage columns={columns} dataSource={dataSource} />
          </ContainerTable>
        </Content>
      </Container>
    </>
  );
};

export default Clientes;
