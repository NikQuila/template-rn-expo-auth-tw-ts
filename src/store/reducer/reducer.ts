export const createAction = <T = any>(type: string, payload: T) => ({
  type,
  payload,
});
