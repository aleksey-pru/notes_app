const urls = {
  local: 'http://localhost:8090',
  dev: ''
};

// todo: define later url for request
export const getBaseUrl = (): string => urls.local;

export const templateUrl = (text = '', props: Record<string, string>): string => {
  const regExp = /{([A-z]*)}/gi;
  const replacer = (fullMatch: string, key: string): string => props[key] || fullMatch;

  return text.replace(regExp, replacer);
};
