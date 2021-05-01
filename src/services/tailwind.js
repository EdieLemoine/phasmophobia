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

  TTag: {
    variants: {
      title: 'text-2xl leading-8 font-extrabold mb-2 mt-3',
      p: 'mb-2',
    },
  },

  TTextarea: {
    fixedClasses: 'bg-gray-900 appearance-none focus:outline-none focus:shadow-outline py-2 pr-6 px-3 block w-full mb-2',
    variants: {
      danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
      success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900',
    },
  },

  TButton: {
    fixedClasses: 'whitespace-nowrap flex-1 px-2 py-1 focus:outline-none focus:shadow-outline transition-colors duration-100 hover:bg-gray-900 transition-colors duration-200',
  },

  TInput: {
    classes: 'bg-gray-900 focus:outline-none focus:shadow-outline py-2 px-4',
  },
};

Vue.use(VueTailwind, settings);
