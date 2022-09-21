import { Schema, model } from "mongoose";

const shipSchema = new Schema(
    {
        last_ais_update: { type: String, required: true, defaul: null },
        legacy_id: { type: String, required: true },
        model: { type: String, required: true, defaul: null },
        type: { type: String, required: true },
        roles: [
            { type: String, required: true }
        ],
        imo: { type: Number, required: true },
        mmsi: { type: Number, required: true },
        abs: { type: Number, required: true },
        class: { type: Number, required: true },
        mass_kg: { type: Number, required: true },
        mass_lbs: { type: Number, required: true },
        year_built: { type: Number, required: true },
        home_port: { type: String, required: true },
        status: { type: String, required: true },
        speed_kn: { type: String, required: true, defaul: null },
        course_deg: { type: String, required: true, defaul: null },
        latitude: { type: String, required: true, defaul: null },
        longitude: { type: String, required: true, defaul: null },
        link: { type: String, required: true },
        image: { type: String, required: true },
        name: { type: String, required: true },
        active: { type: Boolean, required: true },
        launches: [
            { type: String, required: true }
        ],
    },
    { timestamps: true }
);

const Ship = model("Ship", shipSchema);
export { Ship }