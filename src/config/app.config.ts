interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Application Owner'],
  customerRoles: [],
  tenantRoles: ['Application Owner', 'Game Administrator'],
  tenantName: 'Company',
  applicationName: 'chess app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Company',
    'Invite and remove Game Administrators',
    'View all Game Administrators',
    'Update Company details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/32a3a154-6f96-4345-9026-96de329df10e',
};
