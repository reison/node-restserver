// =====================================
// puerto
// =====================================
process.env.PORT = process.env.PORT || 3000;

//======================================
// entorno
//======================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//======================================
// vencimiento del token
//======================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//======================================
// SEED de autenticación
//======================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//======================================
// base de datos
//======================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//======================================
// google cliente id
//======================================

//process.env.CLIENT_ID = process.env.CLIENT_ID || '1061092881054-27sqrf165nk38too8u461qoeie0ktsao.apps.googleusercontent.com';
process.env.CLIENT_ID = process.env.CLIENT_ID || '1061092881054-2d8pkvhfjhs7vvs8embtllroge6p3s4v.apps.googleusercontent.com';