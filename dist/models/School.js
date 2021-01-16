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
var School_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Student_1 = __importDefault(require("./Student"));
let School = School_1 = class School {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], School.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], School.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], School.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], School.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], School.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], School.prototype, "cnpj", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], School.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], School.prototype, "logo", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], School.prototype, "specialties", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Student_1.default, school_id => School_1, { onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], School.prototype, "student", void 0);
__decorate([
    typeorm_1.Column({ type: 'date' }),
    __metadata("design:type", Date)
], School.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], School.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], School.prototype, "deletedAt", void 0);
School = School_1 = __decorate([
    typeorm_1.Entity('schools')
], School);
exports.default = School;
