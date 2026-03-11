import mongoose, { Schema, Document } from 'mongoose';

// Interface representing a document in MongoDB
export interface ICloth extends Document {
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    images: string[];
    category: string;
    sizes: string[];
    colors: {
        name: string;
        hex: string;
    }[];
    tag?: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}

// Mongoose Schema definition
const ClothSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        originalPrice: {
            type: Number,
            min: 0,
        },
        images: {
            type: [String],
            required: true,
            validate: [
                (val: string[]) => val.length > 0,
                'At least one image is required',
            ],
        },
        category: {
            type: String,
            required: true,
            enum: ['Oversized T-Shirts', 'Hoodies', 'Jackets', 'Joggers', 'Classic Tees'], // Adjust based on your categories
        },
        sizes: {
            type: [String],
            required: true,
            enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], // Adjust based on your available sizes
        },
        colors: [
            {
                name: { type: String, required: true },
                hex: { type: String, required: true },
            },
        ],
        tag: {
            type: String,
            trim: true,
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

// Create and export the model
const Cloth = mongoose.models.Cloth || mongoose.model<ICloth>('Cloth', ClothSchema);

export default Cloth;
