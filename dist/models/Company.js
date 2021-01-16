"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Company_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Student_1 = __importDefault(require("./Student"));
let Company = Company_1 = class Company {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Company.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Company.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "cnpj", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "logo", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "specialties", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Student_1.default, company_id => Company_1, { onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], Company.prototype, "staff", void 0);
__decorate([
    typeorm_1.Column({ type: 'date' }),
    __metadata("design:type", Date)
], Company.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], Company.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], Company.prototype, "deletedAt", void 0);
Company = Company_1 = __decorate([
    typeorm_1.Entity('companies')
], Company);
exports.default = Company;
