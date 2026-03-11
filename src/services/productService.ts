import api from './api';

export const productService = {
    getAllProducts: async (category?: string) => {
        const params = category ? { category } : {};
        const response = await api.get('/cloths', { params });
        if (response.data && response.data.success) {
            return response.data.data;
        }
        throw new Error(response.data.message || 'Failed to fetch products');
    },

    getProductById: async (id: string | number) => {
        const response = await api.get(`/cloths/${id}`);
        if (response.data && response.data.success) {
            return response.data.data;
        }
        throw new Error(response.data.message || 'Failed to fetch product');
    },

    createProduct: async (productData: any) => {
        const response = await api.post('/cloths', productData);
        if (response.data && response.data.success) {
            return response.data.data;
        }
        throw new Error(response.data.message || 'Failed to create product');
    }
};
