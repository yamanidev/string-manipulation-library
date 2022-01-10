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
    });
});

it("should return true for string type", () => {

    const input = [
        "10",
        "something",
        "?453rdsfga,..'z"
    ];

    input.forEach(item => {
        expect(isString(item)).toBe(true);
    });

});