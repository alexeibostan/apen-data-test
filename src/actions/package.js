export const FETCH_PACKAGES = 'FETCH_PACKAGES';
export const SELECT_PACKAGE = 'FETCH_PACKAGES_SUCCESS';

export const fetchPackages = packages => {
  return {
    type: FETCH_PACKAGES,
    payload: packages
  };
};

export const selectPackage = pack => {
  return {
    type: SELECT_PACKAGE,
    payload: pack
  };
};
