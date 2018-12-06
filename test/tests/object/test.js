import describe from 'describe';
import it from 'it';
import { expect } from 'chai';
import { mount } from 'enzyme';
import React from 'react';
import SchemaForm from '../../../src/SchemaForm';

describe('组件渲染', function(): void{
  /* 组件渲染 */
  describe('组件渲染', function(): void{
    it('组件渲染', function(): void{
      const json: Object = {
        id: '$root',
        type: 'object',
        title: '渲染组件',
        properties: {
          name: {
            id: '$root/properties/name',
            type: 'string',
            title: 'name'
          },
          age: {
            id: '$root/properties/age',
            type: 'number',
            title: 'age'
          },
          etc: {
            id: '$root/properties/etc',
            type: 'object',
            title: 'etc',
            properties: {
              school: {
                id: '$root/properties/etc/properties/school',
                type: 'string',
                title: 'school'
              },
              city: {
                id: '$root/properties/etc/properties/city',
                type: 'string',
                title: 'city'
              },
              isMarried: {
                id: '$root/properties/etc/properties/isMarried',
                type: 'boolean',
                title: 'isMarried'
              }
            }
          }
        }
      };

      const wrapper: Object = mount(<SchemaForm json={ json } />);
      const antInput: Object = wrapper.find('.ant-input');
      const antInputNumber: Object = wrapper.find('.ant-input-number');
      const antCheckboxInput: Object = wrapper.find('.ant-checkbox-input');

      expect(antInput).to.have.lengthOf(3);
      expect(antInputNumber).to.have.lengthOf(1);
      expect(antCheckboxInput).to.have.lengthOf(1);
    });
  });
});