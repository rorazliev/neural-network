# Neural Network in TypeScript

![Version](https://img.shields.io/github/package-json/v/rorazliev/neural-network) ![Top Language](https://img.shields.io/github/languages/top/rorazliev/neural-network) ![License](https://img.shields.io/github/license/rorazliev/neural-network) ![Workflow](https://img.shields.io/github/actions/workflow/status/rorazliev/neural-network/ci.yml?label=checks)

Toy Neural Network in TypeScript with Examples.

> The project is meant to be used for learning purposes only. If you're looking for a production-ready solution, please, take a look at [Brain.js](https://github.com/BrainJS/brain.js).

## Installation

Clone the repository by running the following command:

```sh
git clone git@github.com:rorazliev/neural-network.git
```

`cd` to the project directory and install dependencies by running the following command:

```sh
cd ./neural-network && npm install
```

## Usage

Import the `NeuralNetwork` class from the `src` folder:

```typescript
import NeuralNetwork from './src';
```

Create a new `NeuralNetwork` instance with desired configurations:

```typescript
const config = {
	iterations: 20000,
	hiddenLayers: [3],
	inputSize: 2,
	learningRate: 0.3,
	momentum: 0.1,
	outputSize: 1,
};

const net = new NeuralNetwork(config);
```

Provide training data to train the network:

```typescript
const data = [
	{ input: [0, 0], output: [0] },
	{ input: [0, 1], output: [1] },
	{ input: [1, 0], output: [1] },
	{ input: [1, 1], output: [0] },
];

net.train(data);
```

Then, where the magic happens:

```typescript
const results = net.run([1, 0]);

console.log(Math.floor(results[0])); // -> 1
```

### Options

`NeuralNetwork()` takes options of the following type:

```typescript
type OptionsType = {
	iterations: number;
	hiddenLayers: Array<number>;
	inputSize: number;
	learningRate: number;
	momentum: number;
	outputSize: number;
};
```

The following options are used by default:

```typescript
const defaultOptions: OptionsType = {
	iterations: 20000,
	hiddenLayers: [],
	inputSize: 0,
	learningRate: 0.3,
	momentum: 0.1,
	outputSize: 0,
};
```

### Training

The network has to be trained with all the data in bulk in one call to `train()`. The training data format is of the following type:

```typescript
type InputType = Array<number>;

type OutputType = Array<number>;

type TrainingDataType = Array<{
	input: InputType;
	output: OutputType;
}>;
```

### Running

Use the `run()` method to run an input against a network. The input and output of the methods are arrays of numbers.

## Useful Links

- [Neural Networks by 3Blue1Brown (Videos)](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
- [Neural Network and Deep Learning by Michael Nielsen (Book)](http://neuralnetworksanddeeplearning.com/)
- [Brain.js source code (Open-source project)](https://github.com/BrainJS/brain.js#methods)
