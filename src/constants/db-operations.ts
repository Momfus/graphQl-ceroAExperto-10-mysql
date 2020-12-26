// El signo ? se usa para colocar un parámetro

export const USER_LIST = 'SELECT * FROM `users`';
export const USER_SELECT_DETAILS = 'SELECT * FROM `users` WHERE id = ?';

export const LANGUAGES_LIST = 'SELECT * FROM `languages`';
export const LANGUAGES_SELECT_DETAILS = 'SELECT * FROM `languages` WHERE id = ?';

export const USER_LANGUAGES_LIST = 'SELECT UL.user, UL.language, L.name FROM `user-languages` AS UL INNER JOIN `languages` AS L ON UL.language = L.id WHERE user = ?';