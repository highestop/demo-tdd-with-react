function translate(c: string) {
  return c === "d" ? { Dev: 0.5 } : { Dev: 1.0 };
}

it("translates d to half a dev day", () => {
  expect(translate("d")).toEqual({ Dev: 0.5 });
});

it("translates D to one dev day", () => {
  expect(translate("D")).toEqual({ Dev: 1.0 });
});
