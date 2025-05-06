import { CommonData, CommonProps } from '@app-types/types';

export interface LocationData extends CommonData {
  type: string;
  dimension: string;
  created: string;
  residents: string[];
}

export interface LocationCardProps extends CommonProps {
  data: LocationData;
}
