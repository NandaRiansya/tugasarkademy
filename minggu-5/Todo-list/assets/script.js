let todo = [
    {
        title:"Rendang",
        description:"Rendang atau randang (Jawi: رندڠ) adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali. Proses memasaknya memakan waktu berjam-jam (biasanya sekitar empat jam) hingga yang tinggal hanyalah potongan daging berwarna hitam pekat. Dalam suhu ruangan, rendang dapat bertahan hingga berminggu-minggu. Rendang yang dimasak dalam waktu yang lebih singkat dan santannya belum mengering disebut kalio, berwarna coklat terang keemasan."
    },
    {
        title:"Kebab",
        description:"Kebab adalah penganan cepat saji terdiri atas daging sapi yang dipanggang seperti satai kemudian diiris-iris ditambah dengan sayuran segar dan mayones, lalu dibalut dengan kulit tortila.[1] Hidangan ini umum dijumpai dalam masakan Laut Tengah, masakan Kaukasus, masakan Asia Tengah, masakan Asia Selatan, masakan Asia Tenggara, dan masakan beberapa negara Afrika."
    },
    {
        title:"pecel",
        description:"Rendang atau randang (Jawi: رندڠ) adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali. Proses memasaknya memakan waktu berjam-jam (biasanya sekitar empat jam) hingga yang tinggal hanyalah potongan daging berwarna hitam pekat. Dalam suhu ruangan, rendang dapat bertahan hingga berminggu-minggu. Rendang yang dimasak dalam waktu yang lebih singkat dan santannya belum mengering disebut kalio, berwarna coklat terang keemasan."
    },
    {
        title:"Tehpoci",
        description:"Rendang atau randang (Jawi: رندڠ) adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali. Proses memasaknya memakan waktu berjam-jam (biasanya sekitar empat jam) hingga yang tinggal hanyalah potongan daging berwarna hitam pekat. Dalam suhu ruangan, rendang dapat bertahan hingga berminggu-minggu. Rendang yang dimasak dalam waktu yang lebih singkat dan santannya belum mengering disebut kalio, berwarna coklat terang keemasan."
    }, {
        title:"brokoli",
        description:"Rendang atau randang (Jawi: رندڠ) adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali. Proses memasaknya memakan waktu berjam-jam (biasanya sekitar empat jam) hingga yang tinggal hanyalah potongan daging berwarna hitam pekat. Dalam suhu ruangan, rendang dapat bertahan hingga berminggu-minggu. Rendang yang dimasak dalam waktu yang lebih singkat dan santannya belum mengering disebut kalio, berwarna coklat terang keemasan."
    },
]
 class TodoList{
     item = document.getElementById('todo-list')
     content = document.getElementById('todo-description')

     listItem = ()=>{
         for(let x in todo){
             this.item.innerHTML+='<div class="list-item">'+todo[x].title+'</div>'
         }
     }
     setDisplay = (n=0)=>{
        this.content.innerHTML = '<div class="title">'+todo[n].title+'</div>\
        <div class="container">'+todo[n].description+'</div>'
     }
 }

 const todoList = new TodoList()