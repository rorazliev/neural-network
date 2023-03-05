import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	bail: false,
	collectCoverage: true,
	coverageDirectory: './coverage/',
	coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
	verbose: true,
};

export default config;
