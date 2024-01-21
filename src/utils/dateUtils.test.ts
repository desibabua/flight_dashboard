import { formatDateTime } from "./dateUtils";

describe("should format the date and time", () => {
  it("should format dateTime", () => {
    const date = "2024-01-21T08:47:08.470Z";
    const expectedDateTime = "Jan 21, 2024 2:17 PM";
    expect(formatDateTime(date)).toEqual(expectedDateTime);
  });
});
