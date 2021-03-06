/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Constructor } from '../types';
import { Format } from '../format';

/**
 * Instance validator class.
 */
@Class.Describe()
export class InstanceOf extends Class.Null implements Format {
  /**
   * Expected type.
   */
  @Class.Private()
  private type: Constructor;

  /**
   * Default constructor.
   * @param type Expected type.
   */
  public constructor(type: Constructor) {
    super();
    this.type = type;
  }

  /**
   * Validator name.
   */
  @Class.Public()
  public get name(): string {
    return `Instance of ${this.type.name}`;
  }

  /**
   * Validate the specified data.
   * @param data Data to be validated.
   * @returns Returns true when the data is valid, false otherwise.
   */
  @Class.Public()
  public validate(data: any): boolean {
    return data instanceof this.type;
  }
}
