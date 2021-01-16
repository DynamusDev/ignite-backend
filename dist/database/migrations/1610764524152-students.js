"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.students1610764524152 = void 0;
class students1610764524152 {
    constructor() {
        this.name = 'students1610764524152';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "students" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "image" text, "createdAt" date NOT NULL, "updatedAt" date, "deletedAt" date, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "students"`);
    }
}
exports.students1610764524152 = students1610764524152;
