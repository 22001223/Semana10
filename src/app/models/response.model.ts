import { Character } from "./character.model";

export interface Response {
    items: Character[];
    total: number;
    page : number;
    size : number;
    pages: number;
}
