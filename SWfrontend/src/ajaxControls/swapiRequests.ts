import BaseRequest from "./baseRequest";
import { BASEURL, PLANETS } from "../consts/swapiConsts";
import { IPlanet, IPlanets } from "../interfaces/SWApiResponse";
export default class SwapiRequests extends BaseRequest {
    constructor() {
        super(BASEURL);
    }

    public getSWPeople() {

    }

    public async getSWPlanets(): Promise<IPlanets> {
        return await super.requestData<IPlanets>(PLANETS);
    }
}