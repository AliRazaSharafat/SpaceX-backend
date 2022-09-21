import { Schema, model } from "mongoose";

const dragonSchema = new Schema(
    {
        heat_shield: {
            material: { type: String, required: true },
            size_meters: { type: Number, required: true },
            temp_degrees: { type: Number, required: true },
            dev_partner: { type: String, required: true }
        },
        launch_payload_mass: {
            kg: { type: Number, required: true },
            lb: { type: Number, required: true }
        },
        launch_payload_vol: {
            cubic_meters: { type: Number, required: true },
            cubic_feet: { type: Number, required: true }
        },
        return_payload_mass: {
            kg: { type: Number, required: true },
            lb: { type: Number, required: true }
        },
        return_payload_vol: {
            cubic_meters: { type: Number, required: true },
            cubic_feet: { type: Number, required: true }
        },
        pressurized_capsule: {
            payload_volume: {
                cubic_meters: { type: Number, required: true },
                cubic_feet: { type: Number, required: true }
            }
        },
        trunk: {
            trunk_volume: {
                cubic_meters: { type: Number, required: true },
                cubic_feet: { type: Number, required: true }
            },
            cargo: {
                solar_array: { type: Number, required: true },
                unpressurized_cargo: { type: Boolean, required: true }
            }
        },
        height_w_trunk: {
            meters: { type: Number, required: true },
            feet: { type: Number, required: true }
        },
        diameter: {
            meters: { type: Number, required: true },
            feet: { type: Number, required: true }
        },
        first_flight: { type: String, required: true },
        flickr_images: [
            { type: String, required: true }
        ],
        name: { type: String, required: true },
        type: { type: String, required: true },
        active: { type: Boolean, required: true },
        crew_capacity: { type: Number, required: true },
        sidewall_angle_deg: { type: Number, required: true },
        orbit_duration_yr: { type: Number, required: true },
        dry_mass_kg: { type: Number, required: true },
        dry_mass_lb: { type: Number, required: true },
        thrusters: [
            {
                type: { type: String, required: true },
                amount: { type: Number, required: true },
                pods: { type: Number, required: true },
                fuel_1: { type: String, required: true },
                fuel_2: { type: String, required: true },
                isp: { type: Number, required: true },
                thrust: {
                    kN: { type: Number, required: true },
                    lbf: { type: Number, required: true }
                }
            }
        ],
        wikipedia: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true }
);

const Dragon = model("Dragon", dragonSchema);
export { Dragon }