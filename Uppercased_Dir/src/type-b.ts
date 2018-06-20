import { Merge } from './types';
import { TypeA } from './type-a';

export type TypeB = Merge<TypeA, {
    b: string;
}>;