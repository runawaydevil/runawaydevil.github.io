// Configuração de ambiente e domínios
export interface EnvironmentConfig {
  domain: string;
  isPrimary: boolean;
  baseUrl: string;
  siteTitle: string;
  rssTitle: string;
}

// Configurações por ambiente
export const environments = {
  production: {
    domain: 'piracy.live',
    isPrimary: true,
    baseUrl: 'https://piracy.live',
    siteTitle: 'Piracy.Live Vault',
    rssTitle: 'Piracy.Live Vault'
  },
  
  secondary: {
    domain: 'pablo.news',
    isPrimary: false,
    baseUrl: 'https://pablo.news',
    siteTitle: 'Pablo.News Vault',
    rssTitle: 'Pablo.News Vault'
  }
};

// Detectar ambiente atual
export function getCurrentEnvironment(): EnvironmentConfig {
  // Em produção, usar domínio principal
  if (process.env.NODE_ENV === 'production') {
    return environments.production;
  }
  
  // Em desenvolvimento, usar domínio principal também
  return environments.production;
}

// Configuração atual
export const currentEnv = getCurrentEnvironment();

// URLs alternativas para meta tags
export const alternateUrls = [
  environments.production.baseUrl,
  environments.secondary.baseUrl
];

// Configuração para VitePress
export const vitepressConfig = {
  baseUrl: currentEnv.baseUrl,
  siteTitle: currentEnv.siteTitle,
  rssTitle: currentEnv.rssTitle,
  alternateUrls,
  canonicalUrl: currentEnv.baseUrl
};
