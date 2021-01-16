import {MigrationInterface, QueryRunner} from "typeorm";

export class companies1610768048424 implements MigrationInterface {
    name = 'companies1610768048424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, "cnpj" character varying, "address" character varying, "logo" character varying, "specialties" character varying, "createdAt" date NOT NULL, "updatedAt" date, "deletedAt" date, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "students" ADD "companyIdId" integer`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_eaa03a1e99144e215a0e4b0a0b8" FOREIGN KEY ("companyIdId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_eaa03a1e99144e215a0e4b0a0b8"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "companyIdId"`);
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
