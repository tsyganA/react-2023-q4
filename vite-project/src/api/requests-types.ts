// export interface PersonRequest extends ShortPersonRequest {
//   mass: string;
//   skin_color: string;
//   homeworld: string;
//   films: string[];
//   species: string[];
//   vehicles: string[];
//   starships: string[];
//   created: string;
//   edited: string;
// }




// export interface ShortPersonRequest {
//   name: string;
//   birth_year: string;
//   gender: string;
//   height: string;
//   eye_color: string;
//   hair_color: string;
//   url: string;
// }


// export interface PersonRequest extends ShortPersonRequest {
//   status: 'Dead' | 'Alive' | 'unknown';
//   species: string;
//   type: string;
//   gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
//   image: string;
//   episode: string[];
// }

// export interface ShortPersonRequest {
//   id: number;
//   name: string;
//   // url: string;
//   // created: string;
//   // id: 1;
//   // name: string;
//   status: string;
//   species: string;
//   // type: string;
//   gender: string;
//   // origin: {
//   //   name: string;
//   //   url: string;
//   // };
//   // location: {
//   //   name: string;
//   //   url: string;
//   // };
//   image: string;
//   // episode: string[];
//   // url: string;
//   // created: string;
// }

export interface PersonRequest {
  attributes: ShortPersonRequest;
  id: string;
  links: { self: string };
  type: string;
}

export interface ShortPersonRequest {
  category: string;
  // creator: string;
  effect: string;
  // hand: string;
  image: string;
  // incantation: string;
  light: string;
  name: string;
  // slug: string;
  // wiki: string;
}

export interface iErrorBoundaryProps {
  children: React.ReactNode;
}

export interface iRenderRequest {
  renderRequest: ShortPersonRequest[];
}
