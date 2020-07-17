
import { syllabi, pastSyllabi } from '../mock';

class Syllabi {
  constructor() {
    this.baseUrl = 'https://';
  }

  getCurrent() {
    this.current = syllabi;
  }

  getPast() {
      this.past = pastSyllabi;
  }
}

export default Syllabi;
