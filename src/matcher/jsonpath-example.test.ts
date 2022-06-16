describe("jsonpath", () => {
  it("matches jsonpath", () => {
    const user = {
      name: "Juntao",
    };
    expect(user).toMatchJsonPath("$.name");
  });
  it("does not match jsonpath", () => {
    const user = {
      name: "Juntao",
      address: "ThoughtWorks",
    };
    expect(user).not.toMatchJsonPath("$.age");
  });
});
