import BaseRequest from "./baseRequest";
import { BASEURL, FILMS, PEOPLE, PLANETS } from "../consts/swapiConsts";
import { IFilms, IPeoples, IPlanets } from "../interfaces/SWApiResponse";
export default class SwapiRequests extends BaseRequest {
    constructor() {
        super(BASEURL);
    }

    public async getSWPeople(): Promise<IPeoples> {
        return await super.requestData<IPeoples>(PEOPLE);
    }

    public async getSWFilms(): Promise<IFilms> {
        return await super.requestData<IFilms>(FILMS);
    }

    public async getSWPlanets(): Promise<IPlanets> {
        return await super.requestData<IPlanets>(PLANETS);
    }
}