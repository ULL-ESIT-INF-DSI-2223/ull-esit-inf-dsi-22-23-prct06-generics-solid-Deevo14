import 'mocha';
import {expect} from 'chai';
import {NumericPrintableCollection} from "../src/mod-ejercicio-1/numericPrintableCollection";
import {StringPrintableCollection} from "../src/mod-ejercicio-1/stringPrintableCollection";

describe("Numeric Printable Collection Tests", () => {
  it("Add Item", () => {
    const numericCollection = new NumericPrintableCollection([1, 2, 3]);
    numericCollection.addItem(32);
    expect(numericCollection.getItem(3)).to.be.equal(32);
  });
  it("Get Item", () => {
    const numericCollection = new NumericPrintableCollection([1, 2, 3]);
    expect(numericCollection.getItem(0)).to.be.equal(1);
  });
  it("Remove Item", () => {
    const numericCollection = new NumericPrintableCollection([1, 2, 3]);
    expect(numericCollection.removeItem(1)).to.be.equal(2);
  });
  it("Get Number Of Items", () => {
    const numericCollection = new NumericPrintableCollection([1, 2, 3]);
    expect(numericCollection.getNumberOfItems()).to.be.equal(3);
  });
  it("Print", () => {
    const numericCollection = new NumericPrintableCollection([1, 2, 3]);
    const logs:any = [];
    const log:any = console.log;
    console.log = (message) => logs.push(message);
    numericCollection.print();
    expect(logs).to.be.eql(["1, 2, 3"]);
  });
});
describe("String Printable Collection Tests", () => {
  it("Add Item", () => {
    const stringCollection = new StringPrintableCollection(["a", "b", "c"]);
    stringCollection.addItem("d");
    expect(stringCollection.getItem(3)).to.be.equal("d");
  });
  it("Get Item", () => {
    const stringCollection = new StringPrintableCollection(["a", "b", "c"]);
    expect(stringCollection.getItem(0)).to.be.equal("a");
  });
  it("Remove Item", () => {
    const stringCollection = new StringPrintableCollection(["a", "b", "c"]);
    expect(stringCollection.removeItem(1)).to.be.equal("b");
  });
  it("Get Number Of Items", () => {
    const stringCollection = new StringPrintableCollection(["a", "b", "c"]);
    expect(stringCollection.getNumberOfItems()).to.be.equal(3);
  });
  it("Print", () => {
    const stringCollection = new StringPrintableCollection(["a", "b", "c"]);
    const logs:any = [];
    const log:any = console.log;
    console.log = (message) => logs.push(message);
    stringCollection.print();
    expect(logs).to.be.eql(["a, b, c"]);
  });
});
