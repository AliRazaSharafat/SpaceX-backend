import { Schema, model } from "mongoose";

const capsuleSchema = new Schema(
    {
        reuse_count: { type: Number, required: true },
        water_landings: { type: Number, required: true },
        land_landings: { type: Number, required: true },
        last_update: { type: String, required: true },
        launches: [
            { type: String, required: true }
        ],
        serial: { type: String, required: true },
        status: { type: String, required: true },
        type: { type: String, required: true },
    },
    { timestamps: true }
);

const Capsule = model("Capsules", capsuleSchema);
export { Capsule }