import { Request, Response } from 'express';
import { Cat } from '../models/Cat';
import { CatService } from '../services/CatService';
import { injectable } from 'tsyringe';

@injectable()
export class CatController {
  constructor(private catService: CatService) {}

  async getTags(req: Request, res: Response) {
    // Implement your logic to fetch tags from external API or database
    const tags = await this.catService.getTags();
    res.json(tags);
  }

  async filterCats(req: Request, res: Response) {
    // Implement your logic to filter cats based on tags
    const { tag, omit, total } = req.query;
    const filteredCats = await this.catService.filterCats(tag, omit, total);
    res.json(filteredCats);
  }

  async matchCats(req: Request, res: Response) {
    // Implement your logic to match cats based on substr
    const { string } = req.query;
    const matchedCats = await this.catService.matchCats(string);
    res.json(matchedCats);
  }
}
