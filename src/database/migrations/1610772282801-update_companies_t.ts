import {MigrationInterface, QueryRunner} from "typeorm";

export class updateCompaniesT1610772282801 implements MigrationInterface {
    name = 'updateCompaniesT1610772282801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" ADD "staffId" integer`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_520a9f6e4b8eb642ac71c103b26" FOREIGN KEY ("staffId") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_520a9f6e4b8eb642ac71c103b26"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "staffId"`);
    }

}
