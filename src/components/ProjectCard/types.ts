export type Props = {
    status: 'active' | 'cancelled' | 'inactive';
    client: string;
    lead: string;
    manager: string;
    teamType: string;
    startDate: string;
    endDate: string;
};
