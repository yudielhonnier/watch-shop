const reacti18nextMock = () =>
  jest.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: (key: string) => key,
      // i18n: { changeLanguage: jest.fn() },
    }),
  }));
export default reacti18nextMock;
