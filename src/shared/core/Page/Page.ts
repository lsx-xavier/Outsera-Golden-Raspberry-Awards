type PageProps = {
  path: string;
  element: React.ReactNode;
  params?: string[];
};
export class AppPage {
  get path() {
    if (!this.props.params) return this.props.path;

    const paramsAsString = this.props.params
      .reduce((acc, curr) => [...acc, `:${curr}`], [] as string[])
      .join("/");
    return `${this.props.path}/${paramsAsString}`;
  }

  getNavigationPath(...params: string[]) {
    return `${this.props.path}/${params?.join("/")}`;
  }

  get element() {
    return this.props.element;
  }

  constructor(private readonly props: PageProps) {}
}
