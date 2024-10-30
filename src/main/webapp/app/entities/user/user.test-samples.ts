import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 13737,
  login: '_',
};

export const sampleWithPartialData: IUser = {
  id: 11370,
  login: 'd.z',
};

export const sampleWithFullData: IUser = {
  id: 28004,
  login: '9uru2L',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
