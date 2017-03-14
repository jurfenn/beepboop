import {Router, Request, Response, NextFunction} from 'express';
import ITransfunctioner from './ITransfunctioner';
export class SimpleTransfunctioner extends ITransfunctioner {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    super();
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Heroes);
  }

  /**
   * GET one hero by id
   */
  public getOne(req: Request, res: Response, next: NextFunction) {
    let query = parseInt(req.params.id);
    let hero = Heroes.find(hero => hero.id === query);
    if (hero) {
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          hero
        });
    }
    else {
      res.status(404)
        .send({
          message: 'No hero found with the given id.',
          status: res.status
        });
    }
  }

  public transfunction(){
    // determine request type (Promise) - return error if none found
    // load & Initialize bot here (Promise) - auth goes here
    // fulfill request using bot (Promise)
    
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOne);
  }

}

// Create the SimpleTransfunctioner, and export its configured Express.Router
const transfunctioner = new SimpleTransfunctioner();
transfunctioner.init();

export default transfunctioner.router;
