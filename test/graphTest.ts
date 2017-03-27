import {suite, test} from "mocha-typescript";
//noinspection TypeScriptCheckImport
import {expect} from "chai";

import {Node, Graph,Edge} from "../lib/graph";

@suite
class GraphTest {
    @test "getNode_whenGettingExistingNode_returnsNode"() {
        const g = new Graph();
        g.setNode("Göteborg", null);

        const node = g.getNode("Göteborg");

        expect(node.name).to.be.equal("Göteborg");
        expect(node).to.be.an.instanceof(Node);
        expect(node.value).to.be.null;
    }

    @test "setEdge_whenTwoWay_returnsEdgeFromAtoBandBtoA"() {
        const g = new Graph();
        const expectedValue = {km: 5};
        const a = "A";
        const b = "B";
        const nodeA = g.setNode(a, null);
        const nodeB = g.setNode(b, null);

        g.setEdge(a, b, expectedValue, true);

        const edges_A = nodeA.edges;
        expect(nodeA).to.be.instanceof(Node);
        expect(Object.keys(edges_A).length).to.be.equal(1);
        expect(edges_A[b]).to.be.instanceof(Edge);
        expect(edges_A[b].value).to.be.equal(expectedValue);
        expect(edges_A[b].to).to.be.equal(b);
        expect(edges_A[b].from).to.be.equal(a);
        const edges_B = nodeB.edges;
        expect(nodeB).to.be.instanceof(Node);
        expect(Object.keys(edges_B).length).to.be.equal(1);
        expect(edges_B[a]).to.be.instanceof(Edge);
        expect(edges_B[a].value).to.be.equal(expectedValue);
        expect(edges_B[a].to).to.be.equal(a);
        expect(edges_B[a].from).to.be.equal(b);
    }

    @test "setEdge_whenNotTwoWay_returnsOnlyEdgeFromAtoB"() {
        const g = new Graph();
        const expectedValue = {km: 5};
        const a = "A";
        const b = "B";
        const nodeA = g.setNode(a, null);
        const nodeB = g.setNode(b, null);

        g.setEdge(a, b, expectedValue);

        const edges_A = nodeA.edges;
        const edges_B = nodeB.edges;
        expect(nodeA).to.be.instanceof(Node);
        expect(Object.keys(edges_A).length).to.be.equal(1);
        expect(edges_A[b]).to.be.instanceof(Edge);
        expect(edges_A[b].value).to.be.equal(expectedValue);
        expect(edges_A[b].to).to.be.equal(b);
        expect(edges_A[b].from).to.be.equal(a);
        expect(nodeB).to.be.instanceof(Node);
        expect(Object.keys(edges_B).length).to.be.equal(0);
    }

}