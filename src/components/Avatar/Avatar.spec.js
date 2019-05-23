import avatarUtil from "./index";

it("should render avatar as expected", () => {
  const avatarComponent = avatarUtil("<h1>Hello avatar</h1>");
  expect(avatarComponent.props.className).toEqual("contentItemIcon");
});
