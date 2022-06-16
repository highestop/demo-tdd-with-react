it("create a callable function", () => {
  const mock = jest.fn();
  mock("Juntao");
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith("Juntao");
  expect(mock).toHaveBeenCalledTimes(1);
});
