(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getAllMovieActorsByMovieId(id: string) {
    console.log({ id });
  }

  function getActorBioById(ActorId: string) {
    console.log({ ActorId });
  }

  // Crear una película

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  interface Actor {
    fullName: string;
    birthdate: Date;
  }
  // Crea un nuevo actor
  function createActor({ fullName, birthdate }: Actor): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor', birthdate);
    return true;
  }

  type PersonState = {
    isDead: boolean;
    isSeparated: boolean;
    isRetired: boolean;
  };
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }: PersonState): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    if (isRetired) return 3000;
    return 4000;
  };
})();
