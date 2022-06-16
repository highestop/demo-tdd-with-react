declare namespace jest {
  interface Matchers<R> {
    toMatchJsonPath(content: string): R;
  }
}
