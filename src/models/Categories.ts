import mongoose, { Schema } from 'mongoose';

export interface ICategories {
    _id: string;
    name: string;
    description: string;
}

const CategoriesSchema: Schema = new Schema(
    {
        name       : { type: String, required: true },
        description: { type: String, required: true, ref: 'Product' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<ICategories>('Categories', CategoriesSchema);
