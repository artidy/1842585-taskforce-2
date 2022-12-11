enum SortTypes {
  CreatedAt = 'createdAt',
  Comments = 'comments',
  Candidates = 'candidates',
}

const DATE_DEADLINE_NOT_VALID = 'Неверный формат даты дедлайна';
const DEFAULT_TASK_COUNT_LIMIT = 25;
const DEFAULT_SORT_TYPE = SortTypes.CreatedAt;
const SORT_DIRECTION = 'desc';

export {
  SortTypes,
  DATE_DEADLINE_NOT_VALID,
  DEFAULT_TASK_COUNT_LIMIT,
  SORT_DIRECTION,
  DEFAULT_SORT_TYPE,
}
