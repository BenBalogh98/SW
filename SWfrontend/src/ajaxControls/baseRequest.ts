import $ from "jquery";

export default class BaseRequest {
    private baseURL: string;

    /**
     * The goal of this class is to make ajax requests a bit simplier.
     * @param baseURL the URL ending with '/'. The endpoints will be appended to this in requestData.
     */
    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    public requestData<T>(endPoint: string): Promise<T> {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: this.baseURL + endPoint,
                success: (data) => { resolve(data); },
                error: () => { reject(); }
            });

        });
    }
}