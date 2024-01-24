import { formatDate, formatDateTime, formatTime } from "./dateUtils";

describe("should format the date and time", () => {
  test("should format dateTime", () => {
    const date = new Date("2024-01-21T08:47:08.470Z").toISOString();
    const expectedDateTime = "Jan 21, 2024 8:47 AM";
    expect(formatDateTime(date)).toEqual(expectedDateTime);
  });

  test("should format date", () => {
    const date = new Date("2024-01-21T08:47:08.470Z").toISOString();
    const expectedDateTime = "Jan 21, 2024";
    expect(formatDate(date)).toEqual(expectedDateTime);
  });

  test("should format time", () => {
    const date = new Date("2024-01-21T08:47:08.470Z").toISOString();
    const expectedDateTime = "8:47 AM";
    expect(formatTime(date)).toEqual(expectedDateTime);
  });
});
