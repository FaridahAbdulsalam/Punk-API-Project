import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import App from "./App";

it("should render 25 beers ", () => {
    render (<App/>)

    const noOfBeers = screen.getByRole("beersPerPage")

    expect(noOfBeers).toBe(25)
})