import { Schema, model } from "mongoose";

const roadsterinfoSchema = new Schema(
    {
        name: { type: String, required: true },
        launch_date_utc: { type: String, required: true },
        launch_date_unix: { type: Number, required: true },
        launch_mass_kg: { type: Number, required: true },
        launch_mass_lbs: { type: Number, required: true },
        norad_id: { type: Number, required: true },
        epoch_jd: { type: Number, required: true },
        orbit_type: { type: String, required: true },
        apoapsis_au: { type: Number, required: true },
        periapsis_au: { type: Number, required: true },
        semi_major_axis_au: { type: Number, required: true },
        eccentricity: { type: Number, required: true },
        inclination: { type: Number, required: true },
        longitude: { type: Number, required: true },
        periapsis_arg: { type: Number, required: true },
        period_days: { type: Number, required: true },
        speed_kph: { type: Number, required: true },
        speed_mph: { type: Number, required: true },
        earth_distance_km: { type: Number, required: true },
        earth_distance_mi: { type: Number, required: true },
        mars_distance_km: { type: Number, required: true },
        mars_distance_mi: { type: Number, required: true },
        flickr_images: [
            { type: String, required: true }
        ],
        wikipedia: { type: String, required: true },
        video: { type: String, required: true },
        details: { type: String, required: true },
    },
    { timestamps: true }
);

const RoadsterInfo = model("roadsterinfo", roadsterinfoSchema);
export { RoadsterInfo }