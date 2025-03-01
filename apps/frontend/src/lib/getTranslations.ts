import { getTranslations } from 'next-intl/server';

/**
 * Fetches nested translations from a specific namespace.
 * @param namespace - The root namespace (e.g., 'navbar').
 * @param nestedKey - The nested key path (e.g., 'links').
 * @param keys - The keys to fetch within the nested structure.
 * @returns A dictionary of translated strings.
 */
export const fetchNestedTranslations = async (
  namespace: string,
  nestedKey: string,
  keys: string[]
): Promise<Record<string, string>> => {
  const t = await getTranslations(`${namespace}.${nestedKey}`);

  return keys.reduce<Record<string, string>>(
    (translations, key) => ({ ...translations, [key]: t(key) }),
    {}
  );
};
