export interface User {
  username: string;
  // password: string;
}

export interface CurrentUser extends User {
  password:string;
}

export interface Response{
  body:any;
  statusCode:string;
}
