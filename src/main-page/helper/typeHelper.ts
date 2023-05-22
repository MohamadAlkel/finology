export type MainPageModule = {
  cars: CarModule[];
  isFetching: boolean;
  fetchCars: (val: string) => Promise<void>;
};

export type InitialStateModule = {
  cars: CarModule[];
  isFetching: boolean;
};

export type CarModule = {
  id: number;
  carType: string;
  models: string;
  price: string;
  fuelType: string;
  condition: string;
  color: string;
};
