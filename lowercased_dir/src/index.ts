import { TypeB } from './type-b';

export class Broken {
    method () {
        return { } as TypeB;
    }
}