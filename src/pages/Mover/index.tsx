import { Select } from 'antd';
import { useHistory } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Header, Loading } from '../../components';
import authService from '../../service/authService';
import {
  Button,
  Container,
  Content,
  ContentForm,
  Subtitle,
  Title,
} from './style';

const Mover: React.FC = () => {
  const history = useHistory();

  const [dataSource, setDataSource] = useState<any>([]);
  const [select, setSelect] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [para, setPara] = useState('');
  const { Option } = Select;

  const handleChange = (value: null, label: any[]) => {
    setSelect(label.map(e => e.key));
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
    return <Loading />;
  }

  const toUpdate = async () => {
    await authService.move(select, para);

    alert('Crianças foram movidas com sucesso');

    history.push('/criancas');
  };

  return (
    <Container>
      <Header />
      <Content>
        <Title>Mover crianças</Title>
        <ContentForm>
          <Subtitle>Selecione as crianças que vão se mover:</Subtitle>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Selecione as Crianças que deseja mover"
            onChange={handleChange}
            optionLabelProp="label"
          >
            {dataSource.map((element: any) => {
              return (
                <Option
                  // eslint-disable-next-line no-underscore-dangle
                  key={element._id}
                  value={element.name}
                  label={element.name}
                >
                  {element.name}
                </Option>
              );
            })}
          </Select>
          <Subtitle>Destino:</Subtitle>
          <Select
            style={{ width: '100%' }}
            placeholder="Local destino"
            onChange={e => {
              setPara(e);
            }}
            optionLabelProp="label"
          >
            <Option value="comin" label="COMIN (Maiores)">
              COMIN (Maiores)
            </Option>
            <Option value="cominIN" label="COMIN (Menores)">
              COMIN (Menores)
            </Option>
            <Option value="restroom" label="Banheiro">
              Banheiro
            </Option>
            <Option value="home" label="Casa">
              Casa
            </Option>
          </Select>
          <Button onClick={toUpdate}>Enviar</Button>
        </ContentForm>
      </Content>
    </Container>
  );
};

export default Mover;
