import contentItemUtil from "./index";

it("should return correct html for rendering", () => {
  const userData = {
    user: {
      fullName: "Steven G",
      email: "sg@test.com",
      date: "09/09/2019",
      lastLogin: "05/04/2018"
    }
  };
  const contentItemComponent = contentItemUtil(userData);
    expect(contentItemComponent.props.children[1].props.children[0].props.children[0].props.children).toContain("Steven G");
});
