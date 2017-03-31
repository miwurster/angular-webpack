import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './model/hero.model';
import { Crisis } from './model/crisis.model';

export class DummyDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = require('../../assets/hero-data.json');
    const crisis: Crisis[] = require('../../assets/crisis-data.json');
    return {
      heroes, // Endpoint /api/heroes
      crisis, // Endpoint /api/crisis
    };
  }
}
