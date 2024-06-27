export interface PetResponseDTO {
    name: string;
    species: string;
    breed: string;
    age: number;
    sex: string;
    image: string;
  }

  export interface ReminderResponseDTO {
    id: number;
    name: string;
    description: string;
    nextDate: string;
    time: string;
    days: string;
  }

export interface PetRequestDTO {
    name: string;
    species: string;
    breed: string;
    age: number;
    sex: string;
}

export interface ReminderRequestDTO {
  petName: string,
  name: string,
  description: string,
  time: string,
  days: Array<string>
}