import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'shiv-ionic2',
  webDir: '../../dist/apps/shiv-ionic2',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
