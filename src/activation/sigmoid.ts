/**
 * @param {number} value
 * @return {number}
 */
export function activate(value: number): number {
	return 1 / (1 + Math.exp(-value));
}
/**
 * @param {number} output
 * @param {number} error
 * @return {number}
 */
export function measure(output: number, error: number): number {
	return output * (1 - output) * error;
}
