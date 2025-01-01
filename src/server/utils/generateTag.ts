export function generateTag(tagName: string, args: Record<string, any>): string {
  const stringArgs = Object.keys(args)
    .map(key => {
      const value = args[key];
      const valueString = value !== null && value !== undefined ? String(value) : '';
      return `${key}="${valueString}"`;
    })
    .join(' ');

  return `<${tagName} ${stringArgs}></${tagName}>`;
}

