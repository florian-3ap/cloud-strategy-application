type EnvKey = "REACT_APP_BASE_URL";

export const env =
  process.env.NODE_ENV === "development"
    ? Object.keys(process.env).reduce((acc, curr) => {
        if (curr.startsWith("REACT_APP_")) {
          acc[curr as EnvKey] = process.env[curr] as string;
        }
        return acc;
      }, {} as Record<EnvKey, string>)
    : ((window as any).env as Record<EnvKey, string>);
