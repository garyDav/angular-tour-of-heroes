import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Ronaldo' },
      { id: 13, name: 'Beimar' },
      { id: 13, name: 'Jorge' },
      { id: 13, name: 'Marlen' }
    ]
    return {heroes}
  }
}