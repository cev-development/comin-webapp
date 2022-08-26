import { useEffect, useState } from 'react';
import { Header, Loading, TablePage } from '../../components';
import authService from '../../service/authService';
import {
  ButtonTable,
  Container,
  ContainerTable,
  Content,
  HeaderTable,
  Title,
} from './style';

const Localizacao: React.FC = () => {
  const [locale, setLocale] = useState({
    comin: true,
    cominIn: false,
    banheiro: false,
    casa: false,
  });

  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const switchLocal = (): string => {
    switch (true) {
      case locale.comin:
        return 'comin';
      case locale.cominIn:
        return 'cominIn';
      case locale.banheiro:
        return 'banheiro';
      case locale.casa:
        return 'casa';
      default:
        return 'comin';
    }
  };

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const response = await authService.getKidsForLocal(switchLocal());
      setDataSource(response);
      setLoading(false);
    };
    load();
  }, [locale]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Header />
      <Content>
        <Title>Localização</Title>
        <HeaderTable>
          <ButtonTable
            select={locale.comin}
            onClick={() =>
              setLocale({
                comin: true,
                cominIn: false,
                banheiro: false,
                casa: false,
              })
            }
          >
            COMIN Maiores
          </ButtonTable>
          <ButtonTable
            select={locale.cominIn}
            onClick={() =>
              setLocale({
                comin: false,
                cominIn: true,
                banheiro: false,
                casa: false,
              })
            }
          >
            COMIN Menores
          </ButtonTable>
          <ButtonTable
            select={locale.banheiro}
            onClick={() =>
              setLocale({
                comin: false,
                cominIn: false,
                banheiro: true,
                casa: false,
              })
            }
          >
            Banheiro
          </ButtonTable>
          <ButtonTable
            select={locale.casa}
            onClick={() =>
              setLocale({
                comin: false,
                cominIn: false,
                banheiro: false,
                casa: true,
              })
            }
          >
            Casa
          </ButtonTable>
        </HeaderTable>
        <ContainerTable>
          <TablePage columns={columns} dataSource={dataSource} />
        </ContainerTable>
      </Content>
    </Container>
  );
};

export default Localizacao;
