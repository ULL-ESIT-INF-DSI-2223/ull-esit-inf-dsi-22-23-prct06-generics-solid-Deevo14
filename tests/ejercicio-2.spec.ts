import 'mocha';
import {expect} from 'chai';
import {List} from "../src/ejercicio-2/list";
describe("List Tests", () => {
describe("List Tests numbers", () => {
    it("Set and Get", () => {
        const list = new List([1, 2, 3]);
        expect(list.list).to.be.eql([1, 2, 3]);
        list.list = [4, 5, 6];
        expect(list.list).to.be.eql([4, 5, 6]);
    });
    it("Constructor", () => {
        const list = new List([1, 2, 3]);
        expect(list.list).to.be.eql([1, 2, 3]);
    });
    it("Append", () => {
        const list = new List([1, 2, 3]);
        expect(list.append(4)).to.be.eql([1, 2, 3, 4]);
    });
    it("Concatenate", () => {
        const list = new List([1, 2, 3]);
        const list2 = new List([4, 5, 6]);
        const list3 = new List([7, 8, 9]);
        expect(list.concatenate([list2, list3])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it("Filter", () => {
        const list = new List([1, 2, 3]);
        expect(list.filter((item) => item > 1)).to.be.eql([2, 3]);
    });
    it("length", () => {
        const list = new List([1, 2, 3]);
        expect(list.length()).to.be.equal(3);
    });
    it("Map", () => {
        const list = new List([1, 2, 3]);
        expect(list.map((item) => item + 1)).to.be.eql([2, 3, 4]);
    });
    it("Reduce", () => {
        const list = new List([1, 2, 3]);
        expect(list.reduce((acc, item) => acc + item, 1)).to.be.equal(7);
    });
    it("Reverse", () => {
        const list = new List([1, 2, 3]);
        expect(list.reverse()).to.be.eql([3, 2, 1]);
    });
    it("forEach", () => {
        const list = new List([1, 2, 3]);
        let sum = 0;
        list.forEach((item) => sum += item);
        expect(sum).to.be.equal(6);
    });
});
describe("List Tests strings", () => {
    it("Set and Get", () => {
        const list = new List(["a", "b", "c"]);
        expect(list.list).to.be.eql(["a", "b", "c"]);
        list.list = ["d", "e", "f"];
        expect(list.list).to.be.eql(["d", "e", "f"]);
    });
    it("Constructor", () => {
        const list = new List(["a", "b", "c"]);
        expect(list.list).to.be.eql(["a", "b", "c"]);
    });
    it("Append", () => {
        const list = new List(["a", "b", "c"]);
        expect(list.append("d")).to.be.eql(["a", "b", "c", "d"]);
    });
    it("Concatenate", () => {
        const list = new List(["a", "b", "c"]);
        const list2 = new List(["d", "e", "f"]);
        const list3 = new List(["g", "h", "i"]);
        expect(list.concatenate([list2, list3])).to.be.eql(["a", "b", "c", "d", "e", "f", "g", "h", "i"]);
    });
    it("Filter", () => {
        const list = new List(["a", "b", "c"]);
        expect(list.filter((item) => item > "a")).to.be.eql(["b", "c"]);
    });
    it("length", () => {
        const list = new List(["a", "b", "c"]);
        expect(list.length()).to.be.equal(3);
    });
    it("Map", () => {
        const list = new List(["a", "b", "c"]);
        expect(list.map((item) => item + "1")).to.be.eql(["a1", "b1", "c1"]);
    });
    it("Reduce", () => {
        const list = new List(["a", "b", "c"]);
        expect(list.reduce((acc, item) => acc + item, "a")).to.be.equal("aabc");
    });
    it("Reverse", () => {
        const list = new List(["a", "b", "c"]);
        expect(list.reverse()).to.be.eql(["c", "b", "a"]);
    });
    it("forEach", () => {
        const list = new List(["a", "b", "c"]);
        let sum = "";
        list.forEach((item) => sum += item);
        expect(sum).to.be.equal("abc");
    });
});
});