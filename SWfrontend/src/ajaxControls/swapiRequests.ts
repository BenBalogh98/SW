import BaseRequest from "./baseRequest";
import { BASEURL, FILMS, PEOPLE, PLANETS } from "../consts/swapiConsts";
import { IFilm, IPeople, IPlanet } from "../interfaces/SWApiResponse";

export default class SwapiRequests extends BaseRequest {
    constructor() {
        super((import.meta as any).env.VITE_BASEURL);
    }

    public async getSWPeople(): Promise<IPeople[]> {
        return await super.requestData<IPeople[]>(PEOPLE);
    }

    public async getSWFilms(): Promise<IFilm[]> {
        return await super.requestData<IFilm[]>(FILMS);
    }

    public async getSWPlanets(): Promise<IPlanet[]> {
        return await super.requestData<IPlanet[]>(PLANETS);
    }
}