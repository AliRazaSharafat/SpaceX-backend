import { Schema, model } from "mongoose";

const rocketSchema = new Schema(
    {
        height: {
            meters: { type: Number, required: true },
            feet: { type: Number, required: true }
        },
        diameter: {
            meters: { type: Number, required: true },
            feet: { type: Number, required: true }
        },
        mass: {
            kg: { type: Number, required: true },
            lb: { type: Number, required: true }
        },
        first_stage: {
            thrust_sea_level: {
                kN: { type: Number, required: true },
                lbf: { type: Number, required: true }
            },
            thrust_vacuum: {
                kN: { type: Number, required: true },
                lbf: { type: Number, required: true }
            },
            reusable: { type: Boolean, required: true },
            engines: { type: Number, required: true },
            fuel_amount_tons: { type: Number, required: true },
            burn_time_sec: { type: Number, required: true }
        },
        second_stage: {
            thrust: {
                kN: { type: Number, required: true },
                lbf: { type: Number, required: true }
            },
            payloads: {
                composite_fairing: {
                    height: {
                        meters: { type: Number, required: true },
                        feet: { type: Number, required: true }
                    },
                    diameter: {
                        meters: { type: Number, required: true },
                        feet: { type: Number, required: true }
                    }
                },
                option_1: { type: String, required: true }
            },
            reusable: { type: Boolean, required: true },
            engines: { type: Number, required: true },
            fuel_amount_tons: { type: Number, required: true },
            burn_time_sec: { type: Number, required: true }
        },
        engines: {
            isp: {
                sea_level: { type: Number, required: true },
                vacuum: { type: Number, required: true }
            },
            thrust_sea_level: {
                kN: { type: Number, required: true },
                lbf: { type: Number, required: true }
            },
            thrust_vacuum: {
                kN: { type: Number, required: true },
                lbf: { type: Number, required: true }
            },
            number: { type: Number, required: true },
            type: { type: String, required: true },
            version: { type: String, required: true },
            layout: { type: String, required: true },
            engine_loss_max: { type: Number, required: true },
            propellant_1: { type: String, required: true },
            propellant_2: { type: String, required: true },
            thrust_to_weight: { type: Number, required: true }
        },
        landing_legs: {
            number: { type: Number, required: true },
            material: { type: String, required: true, default: null }
        },
        payload_weights: [
            {
                name: { type: String, required: true },
                kg: { type: Number, required: true },
                lb: { type: Number, required: true }
            }
        ],
        flickr_images: [
            { type: String, required: true }
        ],
        name: { type: String, required: true },
        type: { type: String, required: true },
        active: { type: Boolean, required: true },
        stages: { type: Number, required: true },
        boosters: { type: Number, required: true },
        cost_per_launch: { type: Number, required: true },
        success_rate_pct: { type: Number, required: true },
        first_flight: { type: String, required: true },
        country: { type: String, required: true },
        company: { type: String, required: true },
        wikipedia: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true }
);

const Rocket = model("Rocket", rocketSchema);
export { Rocket }