import { Schema, model } from "mongoose";

const launchpadsSchema = new Schema(
    {
        images: {
            large: [
                { type: String, required: true }
            ]
        },
        name: { type: String, required: true },
        full_name: { type: String, required: true },
        locality: { type: String, required: true },
        region: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        launch_attempts: { type: Number, required: true },
        launch_successes: { type: Number, required: true },
        rockets: [
            { type: String, required: true }
        ],
        timezone: { type: String, required: true },
        launches: [{ type: String, required: true }],
        status: { type: String, required: true },
        details: { type: String, required: true }
    },
    { timestamps: true }
);

const Launchpad = model("Launchpad", launchpadsSchema);
export { Launchpad }