import Vue from 'vue';
import VueTailwind from 'vue-tailwind';

const settings = {
  TSelect: {
    wrapped: true,
    fixedClasses: {
      wrapper: 'relative',
      input: 'bg-transparent appearance-none focus:outline-none focus:shadow-outline py-2 pr-6 px-3 block w-full',
      arrowWrapper: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2',
      arrow: 'fill-current h-4 w-4',
    },
    variants: {
      confirmed: {
        input: 'bg-green-800 text-green-300',
        arrowWrapper: 'text-green-300',
      },
      not_likely: {
        input: 'bg-yellow-800 text-yellow-300',
        arrowWrapper: 'text-yellow-300',
      },
    },
  },

  TButton: {
    fixedClasses: 'text-white flex-1 px-2 py-1 focus:outline-none focus:shadow-outline transition-colors duration-100',
    variants: {
      maybe: 'hover:bg-gray-900',
      confirmed: 'hover:bg-green-900 text-green-300',
      not_likely: 'hover:bg-yellow-900 text-yellow-300',
    },
  },
};

Vue.use(VueTailwind, settings);
