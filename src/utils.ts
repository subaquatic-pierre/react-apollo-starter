export const getApiUri = (): string => {
  const devEnv = process.env.REACT_APP_DEV_ENV;
  let uri = "http://localhost:8000/graphql/";

  if (devEnv !== "True") {
    uri = process.env.REACT_APP_URI as string;
  }

  return uri;
};
