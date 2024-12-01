# Segédlet, ilyenek 😎

# env

```
DATABASE_URL="mysql://root:@localhost:3306/sportsball"
```

# Prisma

nem tudom miért nincs az izébe

```
npm i @prisma/client
```

schema.prisma módosítások érvénybe léptetése:

```
npx prisma db push
```

alap adatok?

```
npx prisma db seed
```

db művelet kódrészletek:

```
// create:

this.prismaService.adatbazisnev.create({
  data : valamiDto
});


// összes lekérdezése:

this.prismaService.adatbazisnev.findMany();


// id alapján keresés:

this.prismaService.adatbazisnev.findUnique({
  where: { id },
});


// update id alapján:

this.prismaService.adatbazisnev.update({
  where: { id },
  data: updatePlayerDto,
});


// törlés id alapján: 

this.prismaService.player.delete({
  where: { id },
});

```

# Nestjs

### amik itt lettek használva

```
npx nest generate resource players
```

```
npx nest generate resource teams
```

## .module

a providerekhez a PrismaService-t importálni kell

## .service

konstruktor:

```
constructor(private readonly prismaService = PrismaService)
```

x nevű adatbázissal tevékenykedés:

```
// this.prismaService.x.parancs
// példa:
// this.prismaService.player.create({
  data : createPlayerDto
})
```
