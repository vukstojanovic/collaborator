export type tutorialsListItem = {
    id: string;
    title: string;
};

export type defaultStateProps = {
    tutorialsList: {
        id: string;
        title: string;
    }[];
    lastId: string;
};
