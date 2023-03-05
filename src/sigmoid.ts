/**
 * @param {number} value
 * @return {number}
 */
export function activate(value: number): number {
	return 1 / (1 + Math.exp(-value));
}
/**
 * @param {number} weight
 * @param {number} error
 * @return {number}
 */
export function measure(weight: number, error: number): number {
	return weight * (1 - weight) * error;
}
