import NeuralNetwork from '../src';

const config = {
	iterations: 20000,
	hiddenLayers: [3],
	inputSize: 2,
	outputSize: 1,
};

const data = [
	{ input: [0, 0], output: [0] },
	{ input: [0, 1], output: [0] },
	{ input: [1, 0], output: [0] },
	{ input: [1, 1], output: [1] },
];

describe('AND', () => {
	let net: NeuralNetwork;

	beforeAll((done) => {
		net = new NeuralNetwork(config);
		net.train(data);
		done();
	});

	it('should return 0 for a [0, 0] input', () => {
		const result = net.run([0, 0]);
		expect(Math.round(result[0])).toEqual(0);
	});

	it('should return 0 for a [0, 1] input', () => {
		const result = net.run([0, 1]);
		expect(Math.round(result[0])).toEqual(0);
	});

	it('should return 0 for a [1, 0] input', () => {
		const result = net.run([1, 0]);
		expect(Math.round(result[0])).toEqual(0);
	});

	it('should return 1 for a [1, 1] input', () => {
		const result = net.run([1, 1]);
		expect(Math.round(result[0])).toEqual(1);
	});
});
