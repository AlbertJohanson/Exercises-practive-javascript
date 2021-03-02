'use strict'

const { chain, add } = require("mathjs");

const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
]


const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
  ];


//Grap
function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from, to) {

        if(graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to)
        }
    }

    for (let [from, to] of edges.map(r => r.split('-'))){
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph
}


const roadGraph = buildGraph(roads)


//Village simulation
class VillageState {
    constructor(place, parcel) {
        this.place = place;
        this.parcel = parcel
    }

    move(destination) {
        if(!roadGraph[this.place].includes(destination)){
            return this
        } else {
            let parcels = this.parcel.map( p => {
                if(p.place != this.place) return p;
                    return this;
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels)
        }
    }
}

let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);


function runRobot(state, robot, memory) {

    for( let turn = 0;; turn++) {
        if(state.parcel.length == 0) {
            console.log(`Done in ${turn} turns`);
            break
        }
    }

    let action = robot(state, memory);

    state = state.move(action.direction)
    memory = action.memory;
    console.log(`Moved to ${action.direction}`)
}


function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length)
    return array[choice]
}

function randomRobot(state){
    return {direction: randomPick(roadGraph[state.place])}
}

VillageState.random = function(parcelCount = 5) {
    let parcel = [];

    for (let i = 0; i < parcelCount; i++){
        let address = randomPick(Object.keys(roadGraph))
        let place;

        do{
            place =  randomPick(Object.keys(roadGraph));
        } while ( place == address);
        parcel.push({place, address});
    }

    return new VillageState("Post Office", parcel)
}

function routeRobot(state, memory) {

    if (memory.length == 0) {
        memory = mailRoute
    }
    return {direction: memory[0], memory: memory.slice(1)}
}

function findRoute(graph, from , to) {
    let work = [{at: from, route:[]}];
    for(let i = 0; i < work.length; i++){
        let {at, route} = work[i];
        for(let place of graph[at]){
            if(place == to) return route.concat(place);
                if(!work.some(w => w.at == place)) {
                    work.push({at: place, route: route.concat(place)})
                }
        }
    }
}

function goalOrientedRobot({place, parcels}, route) {
    if(route.length == 0) {
        let parcel = parcels[0];
        if( parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place)
        } else {
            route = findRoute(roadGraph, place, parcel.address)
        }
    }
        return {direction: route[0], memory: route.slice(1)}
}

function countSteps(state, robot, memory) {
    for( let steps = 0; ; steps++) {
        if(state.parcel.length == 0) return steps;

        let action = robot(state, memory);

        state = state.move(action.direction);

        memory = action.memory
    }
}

function compareRobots(robot1, memory1, robot2, memory2) {
    let total1 = 0; total2 = 0;

    for (let i = 0; i < 100; i++) {
        let state = VillageState.random()

        total1 += countSteps(state, robot1, memory1);
        total2 += countSteps(state, robot2, memory2);
    }

    console.log(`Robot 1 needed ${total1 /100} steps per task`)
    console.log(`Robot 2 needed ${total2 /100} steps per task`)
}

function myRobot({place, parcels}, route) {
    if(route.length == 0) {
        // Describe a route for every parcel
        let routes = parcels.map( parcel => {
        if( parcel.place != place) {
            return {route : findRoute(roadGraph, place, parcel.place),
                    pickUp: true}
        } else {
            return {route : findRoute(roadGraph, place, parcel.address),
                    pickUp: false}
        }
    })
    // This determines the precedence a route gets when choosing.
    // Route length counts negatively, routes that pick up a package
    // get a small bonus.

    function score({route, pickUp}) {
        return (pickUp ? 0.5 : 0 ) - route.length;
    }
        route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
    }
        return {direction: route[0], memory: route.slice(1)}
}

runRobot(VillageState.random(), myRobot , []);


/* let next = first.move("Alice House")

console.log(next.place)

console.log(next.parcel)

console.log(next.place) */

