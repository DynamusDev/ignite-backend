"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Student_1 = __importDefault(require("../models/Student"));
const Company_1 = __importDefault(require("../models/Company"));
const School_1 = __importDefault(require("../models/School"));
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2('110527689549-4ba6n6gok3i10arbjpv4vvekud0620lc.apps.googleusercontent.com', 'BELbgHcPVGJUvw7UuQmpUMLU', 'https://developers.google.com/oauthplayground');
oauth2Client.setCredentials({
    refresh_token: '1//04gBVVyb0sXpOCgYIARAAGAQSNwF-L9IrnipkcKpnv9QEb-gX2INDdPMKdgB0x4unGFBpyhfEr6Xh0Wo7q4XRYhx3up1oKtYl7wQ',
});
const accessToken = oauth2Client.getAccessToken();
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        user: 'naorespondastarthos@gmail.com',
        clientId: '110527689549-4ba6n6gok3i10arbjpv4vvekud0620lc.apps.googleusercontent.com',
        clientSecret: 'BELbgHcPVGJUvw7UuQmpUMLU',
        refreshToken: '1//04gBVVyb0sXpOCgYIARAAGAQSNwF-L9IrnipkcKpnv9QEb-gX2INDdPMKdgB0x4unGFBpyhfEr6Xh0Wo7q4XRYhx3up1oKtYl7wQ',
        accessToken: accessToken,
        tls: {
            rejectUnauthorized: false,
        },
    },
});
exports.default = {
    async create(request, response) {
        const { email, password } = request.body;
        const session = typeorm_1.getRepository(Student_1.default);
        const comp = typeorm_1.getRepository(Company_1.default);
        const sch = typeorm_1.getRepository(School_1.default);
        console.log(request.body);
        const student = await session.findOne({ where: { email: email } });
        if (!student) {
            const company = await comp.findOne({ where: { email: email } });
            if (!company) {
                const school = await sch.findOne({ where: { email: email } });
                if (!school) {
                    return response.status(200).json({
                        status: 400,
                        error: 'Nenhum usuário encontrado com esse email'
                    });
                }
                else {
                    try {
                        let isValidPass = false;
                        isValidPass = await bcrypt.compare(password, school.password);
                        console.log(isValidPass);
                        if (!isValidPass) {
                            return response.status(200).json({
                                status: 401,
                                error: 'Falha no Login, senha inválida'
                            });
                        }
                        else {
                            const token = jwt.sign({ id: school.id }, authConfig.secret, {
                                expiresIn: 86400,
                            });
                            return response.status(201).json({
                                status: 201,
                                message: 'Succesfuly',
                                school: school,
                                token: token
                            });
                        }
                    }
                    catch (err) {
                        return response.status(500).json({ error: 'Bcrypt function error' });
                    }
                }
            }
            else {
                try {
                    let isValidPass = false;
                    isValidPass = await bcrypt.compare(password, company.password);
                    console.log(isValidPass);
                    if (!isValidPass) {
                        return response.status(200).json({
                            status: 401,
                            error: 'Falha no Login, senha inválida'
                        });
                    }
                    else {
                        const token = jwt.sign({ id: company.id }, authConfig.secret, {
                            expiresIn: 86400,
                        });
                        return response.status(201).json({
                            status: 201,
                            message: 'Succesfuly',
                            company: company,
                            token: token
                        });
                    }
                }
                catch (err) {
                    return response.status(500).json({ error: 'Bcrypt function error' });
                }
            }
        }
        else {
            try {
                let isValidPass = false;
                isValidPass = await bcrypt.compare(password, student.password);
                console.log(isValidPass);
                if (!isValidPass) {
                    return response.status(200).json({
                        status: 401,
                        error: 'Falha no Login, senha inválida'
                    });
                }
                else {
                    const token = jwt.sign({ id: student.id }, authConfig.secret, {
                        expiresIn: 86400,
                    });
                    return response.status(201).json({
                        status: 201,
                        message: 'Succesfuly',
                        user: student,
                        token: token
                    });
                }
            }
            catch (err) {
                return response.status(500).json({ error: 'Bcrypt function error' });
            }
        }
    },
    async forgotPasswordStudent(request, response) {
        const { email } = request.body;
        const session = typeorm_1.getRepository(Student_1.default);
        const student = await session.findOne({ email: email });
        if (!student) {
            return response.status(200).json({
                status: 400,
                error: 'email não encontrado na nossa base de dados'
            });
        }
        else {
            const newPassword = crypto.randomBytes(6).toString('hex');
            let hashedPassword;
            try {
                hashedPassword = await bcrypt.hash(newPassword, 12);
            }
            catch (err) { }
            const resetPassword = session.merge(student, {
                password: hashedPassword
            });
            await session.save(resetPassword);
            const emailASerEnviado = {
                from: 'naorespondastarthos@gmail.com',
                to: email,
                subject: 'Esqueci Minha Senha - Ignite',
                text: `Você solicitou a alteração de senha no nosso app e uma nova senha foi gerada automaticamente.\n
Login: ${email}
Senha: ${newPassword} \n
(fique atento com as letras minúsculas e maiúsculas)\n
Você ja pode logar na sua conta com sua senha nova e poderá trocar a senha através do painel no botão de acesso "editar".\n
Obrigado,
Equipe Ignite`,
            };
            transport.sendMail(emailASerEnviado, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    return response.status(200).json({
                        status: 200,
                        message: 'Uma nova senha foi enviada para o seu email!!!'
                    });
                }
            });
        }
    },
    async forgotPasswordCompany(request, response) {
        const { email } = request.body;
        const session = typeorm_1.getRepository(Company_1.default);
        const company = await session.findOne({ email: email });
        if (!company) {
            return response.status(200).json({
                status: 400,
                error: 'email não encontrado na nossa base de dados'
            });
        }
        else {
            const newPassword = crypto.randomBytes(6).toString('hex');
            let hashedPassword;
            try {
                hashedPassword = await bcrypt.hash(newPassword, 12);
            }
            catch (err) { }
            const resetPassword = session.merge(company, {
                password: hashedPassword
            });
            await session.save(resetPassword);
            const emailASerEnviado = {
                from: 'naorespondastarthos@gmail.com',
                to: email,
                subject: 'Esqueci Minha Senha - Ignite',
                text: `Você solicitou a alteração de senha no nosso app e uma nova senha foi gerada automaticamente.\n
  Login: ${email}
  Senha: ${newPassword} \n
  (fique atento com as letras minúsculas e maiúsculas)\n
  Você ja pode logar na sua conta com sua senha nova e poderá trocar a senha através do painel no botão de acesso "editar".\n
  Obrigado,
  Equipe Ignite`,
            };
            transport.sendMail(emailASerEnviado, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    return response.status(200).json({
                        status: 200,
                        message: 'Uma nova senha foi enviada para o seu email!!!'
                    });
                }
            });
        }
    },
    async forgotPasswordSchool(request, response) {
        const { email } = request.body;
        const session = typeorm_1.getRepository(School_1.default);
        const school = await session.findOne({ email: email });
        if (!school) {
            return response.status(200).json({
                status: 400,
                error: 'email não encontrado na nossa base de dados'
            });
        }
        else {
            const newPassword = crypto.randomBytes(6).toString('hex');
            let hashedPassword;
            try {
                hashedPassword = await bcrypt.hash(newPassword, 12);
            }
            catch (err) { }
            const resetPassword = session.merge(school, {
                password: hashedPassword
            });
            await session.save(resetPassword);
            const emailASerEnviado = {
                from: 'naorespondastarthos@gmail.com',
                to: email,
                subject: 'Esqueci Minha Senha - Ignite',
                text: `Você solicitou a alteração de senha no nosso app e uma nova senha foi gerada automaticamente.\n
  Login: ${email}
  Senha: ${newPassword} \n
  (fique atento com as letras minúsculas e maiúsculas)\n
  Você ja pode logar na sua conta com sua senha nova e poderá trocar a senha através do painel no botão de acesso "editar".\n
  Obrigado,
  Equipe Ignite`,
            };
            transport.sendMail(emailASerEnviado, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    return response.status(200).json({
                        status: 200,
                        message: 'Uma nova senha foi enviada para o seu email!!!'
                    });
                }
            });
        }
    }
};
