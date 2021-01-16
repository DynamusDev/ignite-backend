"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompanies1610769380338 = void 0;
class updateCompanies1610769380338 {
    constructor() {
        this.name = 'updateCompanies1610769380338';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "logo"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "logo" text`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "logo"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "logo" character varying`);
    }
}
exports.updateCompanies1610769380338 = updateCompanies1610769380338;
