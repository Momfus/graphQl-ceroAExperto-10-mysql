// El signo ? se usa para colocar un parámetro

export const USER_LIST = 'SELECT * FROM `users`';
export const USER_SELECT_DETAILS = 'SELECT * FROM `users` WHERE id = ?';

export const LANGUAGES_LIST = 'SELECT * FROM `languages`';
export const LANGUAGES_SELECT_DETAILS = 'SELECT * FROM `languages` WHERE id = ?';

export const USER_LANGUAGES_LIST = 'SELECT UL.user, UL.language, L.name FROM `user-languages` AS UL INNER JOIN `languages` AS L ON UL.language = L.id WHERE user = ?';
export const LANGUAGES_USER_LIST = 'SELECT UL.user, UL.language, U.name, U.web, U.instructor, U.twitter FROM `user-languages` AS UL INNER JOIN `users` AS U ON UL.user= U.id WHERE language = ?';

export const ADD_USER = 'INSERT INTO `users` (`id`, `name`, `instructor`, `twitter`, `web`) VALUES (NULL, ?, ?, ?, ?)';
export const ADD_LANGUAGE = 'INSERT INTO `languages` (`id`, `name`) VALUES (NULL, ?)';

export const UPDATE_USER = 'UPDATE `users` SET `name` = ?, `instructor` = ?, `twitter` = ?, `web` = ? WHERE `users`.`id` = ?';
export const UPDATE_LANGUAGE = 'UPDATE `languages` SET `name` = ? WHERE `languages`.`id` = ?';

export const DELETE_USER = 'DELETE FROM `users` WHERE `users`.`id` = ?';
export const DELETE_USER_IN_USER_LANGUAGES = 'DELETE FROM `user-languages` WHERE `user-languages`.`user` = ?';

export const DELETE_LANGUAGE = 'DELETE FROM `languages` WHERE `languages`.`id` = ?';
export const DELETE_LANGUAGE_IN_USER_LANGUAGES = 'DELETE FROM `user-languages` WHERE `user-languages`.`language` = ?';