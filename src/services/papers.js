
import { papers } from '../mock';

class Papers {
  constructor() {
    this.baseUrl = 'https://';
  }

  getAll() {
    this.all = papers;
  }
}

export default Papers;
