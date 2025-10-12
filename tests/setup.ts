import { beforeAll, afterAll } from 'vitest'

// Configuração global para testes
beforeAll(() => {
  // Configurações iniciais dos testes
  console.log('🧪 Configurando ambiente de testes...')
})

afterAll(() => {
  // Limpeza após os testes
  console.log('✅ Testes finalizados')
})

// Mock para fetch se necessário
global.fetch = global.fetch || (() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve({}),
  text: () => Promise.resolve('')
} as Response))
