import { render, screen } from "@testing-library/vue";
import HomeView from "./HomeView.vue";

describe("HomeView", () => {
  it("renders", () => {
    render(HomeView);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
