import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFilmsTable1709040960381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'films',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'image',
                        type: 'varchar',
                        length: '100',
                        isNullable: true
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        length: '1000',
                        isNullable: true
                    },
                    {
                        name: 'duration',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'genre',
                        type: 'varchar',
                        length: '100',
                        isNullable: true
                    },
                    {
                        name: 'director',
                        type: 'varchar',
                        length: '100',
                        isNullable: true
                    },
                    {
                        name: 'avaliation',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'favorite',
                        type: 'bool',
                        default: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('films');
    }

}
