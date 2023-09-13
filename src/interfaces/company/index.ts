import { GameInterface } from 'interfaces/game';
import { GameAdministratorInterface } from 'interfaces/game-administrator';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  game?: GameInterface[];
  game_administrator?: GameAdministratorInterface[];
  user?: UserInterface;
  _count?: {
    game?: number;
    game_administrator?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
