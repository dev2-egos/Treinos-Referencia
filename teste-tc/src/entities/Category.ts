import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"
import { v4 } from "uuid"
//Referenciando dados do banco para usar no codigo

@Entity('categories')
export class Category {

    //definindo que é uma coluna primaria
    @PrimaryColumn()
    id: string

    //definindo colunas
    @Column()
    name: string

    @Column()
    password: string

    //Definindo que é uma coluna de data
    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = v4()
        }
    }
}