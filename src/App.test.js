import { fireEvent, render, screen, configure } from "@testing-library/react";
import App from "./App.js";

// configure({ testIdAttribute: "element-id" });

test("text on screen", () => {
  render(<App />);
  const text = screen.getByText(/helo/i);
  expect(text).toBeInTheDocument();
});

describe("UI test", () => {
  test("text on screen", () => {
    render(<App />);
    const text = screen.getByText(/helo/i);
    expect(text).toBeInTheDocument();
  });

  test("update", () => {
    render(<App />);
    const btn1 = screen.getByTestId("btn1");
    const text = screen.getByText(/helo/i);
    expect(text).toBeInTheDocument();
    fireEvent.click(btn1);
    expect(screen.getByText("heloooooo")).toBeInTheDocument();
  });

  test("input test", () => {
    render(<App />);
    const inputfeild = screen.getByRole("textbox", { name: "Example" });
    const exampleInput = screen.getByLabelText("Example");
    expect(exampleInput).toBeInTheDocument();
    expect(inputfeild).toHaveValue("hello");
  });

  //multiple input type------------------
  test("get-By-Role tesing", () => {
    render(<App />);
    const btn = screen.getByRole("button", { name: "click 1" });
    const btn2 = screen.getByRole("button", { name: "click 2" });
    const inputtype = screen.getByRole("textbox", { name: /user name/ });
    const div = screen.getByRole("dummy");
    expect(btn).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
    expect(inputtype).toBeInTheDocument();
    expect(div).toBeInTheDocument();
  });

  //getAllByRole-------------------------------------
  test("get-AllBy-Role tesing", () => {
    render(<App />);
    //multiple button----------
    const btn = screen.getAllByRole("button");
    for (let i = 0; i < btn.length; i++) {
      expect(btn[i]).toBeInTheDocument();
    }
    //select option------------
    const options = screen.getAllByRole("option");
    for (let i = 0; i < options.length; i++) {
      expect(options[i]).toBeInTheDocument();
    }
  });

  //checkobx-----------------------------------------
  test("checkobx testing", () => {
    render(<App />);
    const checkobx = screen.getByLabelText("skill");
    expect(checkobx).toBeInTheDocument();
    expect(checkobx).toBeChecked();
  });

  // getAllBylable--------------------------------
  test("get-AllBy-lable tesing", () => {
    render(<App />);
    const lable = screen.getAllByLabelText("User name list");
    for (let i = 0; i < lable.length; i++) {
      expect(lable[i]).toBeInTheDocument();
      expect(lable[i]).toHaveValue("dipali");
    }
  });

  // placeholder--------------------------------
  test("placeholder testing", () => {
    render(<App />);
    const placeholder = screen.getAllByPlaceholderText("enter your name");

    for (let i = 0; i < placeholder.length; i++) {
      expect(placeholder[i]).toBeInTheDocument();
    }
  });

  //getByText------------------------------------
  test("get-AllBy-Text testing", () => {
    render(<App />);
    const button = screen.getByText("button");
    expect(button).toBeInTheDocument();
    const ptag = screen.getByText("p tag testing");
    expect(ptag).toBeInTheDocument();
    expect(ptag).toHaveClass("paraStyle");
    expect(ptag).toHaveAttribute("id");
  });

  //getByTestId------------------------------------
  test("get-AllBy-TestId testing", () => {
    render(<App />);
    const button = screen.getAllByTestId("testid");
    for (let i = 0; i < button.length; i++) {
      expect(button[i]).toBeInTheDocument();
    }

    //to override data-testId in testId use configure
    // const h1 = screen.getByTestId("testid");
  });

  //getByDisplayValue-------------------------------
  test("get-By-DisplayValue testing", () => {
    render(<App />);
    const display = screen.getByDisplayValue("harvi");
    expect(display).toBeInTheDocument();
  });

  test("radio btn testing", () => {
    render(<App />);
    const radio = screen.getByDisplayValue("male");
    expect(radio).toBeInTheDocument();
  });

  //getByTitle-------------------------------
  test("title testing", () => {
    render(<App />);
    const btn = screen.getByTitle("click me");
    expect(btn).toBeInTheDocument();

    const span = screen.getByTitle("chai aur code");
    expect(span).toBeInTheDocument();
  });
});
