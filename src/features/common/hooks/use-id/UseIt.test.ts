import { useId } from "..";

describe("useId", () => {
  it("has a value in range", () => {
    const result = Number.parseFloat(useId());

    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(1);
  });
});
