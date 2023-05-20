import { render, screen } from "@testing-library/vue";
import HomeView from "./HomeView.vue";

describe("homeView", () => {
  it("renders", () => {
    render(HomeView);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
