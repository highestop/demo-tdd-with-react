function translate(c: string): any {
  return c === "d" ? { Dev: 0.5 } : { Dev: 1.0 };
}

it("translates D to one dev day", () => {
  expect(translate("D")).toEqual({ Dev: 1.0 });
});
