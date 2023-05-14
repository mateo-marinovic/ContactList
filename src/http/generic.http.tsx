abstract class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  protected Url(url: string) {
    return `${this.baseUrl}${url}`;
  }
}

export default HttpClient;
