export interface PostWithBeneficiaries {
  mainTag: string;
  permlink: string;
  title: string;
  body: string;
  beneficiariesAccount: string;
  beneficiariesWeight: number;
  metadata?: object;
}
