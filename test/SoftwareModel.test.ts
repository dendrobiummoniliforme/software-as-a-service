import { get } from '../models/SoftwareModel';

describe("software() =>", () => {
    it(`SHOULD return "software"`, () => {
        expect(get()).toEqual("software");
    });
})