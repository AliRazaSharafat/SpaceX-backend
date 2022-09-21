import { Schema, model } from "mongoose";

const starlinkSchema = new Schema(
    {
        spaceTrack: {
            CCSDS_OMM_VERS: { type: String, require: true },
            COMMENT: { type: String, require: true },
            CREATION_DATE: { type: String, require: true },
            ORIGINATOR: { type: String, require: true },
            OBJECT_NAME: { type: String, require: true },
            OBJECT_ID: { type: String, require: true },
            CENTER_NAME: { type: String, require: true },
            REF_FRAME: { type: String, require: true },
            TIME_SYSTEM: { type: String, require: true },
            MEAN_ELEMENT_THEORY: { type: String, require: true },
            EPOCH: { type: String, require: true },
            MEAN_MOTION: { type: Number, require: true },
            ECCENTRICITY: { type: Number, require: true },
            INCLINATION: { type: Number, require: true },
            RA_OF_ASC_NODE: { type: Number, require: true },
            ARG_OF_PERICENTER: { type: Number, require: true },
            MEAN_ANOMALY: { type: Number, require: true },
            EPHEMERIS_TYPE: { type: Number, require: true },
            CLASSIFICATION_TYPE: { type: String, require: true },
            NORAD_CAT_ID: { type: Number, require: true },
            ELEMENT_SET_NO: { type: Number, require: true },
            REV_AT_EPOCH: { type: Number, require: true },
            BSTAR: { type: Number, require: true },
            MEAN_MOTION_DOT: { type: Number, require: true },
            MEAN_MOTION_DDOT: { type: Number, require: true },
            SEMIMAJOR_AXIS: { type: Number, require: true },
            PERIOD: { type: Number, require: true },
            APOAPSIS: { type: Number, require: true },
            PERIAPSIS: { type: Number, require: true },
            OBJECT_TYPE: { type: String, require: true },
            RCS_SIZE: { type: String, require: true },
            COUNTRY_CODE: { type: String, require: true },
            LAUNCH_DATE: { type: String, require: true },
            SITE: { type: String, require: true },
            DECAY_DATE: { type: String, require: true },
            DECAYED: { type: Number, require: true },
            FILE: { type: Number, require: true },
            GP_ID: { type: Number, require: true },
            TLE_LINE0: { type: String, require: true },
            TLE_LINE1: { type: String, require: true },
            TLE_LINE2: { type: String, require: true }
        },
        launch: { type: String, require: true },
        version: { type: String, require: true },
        height_km: { type: String, require: true, default: null },
        latitude: { type: String, require: true, default: null },
        longitude: { type: String, require: true, default: null },
        velocity_kms: { type: String, require: true, default: null },
    },
    { timestamps: true }
);

const Starlink = model("Starlink", starlinkSchema);
export { Starlink }