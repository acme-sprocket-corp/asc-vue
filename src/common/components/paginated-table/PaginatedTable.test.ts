import { PaginatedTable } from "@/common";
import { render, screen } from "@testing-library/vue";
import type { PaginatedTableProperties } from "./PaginatedTable.vue";
import renderOptionsWrapper from "@/common/tests/RenderOptionsWrapper";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("paginatedTable", () => {
  it("shows total entities", () => {
    const data: PaginatedTableProperties = {
      entityCount: 30,
      currentPage: 1,
      pageSize: 10,
      pageChange: vi.fn(),
      pageSizeChange: vi.fn(),
      headers: [],
    };

    render(PaginatedTable, renderOptionsWrapper(data));

    expect(screen.getByText(/1 - 10 of 30 entities/i)).toBeInTheDocument();
  });

  it("has correct pagination buttons", () => {
    const data: PaginatedTableProperties = {
      entityCount: 30,
      currentPage: 1,
      pageSize: 10,
      pageChange: vi.fn(),
      pageSizeChange: vi.fn(),
      headers: [],
    };

    render(PaginatedTable, renderOptionsWrapper(data));

    expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "2" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "3" })).toBeInTheDocument();
  });

  it("has correct active page", () => {
    const data: PaginatedTableProperties = {
      entityCount: 30,
      currentPage: 2,
      pageSize: 10,
      pageChange: vi.fn(),
      pageSizeChange: vi.fn(),
      headers: [],
    };

    render(PaginatedTable, renderOptionsWrapper(data));

    const listItems = screen.getAllByRole("listitem");

    const currentPage = 2;

    expect(listItems[currentPage]).toHaveClass("active");
  });

  it("has correct active page", async () => {
    const user = userEvent.setup();

    const mockPageSizeChange = vi.fn();

    const data: PaginatedTableProperties = {
      entityCount: 30,
      currentPage: 2,
      pageSize: 10,
      pageChange: vi.fn(),
      pageSizeChange: mockPageSizeChange,
      headers: [],
    };

    render(PaginatedTable, renderOptionsWrapper(data));

    await user.selectOptions(screen.getByRole("combobox"), ["15"]);

    expect(mockPageSizeChange).toHaveBeenCalledWith(15);
  });
});
