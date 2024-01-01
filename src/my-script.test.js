import { myFunction } from "./my-script"

test("Returns name", () => {
    expect(myFunction()).toBe("Alex");
})