import mongoose, { Schema } from 'mongoose';

export interface IFavorites {
    productId: Schema.Types.ObjectId;
    name: string;
    description: string;
    price: number;
    category: string;
    isFavorite: boolean;
}

const FavoritesSchema: Schema = new Schema(
    {
        productId : { type: Schema.Types.ObjectId, required: true },
        isFavorite: { type: Schema.Types.Boolean, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IFavorites>('Favorites', FavoritesSchema);
