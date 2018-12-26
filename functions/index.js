'use strict';
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

const gmailEmail = 'rpfengenhariasuporte@gmail.com';
const gmailPassword = functions.config().gmail.password;
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.enviarEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    let remetente = '"RPF Engenharia Solar" <rpfengenhariasuporte@gmail.com>';

    let destinatarios = req.body['destinatarios']; // lista de e-mails destinatarios separados por ,
    let htmlForm = '<b>Gostaria de: </b>' + req.body['desejo'] +
      '<br><b>Nome: </b>' + req.body['nome'] +
      '<br><b>CPF/CNPJ: </b>' + req.body['cpf'] +
      '<br><b>Email: </b>' + destinatarios +
      '<br><b>Telefone Fixo: </b>' + req.body['fixo'] +
      '<br><b>Celular: </b>' + req.body['cel'] +
      '<br><b>Rua: </b>' + req.body['rua'] +
      '<br><b>Bairro: </b>' + req.body['bairro'] +
      '<br><b>Número: </b>' + req.body['n'] +
      '<br><b>Complemento: </b>' + req.body['complemento'] +
      '<br><b>CEP: </b>' + req.body['cep'] +
      '<br><b>Estado: </b>' + req.body['estado'] +
      '<br><b>Cidade: </b>' + req.body['cidade'] +
      '<br><b>Concessionária de Energia Elétrica: </b>' + req.body['concessio'];

    let emailCliente = {
      from: remetente,
      to: destinatarios,
      subject: 'Confirmação de contato RPF Engenheria',
      html: 'A <b>RPF Engenharia</b> agradece seu contato e informa que fará o retorno em até 5 dias úteis.' +
        '<br><br><font size="2" color="#0083B0"><b>Atenciosamente,<br>RPF Engenharia<br>(62) 99401-3370<br>Av. Brasília, Quadra 75 Lote 11, Centro Britânia - GO, CEP: 76.280-000<br>RPFENGENHARIAECONSTRUCOES@GMAIL.COM</b></font>'
    }

    let emailSelf = {
      from: remetente,
      to: 'rpfengenhariasuporte@gmail.com',
      subject: 'Orçamento Solicitado',
      html: htmlForm
    }

    transporter.sendMail(emailCliente, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Mensagem Cliente %s enviada: %s', info.messageId, info.response);
    });

    transporter.sendMail(emailSelf, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Mensagem Self %s enviada: %s', info.messageId, info.response);
    });
  });
  res.redirect('..');
});