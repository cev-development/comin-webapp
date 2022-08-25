import { useEffect, useState } from "react";
import { Header, Loading, TablePage } from "../../components";
import authService from "../../service/authService";
import {
  ButtonTable,
  Container,
  ContainerTable,
  Content,
  HeaderTable,
  Title,
} from "./style";

const Localizacao: React.FC = () => {
  const [locale, setLocale] = useState({
    comin: true,
    banheiro: false,
  });

  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Idade",
      dataIndex: "idade",
      key: "idade",
    },
    {
      title: "Responsavel",
      dataIndex: "responsavel",
      key: "responsavel",
    },
    {
      title: "Contato",
      dataIndex: "contato",
      key: "contato",
    },
  ];

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const response = await authService.getKidsForLocal("comin");
      setDataSource(response);
      setLoading(false);
    };
    load();
  }, [locale]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <Container>
      <Header />
      <Content>
        <Title>Localização</Title>
        <HeaderTable>
          <ButtonTable
            select={locale.comin}
            onClick={() => setLocale({ comin: true, banheiro: false })}
          >
            COMIN
          </ButtonTable>
          <ButtonTable
            select={locale.banheiro}
            onClick={() => setLocale({ comin: false, banheiro: true })}
          >
            Banheiro
          </ButtonTable>
          <ButtonTable
            select={locale.banheiro}
            onClick={() => setLocale({ comin: false, banheiro: true })}
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
