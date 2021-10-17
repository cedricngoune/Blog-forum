import {UserName} from "../../../src/modules/Users/domain/value-objects";
import {UserInputError} from "../../../src/modules/Users/domain/Errors";


describe("UserName validation ", () => {

    it("Should no accept empty user name", () => {
        expect(() => new UserName(""))
            .toThrowError(new UserInputError("username is required!"))
    })
    it("should accept name whose contains only alphabetic character", () => {
        expect<UserName>(new UserName("dollars")).toBeTruthy()
    })
    it('Should be equal with the same value', () => {
        const name1 = new UserName("cedric")
        const name2 = new UserName("cedric")

        expect(name1).toStrictEqual(name2)
        expect(name1.equals(name2)).toBe(true)
    })
})
