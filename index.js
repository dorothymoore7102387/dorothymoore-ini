const _ = require('lodash');
const qiskit = require('qiskit');
const quantumMath = require('quantum-math');

function generateRandomQuantumCircuit(numQubits, depth) {
    const circuit = new qiskit.QuantumCircuit(numQubits);
    for (let i = 0; i < depth; i++) {
        for (let j = 0; j < numQubits; j++) {
            const gate = _.sample(['H', 'X', 'Y', 'Z', 'CX']);
            circuit.addGate(gate, j);
        }
    }
    return circuit;
}

function measureQuantumState(circuit, shots) {
    const backend = new qiskit.SimulatorBackend();
    const result = backend.run(circuit, shots);
    return result.getMeasurements();
}

function applyQuantumGate(state, gate) {
    return quantumMath.applyGate(state, gate);
}

module.exports = {
    generateRandomQuantumCircuit,
    measureQuantumState,
    applyQuantumGate
};
