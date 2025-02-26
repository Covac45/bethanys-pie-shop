export class IUser {
    username: string;
    password: string;
    firstName: string;
    lastName: string;

    private static _instance: IUser;

    private constructor() {
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
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
  