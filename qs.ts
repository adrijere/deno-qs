interface ParseOptions {
  sep?: string;
  eq?: string;
}

export class qs {
  static parse(
    query: string,
    { sep = "&", eq = "=" }: ParseOptions = {}
  ): Record<string, string> {
    let segmentation = query.split(sep);

    return segmentation.reduce(
      (result: Record<string, string>, str: string) => {
        let key: string = str.split(eq)[0];
        let value: string = str.split(eq)[1];
        let return_value: Record<string, string> = {};

        return_value[key] = value;
        return Object.assign(result, return_value);
      },
      {}
    );
  }
}
