// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ProductImage from "../components/ProductImage";

// describe("Testing the ProductImage.tsx file", () => {
//   test("displays the preview image on hovering the thumbnail", async () => {
//     // Setting up the userEvent
//     const user = userEvent.setup();

//     // Setting up the debugger
//     screen.debug();

//     // setting up the snapshot matching
//     const { container } = render(<ProductImage />);
//     expect(container).toMatchSnapshot();

//     const thumbnail = screen.getByAltText(/thumbnail/i);
//     expect(thumbnail).toBeInTheDocument();

//     // Initiating the user interaction
//     await user.hover(thumbnail);
//     const preview = screen.queryByAltText(/preview/i);
//     expect(preview).toBeInTheDocument();

//     await user.unhover(thumbnail);
//     expect(preview).not.toBeInTheDocument();
//   });
// });
