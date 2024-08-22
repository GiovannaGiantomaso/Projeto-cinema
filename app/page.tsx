import CardFilm from "./Components/CardFilm/CardFilm";

export default function Home() {
  return (
    <main className="flex-auto">
      <section className="flex flex-wrap justify-center">
      <CardFilm title="Para sempre ao seu lado" image="/parasempre.jpg" link="https://youtu.be/UFY8vW5IedY?si=bmNTDKlmPyHhL40s" />

      <CardFilm title="Guardiões da galáxia" image="/Guardioes.jpg" link="https://youtu.be/pELXsaS7Y1E?si=uLZcKN5KErcYq1ZY" />

      <CardFilm title="Aquaman" image="/Aquamen.jpg" link="https://youtu.be/yJnzCBt5j1M?si=GYfeq2M3NCUQyLR8" />

      <CardFilm title="Liga da Justiça" image="/LigaDaJustiça.jpg" link="https://youtu.be/BZUm2lpPoKM?si=e2KE-7GXvAXSk9Db" />

      <CardFilm title="smurf" image="/smurf.jpg" link="https://youtu.be/3j7ZaoKMxfY?si=fuWBkb9Id7TeIJI7" />

      </section>

      <section className="flex flex-wrap justify-center">

      <CardFilm title="Para sempre ao seu lado" image="/parasempre.jpg" link="https://youtu.be/UFY8vW5IedY?si=bmNTDKlmPyHhL40s" />

      <CardFilm title="Guardiões da galáxia" image="/Guardioes.jpg" link="https://youtu.be/pELXsaS7Y1E?si=uLZcKN5KErcYq1ZY" />

      <CardFilm title="Aquaman" image="/Aquamen.jpg" link="https://youtu.be/yJnzCBt5j1M?si=GYfeq2M3NCUQyLR8" />

      <CardFilm title="Liga da Justiça" image="/LigaDaJustiça.jpg" link="https://youtu.be/BZUm2lpPoKM?si=e2KE-7GXvAXSk9Db" />

      <CardFilm title="smurf" image="/smurf.jpg" link="https://youtu.be/3j7ZaoKMxfY?si=fuWBkb9Id7TeIJI7" />
      </section>
    </main>
  );
}
