import {MigrationInterface, QueryRunner} from "typeorm";

export class updateCompanies1610769380338 implements MigrationInterface {
    name = 'updateCompanies1610769380338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "logo"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "logo" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "logo"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "logo" character varying`);
    }

}
