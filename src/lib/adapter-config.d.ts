// This file extends the AdapterConfig type from "@types/iobroker"

// Augment the globally declared type ioBroker.AdapterConfig
declare global {
	namespace ioBroker {
		interface AdapterConfig {
			f_id_kommune: string;
			f_id_bezirk: string;
			f_id_strasse: string;
			WarnungUnterTagen: number;
		}
	}
}

// this is required so the above AdapterConfig is found by TypeScript / type checking
export {};