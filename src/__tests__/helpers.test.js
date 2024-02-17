import { format } from "../utils/helpers";

describe("format", () => {
    describe("kebab", () => {
      it("converts camelCase to kebab-case", () => {
        expect(format.kebab("hello")).toBe("hello");
        expect(format.kebab("helloWorld")).toBe("hello-world");
        expect(format.kebab("helloWorldExample")).toBe("hello-world-example");
      });
    });
  
    describe("sentence", () => {
      it("converts camelCase to Sentence case", () => {
        expect(format.sentence("hello")).toBe("Hello");
        expect(format.sentence("helloWorld")).toBe("Hello world");
        expect(format.sentence("helloWorldExample")).toBe("Hello world example");
      });
    });
  
    describe("title", () => {
      it("converts camelCase to Title Case", () => {
        expect(format.title("hello")).toBe("Hello");
        expect(format.title("helloWorld")).toBe("Hello World");
        expect(format.title("helloWorldExample")).toBe("Hello World Example");
      });
    });
  });