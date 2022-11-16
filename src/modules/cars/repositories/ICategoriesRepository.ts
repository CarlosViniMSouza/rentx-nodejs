import { Category } from "../entities/Category";


interface ICreateCategory {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    list(): Promise<Category[]>;
    findByName(name: string): Promise<Category>;
    create({ name, description }: ICreateCategory): Promise<void>;
}

export { ICategoriesRepository, ICreateCategory };