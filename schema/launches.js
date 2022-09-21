import { Schema, model } from "mongoose";

const launchSchema = new Schema(
    {
        fairings: {
            reused: { type: Boolean, required: true },
            recovery_attempt: { type: Boolean, required: true },
            recovered: { type: Boolean, required: true },
            ships: [{ type: String, required: true }]
        },
        links: {
            patch: {
                small: { type: String, required: true },
                large: { type: String, required: true }
            },
            reddit: {
                campaign: { type: String, required: true, default: null },
                launch: { type: String, required: true, default: null },
                media: { type: String, required: true, default: null },
                recovery: { type: String, required: true, default: null }
            },
            flickr: {
                small: [{ type: String, required: true }],
                original: [{ type: String, required: true }]
            },
            presskit: { type: String, required: true, default: null },
            webcast: { type: String, required: true },
            youtube_id: { type: String, required: true },
            article: { type: String, required: true },
            wikipedia: { type: String, required: true }
        },
        static_fire_date_utc: { type: String, required: true },
        static_fire_date_unix: { type: Number, required: true },
        net: { type: Boolean, required: true },
        window: { type: Number, required: true },
        rocket: { type: String, required: true },
        success: { type: Boolean, required: true },
        failures: [
            {
                time: { type: Number, required: true },
                altitude: { type: String, required: true, default: null },
                reason: { type: String, required: true }
            }
        ],
        details: { type: String, required: true },
        crew: [{ type: String, required: true }],
        ships: [{ type: String, required: true }],
        capsules: [{ type: String, required: true }],
        payloads: [
            { type: String, required: true }
        ],
        launchpad: { type: String, required: true },
        flight_number: { type: Number, required: true },
        name: { type: String, required: true },
        date_utc: { type: String, required: true },
        date_unix: { type: Number, required: true },
        date_local: { type: String, required: true },
        date_precision: { type: String, required: true },
        upcoming: { type: Boolean, required: true },
        cores: [
            {
                core: { type: String, required: true },
                flight: { type: Number, required: true },
                gridfins: { type: Boolean, required: true },
                legs: { type: Boolean, required: true },
                reused: { type: Boolean, required: true },
                landing_attempt: { type: Boolean, required: true },
                landing_success: { type: String, required: true, default: null },
                landing_type: { type: String, required: true, default: null },
                landpad: { type: String, required: true, default: null }
            }
        ],
        auto_update: { type: Boolean, required: true },
        tbd: { type: Boolean, required: true },
        launch_library_id: { type: String, required: true, default: null },
    },
    { timestamps: true }
);

const Launch = model("Launche", launchSchema);
export { Launch }