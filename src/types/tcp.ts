
export enum TALLY_STATE {
	IDLE,
	PROGRAM,
	PREVIEW
}


export type TallySummary = {
	preview: number[]
	program: number[]
	numberOfInputs: number
	// overlays: {
	// 	1: number | null
	// 	2: number | null
	// 	3: number | null
	// 	4: number | null
	// }
}