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
      dataIndex: 'name',
      key: 'nome',
    },
    {
      title: 'Idade',
      dataIndex: 'age',
      key: 'idade',
    },
    {
      title: 'Localização',
      dataIndex: 'place',
      key: 'local',
    },
    {
      title: 'Responsavel',
      dataIndex: 'guardian',
      key: 'responsavel',
    },
    {
      title: 'Contato',
      dataIndex: 'contact',
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
                      }, 300),
                    );
                  } else {
                    setTimeout(async () => {
                      const response = await authService.getKids();
                      setDataSource(response);
                    }, 200);
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
