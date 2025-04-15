import { ProductModel } from "../config/data-source"

export const getProductService = async(id: string) => {
    try {
        // Traer todo los productos, de un usuario
        const products = await ProductModel.find()

    } catch (error) {
        
    }
}