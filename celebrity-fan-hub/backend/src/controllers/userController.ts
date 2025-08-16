import { Request, Response } from 'express';
import User from '../models/User';
import Membership from '../models/Membership';

// Get user profile
export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Upgrade membership
export const upgradeMembership = async (req: Request, res: Response) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const { membershipType } = req.body;

        const membership = await Membership.findOne({ type: membershipType });
        if (!membership) {
            return res.status(400).json({ message: 'Invalid membership type' });
        }

        const user = await User.findByIdAndUpdate(userId, { membershipStatus: membershipType }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Membership upgraded', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};