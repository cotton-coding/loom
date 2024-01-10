import { parse, stringify } from 'yaml';
import type { LoomFSPlugin } from '../types.js';

export default {
	type: 'jsonConverter',
	extentions: ['yml', 'yaml'],
	parse,
	stringify
} satisfies LoomFSPlugin;