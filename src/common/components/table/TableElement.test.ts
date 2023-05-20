import { render, screen } from "@testing-library/vue";
import TableElement from "./TableElement.vue";

describe("tableElement", () => {
  it("renders", () => {
    render(TableElement);

    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
