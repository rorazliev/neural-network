import Neuron from './neuron';
/**
 *
 */
class Connection {
	/**
	 *
	 */
	protected weight: number;
	/**
	 *
	 */
	protected change: number;
	/**
	 *
	 */
	protected origin: Neuron;
	/**
	 *
	 */
	protected destination: Neuron;
	/**
	 * @param {Neuron} origin
	 * @param {Neuron} destination
	 */
	constructor(origin: Neuron, destination: Neuron) {
		this.change = 0;
		this.weight = Math.random();
		this.origin = origin;
		this.destination = destination;

		this.origin.addOutputConnection(this);
		this.destination.addInputConnection(this);
	}
	/**
	 * @return {this}
	 */
	getChange(): number {
		return this.change;
	}
	/**
	 * @param {number} change
	 * @return {this}
	 */
	setChange(change: number): this {
		this.change = change;
		return this;
	}
	/**
	 * @return {number}
	 */
	getWeight(): number {
		return this.weight;
	}
	/**
	 * @param {number} weight
	 * @return {this}
	 */
	setWeight(weight: number): this {
		this.weight = weight;
		return this;
	}
	/**
	 * @return {Neuron}
	 */
	getOrigin(): Neuron {
		return this.origin;
	}
	/**
	 * @return {Neuron}
	 */
	getDestination(): Neuron {
		return this.destination;
	}
}

export default Connection;
