import {MigrationInterface, QueryRunner} from "typeorm";

export class updateSchool1610773368690 implements MigrationInterface {
    name = 'updateSchool1610773368690'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schools" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, "cnpj" character varying, "address" character varying, "logo" text, "specialties" character varying, "createdAt" date NOT NULL, "updatedAt" date, "deletedAt" date, "studentId" integer, CONSTRAINT "PK_95b932e47ac129dd8e23a0db548" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "students" ADD "schoolIdId" integer`);
        await queryRunner.query(`ALTER TABLE "schools" ADD CONSTRAINT "FK_9925fcb4247c12978cbbb289ad2" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_d6290edaebdb8d1f7b3eab102e8" FOREIGN KEY ("schoolIdId") REFERENCES "schools"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_d6290edaebdb8d1f7b3eab102e8"`);
        await queryRunner.query(`ALTER TABLE "schools" DROP CONSTRAINT "FK_9925fcb4247c12978cbbb289ad2"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "schoolIdId"`);
        await queryRunner.query(`DROP TABLE "schools"`);
    }

}
