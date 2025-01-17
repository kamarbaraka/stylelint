'use strict';

const { messages, ruleName } = require('..');

testRule({
	ruleName,
	config: [true],
	fix: true,

	accept: [
		{
			code: '@media (min-resolution: 96dpi) {}',
		},
		{
			code: '@media (device-pixel-ratio: 2) {}',
		},
		{
			code: '@media (min-device-pixel-ratio: 2) {}',
		},
	],

	reject: [
		{
			code: '@media (-webkit-min-device-pixel-ratio: 1) {}',
			fixed: '@media (min-device-pixel-ratio: 1) {}',
			message: messages.rejected,
			line: 1,
			column: 9,
		},
		{
			code: '@media (-wEbKiT-mIn-DeViCe-PiXeL-rAtIo: 1) {}',
			fixed: '@media (mIn-DeViCe-PiXeL-rAtIo: 1) {}',
			message: messages.rejected,
			line: 1,
			column: 9,
		},
		{
			code: '@media (-WEBKIT-MIN-DEVICE-PIXEL-RATIO: 1) {}',
			fixed: '@media (MIN-DEVICE-PIXEL-RATIO: 1) {}',
			message: messages.rejected,
			line: 1,
			column: 9,
		},
		{
			code: '@media (min--moz-device-pixel-ratio: 1) {}',
			fixed: '@media (min-device-pixel-ratio: 1) {}',
			message: messages.rejected,
			line: 1,
			column: 9,
		},
		{
			code: '@media ( max--moz-device-pixel-ratio: 1) {}',
			fixed: '@media ( max-device-pixel-ratio: 1) {}',
			message: messages.rejected,
			line: 1,
			column: 10,
		},
		{
			code: '@media (/* a comment */MIN--moz-device-pixel-ratio: 1) {}',
			fixed: '@media (/* a comment */MIN-device-pixel-ratio: 1) {}',
			message: messages.rejected,
			line: 1,
			column: 24,
		},
		{
			code: '@media\n\t(min--moz-device-pixel-ratio: 1) {}',
			fixed: '@media\n\t(min-device-pixel-ratio: 1) {}',
			message: messages.rejected,
			line: 2,
			column: 3,
		},
		{
			code: '@media   (-o-max-device-pixel-ratio: 1/1) {}',
			fixed: '@media   (max-device-pixel-ratio: 1/1) {}',
			message: messages.rejected,
			line: 1,
			column: 11,
		},
		{
			code: '@media (-o-max-device-pixel-ratio > 1) {}',
			fixed: '@media (max-device-pixel-ratio > 1) {}',
			message: messages.rejected,
			line: 1,
			column: 9,
		},
		{
			code: '@media (1 < -o-max-device-pixel-ratio < 2) {}',
			fixed: '@media (1 < max-device-pixel-ratio < 2) {}',
			message: messages.rejected,
			line: 1,
			column: 13,
		},
	],
});
