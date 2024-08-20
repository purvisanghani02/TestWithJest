import {
  fireEvent,
  render,
  screen,
  configure,
  within,
  act,
} from "@testing-library/react";
import App from "./App.js";
import userEvent from "@testing-library/user-event";
import User from "./User.js";

// configure({ testIdAttribute: "element-id" });

describe.skip("text match", () => {
  test("text on screen(text match)", () => {
    render(<App />);
    const text = screen.getByText("Hello World", { exact: false });
    const text2 = screen.getByText(/Hello W?orld/i);
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  test("test text with function", () => {
    render(<App />);

    // ---------startwith---------
    // const textfn = screen.getByText(
    //   (content, element) => content.startsWith("hii") // function return text start with hii
    // );
    // ----------endwith---------
    // const textfn = screen.getByText(
    //   (content, element) => content.endsWith("nikam") // function return text end with nikam(also can accept specifyed letter that inculde in string (ex :"am" that end with dipali nikam ))
    // );
    // ----------include---------
    const textfn = screen.getByText(
      (content, element) => content.includes("di") // function return text include letter in string
    );
    expect(textfn).toBeInTheDocument();
  });
});

describe.skip("UI test (Queries)", () => {
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

  //getByAltText-------------------------------
  test("Alt text testing", () => {
    render(<App />);
    const altImg = screen.getByAltText("coffie img");
    expect(altImg).toBeInTheDocument();
  });
});

//assertion method------------------------------------

describe.skip("assertion method", () => {
  test("test input", () => {
    render(<App />);
    const inputfeild = screen.getByPlaceholderText("dipali nikam");
    expect(inputfeild).toBeInTheDocument(); // whether an element is present in the document or not.
    expect(inputfeild).toHaveValue("dipali"); //check if element has value ("dipali" check specific value)
    expect(inputfeild).toBeEnabled(); //check if element is enabled (toBeDisabled check if element is Disabled or not)
    expect(inputfeild).toHaveAttribute("id"); //attribute check
    expect(inputfeild).toHaveAttribute("data-test"); // custom attribute check
    expect(inputfeild).toHaveClass("text-style"); //check element has class (must specify class name (can also check multiple class)
  });

  test("negative input", () => {
    render(<App />);
    const btn = screen.getByRole("button", { name: "Negative" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("negative"); // check element has class (must specify class name (can also check multiple class)
    expect(btn).not.toHaveClass("negative675644"); // check element does not have specifyed class
  });
});

//queryBy----------------------------------------------

describe.skip("queryBy", () => {
  test("queryBy test", () => {
    render(<App />);
    const query = screen.queryByText("LogIn"); //queryByText check whether text is in code or not
    expect(query).not.toBeInTheDocument(); // assert with not to check query method
  });
});

//findby----------------------------------------------

describe.skip("findBy ", () => {
  test("findBy test", async () => {
    render(<App />);
    const query = await screen.findByText("data found", {}, { timeout: 4000 }); //max timeout limit is 5000
    expect(query).toBeInTheDocument();
  });
});

//within----------------------------------------------

describe.skip("within ", () => {
  test("within test", () => {
    render(<App />);
    const parent = screen.getByText("parent tag");

    const subel = within(parent).getByText("child1");
    expect(subel).toBeInTheDocument();
  });
});

//user-event----------------------------------------------
// (async calles so use async await)
describe.skip("user-event ", () => {
  test("user-event test", async () => {
    userEvent.setup();
    render(<App />);
    const btn = screen.getByText("user-event");
    await act(async () => {
      await userEvent.click(btn);
    });
    expect(screen.getByText("helllooooooo user-event")).toBeInTheDocument();
  });

  //keybord event----------------------------------------
  // (use type for keybord events)
  test("keybord-event test", async () => {
    userEvent.setup();
    render(<App />);
    const keybord = screen.getByPlaceholderText("keybord-event");
    await act(async () => {
      await userEvent.type(keybord, "jhone");
    });
    expect(screen.getByText("jhone")).toBeInTheDocument();
  });
});

//props--------------------------------------------------------

describe("props testing", () => {
  test("props test", () => {
    const name = "userinfo";
    render(<User name={name} />);
    const propscheck = screen.getByText(`User first name:${name}`);
    expect(propscheck).toBeInTheDocument();
  });

  test("function prop test", async () => {
    const functionProp = jest.fn();

    userEvent.setup();
    render(<User functionProp={functionProp} />);
    const functionbtn = screen.getByRole("button", { name: "function propes" });
    await userEvent.click(functionbtn);
    expect(functionProp).toBeCalled();
  });
});
