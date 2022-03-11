import { getRepository } from "typeorm"
import { Category } from "../entities/Category"

//Criando os tipos a serem utilizados
type CategoryRequest = {
    name: string
    password: string
}

export class CreateCategoryService {

    //Criando o metodo
    async execute({ name, password }: CategoryRequest): Promise<Category | Error> { //Definindo o tipo de retorno
        const repo = getRepository(Category); //Criando o repositorio de categoria

        //Verificando se a catgoria ja existe no banco
        // SELECT * FROM categories WHERE name = 'name'
        if (await repo.findOne({ name })) {
            //Retornando erro0r
            return new Error("Category already exists");
        }
        // Definindo a categoria
        const category = repo.create({
            name,
            password
        })
        //Salvando a categoria
        await repo.save(category)
        //Retornando a categoria
        return category
    }
} 