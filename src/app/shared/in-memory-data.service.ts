import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero, Crisis } from './model';

export class DummyDataService implements InMemoryDbService {
  createDb() {
    let heroes: Hero[] = require('../../assets/hero-data.json');
    let crisis: Crisis[] = require('../../assets/crisis-data.json');
    return {
      heroes, // Endpoint /api/heroes
      crisis, // Endpoint /api/crisis
    };
  }
}
