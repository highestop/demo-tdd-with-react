enum Status {
  Dev = "Dev",
  QA = "QA",
}

function parse(c: string) {
  switch (c) {
    case "d":
      return { status: Status.Dev, effort: 0.5 };
    case "D":
      return { status: Status.Dev, effort: 1 };
    case "q":
      return { status: Status.QA, effort: 0.5 };
    case "Q":
      return { status: Status.QA, effort: 1 };
    default:
      throw new Error(`not defined: ${c}`);
  }
}

function translate(c: string) {
  const state: { [key in Status]?: number } = {};
  c.split("").forEach((c) => {
    const { status, effort } = parse(c);
    state[status] = (state[status] ?? 0) + effort;
  });
  return state;
}

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
