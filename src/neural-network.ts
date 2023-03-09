import Connection from './connection';
import Layer from './layer';
import { activate, measure } from './sigmoid';
import { InputType, OutputType, DataType } from './types';
/**
 *
 */
type OptionsType = {
	iterations: number;
	hiddenLayers: Array<number>;
	inputSize: number;
	outputSize: number;
};
/**
 *
 */
const defaultOptions: OptionsType = {
	iterations: 20000,
	hiddenLayers: [],
	inputSize: 0,
	outputSize: 0,
};
/**
 *
 */
class NeuralNetwork {
	/**
	 *
	 */
	protected layers: Array<Layer> = [];
	/**
	 *
	 */
	protected options: OptionsType;
	/**
	 *
	 */
	protected sizes: Array<number> = [];
	/**
	 * @param {Partial<OptionsType>} options
	 */
	constructor(options: Partial<OptionsType> = {}) {
		this.options = { ...defaultOptions, ...options };

		const { inputSize, hiddenLayers, outputSize } = this.options;

		if (inputSize && outputSize) {
			this.sizes = [inputSize].concat(hiddenLayers, [outputSize]);
		}
	}
	/**
	 *
	 */
	protected initialize(): void {
		const sizes = this.sizes;

		if (sizes.length === 0) {
			throw new Error('Please, set up sizes for layers');
		}

		const layers: Layer[] = [];
		let previous = new Layer(sizes[0]);
		layers.push(previous);

		for (let i = 1; i < sizes.length; i++) {
			const current = new Layer(sizes[i]);

			for (let l = 0; l < previous.getSize(); l++) {
				for (let k = 0; k < current.getSize(); k++) {
					new Connection(previous.getNeuron(l), current.getNeuron(k));
				}
			}

			layers.push(current);
			previous = current;
		}

		this.layers = layers;
	}
	/**
	 * @param {DataType} data
	 * @return {void}
	 */
	public train(data: DataType): void {
		const iterations = this.options.iterations;

		for (let i = 0; i < iterations; i++) {
			const { input, output } = data[Math.random() * data.length];
			this.trainingTick(input, output);
		}
	}
	/**
	 * @param {InputType} input
	 * @return {OutputType}
	 */
	public run(input: InputType): OutputType {
		return this.activate(input).runInput();
	}
	/**
	 * @param {InputType} input
	 * @param {OutputType} output
	 */
	protected trainingTick(input: InputType, output: OutputType): void {
		this.activate(input).runInput();
		this.calculateDeltas(output);
	}
	/**
	 * @param {InputType} input
	 * @return {this}
	 */
	protected activate(input: InputType): this {
		const inputLayer = this.layers[0];

		for (let i = 0; i < inputLayer.getSize(); i++) {
			inputLayer.getNeuron(i).setOutput(input[i]);
		}

		return this;
	}
	/**
	 * @return {Array<number>}
	 */
	protected runInput(): OutputType {
		const outputs = [];

		for (let l = 1; l < this.layers.length; l++) {
			const layer = this.layers[l];

			for (let n = 0; n < layer.getSize(); n++) {
				const neuron = layer.getNeuron(n);
				const bias = neuron.getBias();

				const sum = neuron.getOutputConnections().reduce((acc, conn) => {
					return acc + conn.getWeight() * conn.getOrigin().getOutput();
				}, 0);

				const output = neuron.setOutput(activate(bias + sum)).getOutput();
				outputs.push(output);
			}
		}

		return outputs;
	}
	/**
	 * @param {OutputType} target
	 * @return {this}
	 */
	protected calculateDeltas(target: OutputType): this {
		const times = this.layers.length - 1;

		for (let l = times; l >= 0; l--) {
			const layer = this.layers[l];

			for (let n = 0; n < layer.getSize(); n++) {
				const neuron = layer.getNeuron(n);
				const output = neuron.getOutput();
				let error = 0;

				if (l === times) {
					error = target[n] - output;
				} else {
					for (let k = 0; k < neuron.getOutputConnections().length; k++) {
						const connection = neuron.getOutputConnections()[k];
						error +=
							connection.getDestination().getDelta() * connection.getWeight();
					}
				}

				neuron.setError(error);
				neuron.setDelta(measure(output, error));
			}
		}

		return this;
	}
}

export default NeuralNetwork;
