// const tambah = (satu,dua)=>{
//     return satu+dua
// }

class Mobil{
    constructor(tipe, warna){
        this.tipe = tipe
        this.warna = warna
    }
    jalankan(){
        return "jalankan mobil warna "+this,tipe+" yang warnanya"+ this.warna
    }
    berhenti (kondisi){
        if(kondisi == "berhenti"){
            return " mobil "+this.tipe+" yang warnanya"+this.warna+" sudah berhenti"
        }else{
            return "mobil "+this.tipe+" yang warnanya"+this.warna+" masih jalan"
        }
    }
}
const classMobil = new Mobil('jip', 'Merah')
console.log(classMobil())
module.exports ={
    fungsitambah : (satu,dua)=>{
        return satu+dua

    }
}