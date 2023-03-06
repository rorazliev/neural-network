import Connection from './connection';
import Layer from './layer';
/**
 *
 */
type OptionsType = {
	hiddenLayers: Array<number>;
	inputSize: number;
	outputSize: number;
};
/**
 *
 */
const defaultOptions: OptionsType = {
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
}

export default NeuralNetwork;
