import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '67b68415-4a39-4850-b8a7-e40369a718d3',
};

export const sampleWithPartialData: IAuthority = {
  name: '54c5c9e2-c698-4cce-927a-ab7060d983da',
};

export const sampleWithFullData: IAuthority = {
  name: 'e64baad7-30af-4ee8-a374-92349e125dbe',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
