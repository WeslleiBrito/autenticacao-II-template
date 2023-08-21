import z from "zod"
import { ProductModel } from "../../models/Product"

export interface CreateProductInputDTO {
  token: string,
  name: string,
  price: number
}

export interface CreateProductOutputDTO {
  message: string,
  product: ProductModel
}

export const CreateProductSchema = z.object({
  token: z.string({required_error: "O token é obrigatório!"}).min(1),
  name: z.string().min(2),
  price: z.number().gt(0)
}).transform(data => data as CreateProductInputDTO)