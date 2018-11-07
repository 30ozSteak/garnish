import * as API from "./apicaller";
import Key from "../Key";

describe("API", () => {
  let url;

  beforeEach(() => {
    url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Key}`;

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: "response data" })
      })
    );
  });

  it("should call fetchData with the correct url", () => {
    API.fetchRequest(url);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it("should return a JSON object from the fetch call", async () => {
    const expected = { data: "response data" };
    const response = await API.fetchRequest(url);

    expect(response).toEqual(expected);
  });
});
