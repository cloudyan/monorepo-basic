// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { warning } from '/Volumes/data/code/github.com/cloudyan/monorepo-basic/node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util';
import deepmerge from '/Volumes/data/code/github.com/cloudyan/monorepo-basic/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge';
import { getRouteMetaById } from './exports';

// Proxy do not warning since `Object.keys` will get nothing to loop
function wrapEmpty(meta, fieldName, defaultValue) {
  Object.defineProperty(meta, fieldName, {
    get: () => {
      warning(false, `'${fieldName}' return empty in latest version, please use \`useRouteMeta\` instead.`);
      return defaultValue;
    },
  });
}

export const patchRoutes = ({ routes }) => {
  Object.values(routes).forEach((route) => {
    const routeMeta = getRouteMetaById(route.id, { syncOnly: true });

    if (routeMeta) {
      if (process.env.NODE_ENV === 'production' && (route.meta?.frontmatter?.debug || routeMeta.debug)) {
        // hide route in production which set hide frontmatter
        delete routes[route.id];
      } else {
        // merge meta to route object
        route.meta = deepmerge(route.meta, routeMeta);

        wrapEmpty(route.meta, 'toc', []);
        wrapEmpty(route.meta, 'texts', []);

        route.meta.tabs?.forEach((tab) => {
          wrapEmpty(tab, 'toc', []);
          wrapEmpty(tab, 'texts', []);
        });
      }
    }
  });
}
