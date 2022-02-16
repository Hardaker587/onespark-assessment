import { StorageService } from "./storage.service";
interface LoginInterface {
  email: string;
  password: string;
}

export class AuthenticationService {
  Storage: StorageService;
  DefaultLogin: LoginInterface;

  constructor() {
    this.Storage = new StorageService();
    this.DefaultLogin = {
      email: "user@domain.com",
      password: "P@$$w0rd",
    };
  }

  login(email: string, password: string, callback: any) {
    if (
      this.DefaultLogin.email === email &&
      this.DefaultLogin.password === password
    ) {
      this.Storage.setStorage("auth:logged-in", "true");
      return callback;
    }
  }
}
