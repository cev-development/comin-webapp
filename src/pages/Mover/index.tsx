import { Select } from "antd";
import { useEffect, useState } from "react";
import { Header, Loading } from "../../components";
import authService from "../../service/authService";
import {
  Button,
  Container,
  Content,
  ContentForm,
  Subtitle,
  Title,
} from "./style";

const Mover: React.FC = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  const [select, setSelect] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [para, setPara] = useState("");
  const { Option } = Select;

  const handleChange = (value: number[]) => {
    setSelect(value);
  };

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
    return <Loading></Loading>;
  }
  return (
    <Container>
      <Header />
      <Content>
        <Title>Mover crianças</Title>
        <ContentForm>
          <Subtitle>Selecione as crianças que vão se mover:</Subtitle>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Selecione as Crianças que deseja mover"
            onChange={handleChange}
            optionLabelProp="label"
          >
            {dataSource.map((element: any) => {
              return (
                <Option value={element.id} label={element.nome}>
                  {element.nome}
                </Option>
              );
            })}
          </Select>
          <Subtitle>Destino:</Subtitle>
          <Select
            style={{ width: "100%" }}
            placeholder="Local destino"
            onChange={(e) => setPara(e)}
            optionLabelProp="label"
          >
            <Option value="COMIN" label="COMIN (Maiores)">
              COMIN (Maiores)
            </Option>
            <Option value="Banheiro" label="Banheiro">
              Banheiro
            </Option>
            <Option value="Casa" label="Casa">
              Casa
            </Option>
          </Select>
          <Button>Enviar</Button>
        </ContentForm>
      </Content>
    </Container>
  );
};

export default Mover;
