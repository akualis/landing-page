// types/global.d.ts

type AppPreview = {
  picture: string;
  alt: string;
  info: {
    left: {
      title: string;
      description: string;
    };
    right: {
      title: string;
      description: string;
    };
  };
};

type AppPreviews = {
  appPreviews: AppPreview[];
};
