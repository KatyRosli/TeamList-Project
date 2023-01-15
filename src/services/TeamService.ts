import http from '../http-common';
import ITeam from '../types/Team';

export const getAll = () => {
    return http.get<ITeam>("/");
}

export const create = (data: ITeam) => {
    return http.post<ITeam>("/", data);
  };