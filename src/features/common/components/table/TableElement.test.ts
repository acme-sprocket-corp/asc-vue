import { render, screen } from "@testing-library/vue";
import TableElement, { type TableElementProperties } from "./TableElement.vue";
import renderOptionsWrapper from "@/infrastructure/tests/RenderOptionsWrapper";

describe("tableElement", () => {
  it("renders", () => {
    const properties: TableElementProperties = {
      headers: ["First", "Second"],
    };

    render(TableElement, renderOptionsWrapper(properties));

    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
