import { config } from '@vue/test-utils';
import { Quasar } from 'quasar';
import { vi } from 'vitest';

vi.mock('quasar', async () => {
  const actual = await vi.importActual('quasar'); // Import Quasar
  return {
    ...actual,
    QCard: { template: '<div><slot /></div>' },
    QCardSection: { template: '<div><slot /></div>' },
    QInput: { template: '<input v-bind="$attrs" v-on="$listeners" />' },
    QList: { template: '<ul><slot /></ul>' },
    QItem: { template: '<li><slot /></li>' },
    QItemSection: { template: '<span><slot /></span>' },
  };
});

config.global.plugins = [Quasar];
