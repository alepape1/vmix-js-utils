export default {
	CutDirect: {
		description: 'Cuts the input directly to Output without changing Preview',
		parameters: {
			Input: 'input'
		}
	},

	FadeToBlack: 'Toggle FadeToBlack On/Off',

	QuickPlay: {
		description: 'Quick Play an Input to Output',
		parameters: {
			Input: 'input'
		}
	},

	SetFader: {
		description: 'Set Master Fader T-Bar, 255 will cut to Preview',
		parameters: {
			Value: {
				type: 'number',
				description: 'Fader between 0 to 255'
			}
		}
	},

	SetTransitionDuration1: {
		description: 'Change Transition Duration for Button 1',
		parameters: {
			Value: {
				type: 'number',
				description: 'Duration in milliseconds'
			}
		}
	},

	SetTransitionDuration2: {
		description: 'Change Transition Duration for Button 2',
		parameters: {
			Value: {
				type: 'number',
				description: 'Duration in milliseconds'
			}
		}
	},

	SetTransitionDuration3: {
		description: 'Change Transition Duration for Button 3',
		parameters: {
			Value: {
				type: 'number',
				description: 'Duration in milliseconds'
			}
		}
	},

	SetTransitionDuration4: {
		description: 'Change Transition Duration for Button 4',
		parameters: {
			Value: {
				type: 'number',
				description: 'Duration in milliseconds'
			}
		}
	},

	SetTransitionEffect1: {
		description: 'Change Transition for Button 1',
		parameters: {
			Value: {
				type: 'string',
				description: 'Transition name'
			}
		}
	},

	SetTransitionEffect2: {
		description: 'Change Transition for Button 2',
		parameters: {
			Value: {
				type: 'string',
				description: 'Transition name'
			}
		}
	},

	SetTransitionEffect3: {
		description: 'Change Transition for Button 3',
		parameters: {
			Value: {
				type: 'string',
				description: 'Transition name'
			}
		}
	},

	SetTransitionEffect4: {
		description: 'Change Transition for Button 4',
		parameters: {
			Value: {
				type: 'string',
				description: 'Transition name'
			}
		}
	},

	Stinger1: {
		description: 'Perform Stinger 1 transition to given Input',
		parameters: {
			Input: 'input'
		}
	},

	Stinger2: {
		description: 'Perform Stinger 2 transition to given Input',
		parameters: {
			Input: 'input'
		}
	},

	Transition1: {
		description: 'Clicks the first Transition button in the main vMix window - transitions to what is in preview',
		parameters: {
			Input: 'input'
		}
	},

	Transition2: {
		description: 'Clicks the second Transition button in the main vMix window - transitions to what is in preview',
		parameters: {
			Input: 'input'
		}
	},

	Transition3: {
		description: 'Clicks the third Transition button in the main vMix window - transitions to what is in preview',
		parameters: {
			Input: 'input'
		}
	},

	Transition4: {
		description: 'Clicks the fourth Transition button in the main vMix window - transitions to what is in preview',
		parameters: {
			Input: 'input'
		}
	}
}
