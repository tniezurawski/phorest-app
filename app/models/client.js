import DS from 'ember-data';
import { attr } from '@ember-decorators/data';

const { Model } = DS;

export default class ClientModel extends Model {
  @attr('string') email;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') mobile;
}
