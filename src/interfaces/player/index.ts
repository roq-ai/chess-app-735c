import { GameInterface } from 'interfaces/game';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  player_name: string;
  employee_id: string;
  game_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  game?: GameInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_name?: string;
  employee_id?: string;
  game_id?: string;
  user_id?: string;
}
