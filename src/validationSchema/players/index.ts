import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  player_name: yup.string().required(),
  employee_id: yup.string().required(),
  game_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
