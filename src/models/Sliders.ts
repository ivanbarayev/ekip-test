import mongoose, { Schema } from 'mongoose';

export interface ISliders {
    productId: Schema.Types.ObjectId;
    image: string;
}

const SlidersSchema: Schema = new Schema(
    {
        productId: { type: Schema.Types.ObjectId, required: true },
        image    : { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<ISliders>('Sliders', SlidersSchema);
