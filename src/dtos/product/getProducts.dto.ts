import z from "zod"
import { ProductModel } from "../../models/Product"

export interface GetProductsInputDTO {
  token: string,
  q: string
}

// ProductModel é a estrutura de Product que será devolvida para o Front
// (sem password e createdAt camelCase)
export type GetProductsOutputDTO = ProductModel[]

export const GetProductsSchema = z.object({
  token: z.string({required_error: "O token é obrigatório!"}).min(1),
  q: z.string().min(1).optional()
}).transform(data => data as GetProductsInputDTO)