// Configuração de domínios
export const domains = {
  primary: 'piracy.live',
  secondary: 'pablo.news',
  protocol: 'https',
  
  // URLs completas
  get primaryUrl() {
    return `${this.protocol}://${this.primary}`;
  },
  
  get secondaryUrl() {
    return `${this.protocol}://${this.secondary}`;
  },
  
  // Para uso em meta tags
  get canonicalUrl() {
    return this.primaryUrl;
  },
  
  // Para alternates (hreflang)
  get alternateUrls() {
    return [
      this.primaryUrl,
      this.secondaryUrl
    ];
  }
};

// Configuração específica para diferentes ambientes
export const environment = {
  // Detectar se está em produção
  isProduction: process.env.NODE_ENV === 'production',
  
  // URL base para usar
  get baseUrl() {
    return domains.primaryUrl;
  },
  
  // URLs alternativas para meta tags
  get alternateUrls() {
    return domains.alternateUrls;
  }
};
