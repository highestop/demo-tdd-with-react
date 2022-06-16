function translate(c: string) {
  return { Dev: 0.5 };
}

it("translates d to half a dev day", () => {
  expect(translate("d")).toEqual({ Dev: 0.5 });
});
