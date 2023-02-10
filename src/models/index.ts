export class Users{
    constructor(public userId:string, public name:string ,public email:string, public Password:string){}
}

export interface UserData{
  userId: string,
  name:string,
  email:string,
}