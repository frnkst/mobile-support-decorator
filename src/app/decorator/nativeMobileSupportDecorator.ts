declare global {
  interface Window {
    mobileSupport: any;
  }
}

export const nativeMobileSupport = (
  target: object,
  decoratedFunctionName: string,
  descriptor: PropertyDescriptor
) => {
  window.mobileSupport = window.mobileSupport || {};
  const originalMethod = descriptor.value;

  descriptor.value = (...args) => {
    window.mobileSupport[decoratedFunctionName] = originalMethod;
    return window.mobileSupport[decoratedFunctionName](this, ...args);
  };

  return descriptor;
};
