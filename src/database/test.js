const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {
  await saveOrphanage(db, {
    lat: "-27.8149819",
    lng: "-50.3230171",
    name: "Lar dos piá"    ,
    about: "Sassistência a crianças de 0 a 15 anos que se encontram em situação de risco ou vulnerabilidade social",
    whatsapp: "4532452452",
    images: [
        "https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

    ].toString(),
    instructions: "Sinta-se a vontade para visitar, trazendo amor e paciência para seus semelhantes",
    opening_hours: "Horário de visitas: 14:00 às 20:00h",
    open_on_weekends: "1",
});

  //consultar tabelas
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages);
  //consultar apenas 1 dos registros
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"');
  console.log(orphanage);
  //deletar dado tabelas
  console.log (await db.run("DELETE FROM orphanages WHERE id = '4'"))
  console.log (await db.run("DELETE FROM orphanages WHERE id = '5'"))
});
