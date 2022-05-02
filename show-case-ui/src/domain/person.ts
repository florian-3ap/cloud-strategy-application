export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  birthdate: Date;
  city: string;
}

export function PersonArrayJSON(json: any): Person[] {
  return json.map((person: any): Person => {
    return {
      id: person["id"],
      firstName: person["firstName"],
      lastName: person["lastName"],
      birthdate: person["birthdate"],
      city: person["city"],
    };
  });
}
