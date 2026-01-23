export const ComposeProviders = ({ providers, children }) =>
  providers.reduceRight(
    (kids, ProviderComponent) => <ProviderComponent>{kids}</ProviderComponent>,
    children,
  );
