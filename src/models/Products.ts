import mongoose, { Schema } from 'mongoose';

export interface IProducts {
    id: Schema.Types.ObjectId;
    name: string;
    description: string;
    category: Schema.Types.ObjectId;
    price: number;
    isFavorite: boolean;
}

const ProductsSchema: Schema = new Schema(
    {
        name       : { type: String, required: true },
        description: { type: String, required: true },
        category   : { type: Schema.Types.ObjectId, required: true },
        price      : { type: Number, default: 0 },
        isFavorite : { type: Schema.Types.Boolean, default: false },
    }
);

export default mongoose.model<IProducts>('Products', ProductsSchema);
