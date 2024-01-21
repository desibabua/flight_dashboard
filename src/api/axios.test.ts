import axios from "./axios";

describe("should initialize axios", () => {
  test("should have base url", async () => {
    expect(axios.defaults.baseURL).toEqual(
      "https://flight-status-mock.core.travelopia.cloud"
    );
  });
});
