import { CommonData, CommonProps, CommonSubData } from '@app-types/types';

type CharacterGender = 'Male' | 'Female' | 'unknown';
type CharacterStatus = 'Alive' | 'unknown' | 'Dead';
type CharacterSpecies = 'Human' | 'Alien';

export interface CharacterData extends CommonData {
  status: CharacterStatus;
  species: CharacterSpecies;
  type: string;
  gender: CharacterGender;
  image: string;
  created: string;
  url: string;
  origin: CommonSubData;
  location: CommonSubData;
  episode: string[];
}

export interface CharacterCardProps extends CommonProps {
  data: CharacterData;
}
