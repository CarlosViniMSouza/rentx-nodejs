import { Specification } from "../entities/Specifications";

interface ICreateSpecification {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateSpecification): void;
    findByName(name: string): Specification
}

export { ICreateSpecification, ISpecificationsRepository };