// El signo ? se usa para colocar un parámetro

export const USER_LIST = 'SELECT * FROM `users`';
export const USER_SELECT_DETAILS = 'SELECT * FROM `users` WHERE id = ?';

export const LANGUAGES_LIST = 'SELECT * FROM `languages`';
export const LANGUAGES_SELECT_DETAILS = 'SELECT * FROM `languages` WHERE id = ?';

export const USER_LANGUAGES_LIST = 'SELECT UL.user, UL.language, L.name FROM `user-languages` AS UL INNER JOIN `languages` AS L ON UL.language = L.id WHERE user = ?';
export const LANGUAGES_USER_LIST = 'SELECT UL.user, UL.language, U.name, U.web, U.instructor, U.twitter FROM `user-languages` AS UL INNER JOIN `users` AS U ON UL.user= U.id WHERE language = ?';

export const ADD_USER = 'INSERT INTO `users` (`id`, `name`, `instructor`, `twitter`, `web`) VALUES (NULL, ?, ?, ?, ?)';