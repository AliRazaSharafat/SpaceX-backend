import { Schema, model } from "mongoose";

const crewSchema = new Schema(
    {
        name: { type: String, required: true },
        agency: { type: String, required: true },
        image: { type: String, required: true },
        wikipedia: { type: String, required: true },
        launches: [
            { type: String, required: true }
        ],
        status: { type: String, required: true },
    },
    { timestamps: true }
);

const Crew = model("Crew", crewSchema);
export { Crew }