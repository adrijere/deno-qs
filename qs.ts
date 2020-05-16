export class qs {
  static parse(query: string, sep: string = "&"): Object {
    let segmentation = query.split(sep);

    return segmentation.reduce(
      (result: Record<string, string>, str: string) => {
        let key: string = str.split("=")[0];
        let value: string = str.split("=")[1];
        let return_value: Record<string, string> = {};

        return_value[key] = value;
        return Object.assign(result, return_value);
      },
      {}
    );
  }

  // TODO: add version that doesn't throw
  static unescape(str: string): string {
    return decodeURIComponent(str);
  }
}
