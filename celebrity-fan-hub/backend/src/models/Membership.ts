export interface Membership {
    id: number;
    type: string;
    benefits: string[];
    price: number;
}

const membershipTypes: Membership[] = [
    {
        id: 1,
        type: "Basic",
        benefits: ["Access to celebrity news", "Monthly newsletter"],
        price: 0,
    },
    {
        id: 2,
        type: "Premium",
        benefits: ["All Basic benefits", "Exclusive content", "Ad-free experience", "Early access to events"],
        price: 9.99,
    },
];

export default membershipTypes;