// import { render, screen, fireEvent } from "@testing-library/react";
// import { test, expect, vi } from "vitest";
// import { Greeting } from "../components/Greeting";

// test("calls onGreet with Alice", () => {
//   const mockGreet = vi.fn<(name: string) => void>();
//   const { container } = render(<Greeting onGreet={mockGreet} />);

//   expect(container).toMatchSnapshot();

//   fireEvent.click(screen.getByText("Greet"));

//   expect(mockGreet).toHaveBeenCalledWith("Alice");
//   expect(mockGreet).toHaveBeenCalledTimes(1);
// });
