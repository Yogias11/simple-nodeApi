const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
    tujuan: {
        type: String,
        require: true,
    },
    alamat: {
        type: String,
        require: true,
    },
    tgl_buat: {
        type: Date,
        require: true,
    },
    lokasi: {
        type: String,
        require: true,
    },
    sumber: {
        type: String,
        require: true,
    },
    posisi: {
        type: String,
        require: true,
    },
    d_nama: {
        type: String,
        require: true,
    },
    d_jk: {
        type: String,
        require: true,
    },
    d_tmp_lahir: {
        type: String,
        require: true,
    },
    d_tgl_lahir: {
        type: Date,
        require: true,
    },
    d_alamat: {
        type: String,
        require: true,
    },
    d_pendidikan: {
        type: String,
        require: true,
    },
    d_no: {
        type: String,
        require: true,
    },
    deskripsi: {
        type: String,
        require: true,
    },
    bahan: {
        type: String,
        require: true,
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('tabel', ResumeSchema)