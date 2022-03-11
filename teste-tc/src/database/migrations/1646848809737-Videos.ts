import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Videos1646848809737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'videos',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name: 'category_id',
                        type: 'uuid'
                    },
                    {
                        name: 'dutarion',
                        type: 'numeric'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ],
                //Definindo relação entre tabelas
                foreignKeys: [{
                    name: "fk_videos_category", //Nome da referencia
                    columnNames: ["category_id"], //Nome da coluna que vai referenciar
                    referencedTableName: "categories", //Nome da tabela que vai referenciar
                    referencedColumnNames: ["id"] // Nome da coluna que vai referenciar
                }]
            })
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('videos');
    }

}
