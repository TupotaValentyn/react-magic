export enum UI_LIBS {
  MATERIAL = '/material',
  BOOTSTRAP = '/bootstrap',
  ANT_DESIGN = '/ant-design',
  REBASS = '/rebass',
  SEMANTIC_UI_REACT = '/semantic-ui-react',
  REACT_MOTION = '/react-motion',
  REACT_360 = '/react-360',
  REBRICS_REACT = '/rebrics-react',
  REACT_VIRTUALIZED = '/react-virtualized',
  REACT_DESKTOP = '/react-desktop',
  CHAKRA_UI = '/chakra-ui',
  STYLED_COMPONENTS = '/styles-components',
  ONSEN_UI = '/onsen-ui',
  REACT_ADMIN = '/react-admin',
  REACT_TOOLBOX = '/react-toolbox',
  REACT_SUITE = '/react-suite'
}

enum HELPER_ROUTES {
  FORM = '/form',
  UTILS = '/utils',
  DOCS = '/docs'
}

export enum ROUTES {
  UI_LIBS = '/ui-libs/components',
  HELPERS = '/helpers'

}

const getValues = (entity: Object) => {
  return Object.values(entity);
}

const getRoutePathname = (firstPart: string, secondPart: string) => {
  return `${firstPart}${secondPart}`;
}

const uiRoutesPattern = (path: string) => getRoutePathname(ROUTES.UI_LIBS, path);
const helperRoutesPattern = (path: string) => getRoutePathname(ROUTES.HELPERS, path);

const makeRouteParams = (path: string, pattern: Function) => {
  return {
    path: pattern(path),
  }
};

const createUIRoutes = (path: string) => makeRouteParams(path, uiRoutesPattern);
const createHelperRoutes = (path: string) => makeRouteParams(path, helperRoutesPattern);


type CallbackFn = (value: string, index: number, array: string[]) => ReturnType<typeof makeRouteParams>;

const createRoutes = (routes: Object, pattern: CallbackFn) => {
  return getValues(routes).map(pattern);
}

export const uiLibRoutes = createRoutes(UI_LIBS, createUIRoutes);
export const helperRoutes = createRoutes(HELPER_ROUTES, createHelperRoutes);

console.log(helperRoutes);
