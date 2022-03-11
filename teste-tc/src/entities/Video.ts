import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 } from "uuid"
import { Category } from "./Category"
//Referenciando dados do banco para usar no codigo

@Entity('videos')
export class video {

    //definindo que é uma coluna primaria
    @PrimaryColumn()
    id: string

    //definindo colunas
    @Column()
    name: string

    @Column()
    description: string

    @Column()
    category_id: string

    @ManyToOne(() => Category) // Relação de muitos pra um para a outra tabela
    @JoinColumn({ name: 'category_id' }) // referenciando categoria do video
    category: Category

    @Column()
    dutaion: number

    //Definindo que é uma coluna de data
    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = v4()
        }
    }
}