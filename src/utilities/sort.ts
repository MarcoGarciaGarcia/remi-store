export const sortAlphabetically = <T>(array?: T[], keySort?: keyof T): T[] => {
  if (array?.length === 0) return [];

  return (
    array?.sort((a, b) => {
      if (a[keySort!] < b[keySort!]) {
        return -1;
      }
      if (a[keySort!] > b[keySort!]) {
        return 1;
      }
      return 0;
    }) ?? []
  );
};
