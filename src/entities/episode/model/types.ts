import { CommonData, CommonProps } from '@app-types/types';

export interface EpisodeData extends CommonData {
  air_date: string;
  episode: string;
  created: string;
  characters: string[];
}

export interface EpisodeCardProps extends CommonProps {
  data: EpisodeData;
}
