import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("Testing App component", () => {
    test("Render logotype", async () => {
        const { container } = render(<App />);
        const logotype = container.querySelector("img");
    
        expect(logotype).toBeDefined();
    })
    
    test("Render link", async () => {
        render(<App />);
        const link = screen.getByText("Learn React");
    
        expect(link).toBeDefined();
        expect(link.href).toBe("https://reactjs.org/");
        expect(link.target).toBe("_blank");
    })
})