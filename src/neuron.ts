import { v4 as uuidv4 } from 'uuid';
import Connection from './connection';
/**
 *
 */
class Neuron {
	/**
	 *
	 */
	private id: string;
	/**
	 *
	 */
	protected bias: number = 0;
	/**
	 *
	 */
	protected delta: number = 0;
	/**
	 *
	 */
	protected error: number = 0;
	/**
	 *
	 */
	protected output: number = 0;
	/**
	 *
	 */
	protected inputConnections: Connection[] = [];
	/**
	 *
	 */
	protected outputConnections: Connection[] = [];
	/**
	 *
	 */
	constructor() {
		this.id = uuidv4();
	}
	/**
	 * @return {string}
	 */
	public getId(): string {
		return this.id;
	}
	/**
	 * @return {number}
	 */
	public getBias(): number {
		return this.bias;
	}
	/**
	 * @param {number} bias
	 * @return {this}
	 */
	public setBias(bias: number): this {
		this.bias = bias;
		return this;
	}
	/**
	 * @return {number}
	 */
	public getDelta(): number {
		return this.delta;
	}
	/**
	 * @param {number} delta
	 * @return {this}
	 */
	public setDelta(delta: number): this {
		this.delta = delta;
		return this;
	}
	/**
	 * @return {number}
	 */
	public getError(): number {
		return this.error;
	}
	/**
	 * @param {number} error
	 * @return {this}
	 */
	public setError(error: number): this {
		this.error = error;
		return this;
	}
	/**
	 * @return {number}
	 */
	public getOutput(): number {
		return this.output;
	}
	/**
	 * @param {number} output
	 * @return {this}
	 */
	public setOutput(output: number): this {
		this.output = output;
		return this;
	}
	/**
	 * @param {number} index
	 * @return {Connection}
	 */
	public getInputConnection(index: number): Connection {
		return this.inputConnections[index];
	}
	/**
	 * @return {Connection[]}
	 */
	public getInputConnections(): Connection[] {
		return this.inputConnections;
	}
	/**
	 * @param {Connection} connection
	 * @return {this}
	 */
	public addInputConnection(connection: Connection): this {
		this.inputConnections.push(connection);
		return this;
	}
	/**
	 * @param {number} index
	 * @return {Connection}
	 */
	public getOutputConnection(index: number): Connection {
		return this.outputConnections[index];
	}
	/**
	 * @return {Connection[]}
	 */
	public getOutputConnections(): Connection[] {
		return this.outputConnections;
	}
	/**
	 * @param {Connection} connection
	 * @return {this}
	 */
	public addOutputConnection(connection: Connection): this {
		this.outputConnections.push(connection);
		return this;
	}
}

export default Neuron;
