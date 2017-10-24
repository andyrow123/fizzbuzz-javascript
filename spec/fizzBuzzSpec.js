describe("Fizzbuzz", function() {

    it("returns fizz when given a multiple of 3", function() {
        expect(FizzBuzz(3)).toBe('fizz');
    });

    it("returns buzz when given a multiple of 5", function() {
        expect(FizzBuzz(5)).toBe('buzz');
    });

    it("returns fizzbuzz when given a multiple of 3 and 5", function() {
        expect(FizzBuzz(15)).toBe('fizzbuzz');
    });

    it("returns the number if it is not a multiple of 3 or 5", function() {
        expect(FizzBuzz(4)).toBe(4);
    });
});