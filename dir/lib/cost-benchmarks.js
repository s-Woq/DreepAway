// 2025 average annual gross software developer salaries, USD.
// Source: Howdy verified payroll data (12,500+ developer records).
export const US_SOFTWARE_DEVELOPER_SALARY = 132720;
export const PERU_SOFTWARE_DEVELOPER_SALARY = 61265;

export const SOFTWARE_DEVELOPER_SALARY_DIFFERENCE = Math.round(
  (1 - PERU_SOFTWARE_DEVELOPER_SALARY / US_SOFTWARE_DEVELOPER_SALARY) * 100,
);
