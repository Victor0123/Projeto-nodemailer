// Carrega as variaveis de ambiente
require('dotenv').config();
// Importa o nodemailer
const nodemailer = require('nodemailer');

//configura o remetente para o envio do email
const transport = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: false, // true para port 465, false para as demais.
    auth: {
        user: process.env.USR,
        pass: process.env.PASS
    }
});

//Configura o email que será enviado
transport.sendMail({
    from: `Teste nodemailer <${process.env.USR}>`,
    to: process.env.TO,
    subject: 'Teste envio nodemailer',
    html: '<h1>Olá, Dev!</h1> <p>Este é um email enviado pelo nodemailer</p>',
    text: 'Olá, Dev! Este é um email enviado pelo nodemailer'
}) 
//Log de sucesso ou falha no terminal
.then(() => console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar email: ', err));
