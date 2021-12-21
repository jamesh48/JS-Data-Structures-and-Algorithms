import chai, { expect } from "chai";
import LinkedList from "../LinkedList/LinkedList";

// @ts-ignore
const should = chai.should();

describe("Linked List Test Suite", () => {
  describe("Basic Linked List Tests", () => {
    it("should instantiate a LinkedList with default values", () => {
      const linkedList = new LinkedList();
      linkedList.should.be.a("object");
      linkedList.should.have.property("first");
      expect(linkedList.first).to.eql(null);
      linkedList.should.have.property("last");
      expect(linkedList.last).eql(null);
      linkedList.should.have.property("size");
      expect(linkedList.size).to.eql(0);
    });
  });

  describe("LinkedList functionality", () => {
    let linkedList: any = null;

    describe("LinkedList push and pop functions", () => {
      beforeEach(() => {
        linkedList = new LinkedList();
        linkedList.push(1);
      });

      it("should push one value into the LinkedList", () => {
        expect(linkedList.first?.value).to.eql(1);
        expect(linkedList.last?.value).to.eql(1);
      });

      it("should push multiple values into the LinkedList and maintain correct order", () => {
        linkedList.push(2);
        expect(linkedList.first.value).to.eql(1);
        expect(linkedList.last.value).to.eql(2);
      });
      it("should remove from the end of the LinkedList", () => {
        linkedList.pop();
        const testLinkedList = new LinkedList();
        expect(linkedList).to.eql(testLinkedList);
        linkedList.push(2);
        linkedList.push(1);
        linkedList.pop();
        testLinkedList.push(2);
        expect(linkedList).to.eql(testLinkedList);
      });
    });

    describe("LinkedList unshift and shift Functions", () => {
      let linkedList: any = null;

      beforeEach(() => {
        linkedList = new LinkedList();
        linkedList.unshift(1);
      });

      it("should unshift one value to the front of the LinkedList successfully", () => {
        expect(linkedList.first.value).to.eql(1);
        expect(linkedList.last.value).to.eql(1);
      });

      it("should unshift multiple vals to the front of LinkedList in correct order", () => {
        linkedList.unshift(2);
        expect(linkedList.first.value).to.eql(2);
        expect(linkedList.last.value).to.eql(1);
      });

      it("should successfully remove a value from the front of the linkedList", () => {
        linkedList.shift();
        const testLinkedList = new LinkedList();
        expect(linkedList).to.eql(testLinkedList);
        linkedList.unshift(2);
        linkedList.unshift(1);
        linkedList.shift();
        expect(linkedList.first.value).to.eql(2);
        expect(linkedList.last.value).to.eql(2);
        linkedList.shift();
        expect(linkedList).to.eql(testLinkedList);
      });

      it("should get the correct length of the LinkedList after multiple shift and unshift operations", () => {
        for (let i = 1; i < 10; i++) {
          linkedList.unshift(i);
        }
        expect(linkedList.length()).to.eql(10);
        for (let i = 0; i < 5; i++) {
          linkedList.shift();
        }
        expect(linkedList.length()).to.eql(5);
        linkedList.unshift(20);
        expect(linkedList.length()).to.eql(6);

        while (linkedList.length()) {
          linkedList.shift();
        }

        expect(linkedList.length()).to.eql(0);
      });
    });
  });
});
