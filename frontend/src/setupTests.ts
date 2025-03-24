import '@testing-library/jest-dom';

// Mock para o objeto navigator.onLine
Object.defineProperty(window.navigator, 'onLine', {
  writable: true,
  value: true,
});

// Mock para fetch API
global.fetch = vi.fn();

// Resetar todos os mocks antes de cada teste
beforeEach(() => {
  vi.resetAllMocks();
});