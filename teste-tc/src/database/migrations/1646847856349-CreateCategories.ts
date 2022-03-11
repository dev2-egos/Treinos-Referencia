import { MigrationInterface, QueryRunner, Table } from "typeorm"; //Fazendo devida importaçoes

//Gerado altomatico
export class CreateCategories1646847856349 implements MigrationInterface {

    //Comando para subir tabelas: yarn typeorm migration:run
    public async up(queryRunner: QueryRunner): Promise<void> {

        //Definindo modelo de tabela de banco de dados

        await queryRunner.createTable(
            new Table({

                //Nome da tabela
                name: 'categories',

                //Colunas da tabela
                columns: [
                    {
                        name: 'id',//Nome da coluna
                        type: 'uuid',//tipo da coluna
                        isPrimary: true // definindo como chave primaria
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isUnique: true // informa que não pode haver duas categorias com o mesmo nome
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()', // informando que a coluna deve ser preenchida com a data atual
                    }
                ]
            })
        )
    }

    //Desfazendo alteraçoes caso precise 
    //Comando: yarn typeorm migration:revert
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categories');
    }

}
