import { Request, Response } from 'express';
import { Celebrity } from '../models/Celebrity';

export const getCelebrityList = (req: Request, res: Response) => {
    // Simulate fetching celebrity data from a database
    const celebrities = Celebrity.getAllCelebrities();
    res.json(celebrities);
};

export const getCelebrityDetails = (req: Request, res: Response) => {
    const { id } = req.params;
    const celebrity = Celebrity.getCelebrityById(id);

    if (celebrity) {
        res.json(celebrity);
    } else {
        res.status(404).json({ message: 'Celebrity not found' });
    }
};