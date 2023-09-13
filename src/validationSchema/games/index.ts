import * as yup from 'yup';

export const gameValidationSchema = yup.object().shape({
  game_status: yup.string().required(),
  game_type: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
});
