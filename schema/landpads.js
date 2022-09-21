import { Schema, model } from "mongoose";

const landpadSchema = new Schema(
    {
        images: {
            large: [
                { type: String, required: true }
            ]
        },
        name: { type: String, required: true },
        full_name: { type: String, required: true },
        status: { type: String, required: true },
        type: { type: String, required: true },
        locality: { type: String, required: true },
        region: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        landing_attempts: { type: Number, required: true },
        landing_successes: { type: Number, required: true },
        wikipedia: { type: String, required: true },
        details: { type: String, required: true },
        launches: [
            { type: String, required: true }
        ],
    },
    { timestamps: true }
);

const Landpad = model("Landpad", landpadSchema);
export { Landpad }