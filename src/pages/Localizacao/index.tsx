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
    BERCARIO_MISSIONARIO: true,
    PEQUENOS_MISSIONARIOS: false,
    DESBRAVADORES_MISSIONARIOS: false,
    GTEEN: false,
    BANHEIRO: false,
    CASA: false,
  });

  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const switchLocal = (): string => {
    switch (true) {
      case locale.BERCARIO_MISSIONARIO:
        return 'BERCARIO_MISSIONARIO';
      case locale.PEQUENOS_MISSIONARIOS:
        return 'PEQUENOS_MISSIONARIOS';
      case locale.DESBRAVADORES_MISSIONARIOS:
        return 'DESBRAVADORES_MISSIONARIOS';
      case locale.GTEEN:
        return 'GTEEN';
      case locale.BANHEIRO:
        return 'BANHEIRO';
      case locale.CASA:
        return 'CASA';
      default:
        return 'DESBRAVADORES_MISSIONARIOS';
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
            select={locale.BERCARIO_MISSIONARIO}
            onClick={() =>
              setLocale({
                BERCARIO_MISSIONARIO: true,
                PEQUENOS_MISSIONARIOS: false,
                DESBRAVADORES_MISSIONARIOS: false,
                GTEEN: false,
                BANHEIRO: false,
                CASA: false,
              })
            }
          >
            BERÇARIO
          </ButtonTable>
          <ButtonTable
            select={locale.PEQUENOS_MISSIONARIOS}
            onClick={() =>
              setLocale({
                BERCARIO_MISSIONARIO: false,
                PEQUENOS_MISSIONARIOS: true,
                DESBRAVADORES_MISSIONARIOS: false,
                GTEEN: false,
                BANHEIRO: false,
                CASA: false,
              })
            }
          >
            PEQUENOS
          </ButtonTable>
          <ButtonTable
            select={locale.DESBRAVADORES_MISSIONARIOS}
            onClick={() =>
              setLocale({
                BERCARIO_MISSIONARIO: false,
                PEQUENOS_MISSIONARIOS: false,
                DESBRAVADORES_MISSIONARIOS: true,
                GTEEN: false,
                BANHEIRO: false,
                CASA: false,
              })
            }
          >
            DESBRAVADORES
          </ButtonTable>
          <ButtonTable
            select={locale.GTEEN}
            onClick={() =>
              setLocale({
                BERCARIO_MISSIONARIO: false,
                PEQUENOS_MISSIONARIOS: false,
                DESBRAVADORES_MISSIONARIOS: false,
                GTEEN: true,
                BANHEIRO: false,
                CASA: false,
              })
            }
          >
            GTEEN
          </ButtonTable>
          <ButtonTable
            select={locale.BANHEIRO}
            onClick={() =>
              setLocale({
                BERCARIO_MISSIONARIO: false,
                PEQUENOS_MISSIONARIOS: false,
                DESBRAVADORES_MISSIONARIOS: false,
                GTEEN: false,
                BANHEIRO: true,
                CASA: false,
              })
            }
          >
            Banheiro
          </ButtonTable>
          <ButtonTable
            select={locale.CASA}
            onClick={() =>
              setLocale({
                BERCARIO_MISSIONARIO: false,
                PEQUENOS_MISSIONARIOS: false,
                DESBRAVADORES_MISSIONARIOS: false,
                GTEEN: false,
                BANHEIRO: false,
                CASA: true,
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
