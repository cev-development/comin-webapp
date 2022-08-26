import api from './api';

interface ILogin {
  email: string;
  password: string;
}

interface ICreate {
  name: string;
  age: number;
  guardian: string;
  contact: string;
}

class SessionService {
  async auth({ email, password }: ILogin): Promise<any> {
    const response = await api.post(`/session`, {
      username: email,
      password,
    });

    return response.data;
  }

  async getKidsForLocal(local: string): Promise<any> {
    const response = await api.get(`/child/place/${local}`);

    return response.data;
  }

  async getKids(name: string | undefined = undefined): Promise<any> {
    const response = await api.get(`/child`, {
      params: {
        name,
      },
    });

    return response.data;
  }

  async move(ids: string[], local: string): Promise<any> {
    const response = await api.patch(`/child/move/${local}`, {
      childrenId: ids,
    });

    return response.data;
  }

  async create({ name, age, guardian, contact }: ICreate): Promise<any> {
    const response = await api.post(`/child`, {
      name,
      age,
      guardian,
      contact,
    });

    return response.data;
  }
}

export default new SessionService();
