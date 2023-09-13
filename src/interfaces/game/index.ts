import { PlayerInterface } from 'interfaces/player';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface GameInterface {
  id?: string;
  game_status: string;
  game_type: string;
  start_time: any;
  end_time?: any;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  player?: PlayerInterface[];
  company?: CompanyInterface;
  _count?: {
    player?: number;
  };
}

export interface GameGetQueryInterface extends GetQueryInterface {
  id?: string;
  game_status?: string;
  game_type?: string;
  company_id?: string;
}
