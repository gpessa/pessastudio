import { initLingui } from "utils/initLingui";

export default function withLingui(
  WrappedComponent: React.ComponentType<{ params: { lang: string } }>
) {
  const ComponentWithLingui = async (props: { params: { lang: string } }) => {
    const lang = (await props.params).lang;
    initLingui(lang);

    return <WrappedComponent {...props} />;
  };

  ComponentWithLingui.displayName = `WithLingui(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithLingui;
}

export type WithLinguiProps = {
  params: { lang: string };
};
