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

export function translate(c: string) {
  const state: { [key in Status]?: number } = {};
  c.split("").forEach((c) => {
    const { status, effort } = parse(c);
    state[status] = (state[status] ?? 0) + effort;
  });
  return state;
}
