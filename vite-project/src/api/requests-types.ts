export interface PersonRequest extends ShortPersonRequest {
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
}

export interface ShortPersonRequest {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  eye_color: string;
  hair_color: string;
  url: string;
  // id: string;
  // baseImageUrl: string;
}

// export interface TransformPerson {
//   id: string;
//   name: string;
//   birthYear: string;
//   gender: string;
//   eyeColor: string;
//   height: string;
//   hair_color: string;
//   img: string;
// }

export interface iErrorBoundaryProps {
  children: React.ReactNode;
}

export interface iRenderRequest {
  renderRequest: ShortPersonRequest[];
}

// export interface ResponseApi {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: ShortPersonRequest[];
// }

// export interface AppStateToProps {
//   mainState: AppState;
// }

// export interface AppState {
//   term: string;
//   people: TransformPerson[];
//   setSearchTerm: (newTerm: string) => void;
//   searchPerson: () => void;
//   loading: boolean;
// }

// export interface EmptyProps {}

// export interface EmptyState {}
