import { translate } from "./translate";

it("translates d to half a dev day", () => {
  expect(translate("d")).toEqual({ Dev: 0.5 });
});

it("translates D to one dev day", () => {
  expect(translate("D")).toEqual({ Dev: 1.0 });
});

it("translates dD to one and a half dev days", () => {
  expect(translate("dD")).toEqual({ Dev: 1.5 });
});

it("translates q to half a qa day", () => {
  expect(translate("q")).toEqual({ QA: 0.5 });
});

it("translates qQ to one and a half qa days", () => {
  expect(translate("qQ")).toEqual({ QA: 1.5 });
});

it("translates dddQ to one and a half dev days with one qa daya", () => {
  expect(translate("dddQ")).toEqual({ Dev: 1.5, QA: 1 });
});
