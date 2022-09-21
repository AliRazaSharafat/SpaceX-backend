import { Schema, model } from "mongoose";

const coreSchema = new Schema(
    {
        block: { type: Number, required: false, default: null },
        reuse_count: { type: Number, required: true },
        rtls_attempts: { type: Number, required: true },
        rtls_landings: { type: Number, required: true },
        asds_attempts: { type: Number, required: true },
        asds_landings: { type: Number, required: true },
        last_update: { type: String, required: true },
        launches: [
            { type: String, required: true }
        ],
        serial: { type: String, required: true },
        status: { type: String, required: true },
    },
    { timestamps: true }
);

const Core = model("Core", coreSchema);
export { Core }