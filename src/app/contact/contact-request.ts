export class ContactRequest {
    personalData: PersonalData;
    requestType: any = '';
    text = '';
  }

  export class PersonalData {
    firstName = '';
    lastName = '';
    email = '';
    mobile = '';
  }
