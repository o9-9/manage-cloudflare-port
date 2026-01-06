interface AxiosLikeResponse {
    data: any;
    status: number;
    statusText: string;
    headers: Headers;
}

const handle = (method: string, url: string, body: any, params: BunFetchRequestInit): Promise<AxiosLikeResponse> => new Promise((r) => {
    // @ts-expect-error 🥀
    const response: AxiosLikeResponse = {};

    const body2 = body ? { body: typeof body === 'object' ? JSON.stringify(body) : body } : {};

    fetch(url, {
        method,
        ...body2,
        ...params
    }).then((res) => {
        response.headers = res.headers;
        response.status = res.status;
        response.statusText = res.statusText;

        res.text().then((text) => {
            try {
                response.data = JSON.parse(text);
            } catch {
                response.data = text;
            }
            r(response);
        });
    });
});

const get = (url: string, params: BunFetchRequestInit) => handle('GET', url, null, params);
const deleteX = (url: string, params: BunFetchRequestInit) => handle('DELETE', url, null, params);
const post = (url: string, body: any, params: BunFetchRequestInit) => handle('POST', url, body, params);
const put = (url: string, body: any, params: BunFetchRequestInit) => handle('PUT', url, body, params);

export const axiosLike = { get, delete: deleteX, post, put };