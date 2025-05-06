class RouterConfig {
  #Index = '/';
  #Characters = '/character';
  #Episodes = '/episode';
  #Locations = '/location';
  #Character = '/characters/:id';
  #Episode = '/episode/:id';
  #Location = '/location/:id';
  #Login = '/login';
  #NotFound = '*';

  get index() {
    return this.#Index;
  }

  get characters() {
    return this.#Characters;
  }

  get episodes() {
    return this.#Episodes;
  }

  get locations() {
    return this.#Locations;
  }

  get character() {
    return this.#Character;
  }

  get episode() {
    return this.#Episode;
  }

  get location() {
    return this.#Location;
  }

  get login() {
    return this.#Login;
  }

  get notFound() {
    return this.#NotFound;
  }
}

export const routerConfig = new RouterConfig();
