export type NextPageProps = {
  currentPage: number;
  changePage: (page: number) => void;
  totalPages: number;
};

export type WrapperType = {
  isClickable: boolean;
};
