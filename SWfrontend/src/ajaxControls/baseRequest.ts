export default class BaseRequest {
    private baseURL: string;

    /**
     * The goal of this class is to make ajax requests a bit simplier.
     * @param baseURL the URL ending with '/'. The endpoints will be appended to this in requests.
     */
    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    public async getData<T>(endPoint: string): Promise<T> {
        const response = await fetch(this.baseURL + endPoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json() as T;
    }
}