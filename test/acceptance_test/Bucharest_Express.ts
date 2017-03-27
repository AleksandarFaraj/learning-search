import {suite, test} from "mocha-typescript";
//noinspection TypeScriptCheckImport
import {expect} from "chai";

import {Node, Graph,Edge} from "../../lib/graph";

@suite
class GraphTest {
    @test "getNode_whenGettingExistingNode_returnsNode"() {
        const g = new Graph();
        g.setNode("Oradea");
        g.setNode("Zerind");
        g.setNode("Arad");
        g.setNode("Timisoara");
        g.setNode("Lugoj");
        g.setNode("Mehadia");
        g.setNode("Dobreta");
        g.setNode("Sibiu");
        g.setNode("Rimnicu Vilcea");
        g.setNode("Craiova");
        g.setNode("Fagaras");
        g.setNode("Pitesti");
        g.setNode("Bucharest");
        g.setNode("Giurgiu");
        g.setNode("Urziceni");
        g.setNode("Neamt");
        g.setNode("Iasi");
        g.setNode("Vaslui");
        g.setNode("Hirsova");
        g.setNode("Eforie");

        g.setEdge("Oradea","Zerind",{km:71},true);
        g.setEdge("Arad","Zerind",{km:75},true);
        g.setEdge("Arad","Timisoara",{km:118},true);
        g.setEdge("Arad","Sibiu",{km:140},true);
        g.setEdge("Rimnicu Vilcea","Sibiu",{km:80},true);
        g.setEdge("Rimnicu Vilcea","Craiova",{km:146},true);
        g.setEdge("Rimnicu Vilcea","Pitesti",{km:97},true);
        g.setEdge("Craiova","Pitesti",{km:138},true);
        g.setEdge("Bucharest","Pitesti",{km:101},true);
        g.setEdge("Bucharest","Fagaras",{km:211},true);
        g.setEdge("Bucharest","Giurgiu",{km:90},true);
        g.setEdge("Bucharest","Urziceni",{km:85},true);
        g.setEdge("Vaslui","Urziceni",{km:142},true);
        g.setEdge("Vaslui","Iasi",{km:92},true);
        g.setEdge("Neamt","Iasi",{km:87},true);
        g.setEdge("Hirsova","Urziceni",{km:98},true);
        g.setEdge("Hirsova","Eforie",{km:86},true);
        g.setEdge("Fagaras","Sibiu",{km:99},true);
        g.setEdge("Lugoj","Timisoara",{km:111},true);
        g.setEdge("Lugoj","Mehadia",{km:70},true);
        g.setEdge("Dobreta","Mehadia",{km:75},true);
        g.setEdge("Dobreta","Craiova",{km:120},true);
        

    }
}