import express from 'express';

import StudentController from './controllers/StudentController';
import SessionController from './controllers/SessionController';
import CompanyController from './controllers/CompanyController';
import SchoolController from './controllers/SchoolController';

export const routes = express.Router();

//Session
routes.post('/login', SessionController.create); //Criar Sessão(LOGIN)
routes.post('/forgot_password_student', SessionController.forgotPasswordStudent); //Esqueci minha senha estudante
routes.post('/forgot_password_company', SessionController.forgotPasswordCompany); //Esqueci minha senha empresa
routes.post('/forgot_password_school', SessionController.forgotPasswordSchool); //Esqueci minha senha escola

//Student 
routes.post('/student', StudentController.create); // Criar usuário
routes.put('/student/:id', StudentController.edit) // editar com senha
routes.put('/editWithoutPassword/:id', StudentController.editWithoutPassword) // editar sem senha
routes.get('/student', StudentController.index);  // Listar Usuários Ativos
routes.get('/allStudents', StudentController.indexAll);  // Listar Todos Usuários
routes.get('/student/:id', StudentController.especific);
routes.patch('/student/:id', StudentController.delete);

//Companies 
routes.post('/company', CompanyController.create); // Criar empresa
routes.put('/company/:id', CompanyController.edit) // editar com senha
routes.put('/editCompanyWithoutPassword/:id', CompanyController.editWithoutPassword) // editar sem senha
routes.get('/company', CompanyController.index);  // Listar Empresas Ativas
routes.get('/allCompanies', CompanyController.indexAll);  // Listar Todas as empresas
routes.get('/company/:id', CompanyController.especific);
routes.patch('/company/:id', CompanyController.delete);

//Schools 
routes.post('/school', SchoolController.create); // Criar escola
routes.put('/school/:id', SchoolController.edit) // editar com senha
routes.put('/editSchoolWithoutPassword/:id', SchoolController.editWithoutPassword) // editar sem senha
routes.get('/school', SchoolController.index);  // Listar Escolas Ativas
routes.get('/allSchools', SchoolController.indexAll);  // Listar Todas as escolas
routes.get('/school/:id', SchoolController.especific);
routes.patch('/school/:id', SchoolController.delete);