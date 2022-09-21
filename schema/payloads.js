import { Schema, model } from "mongoose";

const payloadSchema = new Schema(
    {
        dragon: {
            capsule: { type: String, required: true, default: null },
            mass_returned_kg: { type: String, required: true, default: null },
            mass_returned_lbs: { type: String, required: true, default: null },
            flight_time_sec: { type: String, required: true, default: null },
            manifest: { type: String, required: true, default: null },
            water_landing: { type: String, required: true, default: null },
            land_landing: { type: String, required: true, default: null }
        },
        name: { type: String, required: true },
        type: { type: String, required: true },
        reused: { type: Boolean, required: true },
        launch: { type: String, required: true },
        customers: [
            { type: String, required: true }
        ],
        norad_ids: [{ type: String, required: true }],
        nationalities: [
            { type: String, required: true }
        ],
        manufacturers: [
            { type: String, required: true }
        ],
        mass_kg: { type: Number, required: true },
        mass_lbs: { type: Number, required: true },
        orbit: { type: String, required: true },
        reference_system: { type: String, required: true },
        regime: { type: String, required: true },
        longitude: { type: String, required: true, default: null },
        semi_major_axis_km: { type: String, required: true, default: null },
        eccentricity: { type: String, required: true, default: null },
        periapsis_km: { type: Number, required: true },
        apoapsis_km: { type: Number, required: true },
        inclination_deg: { type: Number, required: true },
        period_min: { type: String, required: true, default: null },
        lifespan_years: { type: String, required: true, default: null },
        epoch: { type: String, required: true, default: null },
        mean_motion: { type: String, required: true, default: null },
        raan: { type: String, required: true, default: null },
        arg_of_pericenter: { type: String, required: true, default: null },
        mean_anomaly: { type: String, required: true, default: null },
    },
    { timestamps: true }
);

const Payload = model("Payload", payloadSchema);
export { Payload }