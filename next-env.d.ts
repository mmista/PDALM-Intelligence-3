/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module "*.png" {
  const value: string;
  export default value;
}