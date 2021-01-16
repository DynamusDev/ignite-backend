"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const StudentController_1 = __importDefault(require("./controllers/StudentController"));
const SessionController_1 = __importDefault(require("./controllers/SessionController"));
const CompanyController_1 = __importDefault(require("./controllers/CompanyController"));
const SchoolController_1 = __importDefault(require("./controllers/SchoolController"));
exports.routes = express_1.default.Router();
//Session
exports.routes.post('/login', SessionController_1.default.create); //Criar Sessão(LOGIN)
exports.routes.post('/forgot_password_student', SessionController_1.default.forgotPasswordStudent); //Esqueci minha senha estudante
exports.routes.post('/forgot_password_company', SessionController_1.default.forgotPasswordCompany); //Esqueci minha senha empresa
exports.routes.post('/forgot_password_school', SessionController_1.default.forgotPasswordSchool); //Esqueci minha senha escola
//Student 
exports.routes.post('/student', StudentController_1.default.create); // Criar usuário
exports.routes.put('/student/:id', StudentController_1.default.edit); // editar com senha
exports.routes.put('/editWithoutPassword/:id', StudentController_1.default.editWithoutPassword); // editar sem senha
exports.routes.get('/student', StudentController_1.default.index); // Listar Usuários Ativos
exports.routes.get('/allStudents', StudentController_1.default.indexAll); // Listar Todos Usuários
exports.routes.get('/student/:id', StudentController_1.default.especific);
exports.routes.patch('/student/:id', StudentController_1.default.delete);
//Companies 
exports.routes.post('/company', CompanyController_1.default.create); // Criar empresa
exports.routes.put('/company/:id', CompanyController_1.default.edit); // editar com senha
exports.routes.put('/editCompanyWithoutPassword/:id', CompanyController_1.default.editWithoutPassword); // editar sem senha
exports.routes.get('/company', CompanyController_1.default.index); // Listar Empresas Ativas
exports.routes.get('/allCompanies', CompanyController_1.default.indexAll); // Listar Todas as empresas
exports.routes.get('/company/:id', CompanyController_1.default.especific);
exports.routes.patch('/company/:id', CompanyController_1.default.delete);
//Schools 
exports.routes.post('/school', SchoolController_1.default.create); // Criar escola
exports.routes.put('/school/:id', SchoolController_1.default.edit); // editar com senha
exports.routes.put('/editSchoolWithoutPassword/:id', SchoolController_1.default.editWithoutPassword); // editar sem senha
exports.routes.get('/school', SchoolController_1.default.index); // Listar Escolas Ativas
exports.routes.get('/allSchools', SchoolController_1.default.indexAll); // Listar Todas as escolas
exports.routes.get('/school/:id', SchoolController_1.default.especific);
exports.routes.patch('/school/:id', SchoolController_1.default.delete);
