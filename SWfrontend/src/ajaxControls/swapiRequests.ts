import BaseRequest from "./baseRequest";
import { BASEURL, FILMS, PEOPLE, PLANETS } from "../consts/swapiConsts";
import { IFilm, IPeople, IPlanet } from "../interfaces/SWApiResponse";

export default class SwapiRequests extends BaseRequest {
    constructor() {
        super((import.meta as any).env.VITE_BASEURL);
    }

    public async getSWPeople(): Promise<IPeople[]> {
        return await super.getData<IPeople[]>(PEOPLE);
    }

    public async getSWFilms(): Promise<IFilm[]> {
        return await super.getData<IFilm[]>(FILMS);
    }

    public async getSWPlanets(): Promise<IPlanet[]> {
        return await super.getData<IPlanet[]>(PLANETS);
    }

    public async searchSWFilms(searchTerm: string): Promise<IFilm[]> {
        return await super.getData<IFilm[]>(`${FILMS}/search?${searchTerm}`);
    }

    public async searchSWPlanets(searchTerm: string): Promise<IPlanet[]> {
        return await super.getData<IPlanet[]>(`${PLANETS}/search?${searchTerm}`);
    }
}