import apps from '../data/apps.json';
import categoriesList from '../data/categories.json';

/**
 * If it were a real API service, here we could've configure the headers, interceptors, etc.
 * For the sake of simplicity, I'm just returning a promise with the mock data.
 */
export const fetchApps = filterOptions => {
  return new Promise(resolve =>
    setTimeout(() => {
      const listApps = filter(filterOptions);
      const ordered = orderByPlansPrice(listApps);
      resolve({
        data: ordered
      });
    }, 1500)
  );
};

export const fetchCategories = () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve({
        data: categoriesList.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        })
      });
    }, 1500)
  );
};

/**
 * Helper function to order the data by the the sum of plan's price, ascending. It also could be done in the backend part.
 */
const orderByPlansPrice = data =>
  data.sort((a, b) => {
    const totalPlansPriceA = a.subscriptions.reduce((total, obj) => total + obj.price, 0);
    const totalPlansPriceB = b.subscriptions.reduce((total, obj) => total + obj.price, 0);
    return totalPlansPriceA - totalPlansPriceB;
  });

const filter = (filterOptions = {}) => {
  if (!Object.keys(filterOptions).length) return apps;

  const { searchTerm = '', categories = [] } = filterOptions;

  const filteredByCategories = categories.length
    ? apps.filter(app => {
        const hasCategories = app.categories.filter(cat => categories.includes(cat));
        return hasCategories.length ? app : null;
      })
    : apps;

  return filteredByCategories.filter(app => app.name.toLowerCase().includes(searchTerm));
};
