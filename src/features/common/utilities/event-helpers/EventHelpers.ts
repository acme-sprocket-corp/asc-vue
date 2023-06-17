export function eventToString(event: Event): string {
  return (event.target as HTMLInputElement).value;
}

export function eventToNumber(event: Event): number {
  return (event.target as HTMLInputElement).valueAsNumber;
}

export function eventToDate(event: Event): Date {
  return (event.target as HTMLInputElement).valueAsDate ?? new Date();
}
