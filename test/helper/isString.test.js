const isString = require("../../src/helper/isString");

it("should return false for non-string types", () => {

    const input = [
        10,
        [],
        ["someArray"],
        {},
        {
            name: "someObject"
        },
        null,
        undefined,
        true,
        false
    ];

    input.forEach(item => {
        expect(isString(item)).toBe(false);
    })
});