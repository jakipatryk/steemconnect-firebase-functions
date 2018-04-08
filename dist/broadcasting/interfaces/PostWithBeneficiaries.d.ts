export interface PostWithBeneficiaries {
    mainTag: string;
    author: string;
    permlink: string;
    title: string;
    body: string;
    beneficiariesAccount: string;
    beneficiariesWeight: number;
    metadata?: object | string;
}
