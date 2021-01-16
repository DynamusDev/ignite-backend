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
var Student_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Company_1 = __importDefault(require("./Company"));
const School_1 = __importDefault(require("./School"));
let Student = Student_1 = class Student {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Student.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Student.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Student.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], Student.prototype, "image", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Company_1.default, staff => Student_1, { eager: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    __metadata("design:type", Company_1.default)
], Student.prototype, "company_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => School_1.default, staff => Student_1, { eager: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], Student.prototype, "school_id", void 0);
__decorate([
    typeorm_1.Column({ type: 'date' }),
    __metadata("design:type", Date)
], Student.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], Student.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], Student.prototype, "deletedAt", void 0);
Student = Student_1 = __decorate([
    typeorm_1.Entity('students')
], Student);
exports.default = Student;
