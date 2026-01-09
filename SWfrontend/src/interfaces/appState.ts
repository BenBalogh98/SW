import Film from "../items/film";
import Item from "../items/item";
import Planet from "../items/planet";
import People from "../items/resident";

export default interface AppState extends Data {

}

export interface Data {
    planets: Planet[],
    residents: People[],
    films: Film[]
}