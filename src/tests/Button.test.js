import { render, screen, fireEvent } from "@testing-library/react";
import CustomButton from "../components/Button";

describe("Testing Button component", () => {
    test("Click on button", async () => {
      const { container } = render(<CustomButton />);

      const button = screen.getByText("Plus");
      const counter = container.querySelector("p");

      expect(counter.textContent).toBe("Counter: 0");

      fireEvent.click(button)

      expect(counter.textContent).toBe("Counter: 1")
    })

    test('matches snapshot', () => {
      const { container } = render(<CustomButton />);
      expect(container).toMatchSnapshot();
    });
})

