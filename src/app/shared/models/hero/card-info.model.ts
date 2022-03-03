import { ImageModel } from './image.model';

/** Т.к. это тестовое задание я не стал создавать полную модель, которая возвращается с бэка
 * потому что она очень большая, но я смапил и сохранил только эти поля. Так что обращения к неизвестным для ts полям не происходит.
 * Если бы это была разработка на проекте, то создал бы */
export interface CardInfoModel {
  id: number;
  title: string;
  thumbnail: ImageModel;
  description?: string;
}
