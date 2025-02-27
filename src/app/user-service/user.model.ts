export class IUser {
    username: string;
    firstName: string;
    lastName: string;
    role: string;

    private static _instance: IUser;

    private constructor() {
        this.username = '';
        this.firstName = '';
        this.lastName = '';
        this.role = '';
    }

    public static getInstance(): IUser{
        if (!this._instance) {
          this._instance = new IUser();
      }
    
      return this._instance;
    }

  }
  
  export interface IUserCredentials {
    username: string;
    password: string;
  }
  