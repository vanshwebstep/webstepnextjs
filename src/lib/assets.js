const DEFAULT_IMAGE_ASSET_BASE_URL =
  "https://webstepdev.com/demo/webstepnextassets/img";

export const IMAGE_ASSET_BASE_URL = (
  process.env.NEXT_PUBLIC_IMAGE_ASSET_BASE_URL || DEFAULT_IMAGE_ASSET_BASE_URL
).replace(/\/+$/, "");

export const assetImage = (filename) => {
  const normalizedFilename = String(filename).replace(/^\/+/, "");
  return {
    src: `${IMAGE_ASSET_BASE_URL}/${normalizedFilename}`,
    width: 1200,
    height: 800,
  };
};
