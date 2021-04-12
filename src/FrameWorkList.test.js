import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import FrameWorkList from "./FrameWorkList";

afterEach(() => cleanup());

describe("Rendering the list with props", () => {
    it("should render No data ! when no data propped", () => {
        render(<FrameWorkList />);
        expect(screen.getByText("No data!")).toBeInTheDocument();
    });

    it("should render list item correctly", () => {
        const dummyData = [
            { id: 1, item: "React dummy" },
            { id: 2, item: "Angular dummy" },
            { id: 3, item: "Vue dummy" },
        ];
        render(<FrameWorkList frameworks={dummyData} />);
        const frameworkItems = screen
            .getAllByRole("listitem")
            .map((ele) => ele.textContent);
        const dummyItems = dummyData.map((ele) => ele.item);
        expect(frameworkItems).toEqual(dummyItems);
        expect(screen.queryByText("No data!")).toBeNull();
    });
});
