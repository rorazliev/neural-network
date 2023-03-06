import Neuron from './neuron';
/**
 *
 */
class Layer {
	protected neurons: Array<Neuron> = [];
	/**
	 * @param {number} size
	 */
	constructor(size: number) {
		for (let i = 0; i < size; i++) {
			this.neurons.push(new Neuron());
		}
	}
	/**
	 * @param {number} index
	 * @return {Neuron}
	 */
	getNeuron(index: number): Neuron {
		return this.neurons[index];
	}
	/**
	 * @return {number}
	 */
	getSize(): number {
		return this.neurons.length;
	}
}

export default Layer;
