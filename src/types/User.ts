export interface IUser {
    login: string,
    logout: string,
  }

export interface IAuthDetails {
    user: string,
    login: (data: string) => Promise<void>;
    logout: () => void;
}
