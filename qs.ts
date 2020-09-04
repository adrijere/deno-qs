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
        let split_values: string[] = str.split(eq);
        let key: string = split_values.shift()!;
        let value: string = split_values.join(eq);
        let return_value: Record<string, string> = {};

        return_value[key] = value;
        return Object.assign(result, return_value);
      },
      {}
    );
  }

  static escape(str: string): string {
    return encodeURIComponent(str);
  }
}
