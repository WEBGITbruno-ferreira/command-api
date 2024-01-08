export interface Contact {
  id: string,
  name: string,
  email: string,
  phone: string
}


//usado para buscar no banco
export interface ContactCreate {

  name: string,
  email: string,
  phone: string
  userEmail : string
}

//usado para gravar no banco
export interface ContactCreateData {

  name: string,
  email: string,
  phone: string
  userId : string
}





export interface ContactRepository{
  create(data: ContactCreateData ) : Promise<Contact>;
  findByEmailOrPhone(name: string, email : string ) : Promise<Contact | null>;
  findAllContacts(userId: string) : Promise<Contact[]>;
}