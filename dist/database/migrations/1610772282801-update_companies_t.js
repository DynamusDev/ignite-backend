"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompaniesT1610772282801 = void 0;
class updateCompaniesT1610772282801 {
    constructor() {
        this.name = 'updateCompaniesT1610772282801';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "companies" ADD "staffId" integer`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_520a9f6e4b8eb642ac71c103b26" FOREIGN KEY ("staffId") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_520a9f6e4b8eb642ac71c103b26"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "staffId"`);
    }
}
exports.updateCompaniesT1610772282801 = updateCompaniesT1610772282801;
