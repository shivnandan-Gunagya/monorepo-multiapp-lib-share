import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'shiv-ionic',
  webDir: '../../dist/apps/shiv-ionic',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
