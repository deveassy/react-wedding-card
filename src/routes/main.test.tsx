import { render } from "@testing-library/react";
import "@testing-library/react/dont-cleanup-after-each";
import { MemoryRouter } from "react-router-dom";
import MainRoutes from "./main";

describe("<main />", () => {
  it("should be renders routes correct", async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/main"]} initialIndex={0}>
        <MainRoutes />
      </MemoryRouter>
    );
    expect(getByText("Doristagram")).toBeInTheDocument();
  });
});
