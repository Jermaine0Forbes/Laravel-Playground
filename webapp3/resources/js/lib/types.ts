export type Movie = {
  name: string;
  genre: string;
  rating: number;
  year: number;
  updated?: boolean;
};

export type SelectMovie = {
    name?:string,
  genre?: string;
  rating?: number;
  year?: number;
  updated?: boolean;
}